import React, { useState, useEffect } from "react";
import "./Carousel.css";

const CarouselStack = (props) => {
  const data = [
    {
      img: "https://fastly.picsum.photos/id/987/600/300.jpg?hmac=G6PzIir0sCmk-BZ_-5isP8xcbdFO3t_YXiMU8D_69Pk",
      alt: "slide1",
    },
    {
      img: "https://fastly.picsum.photos/id/391/600/300.jpg?hmac=gK55dr8XBINlC5WW4uttrMZmd5HAVORxfz7oO-nG8ko",
      alt: "slide2",
    },
    {
      img: "https://fastly.picsum.photos/id/987/600/300.jpg?hmac=G6PzIir0sCmk-BZ_-5isP8xcbdFO3t_YXiMU8D_69Pk",
      alt: "slide1",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const carouselScroll = () => {
    if (activeSlide === data.length - 1) {
      return setActiveSlide(0);
    }
    return setActiveSlide(activeSlide + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselScroll();
    }, 2000);
    return () => clearInterval(interval);
  });

  return (
    <div className="stack-container">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={index === activeSlide ? "stack-slide active-slide" : "stack-slide inactive-slide"}
          >
            <img src={item.img} alt={item.alt} />
          </div>
        );
      })}
    </div>
  );
};

export default CarouselStack;
