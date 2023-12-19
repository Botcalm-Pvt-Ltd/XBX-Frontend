import React from "react";
import logo from "../assets/Dashboard/logo.png";
import pie_chart from "../assets/Dashboard/pie_chart.png";
import arrow from "../assets/Dashboard/arrow.png";
import connection_logo from "../assets/Dashboard/connection_logo.png";

const Header = () => {
  return (
    <div className="max-xl:hidden">
    <div className="flex justify-between pt-10 px-20 special:px-40">
      <div className="flex items-center gap-40">
        <div>
          <img src={logo} alt="logo" className=" special:w-80"/>
        </div>
        <div className="flex items-center gap-5">
          <img src={pie_chart} alt="logo" className="w-10 h-10 special:w-32 special:h-32" />
          <div className="text-xs special:text-2xl">
            <h1 className="text-gray-500 Grotesk">DIV</h1>
            <div className="flex items-center">
              <h1 className="text-white Grotesk">0x35e77C...266F</h1>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5 relative right-12 special:right-60 special:text-5xl">
        <img src={connection_logo} alt="connection_logo" className="w-10 special:w-24"/>
        <h1 className="uppercase text-white Medium">CONNECTED</h1>
      </div>
    </div>
    </div>
  );
};

export default Header;
