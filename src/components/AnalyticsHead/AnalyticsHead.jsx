import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import RadioSelect from "./RadioSelect";
import AnalyticsButton from "./AnalyticsButton";

const AnalyticsHead = () => {
  return (
    <div className="flex items-center justify-between bg-gray-500/30 p-2 py-4 pr-20 gap-5 rounded-xl mr-20 my-4 4xl:my-10 4xl:mx-80 4xl:px-40 4xl:text-2xl" style={{ clipPath: 'polygon(95% 0, 100% 33%, 100% 100%, 0 100%, 0 0)' }}>

      <div className="bg-black text-white w-60 rounded-2xl p-3">
        <div>
          <h1 className="text-gray-500">SELECTIVE MIN</h1>
        </div>
        <div className="flex items-center justify-between">
          <h1>0</h1>
          <div>
            <IoIosArrowUp />
            <IoIosArrowDown />
          </div>
        </div>
      </div>
      <div className="bg-black text-white w-60 rounded-2xl p-3">
        <div>
          <h1 className="text-gray-500">FRESH MIN</h1>
        </div>
        <div className="flex items-center justify-between">
          <h1>0</h1>
          <div>
            <IoIosArrowUp />
            <IoIosArrowDown />
          </div>
        </div>
      </div>
      <div className="h-10 w-0.5 bg-gray-900" />
<div className="flex items-center justify-center"><RadioSelect/></div>
<div><AnalyticsButton label={"Apply"}/></div>
    </div>
  );
};

export default AnalyticsHead;
