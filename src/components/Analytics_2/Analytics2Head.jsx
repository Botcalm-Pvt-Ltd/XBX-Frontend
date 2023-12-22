import React from "react";
import Arrow from "../../assets/Analytics-2/sidearrow.png";
import headlogo from "../../assets/Analytics-2/headlogo.png";
import { LuCopy } from "react-icons/lu";
import tablelist1 from "../../assets/Analytics/tablelist1.png";
import tablelist2 from "../../assets/Analytics/tablelist2.png";
import tablelist3 from "../../assets/Analytics/tablelist3.png";
import tablelist4 from "../../assets/Analytics/tablelist4.png";
import tablelist5 from "../../assets/Analytics/tablelist5.png";

const Analytics2Head = () => {
  return (
    <div className="flex justify-between items-center ">
      <div>
        <div className="flex justify-start items-center text-white gap-2">
          <div>
            <img src={Arrow} alt="Arrow" />
          </div>
          <div>
            <img src={headlogo} alt="headlogo" />
          </div>
          <div className="pl-5 text-sm">
            <div>
              <h1>ZUZU</h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <h1 className="text-gray-500">Token Address :</h1>
                <LuCopy />
                <h1>0XE6B2...E138</h1>
              </div>
              <div className="h-5 w-[1px] bg-gray-500/80" />
              <div className="flex items-center gap-2">
                <h1 className="text-gray-500">PAIR ADDRESS :</h1>
                <LuCopy />
                <h1>0XA791...99F9</h1>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={tablelist1} alt="tablelist1" className="4xl:w-10 4xl:h-10" />
        <div className="flex py-2 gap-1">
          <img
            src={tablelist2}
            alt="tablelist2"
            className="4xl:w-10 4xl:h-10"
          />
          <img
            src={tablelist3}
            alt="tablelist3"
            className="4xl:w-10 4xl:h-10"
          />
          <img
            src={tablelist4}
            alt="tablelist4"
            className="4xl:w-10 4xl:h-10"
          />
          <img
            src={tablelist5}
            alt="tablelist5"
            className="4xl:w-10 4xl:h-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics2Head;
