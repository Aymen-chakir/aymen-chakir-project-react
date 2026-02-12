import { useState } from "react";
import Data from "../json/data.json";

function Carousel() {
  const [index, setIndex] = useState(0);
  const visible = 4;
  const maxIndex = Data.length - visible;

  const next = () => {
    setIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const prev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  return (
    <div className=" h-[80vh] mx-auto py-10 flex flex-col  justify-center items-center">
      <h2 className="text-2xl font-bold text-center mb-6">
        FEATURED PRODUCTS
      </h2>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${index * (100 / visible)}%)`,
          }}
        >
          {Data.map((item) => (
            <div
              key={item.id}
              className="w-1/4  flex-shrink-0 p-3 "
            >
              <div className="group flex flex-col items-center justify-center">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w- h-120 object-cover"
                  />

                  <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition">
                    ADD TO CART
                  </button>
                </div>

                <h3 className="mt-3 text-sm">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  ${item.price}.00
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white px-3 py-2 shadow"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white px-3 py-2 shadow"
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default Carousel;
