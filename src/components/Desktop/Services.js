import React from "react";
import "./Services.css";

export default function DesktopServices() {
  const services = [
    {
      title: "Office Interior Design",
      desc: "Modern, functional, and branded workspace designs tailored to your business.",
      icon: "💼",
    },
    {
      title: "Turnkey Execution",
      desc: "Complete end-to-end project execution including civil, electrical & furniture.",
      icon: "⚙️",
    },
    {
      title: "Renovation & Makeover",
      desc: "Transform old office spaces into inspiring, high-performance environments.",
      icon: "🏢",
    },
    {
      title: "Space Planning",
      desc: "Optimized layouts to improve productivity, efficiency & workflow.",
      icon: "📐",
    },
    {
      title: "Custom Furniture",
      desc: "Bespoke office tables, reception desks, workstations & modular units.",
      icon: "🪑",
    },
    {
      title: "Project Management",
      desc: "Dedicated on-site managers for seamless execution & timely delivery.",
      icon: "📋",
    },
  ];

  return (
    <section className="desktop-services">
      <h2 className="section-title">
        Our <span>Services</span>
      </h2>

      <div className="services-grid">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
