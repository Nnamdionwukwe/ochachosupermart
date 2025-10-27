import React from "react";
import "./Testimonials.css";

const Testimonials = ({ testimonials }) => {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="testimonial-author">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="author-image"
              />
              <div>
                <h4 className="author-name">{testimonial.author}</h4>
                <p className="author-title">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
