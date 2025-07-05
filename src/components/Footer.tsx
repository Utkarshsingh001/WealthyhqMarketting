import React from "react";
import {
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-2 rounded-lg">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold">WealthiHQ</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Revolutionizing wealth management through cutting-edge technology
              and institutional expertise. Your financial future, optimized.
            </p>
            <div className="flex space-x-4">
              <button className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => setCurrentPage("about")}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left w-full"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("home")}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left w-full"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("calculator")}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left w-full"
                >
                  Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("home")}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left w-full"
                >
                  Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("contact")}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left w-full"
                >
                  Contact
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">
                  hello@wealthihq.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  123 Financial District
                  <br />
                  New York, NY 10004
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-sm text-gray-400">
              © {currentYear} WealthiHQ. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400 md:justify-end">
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
