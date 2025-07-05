import React, { useState } from "react";
import {
  ArrowRight,
  Mail,
  CheckCircle,
  AlertCircle,
  Loader,
} from "lucide-react";
import {
  addToWaitlist,
  isValidEmail,
  sanitizeInput,
} from "../services/firebaseService";

const Hero: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setErrorMessage("Please enter your email address");
      setSubmitStatus("error");
      return;
    }

    if (!isValidEmail(email)) {
      setErrorMessage("Please enter a valid email address");
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const sanitizedEmail = sanitizeInput(email);
      await addToWaitlist(sanitizedEmail, "hero");
      setSubmitStatus("success");
      setEmail("");

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

  const getButtonContent = () => {
    if (isSubmitting) {
      return (
        <>
          <Loader className="h-5 w-5 mr-2 animate-spin" />
          Joining...
        </>
      );
    }

    if (submitStatus === "success") {
      return (
        <>
          <CheckCircle className="h-5 w-5 mr-2" />
          Welcome Aboard!
        </>
      );
    }

    return (
      <>
        Get Early Access
        <ArrowRight className="h-5 w-5 ml-2" />
      </>
    );
  };

  return (
    <section className="pt-24 pb-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-blue-700 text-sm font-medium mb-8 border border-blue-200">
            <span className="h-2 w-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Coming Soon - Private Beta
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            The Future of
            <span
              style={{ paddingBottom: "0.4%" }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block"
            >
              Wealth Management
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your financial future with AI-powered wealth management,
            institutional-grade analytics, and personalized investment
            strategies.
          </p>

          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Join Our Exclusive Waitlist
            </h3>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    submitStatus === "error"
                      ? "border-red-300"
                      : "border-gray-300"
                  }`}
                  disabled={isSubmitting}
                  required
                />
              </div>

              {submitStatus === "error" && (
                <div className="flex items-center text-red-600 text-sm">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  {errorMessage}
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
            <p className="text-sm text-gray-500 mt-3">
              Be among the first 1,000 beta users. No spam, ever.
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$50B+</div>
              <div className="text-gray-600">Assets Under Management</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                10,000+
              </div>
              <div className="text-gray-600">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
