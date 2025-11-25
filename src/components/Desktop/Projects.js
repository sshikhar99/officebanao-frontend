import React from "react";
import { Link, useLocation } from "react-router-dom"; 
import "./Projects.css";
import project1 from "../../assets/projects/project1.jpg";
import project2 from "../../assets/projects/project2.jpg";
import project3 from "../../assets/projects/project3.jpg";


function Projects() {
  const location = useLocation(); 

  const projects = [
    { id: 1, img: project1, title: "Sector 5 Noida Workspace" },
    { id: 2, img: project2, title: "Bangalore Workspace" },
    { id: 3, img: project3, title: "Gurugram Workspace" },
    
  ];

  return (
    <section id="portfolio" className="projects">
      <h2>Our Projects</h2>
      <div className="projects-gallery">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}   // ✅ dynamic link
            className="project-card"
          >
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
          </Link>
        ))}
      </div>

      {/* ✅ Show "View More" only on homepage */}
      {location.pathname === "/" && (
        <div className="view-more-container">
          <Link to="/projects" className="view-more-btn">
            View More →
          </Link>
        </div>
      )}
    </section>
  );
}

export default Projects;
