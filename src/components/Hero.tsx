import Button from "./Button";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="p-[60px] md:pt-[60px] xl:pt-[60px] md:px-[50px] md:pb-[100px] xl:pb-[200px] xl:px-[200px] flex flex-col w-full ">
      {/* header */}
      <Header />
      {/* hero section */}
      <div className="flex items-center flex-col text-white ">
        <div className=" font-black  mt-[100px] text-center ">
          <p className="text-[106px] leading-[125px] ">rewards for paying credit card bills.</p>
        </div>
        <div className="text-[30px] mt-[35px] font-extrabold ">
          <p className="text-center">join 9M+ members who win rewards and cashbacks everyday</p>
        </div>
        {/* button */}
        <div className="mt-14">
          <Button>Download Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
