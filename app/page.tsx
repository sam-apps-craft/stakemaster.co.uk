"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

import StoreBanner from "@/components/StoreBanner";
import GambleAwareBanner from "@/components/GambleAwareBanner";
import AgeGate from "@/components/AgeGate";

import "@/app/globals.css";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby4yU7aP5jqHuZktqEqGl9HhWwu9ZLSXZpwCvyIcrz3q_WHLV-RkJmIalCCb1iVwTuX/exec";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState<any>({});
  const [signupCount, setSignupCount] = useState(0);

  const launchDateRef = useRef(new Date("2026-05-01T00:00:00"));
  const router = useRouter();
  const SHOW_STORE = new Date() >= launchDateRef.current;

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = launchDateRef.current.getTime() - now.getTime();

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  function loadSignupCount() {
    const callbackName = "signup_callback_" + Date.now();
    const script = document.createElement("script");

    (window as any)[callbackName] = function (data: any) {
      setSignupCount(data.count || 0);
      delete (window as any)[callbackName];
      document.body.removeChild(script);
    };

    script.src = SCRIPT_URL + "?callback=" + callbackName;
    document.body.appendChild(script);
  }

  useEffect(() => {
    loadSignupCount();
    const interval = setInterval(loadSignupCount, 15000);
    return () => clearInterval(interval);
  }, []);

  // ✅ ADDED: server-side Meta Conversion API call
  useEffect(() => {
fetch(
  "https://europe-west2-stakemaster-website.cloudfunctions.net/metaConversion"
);
  }, []);

  return (
    <>
      <AgeGate />

      <div
        className="app-container"
        style={{
          backgroundColor: "black",
          padding: "0.5rem",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <div
            className="countdown"
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "0.75rem",
              marginBottom: "1rem",
            }}
          >
            {["days", "hours", "minutes", "seconds"].map((unit) => (
              <div className="unit" key={unit}>
                <svg className="ring" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" />
                </svg>
                <div className="value glow">{timeLeft[unit] ?? "0"}</div>
                <div className="label">{unit.toUpperCase()}</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginBottom: "1rem" }}>
            <img
              src="/logo.png"
              alt="StakeMaster Logo"
              style={{
                width: "auto",
                maxWidth: "80vw",
                maxHeight: "38vh",
                height: "auto",
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1.25rem",
                marginTop: "0.75rem",
              }}
            >
              <a
                href="https://www.facebook.com/profile.php?id=61578386566188"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/Facebook_Logo_Primary.png"
                  style={{ width: "clamp(32px, 6vw, 56px)" }}
                />
              </a>

              <a
                href="https://www.instagram.com/p/DMfAZirMuEl/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/Instagram_Glyph_Gradient.png"
                  style={{ width: "clamp(32px, 6vw, 56px)" }}
                />
              </a>
            </div>

            <div
              className="flashing-gold"
              style={{
                marginTop: "0.75rem",
                fontSize: "clamp(1.2rem, 3vw, 2rem)",
              }}
            >
              Get Ready... Launching 1st May 2026
            </div>

            <div
              style={{
                marginTop: "0.5rem",
                fontSize: "clamp(1rem, 2vw, 1.3rem)",
                color: "gold",
                fontWeight: "bold",
              }}
            >
              {signupCount} people already joined the waitlist
            </div>

            <div style={{ marginTop: "1rem" }}>
              <button
                className="top-button flash-button"
                onClick={() => {
                  window.fbq?.("track", "Lead"); // ✅ ADDED
                  router.push("/signup");
                }}
              >
                SIGN UP NOW
              </button>
            </div>
          </div>

          {SHOW_STORE && (
            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
              <StoreBanner />
            </div>
          )}
        </div>

        <GambleAwareBanner />
      </div>
    </>
  );
}
