import Button from "./Button";

const Security = () => {
  return (
    <div className="bg-[#5a1ecb] bg-[url(https://web-images.credcdn.in/_next/assets/images/home-page/security-bg.jpg)] bg-cover flex flex-col text-white min-h-screen w-full relative justify-between">
      <div className="px-[200px] pt-60 pb-44">
        <div className="section-top">
          <div className="text-[100px] max-w-[630px] font-bold tracking-tight leading-[96px] text-wrap opacity-90">
            security first. and second.
          </div>
          <div className="max-w-[630px] text-[32px] mt-4 font-black">
            what’s yours remains only yours.
          </div>
        </div>
        <div className="section-bottom">
          <div className="text-lg mb-7 font-extrabold max-w-[630px] tracking-wide ">
            CRED ensures that all your personal data and transactions are encrypted, and secured so
            what’s yours remains only yours. there’s no room for mistakes because we didn’t leave
            any.
          </div>
          <div className="w-fit">
            <Button>Become a Member</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
