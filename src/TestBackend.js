import React, { useState } from "react";

export default function TestBackend() {
  const [response, setResponse] = useState("");

  const testBackend = async () => {
    try {
      const res = await fetch(
        "https://officebanao-clone-production.up.railway.app/api/partners",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            companyName: "Test Company",
            contactPerson: "Test User",
            email: "test@example.com",
            phone: "1234567890",
            services: "Testing",
            location: "Nowhere",
            partnerType: "vendor",
          }),
        }
      );

      if (!res.ok) {
        const errData = await res.json();
        setResponse(`Error: ${errData.message || res.statusText}`);
        return;
      }

      const data = await res.json();
      setResponse(`Success: ${JSON.stringify(data)}`);
    } catch (err) {
      setResponse(`Fetch failed: ${err.message}`);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <button
        onClick={testBackend}
        style={{
          padding: "10px 20px",
          background: "#333",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Test Backend
      </button>
      {response && (
        <p style={{ marginTop: "20px", wordBreak: "break-word" }}>{response}</p>
      )}
    </div>
  );
}
