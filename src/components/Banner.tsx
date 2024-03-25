const Banner = () => {
  return (
    <div className="w-full xl:px-[200px] p-[60px] md:py-[60px] md:px-[100px] text-[#212426] bg-white">
      {/* baneer heading */}
      <div className="flex items-end">
        <div className="text-2xl leading-9 font-extrabold">rewards from brand you love.</div>
      </div>
      {/* Banner */}
      <div className="bg-[url(https://web-images.credcdn.in/_next/assets/images/home-page/brands-desktop.png)] bg-contain h-[50px] bg-center w-full mt-[50px] bg-no-repeat"></div>
    </div>
  );
};

export default Banner;
