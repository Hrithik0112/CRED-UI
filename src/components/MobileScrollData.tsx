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
      {/* descripton */}
      <div className="text-lg leading-7 max-w-[600px] mt-[52px] font-extrabold">
        {data.description}
      </div>
    </div>
  );
};

export default MobileScrollData;
