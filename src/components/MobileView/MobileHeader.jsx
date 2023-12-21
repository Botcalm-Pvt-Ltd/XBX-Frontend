import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import XBXLogo from "../../assets/Mobile/XBXLogo.png";
import Hamburger from "../../assets/Mobile/Hamburger.png";
import Leadboard from "../../assets/Dashboard/Leadboard.png";
import Referrals from "../../assets/Dashboard/Referrals.png";
import Analytics from "../../assets/Dashboard/Analytics.png";
import MyTrade from "../../assets/Dashboard/MyTrade.png";
import Subscription from "../../assets/Dashboard/Subscription.png";
import lock from "../../assets/Dashboard/lock.png";
import pie_chart from "../../assets/Dashboard/pie_chart.png";
import connection_logo from "../../assets/Dashboard/connection_logo.png";
import close from "../../assets/Mobile/close.png";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/Dashboard/arrow.png";


const MobileHeader = () => {
  const navigate = useNavigate();
  const [isSectionVisible, setSectionVisibility] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleHeaderClick = () => {
    setSectionVisibility(!isSectionVisible);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    navigate(`/${item.toLowerCase()}`);
    setSectionVisibility(false);
  };
  const closeModal = () => {
    setSectionVisibility(false);
  };

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
    <div className="xl:hidden">
    <div className="flex justify-between p-10">
      <div>
        <img src={XBXLogo} alt="logo" />
      </div>
      <div className="cursor-pointer">
        <img src={Hamburger} alt="Hamburger" onClick={handleHeaderClick} />
      </div>
    </div>
    {isSectionVisible && (
      <div className="absolute top-0 glass-effect-box-header w-full h-screen z-50 p-10">
        <div className="flex justify-end cursor-pointer" onClick={closeModal}>
          <img src={close} alt="logo" />
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <img src={pie_chart} alt="logo" className="w-20 h-20" />
          <h1 className="text-gray-500 Grotesk">DIV</h1>
          <div className="flex items-center">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="flex  text-white Grotesk border-none outline-none cursor-pointer">
                  {selectedAddress}
                  <img src={arrow} alt="arrow"/>
                </Menu.Button>
              </div>

              <Transition
                as={React.Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute z-10 mt-2 w-36 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {ethereumAddresses.map((address, index) => (
                      <Menu.Item key={index}>
                        {({ active }) => (
                          <div
                            className={`${
                              active
                                ? "bg-gray-400 text-gray-900"
                                : "text-gray-700"
                            } block px-4 py-2 text-sm cursor-pointer`}
                            onClick={() => handleAddressChange(address)}
                          >
                            {address}
                          </div>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <div className="flex gap-3">
            <img src={connection_logo} alt="connection_logo" className="w-5" />
            <h1 className="uppercase text-white Medium">CONNECTED</h1>
          </div>
        </div>
          <div className="text-gray-600 flex flex-col justify-center items-start pt-20 gap-5 text-2xl pl-20">
            <div className="flex items-center hover:text-white cursor-pointer">
              <div
                className={`whiteBar relative left-3 ${
                  selectedItem === "Leadboard" ? "bg-white" : "bg-transparent"
                }`}
              />
              <div
                className={`flex items-center Grotesk gap-3  p-3 px-10 max-xl:px-5 ${
                  selectedItem === "Leadboard" ? "headerBg text-white" : ""
                }`}
                onClick={() => handleItemClick("Leadboard")}
              >
                <img
                  src={Leadboard}
                  alt="Leadboard"
                  className="max-lg:w-5 w-5"
                />
                <h1>Leadboard</h1>
              </div>
            </div>
            <div className="flex items-center hover:text-white cursor-pointer">
              <div
                className={`whiteBar relative left-3  ${
                  selectedItem === "Referral" ? "bg-white" : "bg-transparent"
                }`}
              />
              <div
                className={`flex items-center Grotesk gap-3  p-3 px-10 max-xl:px-5 ${
                  selectedItem === "Referral" ? "headerBg text-white" : ""
                }`}
                onClick={() => handleItemClick("Referral")}
              >
                <img
                  src={Referrals}
                  alt="Referrals"
                  className="max-lg:w-5 w-5"
                />
                <h1>Referrals</h1>
              </div>
            </div>
            <div className="flex items-center hover:text-white cursor-pointer">
              <div
                className={`whiteBar relative left-3 ${
                  selectedItem === "Analytics" ? "bg-white" : "bg-transparent"
                }`}
              />
              <div
                className={`flex items-center Grotesk gap-3  p-3 px-10 max-xl:px-5 ${
                  selectedItem === "Analytics" ? "headerBg text-white" : ""
                }`}
                onClick={() => handleItemClick("Analytics")}
              >
                <img
                  src={Analytics}
                  alt="Analytics"
                  className="max-lg:w-5 w-5"
                />
                <h1>Analytics</h1>
              </div>
            </div>

            <hr className="h-px my-8 bg-gray-200/20 border-0 w-[60vw]" />

            <div className="flex items-center hover:text-white cursor-pointer">
              <div className="whiteBar relative left-3 bg-transparent" />
              <div className="flex items-center Grotesk gap-3 p-3 px-10 max-xl:px-5">
                <img src={MyTrade} alt="MyTrade" className="max-lg:w-5 w-5" />
                <h1 className="whitespace-nowrap">My Trade</h1>
                <img src={lock} alt="lock" />
              </div>
            </div>
            <div className="flex items-center hover:text-white cursor-pointer">
              <div className="whiteBar relative left-3 bg-transparent" />
              <div className="flex items-center Grotesk gap-3 p-3 px-10 max-xl:px-5">
                <img
                  src={Subscription}
                  alt="Subscription"
                  className="max-lg:w-5 w-5 "
                />
                <h1>Subscription</h1>
                <img src={lock} alt="lock" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
