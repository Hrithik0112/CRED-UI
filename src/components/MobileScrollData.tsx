import { Data } from "../lib/types";

const MobileScrollData = ({
  data,
  i,
  setCurrentImage,
}: {
  data: Data;
  i: number;
  setCurrentImage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="mb-[100px] mt-[250px] text-white">
      {/* Heading */}
      <div className="text-[105px] leading-[105px] tracking-tight opacity-90 font-black">
        {data.heading}
      </div>
      {/* moockup only for mible devices */}
      <div className="w-1/2 flex justify-center ml-[30px] relative sm:hidden ">
        {/* for destop mockup wrapeer */}
        <div className="sticky top-44 w-[350px] h-[600px] shadow-inner border-2 border-gray-600 rounded-[46px] py-4 px-[14px]">
          <div className="h-full flex justify-center bg-[#0d0d0d] overflow-hidden rounded-[36px]">
            <img src={data.detail_img} alt="mockup-screens" className="h-full object-contain" />
          </div>
        </div>
      </div>
      {/* descripton */}
      <div className="text-lg leading-7 max-w-[600px] mt-[52px] font-extrabold">
        {data.description}
      </div>
    </div>
  );
};

export default MobileScrollData;
