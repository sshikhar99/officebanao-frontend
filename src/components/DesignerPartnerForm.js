import React, { useState } from "react";
import SuccessModal from "./SuccessModal";

export default function DesignerPartnerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    experience: "",
    specialization: "",
    partnerType: "designer",
  });
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const API_BASE =
    process.env.REACT_APP_API_URL ||
    "https://officebanao-clone-production.up.railway.app/api/partners";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");

    try {
      const res = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Submission failed");
      }

      setSuccessMsg("✅ Designer Partner form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        portfolio: "",
        experience: "",
        specialization: "",
        partnerType: "designer",
      });
    } catch (err) {
      console.error(err);
      setSuccessMsg("⚠️ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
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
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {["name", "email", "portfolio", "experience", "specialization"].map((field) => (
          <input
            key={field}
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")}
            value={formData[field]}
            onChange={handleChange}
            style={inputStyle}
            type={field === "email" ? "email" : "text"}
            required={field === "name" || field === "email"}
          />
        ))}
        <button
          type="submit"
          disabled={loading}
          style={{ padding: "12px", background: "#333", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      <SuccessModal message={successMsg} onClose={() => setSuccessMsg("")} />
    </>
  );
}
