import { useEffect, useRef, useState } from "react";

const Product = () => {
  const ref = useRef(null);
  const [showanimation, setShowanimation] = useState(false);

  function toggleAnimmation(e: any) {
    if (e[0]?.isIntersecting) {
      setShowanimation(true);
    }
  }
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimmation, options);

    if (!showanimation) {
      if (ref.current) {
        observer.observe(ref.current);
      }
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  });

  return (
    <div
      className={`product w-screen h-[450px] bg-[#0f0f0f] bg-[url(https://web-images.credcdn.in/_next/assets/images/home-page/video-bg-mobile.png)] sm:h-[580px] md:h-[620px] xl:h-[800px] relative overflow-hidden sm:bg-[url(https://web-images.credcdn.in/_next/assets/images/home-page/video-bg.png)] bg-cover bg-right-bottom ${
        showanimation ? "scale-up-bottom" : ""
      } `}
      ref={ref}
    >
      {showanimation && (
        <div className="min-w-[70%] ">
          <img
            src="/assets/neopop-left-2.png"
            alt="mockup"
            className="absolute left-1/2 bottom-0 translate-x-[-160%] translate-y-[25%] z-[98] w-[170px] sm:w-[270px] md:w-[300px] xl:w-[400px]"
          />
          <img
            src="/assets/neopop-left-1.png"
            alt="mockup"
            className="absolute left-1/2 bottom-0 translate-x-[-105%] translate-y-[15%] z-[99]  w-[170px] sm:w-[270px] md:w-[300px] xl:w-[400px]"
          />
          <img
            src="/assets/neopop-center.png"
            alt="mockup"
            className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[5%] z-[100]  w-[170px] sm:w-[270px] md:w-[300px] xl:w-[400px]"
          />
          <img
            src="/assets/neopop-right-1.png"
            alt="mockup"
            className="absolute left-1/2 bottom-0 translate-x-[5%] translate-y-[15%] z-[99]  w-[170px] sm:w-[270px] md:w-[300px] xl:w-[400px]"
          />
          <img
            src="/assets/neopop-right-2.png"
            alt="mockup"
            className="absolute left-1/2 bottom-0 translate-x-[60%] translate-y-[25%] z-[98]  w-[170px] sm:w-[270px] md:w-[300px] xl:w-[400px]"
          />
        </div>
      )}
    </div>
  );
};

export default Product;
