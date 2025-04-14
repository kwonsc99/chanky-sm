// components/AboutMe/index.jsx 수정 버전
import { forwardRef } from "react";
import Section from "./Section";
import { aboutMeData } from "@/data/aboutMeData";

const AboutMe = forwardRef((props, ref) => {
  return (
    <section className="container" ref={ref}>
      <div className="intro-container">
        <h2 className="heading">About me</h2>
      </div>
      <div className="grid-container">
        <div className="education">
          <Section title="Education" items={aboutMeData.education} />
        </div>
        <div className="awards">
          <Section title="Awards" items={aboutMeData.awards} />
        </div>
        <div className="cert-intern">
          <Section title="Certificate" items={aboutMeData.certificate} />
          <div className="spacer"></div>
          <Section title="Internship" items={aboutMeData.internship} />
        </div>
        <div className="language">
          <Section
            title="어학/학점/봉사"
            items={aboutMeData.language}
            isLabel
          />
        </div>
        <div className="activities">
          <div className="card">
            <div className="section-title">Activities</div>
            <div className="section-content">
              {aboutMeData.activities.map((text, idx) => (
                <span key={idx} className="activity-item">
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .heading {
          font-size: var(--fs-xl);
          color: var(--primary-color);
          margin-bottom: 2rem;
          margin-top: 120px;
          position: relative;
          display: inline-block;
        }

        .grid-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-areas:
            "education awards"
            "cert-intern activities"
            "language activities";
          gap: 24px;
          padding: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .education {
          grid-area: education;
        }
        .awards {
          grid-area: awards;
        }
        .cert-intern {
          display: flex;
          gap: 15px;
          grid-area: cert-intern;
        }
        .spacer {
          width: 10px;
        }
        .language {
          grid-area: language;
        }
        .activities {
          grid-area: activities;
        }

        .card {
          border-radius: 16px;
          background: var(--card-bg);
          box-shadow: var(--card-shadow);
          transition: transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
          border: 1px solid rgba(59, 130, 246, 0.1);
          padding: 24px;
          height: 100%;
          text-align: left;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }

        .section-title {
          color: var(--primary-color);
          font-size: var(--fs-md);
          font-weight: bold;
          margin-bottom: 16px;
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 40px;
          height: 3px;
          background-color: var(--primary-color);
        }

        .section-content {
          color: var(--text-color);
          font-size: var(--fs-sm);
          line-height: 1.5;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .activity-item {
          background-color: rgba(59, 130, 246, 0.08);
          padding: 6px 12px;
          border-radius: 20px;
          margin-bottom: 8px;
          display: inline-block;
        }

        @media (max-width: 992px) {
          .grid-container {
            grid-template-columns: 1fr;
            grid-template-areas:
              "education"
              "awards"
              "cert-intern"
              "language"
              "activities";
            padding: 20px;
            gap: 20px;
          }

          .cert-intern {
            flex-direction: column;
            gap: 20px;
          }

          .spacer {
            display: none;
          }
        }
      `}</style>
    </section>
  );
});

AboutMe.displayName = "AboutMe";
export default AboutMe;
