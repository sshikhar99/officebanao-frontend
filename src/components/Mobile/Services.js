import React from "react";
import "./Services.css";

export default function MobileServices() {
  const services = [
    {
      icon: "🏢",
      title: "Interior Execution",
      desc: "Complete interior solutions tailored to your office needs."
    },
    {
      icon: "🛠️",
      title: "Modular Furniture",
      desc: "Premium modular designs crafted for productivity."
    },
    {
      icon: "🎨",
      title: "3D Design",
      desc: "Visualize your workspace before execution."
    }
  ];

  return (
    <div className="ms-wrapper">
      <h2 className="ms-title">Our Services</h2>

      <div className="ms-list">
        {services.map((item, index) => (
          <div key={index} className="ms-card">
            <div className="ms-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
