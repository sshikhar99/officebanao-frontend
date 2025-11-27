// src/pages/BlogDetail.js
import React from "react";
import { useParams, Link } from "react-router-dom";

// Import project images for galleries (already correct)
import project1 from "../assets/projects/project1.jpg";
import project1b from "../assets/projects/project1b.jpg";
import project1d from "../assets/projects/project1d.jpg";

import project2 from "../assets/projects/project2.jpg";
import project2a from "../assets/projects/project2a.jpg";
import project2b from "../assets/projects/project2b.jpg";

import project3 from "../assets/projects/project3.jpg";
import project3a from "../assets/projects/project3a.jpg";
import project3c from "../assets/projects/project3c.jpg";


// ----------------------
// NEW STRUCTURED CONTENT
// (Each blog now contains description blocks for each image)
// ----------------------
const blogData = {
  1: {
    title: "Sector 5 Noida — A Modern Workspace Transformation",
    date: "Aug 28, 2025",

    blocks: [
      {
        text: `
The Sector 5 Noida workspace was designed with a strong focus on collaboration, comfort, and modern aesthetics. 
This part of the office showcases an open lounge with warm lighting, soft seating, and semi-private booths. 
The mix of textures, colors, and lighting creates an inviting environment where teams can brainstorm freely.`,
        image: project1,
      },
      {
        text: `
This area features a premium reception lounge with a rust-colored sofa, modern artwork, and soft ambient lighting. 
It creates a professional yet warm welcome for visitors and sets a stylish tone for the entire workplace. 
The combination of contemporary furniture and elegant accents elevates the entire visual appeal.`,
        image: project1b,
      },
      {
        text: `
The café-collaboration zone blends productivity with casual comfort. 
Employees can work, relax, or have discussions in this vibrant space filled with pastel seating, wooden finishes, 
and subtle lighting. This multi-purpose area ensures the office feels lively, human-centered, and inspiring.`,
        image: project1d,
      },
    ],
  },

  2: {
    title: "Bangalore Workspace — Creative & Flexible Office Design",
    date: "Aug 20, 2025",

    blocks: [
      {
        text: `
This Bangalore workspace embraces openness and flexibility. 
Multiple seating arrangements, from round tables to shared collaborative desks, encourage movement and teamwork. 
The lighting design blends functional brightness with warm aesthetics, making the space both productive and inviting.`,
        image: project2,
      },
      {
        text: `
This breakout lounge and pantry space extends the collaborative spirit of the office. 
Soft wood cabinetry, pastel chairs, and ambient pendant lighting come together to create a refreshing space ideal for 
quick discussions, relaxed lunches, or creative thinking.`,
        image: project2a,
      },
      {
        text: `
The reception area makes a strong professional impression with its minimalistic design and warm wooden textures. 
Elegant globe pendant lights and clean white surfaces create a premium corporate identity, instantly elevating 
the overall brand perception.`,
        image: project2b,
      },
    ],
  },

  3: {
    title: "Gurugram Workspace — Premium Meeting & Strategy Hub",
    date: "Aug 15, 2025",

    blocks: [
      {
        text: `
This premium boardroom in Gurugram features a long wooden table paired with teal executive chairs, 
perfect for strategy discussions and client meetings. 
Floor-to-ceiling curtains enhance acoustics and add a luxurious soft tone to the space.`,
        image: project3,
      },
      {
        text: `
This smaller meeting room carries the same design language but with added warmth. 
Wooden shelves, modern artwork, and warm lighting create a cozy yet productive setting ideal for leadership huddles 
and high-focus sessions.`,
        image: project3a,
      },
      {
        text: `
The compact discussion area is designed for quick team conversations. 
Textured carpets, soft lighting, and teal seating maintain visual harmony while ensuring the room remains functional 
and distraction-free.`,
        image: project3c,
      },
    ],
  },
};

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogData[id];

  if (!blog) {
    return (
      <h2 style={{ textAlign: "center", padding: "50px" }}>
        Blog not found
      </h2>
    );
  }

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
      
      {/* BLOG TITLE */}
      <h1>{blog.title}</h1>
      <p style={{ fontSize: "14px", color: "#777", marginBottom: "20px" }}>
        {blog.date}
      </p>

      {/* RENDER DESCRIPTION + IMAGE BLOCKS */}
      {blog.blocks.map((block, index) => (
        <div key={index} style={{ marginBottom: "35px" }}>
          <p style={{ fontSize: "16px", lineHeight: "1.7", whiteSpace: "pre-line" }}>
            {block.text}
          </p>

          <img
            src={block.image}
            alt="project"
            style={{
              width: "100%",
              borderRadius: "12px",
              marginTop: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          />
        </div>
      ))}

      {/* BACK TO BLOGS BUTTON */}
      <Link to="/blogs">
        <button
          style={{
            padding: "10px 20px",
            background: "#00bcd4",
            color: "#fff",
            fontWeight: "bold",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "30px",
          }}
        >
          ← Back to Blogs
        </button>
      </Link>
    </div>
  );
}
