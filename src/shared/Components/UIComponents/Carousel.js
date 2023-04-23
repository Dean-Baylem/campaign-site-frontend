import React, { useState, useEffect } from "react";
import "./Carousel.css";

const CarouselStack = (props) => {

  const [activeSlide, setActiveSlide] = useState(0);

  const carouselScroll = () => {
    if (activeSlide === props.data.length - 1) {
      return setActiveSlide(0);
    }
    return setActiveSlide(activeSlide + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselScroll();
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className="carousel-container">
      {props.data.map((item, index) => {
        return (
          <div
            key={index}
            className={
              index === activeSlide
                ? "carousel-slide active-slide"
                : "carousel-slide inactive-slide"
            }
          >
            <img src={item.img} alt={item.alt} />
          </div>
        );
      })}
    </div>
  );
};

export default CarouselStack;
