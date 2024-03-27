const Banner = () => {
  return (
    <div className="w-full xl:px-[200px] py-[60px] px-10 sm:p-[60px] md:py-[60px] md:px-[100px] text-[#212426] bg-white">
      {/* baneer heading */}
      <div className="flex items-start sm:items-end">
        <div className="text-lg sm:text-[22px]  md:text-2xl md:leading-9 font-extrabold">
          rewards from brand you love.
        </div>
      </div>
      {/* Banner */}
      <div className="md:h-[60px] mt-[35px] bg-[url(https://web-images.credcdn.in/_next/assets/images/home-page/brands-mobile.png)] md:bg-[url(https://web-images.credcdn.in/_next/assets/images/home-page/brands-desktop.png)] bg-contain h-[50px] bg-left md:bg-center md:w-full md:mt-[50px] bg-no-repeat"></div>
    </div>
  );
};

export default Banner;
