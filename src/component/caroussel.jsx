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
    <div className="w- h-[90vh] mx-auto my-3">
      <div className="relative overflow-hidden h-[90%]  ">
        
        {/* Slides */}
        <div className="relative  h-[100%] ">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="slide"
              className={`absolute w-full h-[100%] object-cover transition-opacity duration-700 ${
                index === current ? "opacity-100" : "opacity-0"
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
