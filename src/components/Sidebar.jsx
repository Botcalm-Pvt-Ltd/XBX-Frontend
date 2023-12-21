import React, { useEffect, useState } from "react";
import Leadboard from "../assets/Dashboard/Leadboard.png";
import Referrals from "../assets/Dashboard/Referrals.png";
import Analytics from "../assets/Dashboard/Analytics.png";
import MyTrade from "../assets/Dashboard/MyTrade.png";
import Subscription from "../assets/Dashboard/Subscription.png";
import lock from "../assets/Dashboard/lock.png";
import SocialButton from "./SocialButton";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { TbBrandTelegram } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {

  }, []);
  
  const handleItemClick = (item) => {
    setSelectedItem(item);
    navigate(`/${item.toLowerCase()}`);
  };
  return (
    <div className="max-xl:hidden">

    <div className="w-80 flex flex-col gap-5 justify-center items-center pt-20 4xl:pt-40 max-xl:text-sm max-xl:gap-20 max-xl:pt-40 4xl:gap-20 4xl:text-2xl ">
      <h1 className="text-gray-600 Grotesk">/ Main Menu</h1>
      <div className="text-gray-600 flex flex-col max-xl:gap-10 gap-3 4xl:gap-10">
        <div className="flex items-center hover:text-white cursor-pointer">
          <div className={`whiteBar relative left-3 ${selectedItem === "Leadboard" ? "bg-white" : "bg-transparent"}`} />
          <div className={`flex items-center Grotesk gap-3  p-3 px-10 max-xl:px-5 ${selectedItem === "Leadboard" ? "headerBg text-white" : ""}`} onClick={() => handleItemClick("Leadboard")}>
            <img
              src={Leadboard}
              alt="Leadboard"
              className="max-lg:w-5 w-5 4xl:w-10"
            />
            <h1>Leadboard</h1>
          </div>
        </div>
        <div className="flex items-center hover:text-white cursor-pointer">
          <div className={`whiteBar relative left-3  ${selectedItem === "Referral" ? "bg-white" : "bg-transparent"}`}/>
          <div className={`flex items-center Grotesk gap-3  p-3 px-10 max-xl:px-5 ${selectedItem === "Referral" ? "headerBg text-white" : ""}`} onClick={() => handleItemClick("Referral")}>
            <img
              src={Referrals}
              alt="Referrals"
              className="max-lg:w-5 w-5 4xl:w-10"
            />
            <h1>Referrals</h1>
          </div>
        </div>
        <div className="flex items-center hover:text-white cursor-pointer">
          <div className={`whiteBar relative left-3 ${selectedItem === "Analytics" ? "bg-white" : "bg-transparent"}`} />
          <div className={`flex items-center Grotesk gap-3  p-3 px-10 max-xl:px-5 ${selectedItem === "Analytics" ? "headerBg text-white" : ""}`} onClick={() => handleItemClick("Analytics")}>
            <img
              src={Analytics}
              alt="Analytics"
              className="max-lg:w-5 w-5 4xl:w-10"
            />
            <h1>Analytics</h1>
          </div>
        </div>

        <hr className="h-px my-4 mx-8 bg-gray-200 border-0 dark:bg-gray-700" />

        <div className="flex items-center hover:text-white cursor-pointer">
          <div className="whiteBar relative left-3 bg-transparent" />
          <div className="flex items-center Grotesk gap-3 p-3 px-10 max-xl:px-5">
            <img
              src={MyTrade}
              alt="MyTrade"
              className="max-lg:w-5 w-5 4xl:w-10"
            />
            <h1 className="whitespace-nowrap">My Trade</h1>
            <img src={lock} alt="lock" className="4xl:w-14" />
          </div>
        </div>
        <div className="flex items-center hover:text-white cursor-pointer">
          <div className="whiteBar relative left-3 bg-transparent" />
          <div className="flex items-center Grotesk gap-3 p-3 px-10 max-xl:px-5">
            <img
              src={Subscription}
              alt="Subscription"
              className="max-lg:w-5 w-5 4xl:w-10"
            />
            <h1>Subscription</h1>
            <img src={lock} alt="lock" className="4xl:w-14" />
          </div>
        </div>
      </div>
      <div className="flex gap-5 px-10 pt-12">
        <SocialButton icon={FaXTwitter} />
        <SocialButton icon={FaGithub} />
        <SocialButton icon={TbBrandTelegram} />
      </div>
      <h1 className="Grotesk text-white">© Copyright 2003</h1>
    </div>
    </div>
  );
};

export default Sidebar;
