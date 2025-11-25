import React from "react";
import { Link, useLocation } from "react-router-dom"; 
import "./Projects.css";
import project1 from "../../assets/projects/project1.jpg";
import project2 from "../../assets/projects/project2.jpg";
import project3 from "../../assets/projects/project3.jpg";
import project4 from "../../assets/projects/project4.jpg";
import project5 from "../../assets/projects/project5.jpg";
import project6 from "../../assets/projects/project6.jpg";
import project7 from "../../assets/projects/project7.jpg";
import project8 from "../../assets/projects/project8.jpg"; 

function Projects() {
  const location = useLocation(); 

  const projects = [
    { id: 1, img: project1, title: "Modern Workspace" },
    { id: 2, img: project2, title: "Creative Studio" },
    { id: 3, img: project3, title: "Corporate Office" },
    { id: 4, img: project4, title: "Mordern Boardroom" },
    { id: 5, img: project5, title: "Lounge and Breakout Space" },
    { id: 6, img: project6, title: "Work Cafe" },
    { id: 7, img: project7, title: "Reception Area" },
    { id: 8, img: project8, title: "Executive Cabin" },
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
