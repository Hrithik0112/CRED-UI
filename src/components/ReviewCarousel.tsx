import React, { useEffect, useState } from "react";

export interface CarouselItem {
  id: number;
  review: string;
  author: string;
}

export const Carousel: React.FC<{ items: CarouselItem[] }> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="relative">
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="max-w-full min-w-full flex-shrink-0 md:p-4 font-normal p-0 text-left md:text-center text-wrap"
            >
              <p className="text-lg md:pb-8 pb-7">{item.review}</p>
              <p className="text-lg ">{item.author}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-2 left-1/2 transform-translate-x-1/2 z-10 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 w-2 rounded-full ${
              index === activeIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};
