import React, { useState } from "react";
import "./FAQ.css";

export default function FAQ() {
  const faqs = [
    {
      q: "How long does an office interior project take?",
      a: "Most small–medium offices take 30–75 days depending on size and materials."
    },
    {
      q: "Do you provide 3D designs before starting work?",
      a: "Yes. We provide complete 3D views, layout planning, and material boards."
    },
    {
      q: "Do you handle turnkey interior projects?",
      a: "Yes — we manage everything including civil, electrical, modular, furniture, and finishing."
    },
    {
      q: "Which cities do you serve?",
      a: "We currently serve Delhi NCR, Bangalore, Mumbai, Pune, Hyderabad, and expanding."
    }
  ];

  const [open, setOpen] = useState(null);

  return (
    <div className="faq-wrapper fade-in">
      <h2>Frequently Asked Questions</h2>

      {faqs.map((f, i) => (
        <div key={i} className="faq-card">
          <div className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
            <span>{f.q}</span>
            <b>{open === i ? "-" : "+"}</b>
          </div>

          {open === i && <p className="faq-answer">{f.a}</p>}
        </div>
      ))}
    </div>
  );
}
