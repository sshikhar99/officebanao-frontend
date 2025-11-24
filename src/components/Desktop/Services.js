import React from "react";
import "./Services.css";

export default function DesktopServices() {
  const services = [
    {
      icon: "🏢",
      title: "End-to-End Interior Execution",
      desc: "From design to delivery, we manage the complete execution process."
    },
    {
      icon: "🛠️",
      title: "Modular Furniture",
      desc: "High-quality custom furniture designed for modern office needs."
    },
    {
      icon: "🎨",
      title: "Concept & 3D Designing",
      desc: "Get a complete visual walkthrough before execution even begins."
    }
  ];

  return (
    <div className="ds-services-wrapper">
      <h2 className="ds-title">Our Services</h2>

      <div className="ds-service-grid">
        {services.map((item, index) => (
          <div key={index} className="ds-service-card">
            <div className="ds-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
