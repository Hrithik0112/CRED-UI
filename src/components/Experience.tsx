import Button from "./Button";

const Experience = () => {
  return (
    <div className="bg-[#1a61e9] bg-[url(https://web-images.credcdn.in/_next/assets/images/home-page/money-matters-bg-mobile.jpg)] md:bg-[url(https://web-images.credcdn.in/_next/assets/images/home-page/money-matters-bg.jpg)] bg-cover flex flex-col text-white min-h-screen w-full relative justify-between">
      <div className="xl:px-[200px] xl:pt-60 xl:pb-44 md:p-[100px] md:bg-bottom pt-[195px] px-[50px] pb-[90px] bg-center">
        <div className="section-top">
          <div className="text-[100px] font-bold tracking-tight leading-[96px] text-wrap opacity-90">
            we take your money matters seriously.
          </div>
          <div className="max-w-[630px] text-[32px] mt-4 font-black">
            so that you don’t have to.
          </div>
        </div>
        <div className="section-bottom">
          <div className="text-lg mb-7 font-extrabold max-w-[630px] tracking-wide ">
            never miss a due date with reminders to help you pay your bills on time, instant
            settlements mean you never wait for your payments to go through and statement analysis
            lets you know where your money goes, always.
          </div>
          <div className="w-fit">
            <Button>Experience the upgrade</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
