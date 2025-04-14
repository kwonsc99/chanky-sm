import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div
      className="project-card"
      onClick={() => window.open(`/${project.file}`, "_blank")}
    >
      <h3>{project.title}</h3>
      <p>
        {project.description.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
      <div className="view-more">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
        <span>PDF로 보기</span>
      </div>

      <style jsx>{`
        .project-card {
          padding: 28px;
          border-radius: 16px;
          background: var(--card-bg);
          box-shadow: var(--card-shadow);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: none;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .project-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--primary-color);
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 30px rgba(59, 130, 246, 0.15);
        }

        .project-card:hover::before {
          transform: scaleY(1);
        }

        h3 {
          color: var(--primary-color);
          margin-bottom: 16px;
          font-size: var(--fs-md);
          position: relative;
          display: inline-block;
        }

        p {
          line-height: 1.6;
          margin-bottom: 24px;
          flex-grow: 1;
          font-size: var(--fs-sm);
          color: var(--text-color);
        }

        .view-more {
          display: flex;
          align-items: center;
          color: var(--primary-color);
          gap: 8px;
          margin-top: auto;
          transition: transform 0.3s ease;
        }

        .project-card:hover .view-more {
          transform: translateX(8px);
        }
      `}</style>
    </div>
  );
}
