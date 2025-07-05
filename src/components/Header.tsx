import React, { useState } from "react";
import { Menu, X, TrendingUp } from "lucide-react";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  scrollToContact: () => void;
}

const Header: React.FC<HeaderProps> = ({
  currentPage,
  setCurrentPage,
  scrollToContact,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Calculator", id: "calculator" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setCurrentPage("home")}
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-lg">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              WealthiHQ
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`font-medium transition-colors duration-200 ${
                  currentPage === item.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button
            className="hidden md:block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            onClick={scrollToContact}
          >
            Get Early Access
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left font-medium transition-colors duration-200 ${
                    currentPage === item.id
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-lg font-medium text-left w-fit"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToContact();
                }}
              >
                Get Early Access
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
