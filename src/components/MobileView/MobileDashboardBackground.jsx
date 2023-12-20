import React from "react";
import XBX from "../../assets/Mobile/XBX.png";
import Ellipse_1 from "../../assets/Dashboard/Ellipse_1.png";
import Ellipse_2 from "../../assets/Dashboard/Ellipse_2.png";
import Ellipse_3 from "../../assets/Dashboard/Ellipse_3.png";
import Ellipse_4 from "../../assets/Dashboard/Ellipse_4.png";

const MobileDashboardBackground = () => {
  return (
    <div className="xl:hidden">
      <div className="fixed top-0 left-0 w-full h-full -z-20">
        <img src={XBX} alt="XBX" className="w-full" />
        <img src={Ellipse_1} alt="Ellipse_1" className="absolute top-0 opacity-60" />
        <img src={Ellipse_2} alt="Ellipse_2" className="absolute bottom-0 opacity-60" />
        <img
          src={Ellipse_3}
          alt="Ellipse_3"
          className="absolute bottom-0 right-0 opacity-60"
        />
        <img
          src={Ellipse_4}
          alt="Ellipse_4"
          className="absolute bottom-0 right-0 opacity-60"
        />
      </div>
    </div>
  );
};

export default MobileDashboardBackground;
