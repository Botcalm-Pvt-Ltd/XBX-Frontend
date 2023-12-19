import React from "react";
import XBXLogo from "../../assets/Mobile/XBXLogo.png";
import Hamburger from "../../assets/Mobile/Hamburger.png";

const MobileHeader = () => {
  return (
    <div className="xl:hidden">
      <div className="flex justify-between p-10">
        <div>
          <img src={XBXLogo} alt="logo" />
        </div>
        <div>
          <img src={Hamburger} alt="Hamburger" />
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
