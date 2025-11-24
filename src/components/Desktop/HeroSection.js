import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="heroA-container" id="home">
      <div className="heroA-content">
        <h1>
          Transforming <span>Workspaces</span> That Inspire
        </h1>

        <p>
          Modern office interiors, collaborative environments & functional
          layouts — delivered in <strong>75 days</strong>.
        </p>

        <div className="heroA-buttons">
          <button onClick={() => scrollTo("contact")} className="heroA-btn-secondary">
            Enquire Now
          </button>

          <button onClick={() => scrollTo("projects")} className="heroA-btn-primary">
            View Projects →
          </button>
        </div>
      </div>
    </section>
  );
}
