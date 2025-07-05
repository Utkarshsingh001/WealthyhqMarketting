import React from "react";
import { Shield, Target, Users, Award } from "lucide-react";

const About: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure & Compliant",
      description:
        "Bank-grade security with full regulatory compliance and insurance protection.",
    },
    {
      icon: Target,
      title: "Precision Analytics",
      description:
        "AI-driven insights and data analytics for optimal portfolio performance.",
    },
    {
      icon: Users,
      title: "Expert Advisors",
      description:
        "Access to certified financial advisors and wealth management specialists.",
    },
    {
      icon: Award,
      title: "Proven Results",
      description:
        "Consistent outperformance with transparent reporting and accountability.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About WealthiHQ
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing wealth management by combining cutting-edge
            technology with institutional expertise to deliver personalized
            financial solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At WealthiHQ, we believe everyone deserves access to
              institutional-grade wealth management. We're building the future
              of finance where advanced algorithms meet human expertise to
              create truly personalized investment strategies.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our platform combines decades of financial expertise with
              cutting-edge AI to provide insights that were previously available
              only to ultra-high-net-worth individuals and institutional
              investors.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div className="space-y-6">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">25+</div>
                <div className="text-gray-600">Years Combined Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  500+
                </div>
                <div className="text-gray-600">Investment Strategies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  24/7
                </div>
                <div className="text-gray-600">Market Monitoring</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-100"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
