import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import RadioSelect from "./RadioSelect";
import AnalyticsButton from "./AnalyticsButton";

const AnalyticsHead = () => {
  return (
    <div className="bg-white p-[1px] 4xl:p-[2px] rounded-xl my-4 mr-16 4xl:my-10 4xl:mr-52" style={{ clipPath: 'polygon(95% 0, 100% 33%, 100% 100%, 0 100%, 0 0)' }}>
      <div className="flex items-center justify-between bg-gray-800 p-2 py-4 pr-20 gap-5 rounded-xl  4xl:px-40 4xl:text-2xl" style={{ clipPath: 'polygon(95% 0, 100% 33%, 100% 100%, 0 100%, 0 0)' }}>
        <div className="bg-black text-white w-52 4xl:w-80 rounded-2xl p-3">
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
        <div className="bg-black text-white w-52 4xl:w-80 rounded-2xl p-3">
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
        <div className="h-10 w-0.5 bg-gray-700/50" />
        <div className="flex items-center justify-center">
          <RadioSelect />
        </div>
        <div>
          <AnalyticsButton label={"Apply"} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsHead;
