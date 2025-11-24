import React from "react";
import "./Services.css";

export default function MobileServices() {
  const services = [
    { title: "Office Interior Design", icon: "💼" },
    { title: "Turnkey Execution", icon: "⚙️" },
    { title: "Renovation", icon: "🏢" },
    { title: "Space Planning", icon: "📐" },
    { title: "Custom Furniture", icon: "🪑" },
    { title: "Project Management", icon: "📋" },
  ];

  return (
    <section className="mobile-services">
      <h2 className="mobile-title">
        Our <span>Services</span>
      </h2>

      <div className="mobile-services-list">
        {services.map((s, i) => (
          <div key={i} className="mobile-service-card">
            <div className="service-icon">{s.icon}</div>
            <p>{s.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
