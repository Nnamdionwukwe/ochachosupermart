import React, { useState } from "react";
// import "./ProductGallery.css"; // Add a CSS file for styles

const ProductGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="product-gallery">
      <img src={mainImage} alt="Main Product" className="main-image" />
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={`thumbnail ${image === mainImage ? "active" : ""}`}
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
