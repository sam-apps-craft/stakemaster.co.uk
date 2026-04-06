"use client";

import { useState } from "react";
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
      <div className="page signup-page">
        <div className="signup-container">
          <button
            className="top-button"
            style={{ marginBottom: "1rem" }}
            onClick={() => router.push("/")}
          >
            ← Back
          </button>

          <img src="/formimage.png" alt="Signup" className="signup-header" />

          <div className="signup-card signup-title">
            <h1>Thank You!</h1>
            <p>You have successfully joined the waitlist.</p>
            <p>We will notify you when Stakemaster launches.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page signup-page">
      <div className="signup-container">
        <button
          className="top-button"
          style={{ marginBottom: "1rem" }}
          onClick={() => router.push("/")}
        >
          ← Back
        </button>

        <img src="/formimage.png" alt="Signup" className="signup-header" />

        <div className="signup-card signup-title">
          <h1>Get Early Access</h1>
          <p>Stakemaster is launching soon.</p>
          <p>Join the waitlist to get early access and launch updates</p>
          <span className="required-note">* Indicates required question</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="signup-card">
            <label>
              Email Address <span className="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your answer"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="signup-card">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your answer"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="signup-card">
            <label>Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              placeholder="Your answer"
              value={form.mobile}
              onChange={handleChange}
            />
          </div>

          {duplicate && (
            <p style={{ color: "red" }}>
              This email is already on the waitlist.
            </p>
          )}

          <div className="signup-actions">
            <button className="top-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
