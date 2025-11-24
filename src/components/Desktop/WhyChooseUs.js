import React from "react";
import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  const points = [
    {
      icon: "⚡",
      title: "75-Day Guaranteed Delivery",
      desc: "We follow a strict project timeline to deliver workspace interiors fast — without compromising quality."
    },
    {
      icon: "🎨",
      title: "Modern & Functional Designs",
      desc: "Every design is tailored to your brand identity with ergonomic layouts & premium finishes."
    },
    {
      icon: "🛠️",
      title: "Turnkey Execution",
      desc: "From planning to execution — civil, electrical, carpentry, furniture & branding — everything handled by our team."
    },
    {
      icon: "🏢",
      title: "End-to-End Project Management",
      desc: "A dedicated project manager ensures on-site quality checks, timely updates & seamless coordination."
    },
    {
      icon: "💼",
      title: "Corporate Quality Standards",
      desc: "We create functional, elegant and brand-driven office interiors using top-grade materials."
    },
    {
      icon: "💰",
      title: "Best Price Guarantee",
      desc: "Premium interiors at the most competitive pricing through optimized material sourcing."
    }
  ];

  return (
    <section className="why-section" id="why">
      <h2 className="why-title">Why Choose <span>Us</span></h2>

      <div className="why-grid">
        {points.map((p, i) => (
          <div className="why-card fade-in" key={i}>
            <div className="why-icon">{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
