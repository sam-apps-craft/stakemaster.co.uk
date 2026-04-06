"use client";

import { useRouter } from "next/navigation";

export default function PrivacyPolicy() {
  const router = useRouter();

  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "auto" }}>
      <button
        onClick={() => router.push("/")}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "0.5rem 1rem",
          fontWeight: "600",
          marginBottom: "1.5rem",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      <h1>Privacy Policy</h1>
      <p>
        <strong>Last updated:</strong> April 2026
      </p>

      <p>
        This Privacy Policy explains how <strong>Stakemaster</strong> (“we”,
        “our”, “us”) collects, uses, and protects personal data when you visit
        or interact with our website <strong>stakemaster.co.uk</strong> or use
        our related applications and services. We act as a Data Controller under
        the UK General Data Protection Regulation (UK GDPR) and the Data
        Protection Act 2018.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>
          <strong>Account and contact data:</strong> name, email address.
        </li>
        <li>
          <strong>Usage data:</strong> IP address, browser type, pages visited.
        </li>
        <li>
          <strong>Device data:</strong> device and operating system details.
        </li>
        <li>
          <strong>Marketing and analytics data:</strong> cookies (e.g. Meta
          Pixel, Google Analytics).
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>Operate and improve services.</li>
        <li>Communicate updates and support.</li>
        <li>Analyse usage and marketing performance.</li>
        <li>Comply with legal obligations.</li>
      </ul>

      <h2>3. Lawful Basis</h2>
      <ul>
        <li>Contract performance.</li>
        <li>Legitimate interests.</li>
        <li>Consent (cookies/marketing).</li>
        <li>Legal compliance.</li>
      </ul>

      <h2>4. Cookies</h2>
      <p>
        Cookies are used for analytics and advertising. Users can manage these
        via browser settings or cookie banner.
      </p>

      <h2>5. Data Sharing</h2>
      <p>
        No sale of data. Shared only with necessary service providers. Transfers
        outside the UK use appropriate safeguards.
      </p>

      <h2>6. Retention</h2>
      <p>
        Data retained only as long as necessary, then deleted or anonymised.
      </p>

      <h2>7. Your Rights</h2>
      <ul>
        <li>Access</li>
        <li>Correction</li>
        <li>Deletion</li>
        <li>Restriction / objection</li>
        <li>Portability</li>
        <li>Withdraw consent</li>
      </ul>

      <p>
        Contact:{" "}
        <a href="mailto:info@stakemaster.co.uk">info@stakemaster.co.uk</a>
      </p>

      <h2>8. Security</h2>
      <p>Appropriate technical and organisational measures are in place.</p>

      <h2>9. Children</h2>
      <p>Not intended for under 18s.</p>

      <h2>10. Updates</h2>
      <p>Policy may be updated periodically.</p>

      <h2>11. Contact</h2>
      <p>
        Email:{" "}
        <a href="mailto:info@stakemaster.co.uk">info@stakemaster.co.uk</a> |
        ICO:{" "}
        <a href="https://ico.org.uk" target="_blank">
          ico.org.uk
        </a>
      </p>
    </div>
  );
}
