"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState("교내");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const containerRefs = useRef([]);
  const [isAnimated, setIsAnimated] = useState(false);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 500); // 원하는 지연 시간

    return () => clearTimeout(timer);
  }, []);

  // 스크롤 애니메이션
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

  // 스크롤 이동 함수
  const scrollToSection = (ref) => {
    setMobileMenuOpen(false); // 모바일 메뉴 닫기
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // 맨 위로 스크롤
  const scrollToTop = () => {
    setMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 프로젝트 데이터
  const projects = {
    교내: [
      {
        title: "졸업 프로젝트",
        description: "사용자 중심 서비스 기획",
        file: "project1.pdf",
      },
      {
        title: "디자인 씽킹 워크샵",
        description: "UX/UI 디자인 프로젝트",
        file: "project2.pdf",
      },
    ],
    수상: [
      {
        title: "공모전 대상",
        description: "신규 서비스 기획 제안",
        file: "award1.pdf",
      },
      {
        title: "해커톤 우승",
        description: "헬스케어 앱 프로토타입",
        file: "award2.pdf",
      },
    ],
    개인: [
      {
        title: "사이드 프로젝트",
        description: "커뮤니티 서비스 기획",
        file: "personal1.pdf",
      },
      {
        title: "스터디 모임",
        description: "서비스 분석 리포트",
        file: "personal2.pdf",
      },
    ],
  };

  return (
    <main>
      {/* 헤더 */}
      <header className="header">
        <Analytics />
        <div className="logo" onClick={scrollToTop}>
          SeokChan <span>Portfolio</span>
        </div>
        <nav className="nav">
          <div className="nav-item" onClick={() => scrollToSection(aboutMeRef)}>
            About me
          </div>
          <div
            className="nav-item"
            onClick={() => scrollToSection(projectsRef)}
          >
            Projects
          </div>
        </nav>
      </header>
      {/* 첫 번째 컨테이너 */}
      <section className="container">
        <div className="intro-container">
          <h1 className="heading">
            주니어 기획자 <span className="bold">권석찬</span>입니다.
          </h1>
          <p className="subheading">
            고객의 필요를 선제적으로 파악하고, 적시에 실현가능한 형태로
            제공하겠습니다.
          </p>
          <div className="intro-section">
            <div className="slide-container">
              <div className={`slider ${isAnimated ? "slide-up" : ""}`}>
                <Image src="/photo2.png" alt="Slide" width={300} height={400} />
              </div>
            </div>

            <div className="personal-info">
              <div className="info-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a6 6 0 0 0-6 6h12a6 6 0 0 0-6-6z" />
                </svg>
                <span>Birth: 1999.03.03</span>
              </div>
              <div className="info-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.105l4.708-2.897L1 5.383v5.722z" />
                </svg>
                <span>Contact: kwonsc99@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 세 번째 컨테이너 */}

      <div className="dna-container">
        <h2 className="dna-title">기획자의 DNA</h2>
        <p className="dna-description">
          Data를 기반으로 한 합리적인 의사결정
          <br />
          협업 시 마주하는 여러 이해관계자들과의 Networking
          <br />
          Actionable한 형태의 전략 설계 역량
        </p>
      </div>

      {/* 두 번째 컨테이너 */}
      <section className="container" ref={aboutMeRef}>
        <div className="intro-container">
          <h2 className="heading">About me</h2>
          <div className="intro-section">
            <Image src="/photo3.png" alt="Slide" width={1080} height={580} />
          </div>
        </div>
      </section>

      {/* 네 번째 컨테이너 */}
      <section className="container" ref={projectsRef}>
        <h2 className="heading">Projects</h2>
        <div className="categories">
          {Object.keys(projects).map((category) => (
            <div
              key={category}
              className={`category ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>

        <div className="project-list">
          {projects[activeCategory].map((project, idx) => (
            <div
              key={idx}
              className="project-card"
              onClick={() => window.open(`/${project.file}`, "_blank")}
            >
              <h3 style={{ color: "#007AFF", marginBottom: "8px" }}>
                {project.title}
              </h3>
              <p>{project.description}</p>
              <div
                style={{
                  marginTop: "16px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#007AFF"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                <span
                  style={{
                    marginLeft: "8px",
                    fontSize: "14px",
                    color: "#007AFF",
                  }}
                >
                  PDF로 보기
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
