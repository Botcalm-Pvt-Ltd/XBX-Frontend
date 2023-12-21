import React from "react";
import greenCard from "../../assets/Referrals/greencard.png";
import { PiCopySimple } from "react-icons/pi";

const ReferralsCardcodes = () => {
  const handleCopyClick = (content) => {
    navigator.clipboard.writeText(content)
      .then(() => {
        console.log("Text copied to clipboard:", content);
        // You can add additional feedback or state update here
      })
      .catch((err) => {
        console.error("Unable to copy text to clipboard:", err);
        // Handle the error, e.g., display an error message to the user
      });
  };

  return (
    <div>
      <img src={greenCard} alt="greenCard" className="absolute -z-10 4xl:w-[800px]" />
      <div className="flex flex-col gap-10 text-white text-lg 4xl:text-4xl 4xl:w-[800px] pt-8 pl-10">
        <div className="flex flex-col">
          <h1 className="">REFERRALS CODES</h1>
          <div className="grid grid-cols-3 gap-x-8 text-base 4xl:text-2xl pt-5 4xl:pt-16">
            {[...Array(9).keys()].map((index) => (
              <div key={index} className="flex items-center justify-start gap-2 4xl:gap-5">
                <span className="bullet-point" />
                {`VA-OTSHK ${index + 1}`} <PiCopySimple onClick={() => handleCopyClick(`VA-OTSHK ${index + 1}`)} className="cursor-pointer"/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralsCardcodes;
