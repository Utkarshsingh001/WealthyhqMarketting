import React from "react";
import { PieChart, TrendingUp, Building, CreditCard } from "lucide-react";

interface ServicesProps {
  setCurrentPage?: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ setCurrentPage }) => {
  const services = [
    {
      icon: PieChart,
      title: "Portfolio Management",
      description:
        "Diversified investment portfolios tailored to your risk tolerance and financial goals.",
      features: [
        "Risk Assessment",
        "Asset Allocation",
        "Rebalancing",
        "Performance Tracking",
      ],
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description:
        "Expert guidance on investment opportunities and market trends from certified advisors.",
      features: [
        "Market Analysis",
        "Investment Research",
        "Strategy Planning",
        "Risk Management",
      ],
    },
    {
      icon: Building,
      title: "Wealth Planning",
      description:
        "Comprehensive financial planning for long-term wealth preservation and growth.",
      features: [
        "Retirement Planning",
        "Tax Optimization",
        "Estate Planning",
        "Goal Setting",
      ],
    },
    {
      icon: CreditCard,
      title: "Premium Banking",
      description:
        "Exclusive banking services with personalized support and premium benefits.",
      features: [
        "Private Banking",
        "Credit Solutions",
        "Cash Management",
        "Concierge Services",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive wealth management solutions designed to help you
            achieve your financial goals with confidence and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-lg font-medium text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            onClick={() => setCurrentPage && setCurrentPage("contact")}
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
