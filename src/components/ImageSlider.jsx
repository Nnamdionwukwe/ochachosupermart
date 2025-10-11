import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

// Import your images from the assets folder.
// You can also use public URLs for the images.
import image1 from "../assets/dis1.jpeg";
import image2 from "../assets/dis2.jpeg";
import image3 from "../assets/dis3.jpeg";
import image4 from "../assets/img4.jpeg";
import image5 from "../assets/img5.jpeg";
import image6 from "../assets/img6.jpeg";

const images = [image1, image2, image3, image4, image5, image6];
const intervalTime = 3000; // 5000 milliseconds = 5 seconds

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Set up the timer to change the image every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <div className="image-slider">
      <img
        src={images[currentImageIndex]}
        alt={`Slider Image ${currentImageIndex + 1}`}
        className="fade-in-image"
      />
    </div>
  );
};

export default ImageSlider;
