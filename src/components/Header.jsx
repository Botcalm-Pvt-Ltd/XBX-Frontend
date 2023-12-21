import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
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

  const handleAddressChange = (address) => {
    setSelectedAddress(address);
  };

  return (
    <div className="max-xl:hidden">
      <div className="flex justify-between pt-5 px-20 4xl:px-40">
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
              <h1 className="text-gray-500 Grotesk 4xl:text-4xl">DIV</h1>
              <div className="flex items-center">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="flex justify-center items-center text-white Grotesk bg-transparent border-none outline-none cursor-pointer 4xl:text-4xl">
                      {selectedAddress}
                      <img src={arrow} alt="arrow" className="4xl:w-20"/>
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
                    <Menu.Items className="absolute z-10 mt-2 w-56 4xl:w-80 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {ethereumAddresses.map((address, index) => (
                          <Menu.Item key={index}>
                            {({ active }) => (
                              <div
                                className={`${
                                  active
                                    ? "bg-gray-400 text-gray-900"
                                    : "text-gray-700"
                                } block px-4 py-2 text-sm  4xl:text-4xl cursor-pointer`}
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
