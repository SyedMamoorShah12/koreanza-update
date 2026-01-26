import React, { useState } from 'react';
import './Hero.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img from '../assets/Images/slider1.jpeg'
import img2 from '../assets/Images/slider2.jpeg'
import img3 from '../assets/Images/slider3.jpeg'
import img4 from '../assets/Images/4.jpg'

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of your 5 slider images
 const slides = [
  { id: 1, img: img },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
  { id: 5, img: img },
];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="slider-outer">
      <div className="slider-wrapper">
        {/* Navigation Buttons */}
        <button className="nav-btn prev" onClick={prevSlide}>
          <ChevronLeft size={30} />
        </button>
        <button className="nav-btn next" onClick={nextSlide}>
          <ChevronRight size={30} />
        </button>

        {/* Slides Container */}
        <div 
          className="slides-container" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div className="slide" key={slide.id}>
              <img src={slide.img} alt={`Slide ${slide.id}`} className="slide-img" />
              <button className="slider-shop-btn">Shop Now</button>
            </div>
          ))}
        </div>

        {/* Optional Dots */}
        <div className="dots">
          {slides.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;