// src/components/ProjectsPreview.js
import React from "react";
import { useNavigate } from "react-router-dom";

import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";

function ProjectsPreview() {
  const navigate = useNavigate();

  const projects = [
    { id: 1, title: "Office Design – Noida Sector 5", image: project1, description: "Sector 5 Noida Workspace" },
    { id: 2, title: "Office Design – Bangalore", image: project2, description: "Bangalore Workspace" },
    { id: 3, title: "Office Design – Gurugram", image: project3, description: "Gurugram Workspace" },
  ];

  return (
    <section id="projects" className="projects-preview">
      <h2 className="projects-heading">Projects</h2>

      <div className="project-grid">
        {projects.map((p) => (
          <div
            key={p.id}
            className="project-card"
            onClick={() => navigate(`/projects/${p.id}`)}
          >
            <img src={p.image} alt={p.title} className="project-image" />

            <div className="project-info">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="see-all-btn" onClick={() => navigate("/projects")}>
        See All Projects →
      </button>
    </section>
  );
}

export default ProjectsPreview;
