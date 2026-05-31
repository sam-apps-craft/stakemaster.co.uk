"use client";

import { useRouter } from "next/navigation";

export default function PrivacyPolicy() {
  const router = useRouter();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "WebPage",

            name: "StakeMaster Privacy Policy",

            url: "https://stakemaster.co.uk/privacy-policy",

            description:
              "Privacy Policy for StakeMaster betting application and website.",
          }),
        }}
      />

      <main
        style={{
          padding: "2rem",

          maxWidth: "900px",

          margin: "auto",
        }}
      >
        <button
          onClick={() => router.push("/")}
          aria-label="Back to homepage"
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
          This Privacy Policy explains how <strong>StakeMaster</strong> (“we”,
          “our”, “us”) collects, uses, and protects personal data when you visit
          or interact with our website <strong>stakemaster.co.uk</strong> or use
          our related applications and services. We act as a Data Controller
          under the UK General Data Protection Regulation (UK GDPR) and the Data
          Protection Act 2018.
        </p>

        <h2>1. Information We Collect</h2>

        <ul>
          <li>
            <strong>Account and contact data:</strong> name and email address.
          </li>

          <li>
            <strong>Usage data:</strong> IP address, browser type and pages
            visited.
          </li>

          <li>
            <strong>Device data:</strong> device and operating system details.
          </li>

          <li>
            <strong>Marketing and analytics data:</strong> cookies including
            Meta Pixel and analytics technologies.
          </li>
        </ul>

        <h2>2. How We Use Your Information</h2>

        <ul>
          <li>Operate and improve our services.</li>

          <li>Communicate updates and customer support.</li>

          <li>Analyse website traffic and marketing performance.</li>

          <li>Comply with legal and regulatory obligations.</li>
        </ul>

        <h2>3. Lawful Basis</h2>

        <ul>
          <li>Contract performance.</li>

          <li>Legitimate interests.</li>

          <li>Consent for cookies and marketing.</li>

          <li>Legal compliance.</li>
        </ul>

        <h2>4. Cookies</h2>

        <p>
          Cookies are used for analytics, advertising and website functionality.
          Users can manage cookie settings through their browser preferences.
        </p>

        <h2>5. Data Sharing</h2>

        <p>
          We do not sell personal data. Information may be shared only with
          trusted service providers where necessary to operate the service.
          International transfers are protected using appropriate safeguards.
        </p>

        <h2>6. Data Retention</h2>

        <p>
          Personal data is retained only for as long as necessary and then
          securely deleted or anonymised.
        </p>

        <h2>7. Your Rights</h2>

        <ul>
          <li>Access to your data.</li>

          <li>Correction of inaccurate data.</li>

          <li>Deletion of personal data.</li>

          <li>Restriction or objection to processing.</li>

          <li>Data portability.</li>

          <li>Withdrawal of consent.</li>
        </ul>

        <p>
          Contact:{" "}
          <a href="mailto:info@stakemaster.co.uk">info@stakemaster.co.uk</a>
        </p>

        <h2>8. Security</h2>

        <p>
          Appropriate technical and organisational security measures are in
          place to protect personal data.
        </p>

        <h2>9. Age Restriction</h2>

        <p>StakeMaster is intended strictly for users aged 18 and over.</p>

        <h2>10. Updates</h2>

        <p>
          This Privacy Policy may be updated periodically to reflect legal or
          operational changes.
        </p>

        <h2>11. Contact</h2>

        <p>
          Email:{" "}
          <a href="mailto:info@stakemaster.co.uk">info@stakemaster.co.uk</a>
        </p>

        <p>
          Information Commissioner’s Office:{" "}
          <a
            href="https://ico.org.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            ico.org.uk
          </a>
        </p>
      </main>
    </>
  );
}
