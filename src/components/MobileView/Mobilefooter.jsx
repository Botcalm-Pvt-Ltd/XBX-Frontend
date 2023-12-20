import React from "react";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { TbBrandTelegram } from "react-icons/tb";
import SocialButton from "../SocialButton";

const Mobilefooter = () => {
  return (
    <div className="flex flex-col justify-end items-center mt-auto xl:hidden">
      <hr className="h-px my-8 bg-gray-200/20 border-0 w-[80vw]" />
      <div className="flex gap-5">
        <SocialButton icon={FaXTwitter} />
        <SocialButton icon={FaGithub} />
        <SocialButton icon={TbBrandTelegram} />
      </div>
      <h1 className="Grotesk text-white">© Copyright 2003</h1>
    </div>
  );
};

export default Mobilefooter;
