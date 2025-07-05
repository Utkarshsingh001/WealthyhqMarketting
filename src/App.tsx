import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WealthCalculator from "./components/WealthCalculator";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Initialize page from URL on component mount
  useEffect(() => {
    const path = window.location.pathname.slice(1) || "home";
    setCurrentPage(path);
  }, []);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.slice(1) || "home";
      setCurrentPage(path);

      // Scroll to top when using browser back/forward buttons
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Enhanced setCurrentPage that updates browser history and scrolls to top
  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    const url = page === "home" ? "/" : `/${page}`;
    window.history.pushState({ page }, "", url);

    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll to contact form on home page
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "calculator":
        return <WealthCalculator />;
      case "contact":
        return <Contact />;
      default:
        return (
          <>
            <Hero />
            <About />
            <Services setCurrentPage={handlePageChange} />
            <WealthCalculator />
            <Team />
            <Contact id="contact-section" />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        scrollToContact={scrollToContact}
      />
      <main style={{ paddingTop: "10px" }}>{renderPage()}</main>
      <Footer setCurrentPage={handlePageChange} />
    </div>
  );
}

export default App;
