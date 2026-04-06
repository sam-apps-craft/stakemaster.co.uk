"use client";

const APPLE_URL = ""; // set when live
const GOOGLE_URL = ""; // set when live

export default function StoreBanner() {
  const isLive = APPLE_URL && GOOGLE_URL;

  if (!isLive) return null;

  return (
    <div className="store-banner">
      <a href={APPLE_URL} target="_blank" rel="noopener noreferrer">
        <img
          src="/app-store.png"
          alt="Download on the App Store"
          className="store-img"
        />
      </a>

      <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer">
        <img
          src="/google-play.png"
          alt="Get it on Google Play"
          className="store-img"
        />
      </a>
    </div>
  );
}
