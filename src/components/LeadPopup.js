import React, { useEffect, useState } from "react";
import "./LeadPopup.css";

export default function LeadPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    category: "",
  });

  // Show popup after 2 seconds
  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 2000);
  }, []);

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit to WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
🔥 *New Lead Captured*
-------------------------
👤 Name: ${form.name}
📧 Email: ${form.email}
📱 Phone: ${form.phone}
🌆 City: ${form.city}
🏢 Category: ${form.category}
-------------------------
`;

    const whatsappNumber = "919392060816"; // YOUR NUMBER
    const url =
      "https://api.whatsapp.com/send?phone=" +
      whatsappNumber +
      "&text=" +
      encodeURIComponent(message);

    window.open(url, "_blank");

    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-card">

        {/* Close button */}
        <button className="close-btn" onClick={() => setShowPopup(false)}>
          ✕
        </button>

        <h2 className="popup-title">Get a Free Consultation</h2>
        <p className="popup-subtitle">
          Tell us about your requirement, our team will contact you shortly.
        </p>

        <form onSubmit={handleSubmit} className="popup-form">

          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            type="tel"
            placeholder="Mobile Number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <input
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            required
          />

          {/* Category Dropdown */}
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option>Corporate and MNC</option>
            <option>Startup and Growing Companies</option>
            <option>Hotel, Restaurants and Cafe</option>
            <option>Retail Store</option>
            <option>Schools and Educational Institutions</option>
            <option>Hospitals and Clinics</option>
          </select>

          <button type="submit" className="popup-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
