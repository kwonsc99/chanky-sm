"use client";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  // Check user's preferred color scheme on initial load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(isDark);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (darkMode) {
        document.documentElement.classList.add("dark-theme");
      } else {
        document.documentElement.classList.remove("dark-theme");
      }
    }
  }, [darkMode]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle dark mode"
    >
      {darkMode ? "☀️" : "🌙"}

      <style jsx>{`
        .theme-toggle {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: var(--primary-color);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          font-size: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 999;
          transition: all 0.3s ease;
        }

        .theme-toggle:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </button>
  );
}
