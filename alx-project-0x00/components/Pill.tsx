import React from "react";
import { PillProps } from "@/interfaces";
const Pill: React.FC<PillProps> = ({ title }) => {
    return (
      <div className="flex justify-center items-center bg-[#F9F9F9] text-[#000] px-3 w-auto h-[27px] rounded-full">
        {title}
      </div>
    );
  };
  
  export default Pill;
  