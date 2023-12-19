import React from "react";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { TbBrandTelegram } from "react-icons/tb";
import SocialButton from "../SocialButton";

const Mobilefooter = () => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 pb-5 xl:hidden">
      <hr className="h-px my-8 bg-gray-200/20 border-0 w-[80vw]"/>
      <div className="flex flex-col justify-end items-center">
        <div className="flex gap-5">
          <SocialButton icon={FaXTwitter} />
          <SocialButton icon={FaGithub} />
          <SocialButton icon={TbBrandTelegram} />
        </div>
        <h1 className="Grotesk text-white">© Copyright 2003</h1>
      </div>
    </div>
  );
};

export default Mobilefooter;
