// *ProjectCard.jsx*
import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div
      className="project-card"
      onClick={() => window.open(`/${project.file}`, "_blank")}
    >
      <div className="card-header">
        <h3>{project.title}</h3>
        <button className="view-btn">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg> */}
          <span>클릭해서 확인하기</span>
        </button>
      </div>
      <div className="card-body">
        {project.description.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>

      <style jsx>{`
        .project-card {
          background: var(--card-bg);
          border-radius: 20px;
          box-shadow: var(--card-shadow);
          padding: 24px;
          transition: 0.3s;
          cursor: pointer;
          border-left: 4px solid var(--primary-color);
        }

        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px --primary-color;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        h3 {
          font-size: var(--fs-md);
          color: var(--primary-color);
          margin: 0;
        }

        .view-btn {
          background: transparent;
          border: none;
          color: var(--primary-color);
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
        }

        .card-body p {
          margin: 4px 0;
          font-size: var(--fs-sm);
          color: var(--text-color);
          text-align: left;
          white-space: pre-wrap;
        }
      `}</style>
    </div>
  );
}
