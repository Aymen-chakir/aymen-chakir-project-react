import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

import { useState } from "react";

const images = [
  "src/assets/images/carousel1.jpg",
  "src/assets/images/carousel2.jpg",
  "src/assets/images/carousel3.webp",
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="w-screen mx-auto">
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        
        {/* Slides */}
        <div className="relative h-80 md:h-96">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="slide"
              className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-gray-700" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300"
        >
          ❮
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300"
        >
          ❯
        </button>
      </div>
    </div>
  );
}

export default Carousel;
