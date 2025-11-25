import React from "react";
import { useParams, Link } from "react-router-dom";

import project1 from "../assets/projects/project1.jpg";
import project1b from "../assets/projects/project1b.jpg";
import project1c from "../assets/projects/project1c.jpg";
import project1d from "../assets/projects/project1d.jpg";
import project1e from "../assets/projects/project1e.jpg";

import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.jpg";
import project5 from "../assets/projects/project5.jpg";
import project6 from "../assets/projects/project6.jpg";
import project7 from "../assets/projects/project7.jpg";
import project8 from "../assets/projects/project8.jpg";

const projectData = {
  1: {
    title: "Sector 5 Noida Workspace",
    images: [project1, project1b, project1c, project1d, project1e], // ← add 1–4 images here
    description:
      "A sleek and modern workspace in Noida Sector 5 designed with a perfect blend of minimalism and functionality. The layout feels open, stylish, and highly efficient, creating an environment that supports both focused work and seamless collaboration. Clean lines, neutral tones, and smart spatial planning elevate the aesthetic while maximizing productivity. With ergonomic furniture, premium finishes, and contemporary design elements, this workspace transforms into an inspiring hub for teams to innovate, perform, and grow.",
  },

  2: {
    title: "Creative Studio",
    images: [project2],
    description:
      "Perfect for startups and creators, this workspace is designed to fuel innovation and growth. It combines flexibility, style, and functionality to adapt to evolving needs. With collaborative zones, modern aesthetics, and inspiring interiors, it empowers teams to think bigger, work smarter, and bring bold ideas to life.",
  },

  3: {
    title: "Corporate Office",
    images: [project3],
    description:
      "A professional corporate setup reflects sophistication, efficiency, and brand identity. Designed with precision, it balances private cabins, collaborative zones, and executive areas to support seamless workflows. With premium finishes, ergonomic furniture, and modern technology, it creates a polished environment that enhances productivity, professionalism, and client confidence.",
  },

  4: {
    title: "Modern Boardroom",
    images: [project4],
    description:
      "A sleek and modern boardroom designed for high-impact meetings. Featuring a large conference table, acoustic paneling, integrated AV systems, and ambient lighting, it creates a focused environment where strategy, ideas, and collaboration come together effortlessly.",
  },

  5: {
    title: "Lounge and Breakout Space",
    images: [project5],
    description:
      "A comfortable breakout space designed to promote relaxation and informal conversations. With warm tones, cozy seating, greenery, and soft lighting, it balances the hustle of corporate life with moments of calm.",
  },

  6: {
    title: "Work Cafe",
    images: [project6],
    description:
      "A stylish work café area that blends dining with informal workspace options. With café-style seating, pendant lighting, and warm wooden textures, it encourages creativity, collaboration, and refreshment throughout the day.",
  },

  7: {
    title: "Reception Area",
    images: [project7],
    description:
      "A premium reception area that sets the tone for the corporate brand. Featuring a bold front desk, sophisticated textures, ambient lighting, and elegant décor, it leaves a lasting first impression on clients and visitors.",
  },

  8: {
    title: "Executive Cabin",
    images: [project8],
    description:
      "An elegant executive cabin that blends authority with comfort. Premium wood finishes, designer lighting, ergonomic seating, and curated décor create a space that enhances decision-making while reflecting leadership and sophistication.",
  },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id];

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
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px" }}>
      
      {/* ✅ SHOW ALL IMAGES */}
      {project.images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={project.title}
          style={{
            width: "100%",
            borderRadius: "12px",
            marginBottom: "20px",
          }}
        />
      ))}

      <h1>{project.title}</h1>
      <p>{project.description}</p>

      <div style={{ marginTop: "30px" }}>
        <Link to="/projects" className="view-more-btn">
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}
