import Button from "./Button";

const Security = () => {
  return (
    <div className="bg-[#5a1ecb] bg-[url(https://web-images.credcdn.in/_next/assets/images/home-page/security-bg-mobile.jpg)] md:bg-[url(https://web-images.credcdn.in/_next/assets/images/home-page/security-bg.jpg)] bg-cover flex flex-col text-white md:min-h-screen w-screen relative justify-between min-h-[1150px] xl:px-[200px] xl:pt-60 xl:pb-44 md:p-[100px] md:bg-bottom pt-[195px] px-[50px] pb-[90px] bg-center ">
      <div className="section-top">
        <div className="text-[100px] sm:max-w-[80%] md:max-w-[650px]  font-bold tracking-tight leading-[96px] opacity-90">
          security first. and second.
        </div>
        <div className="max-w-[630px] text-[32px] mt-6 sm:mt-4 font-black">
          what’s yours remains only yours.
        </div>
      </div>
      <div className="section-bottom">
        <div className="text-sm sm:text-base md:text-lg  mb-10 font-extrabold max-w-[630px] md:tracking-wide ">
          CRED ensures that all your personal data and transactions are encrypted, and secured so
          what’s yours remains only yours. there’s no room for mistakes because we didn’t leave any.
        </div>
        <div className="w-fit">
          <Button>Become a Member</Button>
        </div>
      </div>
    </div>
  );
};

export default Security;
