const Rating = () => {
  return (
    <div className="flex bg-[url(https://web-images.credcdn.in/_next/assets/images/home-page/hero-bg.png)] bg-cover bg-right-top  relative z-20">
      <div className="flex flex-col text-white font-black w-screen p-[200px]">
        {/* rating section */}
        <div className="flex justify-center">
          {/* app store */}
          <div className="pr-[75px]">
            {/* heading */}
            <div className="flex items-center pb-12">
              <p className="text-[160px] leading-[120px] pr-4 opacity-90">4.8</p>
              <p className="text-[60px] leading-[55px] pl-4 opacity-90 text-[#ece9ea]">app store</p>
            </div>
            {/* star  */}
            <div className="pb-12">
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
                alt=""
                height={28}
                width={179}
              />
            </div>
            {/* button */}
            <div className="bg-white text-black cursor-pointer py-[15px] flex justify-center items-center w-[310px] rounded-[48px]">
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png"
                alt="apple-logo"
                className="w-11"
              />
              <p className="pl-2 text-xl !leading-5 ">Download the app</p>
            </div>
          </div>
          {/* play store */}
          <div className="pl-[75px]">
            {/* heading */}
            <div className="flex items-center pb-12">
              <p className="text-[160px] leading-[120px] pr-4 opacity-90">4.8</p>
              <p className="text-[60px] leading-[55px] pl-4 opacity-90 text-[#ece9ea]">
                play store
              </p>
            </div>
            {/* star  */}
            <div className="pb-12">
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
                alt=""
                height={28}
                width={179}
              />
            </div>
            {/* button */}
            <div className="bg-white text-black cursor-pointer py-[15px] flex justify-center items-center w-[310px] rounded-[48px]">
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png"
                alt="apple-logo"
                className="w-11"
              />
              <p className="pl-2 text-xl !leading-5 ">Download the app</p>
            </div>
          </div>
        </div>
        {/* review carousal */}
      </div>
    </div>
  );
};

export default Rating;
