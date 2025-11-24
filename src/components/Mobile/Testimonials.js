import React from "react";
import "./Testimonials.css";

export default function MobileTestimonials() {
  const testimonials = [
    {
      name: "Rahul Mehta",
      feedback: "Superb execution & timely delivery!",
      img: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Priya Anand",
      feedback: "Design quality exceeded expectations.",
      img: "https://i.pravatar.cc/150?img=5",
    },
  ];

  return (
    <section className="mobile-testimonials">
      <h2 className="mobile-title">
        Client <span>Reviews</span>
      </h2>

      {testimonials.map((t, i) => (
        <div key={i} className="mobile-testimonial-card">
          <img src={t.img} className="mobile-testimonial-img" />
          <p>"{t.feedback}"</p>
          <h4>- {t.name}</h4>
        </div>
      ))}
    </section>
  );
}
