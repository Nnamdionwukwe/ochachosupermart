import React from "react";
import "./KeyServices.css";

const services = [
  {
    icon: "💊",
    title: "Prescription Refills",
    description: "Easily manage and refill your prescriptions online.",
  },
  {
    icon: "👩‍⚕️",
    title: "Consultations",
    description: "Get professional health advice from our pharmacists.",
  },
  {
    icon: "🚚",
    title: "Home Delivery",
    description: "Convenient and discreet delivery of your medications.",
  },
];

const KeyServices = () => {
  return (
    <section className="key-services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyServices;
