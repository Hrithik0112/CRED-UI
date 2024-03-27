import Button from "./Button";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="relative">
      <div className="pt-[60px] px-10 pb-[70px] sm:p-[60px] md:pt-[60px] xl:pt-[60px] md:px-[50px] md:pb-[100px] xl:pb-[200px] xl:px-[200px] flex flex-col bg-[#0e0f0f] bg-[url(https://web-images.credcdn.in/_next/assets/images/home-page/hero-bg-mobile.png)] md:bg-[url(https://web-images.credcdn.in/_next/assets/images/home-page/hero-bg-mobile.png)] bg-cover bg-right-bottom overflow-hidden w-screen min-h-screen ">
        {/* header */}
        <Header />
        {/* hero section */}
        <div className="flex items-start md:items-center flex-col text-white ">
          <div className="font-black  mt-[100px] text-[55px] sm:text-[65px] md:text-[82px] xl:text-[106px] xl:leading-[125px] text-left md:text-center  ">
            rewards for paying credit card bills.
          </div>
          <div className="xl:text-[30px] mt-[35px] font-extrabold text-base sm:text-xl md:text-[25px] text-left md:text-center">
            join 9M+ members who win rewards and cashbacks everyday
          </div>
          {/* button */}
          <div className="mt-14">
            <Button>Download Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
