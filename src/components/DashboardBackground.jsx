import React from "react";
import XBX from "../assets/Dashboard/XBX.png";
import Ellipse_1 from "../assets/Dashboard/Ellipse_1.png";
import Union from "../assets/Dashboard/Union.png";
import Ellipse_2 from "../assets/Dashboard/Ellipse_2.png";
import Ellipse_3 from "../assets/Dashboard/Ellipse_3.png";
import Ellipse_4 from "../assets/Dashboard/Ellipse_4.png";

const DashboardBackground = () => {
  return (
    <div className="max-xl:hidden bg-noise-image">
      <div className="absolute top-0 left-0 w-full h-full -z-20">
        <img src={XBX} alt="XBX" className="w-3/12" />
        <img src={Ellipse_1} alt="XBX" className="absolute top-0" />
        <img src={Union} alt="XBX" className="absolute top-0 right-0 w-1/4" />
        <img src={Ellipse_2} alt="XBX" className="absolute bottom-0" />
        <img
          src={Ellipse_3}
          alt="XBX"
          className="absolute bottom-0 right-0 opacity-60"
        />
        <img
          src={Ellipse_4}
          alt="XBX"
          className="absolute bottom-0 right-0 opacity-60"
        />
      </div>
    </div>
  );
};

export default DashboardBackground;
