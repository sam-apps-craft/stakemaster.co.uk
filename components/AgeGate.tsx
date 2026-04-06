"use client";

import { useEffect, useState } from "react";
import "@/app/globals.css";

export default function AgeGate() {
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [ageDenied, setAgeDenied] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("ageConfirmed");

    if (stored === "true") setAgeConfirmed(true);
    if (stored === "false") setAgeDenied(true);

    setLoaded(true);
  }, []);

  const handleConfirm = () => {
    localStorage.setItem("ageConfirmed", "true");
    setAgeConfirmed(true);
    setAgeDenied(false);
  };

  const handleDeny = () => {
    localStorage.setItem("ageConfirmed", "false");
    setAgeDenied(true);
  };

  // Prevent SSR mismatch / flicker
  if (!loaded) return null;

  if (ageConfirmed) return null;

  if (ageDenied) {
    return (
      <div className="age-blocked">
        <div className="age-blocked-content">
          <h2>We're sorry</h2>
          <p>You must be 18 or over to access this website.</p>
          <button
            onClick={() => {
              localStorage.removeItem("ageConfirmed");
              window.location.reload();
            }}
            style={{
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              backgroundColor: "#00cc66",
              border: "none",
              color: "white",
              borderRadius: "4px",
            }}
          >
            I am now over 18
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="age-modal">
      <div className="age-modal-content">
        <h2>Are you 18 or older?</h2>
        <p>
          This website contains betting-related content. You must be 18 or over
          to continue.
        </p>
        <div className="age-buttons">
          <button onClick={handleConfirm}>Yes, I am over 18</button>
          <button onClick={handleDeny}>No, I am under 18</button>
        </div>
      </div>
    </div>
  );
}
