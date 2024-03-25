import React from "react";

function Button({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex text-black items-center text-lg leading-5 py-4 px-7 md:px-[65px] md:py-5 font-black md:text-2xl md:leading-7 cursor-pointer bg-white border rounded-[40px]">
      {children}
    </div>
  );
}

export default Button;
