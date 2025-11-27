import React from "react";
import { Link } from "react-router-dom";

export default function Blogs() {
  const blogPosts = [
    {
      id: 1,
      title: "A Modern Collaborative Workspace Designed in Sector 5 Noida",
      date: "Aug 28, 2025",
      excerpt:
        "A deep look into how we transformed a traditional office into a modern, flexible, and collaboration-focused workspace...",
    },
    {
      id: 2,
      title: "Inside the Future-Ready Office Designed in Bangalore",
      date: "Aug 20, 2025",
      excerpt:
        "Explore how we created an open, wellness-centric, and innovation-driven workspace tailored for today’s hybrid teams...",
    },
    {
      id: 3,
      title: "Premium Meeting & Strategy Suites Designed in Gurugram",
      date: "Aug 15, 2025",
      excerpt:
        "A detailed look at how we designed high-performance meeting rooms with luxury, comfort, and acoustic perfection...",
    },
  ];

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px",
        color: "#222",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>Blogs</h1>
      <p style={{ fontSize: "16px", marginBottom: "30px", color: "#555" }}>
        Explore our latest case studies, design ideas, and workspace innovations.
      </p>

      <div style={{ display: "grid", gap: "20px" }}>
        {blogPosts.map((post) => (
          <div
            key={post.id}
            style={{
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              background: "#fff",
              boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.02)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <h2 style={{ fontSize: "22px", marginBottom: "8px" }}>
              {post.title}
            </h2>

            <p style={{ fontSize: "14px", color: "#777", marginBottom: "12px" }}>
              {post.date}
            </p>

            <p style={{ fontSize: "16px", marginBottom: "15px" }}>
              {post.excerpt}
            </p>

            <Link
              to={`/blogs/${post.id}`}
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#00c4ff",
                textDecoration: "none",
              }}
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
