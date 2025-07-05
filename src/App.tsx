import React, { useState } from "react";
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
            <Services setCurrentPage={setCurrentPage} />
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
        setCurrentPage={setCurrentPage}
        scrollToContact={scrollToContact}
      />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
