// *index.jsx*
import { forwardRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/projectsData";

const Projects = forwardRef((props, ref) => {
  const [activeCategory, setActiveCategory] = useState("전체");

  const getAllProjects = () => {
    return Object.values(projectsData).flat();
  };

  const displayedProjects =
    activeCategory === "전체" ? getAllProjects() : projectsData[activeCategory];

  return (
    <section className="container" ref={ref}>
      <h2 className="heading">Projects</h2>
      <div className="categories">
        {["전체", ...Object.keys(projectsData)].map((category) => (
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
        {displayedProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
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

        .categories {
          display: flex;
          gap: 16px;
          margin-bottom: 40px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .category {
          padding: 10px 20px;
          background-color: transparent;
          border: 1px solid var(--primary-color);
          border-radius: 30px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s;
          color: var(--text-color);
        }

        .category.active {
          background-color: var(--primary-color);
          color: white;
          box-shadow: 0 4px 12px rgba(255, 237, 237, 1);
        }

        .project-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 0 20px 120px;
          max-width: 720px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .category {
            padding: 8px 16px;
            font-size: 13px;
          }

          .project-list {
            padding: 0 16px 80px;
          }
        }
      `}</style>
    </section>
  );
});

Projects.displayName = "Projects";
export default Projects;
