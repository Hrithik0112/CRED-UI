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
    <div className="flex bg-[url(https://web-images.credcdn.in/_next/assets/images/home-page/hero-bg-mobile.png)]  md:bg-[url(https://web-images.credcdn.in/_next/assets/images/home-page/hero-bg.png)] bg-cover bg-right-top  relative z-20 py-[70px] px-10 sm:py-[100px] sm:px-[60px]">
      <div className="flex flex-col text-white font-black w-full xl:p-[200px] p-0 m-0 ">
        {/* rating section */}
        <div className="flex flex-col md:flex-row items-start w-full md:justify-evenly xl:justify-center">
          {/* app store */}
          <div className="xl:pr-[75px] pr-0 md:pr-[35px]">
            {/* heading */}
            <div className="flex items-center xl:pb-12 pb-6 md:pb-0">
              <p className="xl:text-[160px] text-[90px] sm:text-[120px] md:text-[100px] xl:leading-[120px] pr-4 opacity-90">
                4.8
              </p>
              <p className="xl:text-[60px] text-[31px] sm:text-[43px] leading-[55px] pl-4 opacity-90 text-[#ece9ea]">
                apple store
              </p>
            </div>
            {/* star  */}
            <div className="md:pb-12 pb-[70px] text-left md:text-center ">
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
                alt=""
                height={28}
                width={179}
              />
            </div>
            {/* button */}
            <div className="bg-white text-black cursor-pointer py-[15px] md:flex justify-center items-center w-[310px] rounded-[48px] hidden">
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png"
                alt="apple-logo"
                className="w-11"
              />
              <p className="pl-2 text-xl !leading-5 ">Download the app</p>
            </div>
          </div>
          {/* play store */}
          <div className="xl:pl-[75px] pl-0 md:pl-[35px]">
            {/* heading */}
            <div className="flex items-center xl:pb-12 pb-6 md:pb-0">
              <p className="xl:text-[160px] text-[90px] sm:text-[120px] md:text-[100px] xl:leading-[120px] pr-4 opacity-90">
                4.8
              </p>
              <p className="xl:text-[60px] text-[31px] sm:text-[43px] leading-[55px] pl-4 opacity-90 text-[#ece9ea]">
                play store
              </p>
            </div>
            {/* star  */}
            <div className="md:pb-12 pb-[70px] text-left md:text-center">
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
                alt=""
                height={28}
                width={179}
              />
            </div>
            {/* button */}
            <div className="bg-white text-black cursor-pointer py-[15px] md:flex justify-center items-center w-[310px] rounded-[48px] hidden">
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
        <div className="flex overflow-hidden md:mt-[60px] mx-auto h-[270px] sm:h-[200px]  w-full mt-5 xl:w-[900px] ">
          <Carousel items={items} />
        </div>
        {/* Footer */}
        <div className="text-3xl text-center flex justify-center items-center mt-10">
          Made With ❤️ By
          <a
            href="https://hrithik-portfolio-one.vercel.app/"
            className="font-black text-slate-300 hover:text-white ml-2"
          >
            @Hrithik
          </a>
        </div>
      </div>
    </div>
  );
};

export default Rating;
