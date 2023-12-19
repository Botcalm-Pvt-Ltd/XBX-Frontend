import React from "react";
import Leadboard from "../assets/Dashboard/Leadboard.png";
import Referrals from "../assets/Dashboard/Referrals.png";
import Analytics from "../assets/Dashboard/Analytics.png";
import MyTrade from "../assets/Dashboard/MyTrade.png";
import Subscription from "../assets/Dashboard/Subscription.png";
import lock from "../assets/Dashboard/lock.png";
import SocialButton from "./SocialButton";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { TbBrandTelegram } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className="w-80 special:w-2/12 flex flex-col gap-5 justify-center items-center pt-20 special:pt-40 max-xl:text-sm max-xl:gap-20 max-xl:pt-40 special:gap-20 special:text-2xl">
      <h1 className="text-gray-600 Grotesk">/ Main Menu</h1>
      <div className="text-gray-600 flex flex-col max-xl:gap-10 gap-3 special:gap-10">
        <div className="flex items-center hover:text-white cursor-pointer">
          <div className="whiteBar relative left-3 bg-white" />
          <div className="flex items-center Grotesk gap-3 headerBg p-3 px-10 max-xl:px-5">
            <img
              src={Leadboard}
              alt="Leadboard"
              className="max-lg:w-5 w-5 special:w-10"
            />
            <h1 className="text-white">Leadboard</h1>
          </div>
        </div>
        <div className="flex items-center hover:text-white cursor-pointer">
          <div className="whiteBar relative left-3 bg-transparent" />
          <div className="flex items-center Grotesk gap-3 p-3 px-10 max-xl:px-5">
            <img
              src={Referrals}
              alt="Referrals"
              className="max-lg:w-5 w-5 special:w-10"
            />
            <h1>Referrals</h1>
          </div>
        </div>
        <div className="flex items-center hover:text-white cursor-pointer">
          <div className="whiteBar relative left-3 bg-transparent" />
          <div className="flex items-center Grotesk gap-3 p-3 px-10 max-xl:px-5">
            <img
              src={Analytics}
              alt="Analytics"
              className="max-lg:w-5 w-5 special:w-10"
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
              className="max-lg:w-5 w-5 special:w-10"
            />
            <h1>My Trade</h1>
            <img src={lock} alt="lock" className="special:w-14" />
          </div>
        </div>
        <div className="flex items-center hover:text-white cursor-pointer">
          <div className="whiteBar relative left-3 bg-transparent" />
          <div className="flex items-center Grotesk gap-3 p-3 px-10 max-xl:px-5">
            <img
              src={Subscription}
              alt="Subscription"
              className="max-lg:w-5 w-5 special:w-10"
            />
            <h1>Subscription</h1>
            <img src={lock} alt="lock" className="special:w-14" />
          </div>
        </div>
      </div>
      <div className="flex gap-5 px-10">
        <SocialButton icon={FaXTwitter} />
        <SocialButton icon={FaGithub} />
        <SocialButton icon={TbBrandTelegram} />
      </div>
      <h1 className="Grotesk text-white">© Copyright 2003</h1>
    </div>
  );
};

export default Sidebar;
