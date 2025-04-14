import { forwardRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/projectsData";

const Projects = forwardRef((props, ref) => {
  const [activeCategory, setActiveCategory] = useState("교내");

  return (
    <section className="container" ref={ref}>
      <h2 className="heading">Projects</h2>
      <div className="categories">
        {Object.keys(projectsData).map((category) => (
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
        {projectsData[activeCategory].map((project, idx) => (
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
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .project-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
          padding: 0 40px;
          margin-bottom: 120px;
        }

        @media (max-width: 768px) {
          .categories {
            gap: 10px;
          }

          .category {
            padding: 8px 16px;
            font-size: 13px;
          }

          .project-list {
            grid-template-columns: 1fr;
            padding: 0 20px;
          }
        }
      `}</style>
    </section>
  );
});

Projects.displayName = "Projects";
export default Projects;
