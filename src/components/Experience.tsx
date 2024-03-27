import Button from "./Button";

const Experience = () => {
  return (
    <div className="bg-[#1a61e9] bg-[url(https://web-images.credcdn.in/_next/assets/images/home-page/money-matters-bg-mobile.jpg)] md:bg-[url(https://web-images.credcdn.in/_next/assets/images/home-page/money-matters-bg.jpg)] bg-cover flex flex-col text-white md:min-h-screen w-screen relative xl:px-[200px] xl:pt-60 xl:pb-44 md:p-[100px] md:bg-bottom pt-[195px] px-[50px] pb-[90px] bg-center min-h-[1350px] justify-end sm:min-h-[1280px] md:justify-between ">
      <div className="section-top">
        <div className="text-[65px] sm:text-[85px] md:text-[100px] font-bold tracking-tight leading-[96px]  opacity-90 sm:max-w-[80%] md:max-w-[670px] xl:max-w-full">
          we take your money matters seriously.
        </div>
        <div className="max-w-[630px] text-lg sm:text-2xl mt-6 md:text-[32px] sm:mt-4 font-black">
          so that you don’t have to.
        </div>
      </div>
      <div className="section-bottom">
        <div className="text-sm sm:text-base md:text-lg mb-7 font-extrabold max-w-[630px] tracking-wide mt-[75px] sm:mb-10 md:mt-0">
          never miss a due date with reminders to help you pay your bills on time, instant
          settlements mean you never wait for your payments to go through and statement analysis
          lets you know where your money goes, always.
        </div>
        <div className="w-fit">
          <Button>Experience the upgrade</Button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
