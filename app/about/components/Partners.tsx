import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <div className="max-w-7xl mx-auto p-5 mt-5">
      <div className="">
        <h2 className="font-black text-3xl text-[#AEFFDE]">Partners</h2>
      </div>
      <div className="flex flex-col items-center sm:flex-row justify-between ">
        <div className="relative h-40 w-40 sm:h-60 sm:w-60">
            <Image src={'/assets/partner-img-1.svg'} fill alt=""/>
        </div>
        <div className="relative h-40 w-40 sm:h-60 sm:w-60">
            <Image src={'/assets/partner-img-2.svg'} fill alt=""/>
        </div> 
        <div className="relative h-40 w-40 sm:h-60 sm:w-60">
            <Image src={'/assets/partner-img-3.svg'} fill alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Partners;
