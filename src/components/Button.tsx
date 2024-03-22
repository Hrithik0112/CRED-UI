import React from "react";

function Button({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex text-black items-center px-[65px] py-5 font-black text-2xl leading-7 cursor-pointer bg-white border rounded-[40px]">
      {children}
    </div>
  );
}

export default Button;
