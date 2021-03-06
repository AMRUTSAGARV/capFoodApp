import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
// import Arrows from "./Arrows";
import "./slider.css";
import sliderImage from "./sliderImage";

const len = sliderImage.length - 1;

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
    </div>
  );
}

export default Slider;
