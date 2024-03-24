import { Carousel, CarouselItem } from "./ReviewCarousel";

const items: CarouselItem[] = [
  {
    id: 1,
    review: `"great app, paying dues of credit card was never that much easy and fast. few more rewarding features also available there like showing credit score, can easily pay rent, getting cashback whenever paying cc dues. lots more. i really loves cred."`,
    author: "ranesh bhattacharya",
  },
  {
    id: 2,
    review: `"in love! such a seamless user experience, smooth as freshly waxed pair of legs! very intuitive and easy to use application. good job people, good job."`,

    author: "parul mehra",
  },
  {
    id: 3,
    review: `"have been using the app for an year... very happy with this. it greatly avoids the need for searching for statements individually and logging in to pay them all. with cred i can happily pay all my cc bills with a single click. love the experience."`,
    author: "pushpalatha a",
  },
  {
    id: 4,
    review: `"great app, paying dues of credit card was never that much easy and fast. few more rewarding features also available there like showing credit score, can easily pay rent, getting cashback whenever paying cc dues. lots more. i really loves cred."`,
    author: "sanjeev kataria",
  },
  {
    id: 5,
    review: `"i would say one of the best platforms to manage your credit card payments with lot of advantages and rewards. you can even pay rent to your owner using credit card. that's really cool. thanks for all the awesomeness. keep inventing !!"`,
    author: "jagadeeswar reddy singam",
  },
];

const Rating = () => {
  return (
    <div className="flex bg-[url(https://web-images.credcdn.in/_next/assets/images/home-page/hero-bg.png)] bg-cover bg-right-top  relative z-20">
      <div className="flex flex-col text-white font-black w-screen p-[200px]">
        {/* rating section */}
        <div className="flex justify-center">
          {/* app store */}
          <div className="pr-[75px]">
            {/* heading */}
            <div className="flex items-center pb-12">
              <p className="text-[160px] leading-[120px] pr-4 opacity-90">4.8</p>
              <p className="text-[60px] leading-[55px] pl-4 opacity-90 text-[#ece9ea]">app store</p>
            </div>
            {/* star  */}
            <div className="pb-12">
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
                alt=""
                height={28}
                width={179}
              />
            </div>
            {/* button */}
            <div className="bg-white text-black cursor-pointer py-[15px] flex justify-center items-center w-[310px] rounded-[48px]">
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png"
                alt="apple-logo"
                className="w-11"
              />
              <p className="pl-2 text-xl !leading-5 ">Download the app</p>
            </div>
          </div>
          {/* play store */}
          <div className="pl-[75px]">
            {/* heading */}
            <div className="flex items-center pb-12">
              <p className="text-[160px] leading-[120px] pr-4 opacity-90">4.8</p>
              <p className="text-[60px] leading-[55px] pl-4 opacity-90 text-[#ece9ea]">
                play store
              </p>
            </div>
            {/* star  */}
            <div className="pb-12">
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
                alt=""
                height={28}
                width={179}
              />
            </div>
            {/* button */}
            <div className="bg-white text-black cursor-pointer py-[15px] flex justify-center items-center w-[310px] rounded-[48px]">
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png"
                alt="apple-logo"
                className="w-11"
              />
              <p className="pl-2 text-xl !leading-5 ">Download the app</p>
            </div>
          </div>
        </div>
        {/* review carousal */}
        <div className="flex overflow-hidden mt-[60px] mx-auto h-[200px] w-[900px] ">
          <Carousel items={items} />
        </div>
      </div>
    </div>
  );
};

export default Rating;
