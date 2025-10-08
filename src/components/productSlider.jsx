import React from "react";
import Slider from "react-slick";
import "./ProductSlider.css"; // For custom styling if needed

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Remember to run:
// npm install react-slick slick-carousel --save

import { useState, useEffect } from "react";
import "./ProductSlider.css";

const productImages = [
  "po1.png",
  "image7.png",
  "poo.png",
  "po2.png",
  "image10.png",
  "img11.png",
  "img12.png",
];

const ProductSlider = ({ autoPlay = false, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % productImages.length);
  };

  // // Function to move to the previous slide
  // const prevSlide = () => {
  //   setCurrentSlide((prevSlide) =>
  //     prevSlide === 0 ? productImages.length - 1 : prevSlide - 1
  //   );
  // };

  // // Function to jump to a specific slide
  // const goToSlide = (index) => {
  //   setCurrentSlide(index);
  // };

  // Logic for automatic sliding
  useEffect(() => {
    let sliderInterval;
    if (autoPlay) {
      sliderInterval = setInterval(nextSlide, interval);
    }

    // Cleanup function to clear the interval on component unmount or state change
    return () => clearInterval(sliderInterval);
  }, [currentSlide, autoPlay, interval]);

  return (
    <div className="slider-container1">
      <div
        className="slider-container"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {productImages.map((image, index) => (
          <div key={index} className="slide">
            <img className="img" src={image} alt={`Product ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Navigation buttons
      <button className="nav-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="nav-button next" onClick={nextSlide}>
        &#10095;
      </button> */}

      {/* Dot navigation */}
      {/* <div className="dots-container">
        {productImages.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default ProductSlider;

// const productImages = [
//   // Array of image URLs
//   "ochacho.svg",
//   "vite.svg",
// ];

// const ProductSlider = () => {
//   const settings = {
//     // Slider configuration options
//   };

//   return (
//     <div className="product-slider-wrapper">
//       <Slider {...settings}>{/* Map through images and render */}</Slider>
//     </div>
//   );
// };

// export default ProductSlider;
