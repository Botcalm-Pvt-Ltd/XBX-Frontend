import React, { useState } from "react";
import logo from "../assets/Dashboard/logo.png";
import pie_chart from "../assets/Dashboard/pie_chart.png";
import arrow from "../assets/Dashboard/arrow.png";
import connection_logo from "../assets/Dashboard/connection_logo.png";

const Header = () => {
  const ethereumAddresses = [
    "0x35e77C...266F",
    "0x123456...7890",
    "0xA1B2C3...D4E5",
  ];

  const [selectedAddress, setSelectedAddress] = useState(ethereumAddresses[0]);

  const handleAddressChange = (event) => {
    setSelectedAddress(event.target.value);
  };

  return (
    <div className="max-xl:hidden">
      <div className="flex justify-between pt-10 px-20 4xl:px-40">
        <div className="flex items-center gap-40">
          <div>
            <img src={logo} alt="logo" className=" 4xl:w-80" />
          </div>
          <div className="flex items-center gap-5">
            <img
              src={pie_chart}
              alt="logo"
              className="w-10 h-10 4xl:w-32 4xl:h-32"
            />
            <div className="text-xs 4xl:text-2xl">
              <h1 className="text-gray-500 Grotesk">DIV</h1>
              <div className="flex items-center">
                <select
                  className="text-white Grotesk bg-black/80 border-none outline-none cursor-pointer"
                  value={selectedAddress}
                  onChange={handleAddressChange}
                >
                  {ethereumAddresses.map((address, index) => (
                    <option key={index} value={address}>
                      {address}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 relative right-12 4xl:right-60 4xl:text-5xl">
          <img
            src={connection_logo}
            alt="connection_logo"
            className="w-10 4xl:w-24"
          />
          <h1 className="uppercase text-white Medium">CONNECTED</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
