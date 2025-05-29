import Image from "next/image";
import React from "react";
import Pill from "./Pill";

const Card: React.FC = () => {
  return (
    <div className="h-[422px] w-[378.56px] cursor-pointer hover:shadow-md hover:rounded-lg">
      <Image src="/assets/house.png" alt="house image" width={378.56} height={299.37} />
      <div className="p-2 flex gap-2 mt-2">
        <Pill title="Top Villa" />
        <Pill title="Self CheckIn" />
        <Pill title="Free Reschedule" />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-[22px]">Villa Arrecife Beach House</h3>
          <p className="text-[#929292] text-[17px]">Sideman, Bali, Indonesia</p>
        </div>
        <div className="flex items-center">
          <Image src="/assets/star-outline.svg" alt="star image" width={20} height={20} />
          <p className="ml-2 text-[17px] font-medium">4.76</p>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div className="grid grid-cols-3 border w-[156px] rounded-full px-2 py-1">
          <div className="flex items-center">
            <p className="ml-1 text-[12.95px] font-medium">4</p>
          </div>
          <div className="flex items-center">
            <p className="ml-1 text-[12.95px] font-medium">2</p>
          </div>
          <div className="flex items-center">
            <p className="ml-1 text-[12.95px] font-medium">2-4</p>
          </div>
        </div>
        <p className="text-[22px] font-semibold">Ksh. 4,500<span className="text-[14px] text-[#787878]">/n</span></p>
      </div>
    </div>
  );
};

export default Card;
