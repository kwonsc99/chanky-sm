"use client";
import { useState, useEffect, useRef } from "react";
import { Analytics } from "@vercel/analytics/react";

// Components
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DnaBanner from "@/components/DnaBanner";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  const [isAnimated, setIsAnimated] = useState(false);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const containers = document.querySelectorAll(".container");
    containers.forEach((container) => {
      observer.observe(container);
    });

    return () => {
      containers.forEach((container) => {
        observer.unobserve(container);
      });
    };
  }, []);

  return (
    <main>
      <Analytics />
      <Header aboutMeRef={aboutMeRef} projectsRef={projectsRef} />
      <ThemeToggle />
      <Hero isAnimated={isAnimated} />
      <DnaBanner />
      <AboutMe ref={aboutMeRef} />
      <Projects ref={projectsRef} />
    </main>
  );
}
