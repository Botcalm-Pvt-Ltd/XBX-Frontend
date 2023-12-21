import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import RadioSelect from "./RadioSelect";
import AnalyticsButton from "./AnalyticsButton";

const AnalyticsHead = () => {
  const [selectiveMin, setSelectiveMin] = useState(0);
  const [freshMin, setFreshMin] = useState(0);

  const handleArrowClick = (type, value) => {
    if (type === "selectiveMin") {
      setSelectiveMin(selectiveMin + value);
    } else if (type === "freshMin") {
      setFreshMin(freshMin + value);
    }
  };

  return (
    <div className="p-[1px] 4xl:p-[2px] rounded-xl my-4 mr-16 4xl:my-10 4xl:ml-40 bg-white" style={{ clipPath: 'polygon(95% 0, 100% 33%, 100% 100%, 0 100%, 0 0)' }}>
      <div className="flex items-center justify-between p-2 py-4 pr-20 gap-5 rounded-xl  4xl:px-40 4xl:text-2xl glass-effect-box" style={{ clipPath: 'polygon(95% 0, 100% 33%, 100% 100%, 0 100%, 0 0)' }}>
        <div className="bg-black text-white w-52 4xl:w-80 rounded-2xl p-3 ">
          <div>
            <h1 className="text-gray-500">SELECTIVE MIN</h1>
          </div>
          <div className="flex items-center justify-between">
            <h1>{selectiveMin}</h1>
            <div>
              <IoIosArrowUp onClick={() => handleArrowClick("selectiveMin", 1)} className="cursor-pointer"/>
              <IoIosArrowDown onClick={() => handleArrowClick("selectiveMin", -1)} className="cursor-pointer"/>
            </div>
          </div>
        </div>
        <div className="bg-black text-white w-52 4xl:w-80 rounded-2xl p-3">
          <div>
            <h1 className="text-gray-500">FRESH MIN</h1>
          </div>
          <div className="flex items-center justify-between">
            <h1>{freshMin}</h1>
            <div>
              <IoIosArrowUp onClick={() => handleArrowClick("freshMin", 1)} className="cursor-pointer"/>
              <IoIosArrowDown onClick={() => handleArrowClick("freshMin", -1)} className="cursor-pointer"/>
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
