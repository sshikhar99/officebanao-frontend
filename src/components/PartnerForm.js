import React, { useState } from "react";
import SuccessModal from "./SuccessModal";

export default function PartnerForm() {
  const [partnerType, setPartnerType] = useState("vendor");
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    services: "",
    location: "",
  });
  const [successMsg, setSuccessMsg] = useState("");

  // Backend API
  const API_BASE =
    process.env.REACT_APP_API_URL ||
    "https://officebanao-clone-production.up.railway.app/api/partners";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");

    try {
      const res = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, partnerType }),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccessMsg("✅ Form submitted successfully!");
        setFormData({
          companyName: "",
          contactPerson: "",
          email: "",
          phone: "",
          services: "",
          location: "",
        });
      } else {
        setSuccessMsg(`⚠️ Error: ${data.message || "Submission failed"}`);
      }
    } catch (err) {
      console.error(err);
      setSuccessMsg("⚠️ Something went wrong. Please try again.");
    }
  };

  const inputStyle = {
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "14px",
    width: "100%",
  };

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <label style={{ fontWeight: "bold", marginRight: "10px" }}>I am a:</label>
        <select
          value={partnerType}
          onChange={(e) => setPartnerType(e.target.value)}
          style={inputStyle}
        >
          <option value="vendor">Vendor</option>
          <option value="designer">Designer</option>
        </select>
      </div>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {["companyName", "contactPerson", "email", "phone", "services", "location"].map((field) => (
          <input
            key={field}
            name={field}
            placeholder={field
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (str) => str.toUpperCase())}
            value={formData[field]}
            onChange={handleChange}
            style={inputStyle}
            type={field === "email" ? "email" : "text"}
            required={field === "companyName" || field === "contactPerson" || field === "email"}
          />
        ))}
        <button type="submit" style={{ padding: "12px", background: "#333", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}>
          Submit
        </button>
      </form>

      <SuccessModal message={successMsg} onClose={() => setSuccessMsg("")} />
    </>
  );
}
