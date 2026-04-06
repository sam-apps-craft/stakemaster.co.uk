"use client";

import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import type { CSSProperties } from "react";

export default function GambleAwareBanner() {
  const [showPolicy, setShowPolicy] = useState(false);
  const [ageDenied, setAgeDenied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("ageConfirmed");
    if (stored === "false") setAgeDenied(true);
    setMounted(true);
  }, []);

  const linkStyle: CSSProperties = {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0.25rem",
    flex: "1 1 auto",
    minWidth: "50px",
    textAlign: "center",
    color: "inherit",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "clamp(0.7rem, 1.8vw, 0.9rem)",
    cursor: "pointer",
  };

  if (!mounted) return null;

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

  const modal = (
    <div className="age-modal">
      <div className="age-modal-content">
        <h2>Age Verification Policy – Stakemaster</h2>

        <p>
          <strong>1. Age Restriction</strong>
          <br />
          Use limited to 18+.
        </p>
        <p>
          <strong>2. Verification</strong>
          <br />
          Users must confirm 18+ on access.
        </p>
        <p>
          <strong>3. App Store Compliance</strong>
          <br />
          Listed as 18+.
        </p>
        <p>
          <strong>4. No Real-Money Gambling</strong>
          <br />
          Tips only.
        </p>
        <p>
          <strong>5. Responsible Usage</strong>
          <br />
          Use BeGambleAware.org.
        </p>
        <p>
          <strong>6. Enforcement</strong>
          <br />
          Access may be suspended.
        </p>

        <div className="policy-buttons">
          <button
            onClick={() => {
              localStorage.setItem("ageConfirmed", "true");
              setShowPolicy(false);
              setAgeDenied(false);
            }}
            className="policy-btn yes"
          >
            Yes, I am over 18
          </button>

          <button
            onClick={() => {
              localStorage.setItem("ageConfirmed", "false");
              setShowPolicy(false);
              setAgeDenied(true);
            }}
            className="policy-btn no"
          >
            No, I am under 18
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="gambleaware-banner">
      <div className="gambleaware-row">
        <a href="/privacy-policy" style={linkStyle}>
          Privacy Policy
        </a>

        <a
          href="https://www.gamcare.org.uk/get-support/talk-to-us-now/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <img src="/NatGam.png" className="banner-icon" alt="NatGam" />
        </a>

        <a
          href="https://www.gamcare.org.uk/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <img src="/GamCare-logo.jpg" className="banner-icon" alt="GamCare" />
        </a>

        <a
          href="https://www.gambleaware.org"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          BeGambleAware.org
        </a>

        <span onClick={() => setShowPolicy(true)} style={linkStyle}>
          18+
        </span>
      </div>

      <div className="gambleaware-note">
        This content is intended for users aged 18 and over. Please gamble
        responsibly.
      </div>

      {mounted && showPolicy
        ? ReactDOM.createPortal(modal, document.body)
        : null}
    </div>
  );
}
