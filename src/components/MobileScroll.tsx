import { useState } from "react";
import MobileScrollData from "./MobileScrollData";

export const scroll_Data = [
  {
    heading: "we’ve got your back.",
    description:
      "gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.",
    detail_img:
      "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold1.png",
  },
  {
    heading: "begin your winning streak.",
    description:
      "use your CRED coins to participate in games and raffles to win the most exclusive rewards and cashbacks on CRED. good luck.",
    detail_img:
      "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold2.png",
  },
  {
    heading: "for your eclectic taste.",
    description:
      "get access to the CRED Store, a member-exclusive selection of products and experiences at special prices that complement your taste. this is the good life they speak of.",
    detail_img:
      "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold3.png",
  },
  {
    heading: "more cash in your pockets.",
    description:
      "switch to CRED RentPay and start paying rent with your credit card. this way you get up to 45 days of credit free period, more reward points and a happy landlord.",
    detail_img:
      "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold4.png",
  },
] as const;
const MobileScroll = () => {
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <div className="bg-black flex justify-between  pt-60 pb-[250px] px-[200px] xl:pt-60 xl:pb-[250px] xl:px-[200px] md:pt-[60px] md:pb-[100px] md:px-[100px] bg-[url(https://web-images.credcdn.in/_next/assets/images/home-page/hero-bg.png)] bg-cover w-full min-h-screen">
      {/* Scroll Data */}
      <div className="w-1/2 flex flex-col justify-end">
        {scroll_Data.map((data, index) => (
          <div>
            <MobileScrollData data={data} key={index} i={index} setCurrentImage={setCurrentImage} />
          </div>
        ))}
      </div>
      {/* Mobile mockup */}
      <div className="w-1/2 hidden justify-center ml-[30px] relative sm:flex">
        {/* for destop mockup wrapeer */}
        <div className="sticky top-44 w-[350px] h-[600px] shadow-inner border-2 border-gray-600 rounded-[46px] py-4 px-[14px]">
          <div className="h-full flex justify-center bg-[#0d0d0d] overflow-hidden rounded-[36px]">
            <img
              src={scroll_Data[currentImage].detail_img}
              alt="mockup-screens"
              className="h-full object-contain slide-left"
              key={scroll_Data[currentImage].detail_img}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScroll;
