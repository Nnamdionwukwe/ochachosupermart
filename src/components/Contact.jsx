import React, { useState } from "react";
import "./Contact.css";
import BackBtn from "./BackBtn";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Simulate an API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    }, 2000);
  };

  return (
    <section className="contact-us-section">
      <BackBtn />
      <div className="contact-us-container">
        <div className="contact-form-wrapper">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">
            Our friendly team would love to hear from you.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="submit-btn"
              disabled={status === "Sending..."}
            >
              {status === "Sending..." ? "Sending..." : "Send Message"}
            </button>
            {status && status !== "Sending..." && (
              <p className="form-status">{status}</p>
            )}
          </form>
        </div>
        <div className="contact-info-wrapper">
          <h2 className="info-heading">Contact Information</h2>
          <div className="info-item">
            <strong>Email:</strong>
            <p>ochachopharmacy&supermarket@gmail.com</p>
          </div>
          <div className="info-item">
            <strong>Pharmacy Customer Care Line:</strong>
            <p>+234 903 382 2884</p>

            <strong>Supermarket Customer Care Line:</strong>
            <p>+234 701 697 9474</p>
          </div>
          <div className="info-item">
            <strong>Address:</strong>
            <p>Ochacho Estate, Phase 2, Life Camp, Abuja, Nigeria</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
