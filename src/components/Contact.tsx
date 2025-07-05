import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader,
} from "lucide-react";
import {
  submitContactForm,
  isValidEmail,
  sanitizeInput,
} from "../services/firebaseService";

interface ContactProps extends React.HTMLAttributes<HTMLElement> {
  setCurrentPage?: (page: string) => void;
}

const Contact: React.FC<ContactProps> = (props) => {
  const { setCurrentPage, ...rest } = props;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    investmentAmount: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMessage("Please fill in all required fields");
      setSubmitStatus("error");
      return;
    }

    if (!isValidEmail(formData.email)) {
      setErrorMessage("Please enter a valid email address");
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // Sanitize all inputs
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        company: sanitizeInput(formData.company),
        investmentAmount: formData.investmentAmount,
        message: sanitizeInput(formData.message),
      };

      await submitContactForm(sanitizedData);
      setSubmitStatus("success");

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        investmentAmount: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear error when user starts typing
    if (submitStatus === "error") {
      setSubmitStatus("idle");
      setErrorMessage("");
    }
  };

  const getButtonContent = () => {
    if (isSubmitting) {
      return (
        <>
          <Loader className="h-5 w-5 mr-2 animate-spin" />
          Sending...
        </>
      );
    }

    if (submitStatus === "success") {
      return (
        <>
          <CheckCircle className="h-5 w-5 mr-2" />
          Message Sent!
        </>
      );
    }

    return (
      <>
        Send Message
        <Send className="h-5 w-5 ml-2" />
      </>
    );
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" {...rest}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to transform your wealth management experience? Contact us to
            learn more about our platform and schedule a personalized
            consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Contact Form
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Investment Range
                </label>
                <select
                  name="investmentAmount"
                  value={formData.investmentAmount}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                >
                  <option value="">Select Investment Range</option>
                  <option value="under-100k">Under $100K</option>
                  <option value="100k-500k">$100K - $500K</option>
                  <option value="500k-1m">$500K - $1M</option>
                  <option value="1m-5m">$1M - $5M</option>
                  <option value="over-5m">Over $5M</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                  placeholder="Tell us about your wealth management needs..."
                />
              </div>

              {submitStatus === "error" && (
                <div className="flex items-center text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                  <AlertCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                  {errorMessage}
                </div>
              )}

              {submitStatus === "success" && (
                <div className="flex items-center text-green-600 text-sm bg-green-50 p-3 rounded-lg">
                  <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                  Thank you! We'll get back to you within 24 hours.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || submitStatus === "success"}
                className={`w-full py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center ${
                  submitStatus === "success"
                    ? "bg-green-600 text-white"
                    : "bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:shadow-lg transform hover:scale-105"
                } ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
              >
                {getButtonContent()}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-gray-600">hello@wealthihq.com</div>
                    <div className="text-gray-600">support@wealthihq.com</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Phone</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                    <div className="text-sm text-gray-500">
                      Mon-Fri, 9AM-6PM EST
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Office</div>
                    <div className="text-gray-600">
                      123 Financial District
                      <br />
                      New York, NY 10004
                      <br />
                      United States
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Schedule a Call</h3>
              <p className="mb-6 text-blue-100">
                Book a 30-minute consultation with our wealth management experts
                to discuss your financial goals and how WealthiHQ can help.
              </p>
              <button
                className="bg-white text-blue-800 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200"
                onClick={() => setCurrentPage && setCurrentPage("contact")}
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
