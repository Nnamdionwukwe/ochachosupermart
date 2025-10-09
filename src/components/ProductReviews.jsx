import React from "react";
import "./ProductReviews.css"; // Add a CSS file for styles

const ProductReviews = ({ reviews }) => {
  return (
    <div className="productReviewsContainer">
      <h2 className="reviewHeader">Customer Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className="reviewItem">
          <div className="review-header">
            <strong>{review.author}</strong>
            <span>{review.rating} ★</span>
          </div>
          <p className="review-text">{review.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductReviews;
