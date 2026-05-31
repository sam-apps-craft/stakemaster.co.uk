"use client";

import { useState } from "react";

import Image from "next/image";

import { useRouter } from "next/navigation";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby4yU7aP5jqHuZktqEqGl9HhWwu9ZLSXZpwCvyIcrz3q_WHLV-RkJmIalCCb1iVwTuX/exec";

export default function Signup() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",

    name: "",

    mobile: "",
  });

  const [success, setSuccess] = useState(false);

  const [duplicate, setDuplicate] = useState(false);

  const handleChange = (e: any) => {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  };

  const jsonp = (url: string) =>
    new Promise<any>((resolve, reject) => {
      const callbackName = "jsonp_" + Date.now();

      const script = document.createElement("script");

      (window as any)[callbackName] = (data: any) => {
        resolve(data);

        delete (window as any)[callbackName];

        script.remove();
      };

      script.onerror = () => {
        delete (window as any)[callbackName];

        script.remove();

        reject(new Error("JSONP request failed"));
      };

      script.src = url + "&callback=" + callbackName;

      document.body.appendChild(script);
    });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setDuplicate(false);

    const url = `${SCRIPT_URL}?email=${encodeURIComponent(
      form.email
    )}&name=${encodeURIComponent(form.name)}&mobile=${encodeURIComponent(
      form.mobile
    )}`;

    try {
      const result = await jsonp(url);

      if (result.status === "duplicate") {
        setDuplicate(true);

        return;
      }

      if (result.status === "success") {
        setSuccess(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (success) {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@type": "WebPage",

              name: "StakeMaster Signup Success",

              url: "https://stakemaster.co.uk/signup",
            }),
          }}
        />

        <main className="page signup-page">
          <div className="signup-container">
            <button
              className="top-button"
              style={{
                marginBottom: "1rem",
              }}
              onClick={() => router.push("/")}
              aria-label="Back to homepage"
            >
              ← Back
            </button>

            <Image
              src="/formimage.png"
              alt="StakeMaster Signup"
              width={1072}
              height={264}
              priority
              className="signup-header"
            />

            <div className="signup-card signup-title">
              <h1>Thank You!</h1>

              <p>You have successfully joined the waitlist.</p>

              <p>We will notify you when StakeMaster launches.</p>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "WebPage",

            name: "StakeMaster Signup",

            url: "https://stakemaster.co.uk/signup",

            description:
              "Join the StakeMaster waitlist for early access and launch updates.",
          }),
        }}
      />

      <main className="page signup-page">
        <div className="signup-container">
          <button
            className="top-button"
            style={{
              marginBottom: "1rem",
            }}
            onClick={() => router.push("/")}
            aria-label="Back to homepage"
          >
            ← Back
          </button>

          <Image
            src="/formimage.png"
            alt="StakeMaster Signup"
            className="signup-header"
            width={1200}
            height={600}
            priority
          />

          <div className="signup-card signup-title">
            <h1>Get Early Access</h1>

            <p>StakeMaster is launching soon.</p>

            <p>Join the waitlist to get early access and launch updates.</p>

            <span className="required-note">* Indicates required question</span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="signup-card">
              <label htmlFor="email">
                Email Address <span className="required">*</span>
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your answer"
                required
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>

            <div className="signup-card">
              <label htmlFor="name">Name</label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your answer"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
              />
            </div>

            <div className="signup-card">
              <label htmlFor="mobile">Mobile Number</label>

              <input
                id="mobile"
                type="tel"
                name="mobile"
                placeholder="Your answer"
                value={form.mobile}
                onChange={handleChange}
                autoComplete="tel"
              />
            </div>

            {duplicate && (
              <p
                style={{
                  color: "red",
                }}
              >
                This email is already on the waitlist.
              </p>
            )}

            <div className="signup-actions">
              <button
                className="top-button"
                type="submit"
                aria-label="Submit signup form"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
