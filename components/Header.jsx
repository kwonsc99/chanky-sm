"use client";
import { useState } from "react";
import { scrollToSection } from "@/utils/scrollUtils";

export default function Header({ aboutMeRef, projectsRef }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (ref) => {
    setMobileMenuOpen(false);
    scrollToSection(ref);
  };

  const scrollToTop = () => {
    setMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="header">
      <div className="logo" onClick={scrollToTop}>
        SeokChan <span>Portfolio</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="nav desktop-nav">
        <div className="nav-item" onClick={() => handleNavClick(aboutMeRef)}>
          About me
        </div>
        <div className="nav-item" onClick={() => handleNavClick(projectsRef)}>
          Projects
        </div>
      </nav>

      {/* Mobile Navigation Button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className={`hamburger ${mobileMenuOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav">
          <div
            className="mobile-nav-item"
            onClick={() => handleNavClick(aboutMeRef)}
          >
            About me
          </div>
          <div
            className="mobile-nav-item"
            onClick={() => handleNavClick(projectsRef)}
          >
            Projects
          </div>
        </div>
      )}

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 70px;
          backdrop-filter: blur(10px);
          background-color: rgba(255, 255, 255, 0.8);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 5%;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .logo {
          font-weight: 700;
          font-size: var(--fs-md);
          color: var(--text-color);
          cursor: pointer;
          transition: color 0.3s;
        }

        .logo span {
          color: var(--primary-color);
          transition: all 0.3s;
        }

        .logo:hover span {
          animation: pulse 1s infinite;
          display: inline-block;
        }

        .nav {
          display: flex;
          gap: 30px;
        }

        .nav-item {
          font-size: var(--fs-sm);
          cursor: pointer;
          position: relative;
          transition: color 0.3s;
        }

        .nav-item:hover {
          color: var(--primary-color);
        }

        .nav-item::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 50%;
          width: 0;
          height: 2px;
          background-color: var(--primary-color);
          transition: width 0.3s ease, left 0.3s ease;
        }

        .nav-item:hover::after {
          width: 100%;
          left: 0;
        }

        /* Mobile menu styles */
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }

        .hamburger {
          width: 24px;
          height: 18px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .hamburger span {
          display: block;
          height: 2px;
          width: 100%;
          background-color: var(--text-color);
          transition: all 0.3s ease;
        }

        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        .mobile-nav {
          display: none;
          position: absolute;
          top: 70px;
          left: 0;
          right: 0;
          background-color: var(--background-color);
          padding: 20px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          flex-direction: column;
          gap: 20px;
        }

        .mobile-nav-item {
          padding: 10px;
          text-align: center;
          font-size: 18px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .mobile-nav {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
