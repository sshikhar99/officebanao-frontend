import React from "react";
import "./Testimonials.css";

export default function DesktopTestimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma – BluSmart",
      msg: "The OfficeSpaceInterior team transformed our entire workspace beautifully. Quick execution & great design!"
    },
    {
      name: "Meera Patel – Amway",
      msg: "Professional, creative and highly reliable. The 3D design accuracy and final execution was impressive."
    },
    {
      name: "Arjun Verma – Pioneer Urban",
      msg: "We loved the modular setup they delivered. Quality finishing and premium materials."
    }
  ];

  return (
    <div className="dt-wrapper">
      <h2 className="dt-title">What Our Clients Say</h2>

      <div className="dt-grid">
        {testimonials.map((item, index) => (
          <div key={index} className="dt-card">
            <p className="dt-msg">“{item.msg}”</p>
            <h4 className="dt-name">— {item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
