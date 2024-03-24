import Button from "./Button";

const FeelSpecial = () => {
  return (
    <div className="bg-[#ee2f4c] bg-[url(https://web-images.credcdn.in/_next/assets/images/home-page/deserve-more-bg.jpg)] bg-cover flex flex-col text-white min-h-screen w-full relative justify-between">
      <div className="px-[200px] pt-60 pb-44">
        <div className="section-top">
          <div className="text-[100px] max-w-[630px] font-bold tracking-tight leading-[96px] text-wrap opacity-90">
            feel special more often.
          </div>
          <div className="max-w-[630px] text-[32px] mt-4 font-black">
            exclusive rewards for paying your bills
          </div>
        </div>
        <div className="section-bottom">
          <div className="text-lg mb-7 font-extrabold max-w-[630px] tracking-wide ">
            every time you pay your credit card bills on CRED, you receive CRED coins. you can use
            these to win exclusive rewards or get special access to curated products and
            experiences. on CRED, good begets good.
          </div>
          <div className="w-fit">
            <Button>Explore Rewards</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeelSpecial;
