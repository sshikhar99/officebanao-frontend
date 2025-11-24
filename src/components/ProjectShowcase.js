import React from "react";
import "./ProjectShowcase.css";
import project1 from "../assets/Projects/project1.jpg";
import project2 from "../assets/Projects/project2.jpg";
import project3 from "../assets/Projects/project3.jpg";

const projects = [
  { id: 1, img: project1, title: "Modern Office Interior" },
  { id: 2, img: project2, title: "Collaborative Workspace" },
  { id: 3, img: project3, title: "Creative Studio Design" },
];

const ProjectShowcase = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Our Projects</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.id}>
            <img src={p.img} alt={p.title} />
            <div className="overlay">
              <h3>{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;