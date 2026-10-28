"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    console.log("Form data:", data); // replace with API call / email service later
    setSent(true);
    e.target.reset();
  }

  if (sent) {
    return (
      <div className="success-box">
        <h3>Thank you! 💌</h3>
        <p>We received your message and will get back to you within 24 hours.</p>
        <button className="btn btn-outline-dark" onClick={() => setSent(false)}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Your name" required />
      <input name="email" type="email" placeholder="Email address" required />
      <input name="phone" type="tel" placeholder="Phone number" />
      <input name="date" type="date" />
      <select name="package" defaultValue="">
        <option value="" disabled>
          Select a package
        </option>
        <option>Essential</option>
        <option>Signature</option>
        <option>Luxury</option>
        <option>Not sure yet</option>
      </select>
      <textarea
        name="message"
        rows="5"
        placeholder="Tell us about your wedding..."
        required
      />
      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
    </form>
  );
}