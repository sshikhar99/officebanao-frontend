import React from "react";
import "./Testimonials.css";

export default function DesktopTestimonials() {
  const testimonials = [
    {
      name: "Rahul Mehta",
      company: "Founder, BluSmart",
      feedback:
        "Office Space Interior delivered our workspace exactly how we imagined. Superb execution & timely delivery!",
      img: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Priya Anand",
      company: "HR, Amway India",
      feedback:
        "Their team understood our requirements perfectly. The design quality and finish exceeded expectations.",
      img: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "Arun Kumar",
      company: "Manager, IHG Hotels",
      feedback:
        "Professional, creative, and reliable. They completed a complex project within our timeline and budget.",
      img: "https://i.pravatar.cc/150?img=12",
    },
  ];

  return (
    <section className="desktop-testimonials">
      <h2 className="section-title">
        What Our <span>Clients Say</span>
      </h2>

      <div className="testimonials-wrapper">
        {testimonials.map((item, i) => (
          <div className="testimonial-card" key={i}>
            <img src={item.img} alt={item.name} className="testimonial-img" />
            <p className="testimonial-text">“{item.feedback}”</p>
            <h4>{item.name}</h4>
            <span className="company">{item.company}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
