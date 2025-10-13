import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/components/NewsletterSection.css";

const NewsletterSection = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
          setTimeout(() => setStatus(""), 4000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus(""), 4000);
        }
      );
  };

  return (
    <section className="newsletter-section" id="newsletter">
      <div className="newsletter-overlay">
        <div className="newsletter-container">
          <h2>Stay Updated with Brown Motors</h2>
          <p>Subscribe to get exclusive deals, new arrivals, and car care tips.</p>

          <form ref={form} onSubmit={sendEmail} className="newsletter-form">
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email address"
              required
            />
            <button type="submit">
              {status === "sending" ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          {status === "success" && (
            <p className="newsletter-success">✅ Thanks for subscribing!</p>
          )}
          {status === "error" && (
            <p className="newsletter-error">❌ Something went wrong. Please try again.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

