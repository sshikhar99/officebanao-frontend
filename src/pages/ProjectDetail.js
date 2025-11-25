import React from "react";
import { useParams, Link } from "react-router-dom";

import project1 from "../assets/projects/project1.jpg";
import project1b from "../assets/projects/project1b.jpg";
import project1c from "../assets/projects/project1c.jpg";
import project1d from "../assets/projects/project1d.jpg";

import project2 from "../assets/projects/project2.jpg";
import project2a from "../assets/projects/project2a.jpg";
import project2b from "../assets/projects/project2b.jpg";
import project2c from "../assets/projects/project2c.jpg";
import project2d from "../assets/projects/project2d.jpg";
import project2e from "../assets/projects/project2e.jpg";

import project3 from "../assets/projects/project3.jpg";
import project3a from "../assets/projects/project3a.jpg";
import project3b from "../assets/projects/project3b.jpg";
import project3c from "../assets/projects/project3c.jpg";

// ---------------- GRID STYLES ---------------- //
const gridStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
  gap: "20px",
  marginBottom: "30px",
};

const imageStyles = {
  width: "100%",
  height: "300px",   // 🔥 FIXED HEIGHT FOR ALL IMAGES
  borderRadius: "12px",
  objectFit: "cover", // 🔥 CROPS IMAGES EVENLY
  cursor: "pointer",
};


// ------------------------------------------------ //

const projectData = {
  1: {
    title: "Sector 5 Noida Workspace",
    images: [project1, project1b, project1c, project1d],
    description:
      "A sleek and modern workspace in Noida Sector 5 designed with a perfect blend of minimalism and functionality. The layout feels open, stylish, and highly efficient, creating an environment that supports both focused work and seamless collaboration. Clean lines, neutral tones, and smart spatial planning elevate the aesthetic while maximizing productivity. With ergonomic furniture, premium finishes, and contemporary design elements, this workspace transforms into an inspiring hub for teams to innovate, perform, and grow.",
  },

  2: {
    title: "Bangalore Workspace",
    images: [project2, project2a, project2b, project2c, project2d, project2e],
    description:
      "Perfect for startups and creators in Bangalore, this dynamic workspace is crafted to fuel innovation and continuous growth. It blends flexibility, style, and smart functionality to adapt effortlessly to fast-evolving business needs. Thoughtfully designed collaborative zones, modern aesthetics, and inspiring interiors empower teams to think bigger, work smarter, and bring bold ideas to life in the heart of India’s tech capital.",
  },

  3: {
    title: "Gurugram Workspace",
    images: [project3, project3a, project3b, project3c],
    description:
      "Designed for fast-growing teams and modern businesses in Gurugram, this workspace blends sophistication with high performance. Its flexible layout, contemporary aesthetics, and smart planning support both focused individual work and high-energy collaboration. With premium finishes, ergonomic furnishings, and thoughtfully crafted zones, the space reflects the professional spirit of Gurugram’s corporate ecosystem. It inspires productivity, innovation, and seamless day-to-day efficiency, making it ideal for companies aiming to scale with confidence.",
  },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id];

  const [selectedImage, setSelectedImage] = React.useState(null);

  if (!project) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>Project not found</h2>
        <Link to="/projects" className="view-more-btn">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px" }}>
      
      {/* 🔥 IMAGE GRID GALLERY */}
      <div style={gridStyles}>
        {project.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={project.title}
            style={imageStyles}
            onClick={() => setSelectedImage(img)} // OPEN LIGHTBOX
          />
        ))}
      </div>

      {/* ⭐ LIGHTBOX POPUP */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            cursor: "zoom-out",
          }}
        >
          <img
            src={selectedImage}
            alt="Zoomed"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          />
        </div>
      )}

      {/* TITLE + DESCRIPTION */}
      <h1>{project.title}</h1>
      <p style={{ marginTop: "10px", lineHeight: "1.6" }}>
        {project.description}
      </p>

      <div style={{ marginTop: "30px" }}>
        <Link to="/projects" className="view-more-btn">
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}
