const Product = () => {
  return (
    <div className="product w-screen h-[800px] relative overflow-hidden bg-[url(https://web-images.credcdn.in/_next/assets/images/home-page/video-bg.png)] bg-cover right-0 top-0 scale-up-bottom">
      <div className="wrapper min-h-[70%] ">
        <img
          src="/assets/neopop-left-2.png"
          alt="mockup"
          className="absolute left-1/2 bottom-0 translate-x-[-160%] translate-y-[25%] z-[98]"
        />
        <img
          src="/assets/neopop-left-1.png"
          alt="mockup"
          className="absolute left-1/2 bottom-0 translate-x-[-105%] translate-y-[15%] z-[99]"
        />
        <img
          src="/assets/neopop-center.png"
          alt="mockup"
          className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[5%] z-[100]"
        />
        <img
          src="/assets/neopop-right-1.png"
          alt="mockup"
          className="absolute left-1/2 bottom-0 translate-x-[5%] translate-y-[15%] z-[99]"
        />
        <img
          src="/assets/neopop-right-2.png"
          alt="mockup"
          className="absolute left-1/2 bottom-0 translate-x-[60%] translate-y-[25%] z-[98]"
        />
      </div>
    </div>
  );
};

export default Product;
