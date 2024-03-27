import Button from "./Button";

const FeelSpecial = () => {
  return (
    <div className="bg-[#ee2f4c] bg-[url(https://web-images.credcdn.in/_next/assets/images/home-page/deserve-more-bg-mobile.jpg)] md:bg-[url(https://web-images.credcdn.in/_next/assets/images/home-page/deserve-more-bg.jpg)] bg-cover bg-center md:bg-bottom flex flex-col text-white min-h-[1150px] md:min-h-screen w-screen relative justify-between xl:px-[200px] xl:pt-60 xl:pb-44 md:p-[100px] pt-[195px] px-[50px] pb-[90px]">
      {/* section top */}
      <div>
        <div className="md:text-[100px] md:max-w-[630px] font-bold tracking-tight leading-[96px] text-wrap opacity-90 text-[65px] sm:text-[85px] sm:max-w-[80%] ">
          feel special more often.
        </div>
        <div className="max-w-[630px] md:text-[32px] sm:mt-4 font-black text-lg mt-[26px] sm:text-2xl">
          exclusive rewards for paying your bills
        </div>
      </div>

      {/* section bottom */}
      <div>
        <div className="font-extrabold max-w-[630px] tracking-wide text-sm mb-10 mt-2 sm:text-base md:text-lg ">
          every time you pay your credit card bills on CRED, you receive CRED coins. you can use
          these to win exclusive rewards or get special access to curated products and experiences.
          on CRED, good begets good.
        </div>
        <div className="w-fit">
          <Button>Explore Rewards</Button>
        </div>
      </div>
    </div>
  );
};

export default FeelSpecial;
