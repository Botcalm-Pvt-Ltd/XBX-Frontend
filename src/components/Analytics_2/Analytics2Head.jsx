import React, { useRef } from "react";
import Arrow from "../../assets/Analytics-2/sidearrow.png";
import headlogo from "../../assets/Analytics-2/headlogo.png";
import { LuCopy } from "react-icons/lu";
import tablelist1 from "../../assets/Analytics/tablelist1.png";
import tablelist2 from "../../assets/Analytics/tablelist2.png";
import tablelist3 from "../../assets/Analytics/tablelist3.png";
import tablelist4 from "../../assets/Analytics/tablelist4.png";
import tablelist5 from "../../assets/Analytics/tablelist5.png";
import { useNavigate } from "react-router";

const Analytics2Head = () => {
  const navigate = useNavigate();
  const tokenAddressRef = useRef(null);
  const pairAddressRef = useRef(null);

  const handleCopy = (value) => {
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = value;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
  };

  const handleBack = () => {
    navigate("/analytics");
  };
  return (
    <div className="flex justify-between items-center">
      <div>
        <div className="flex justify-start items-center text-white gap-2">
          <div onClick={handleBack} className="cursor-pointer">
            <img src={Arrow} alt="Arrow" className="4xl:w-20" />
          </div>
          <div>
            <img src={headlogo} alt="headlogo" className="4xl:w-28" />
          </div>
          <div className="pl-5 text-sm">
            <div>
              <h1 className="4xl:text-4xl">ZUZU</h1>
            </div>
            <div className="flex items-center gap-2 4xl:text-3xl">
              <div className="flex items-center gap-2">
                <h1 className="text-gray-500">Token Address :</h1>
                <LuCopy
                  onClick={() => handleCopy(tokenAddressRef.current.innerText)}
                  className="cursor-pointer"
                />
                <h1 ref={tokenAddressRef}>0XE6B2...E138</h1>
              </div>
              <div className="h-5 w-[1px] bg-gray-500/80" />
              <div className="flex items-center gap-2">
                <h1 className="text-gray-500">PAIR ADDRESS :</h1>
                <LuCopy
                  onClick={() => handleCopy(pairAddressRef.current.innerText)}
                  className="cursor-pointer"
                />
                <h1 ref={pairAddressRef}>0XA791...99F9</h1>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={tablelist1} alt="tablelist1" className="w-4 4xl:w-10 4xl:h-10"  />
        <div className="flex py-2 gap-1">
          <img
            src={tablelist2}
            alt="tablelist2"
            className="w-4 h-4 4xl:w-10 4xl:h-10"
          />
          <img
            src={tablelist3}
            alt="tablelist3"
            className="w-4 h-4 4xl:w-10 4xl:h-10"
          />
          <img
            src={tablelist4}
            alt="tablelist4"
            className="w-4 h-4 4xl:w-10 4xl:h-10"
          />
          <img
            src={tablelist5}
            alt="tablelist5"
            className="w-4 h-4 4xl:w-10 4xl:h-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics2Head;
