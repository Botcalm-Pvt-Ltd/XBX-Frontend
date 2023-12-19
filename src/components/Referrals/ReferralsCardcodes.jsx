import React from "react";
import greenCard from "../../assets/Referrals/greenCard.png";
import { PiCopySimple } from "react-icons/pi";

const ReferralsCardcodes = () => {
  return (
    <div>
      <img src={greenCard} alt="greenCard" className="absolute -z-10 special:w-[800px]" />
      <div className="flex flex-col gap-10 text-white text-lg special:text-4xl special:w-[800px] pt-8 pl-10">
        <div className="flex flex-col">
          <h1 className="">REFERRALS CODES</h1>
            <div className="grid grid-cols-3 text-base special:text-2xl pt-5 special:pt-16">
              <div className="flex items-center justify-start gap-3 special:gap-5">
                <span className="bullet-point" />
                VA-OTSHK <PiCopySimple />
              </div>
              <div className="flex items-center justify-start gap-3 special:gap-5">
                <span className="bullet-point" />
                VA-OTSHK <PiCopySimple />
              </div>
              <div className="flex items-center justify-start gap-3 special:gap-5">
                <span className="bullet-point" />
                VA-OTSHK <PiCopySimple />
              </div>
              <div className="flex items-center justify-start gap-3 special:gap-5">
                <span className="bullet-point" />
                VA-OTSHK <PiCopySimple />
              </div>
              <div className="flex items-center justify-start gap-3 special:gap-5">
                <span className="bullet-point" />
                VA-OTSHK <PiCopySimple />
              </div>
              <div className="flex items-center justify-start gap-3 special:gap-5">
                <span className="bullet-point" />
                VA-OTSHK <PiCopySimple />
              </div>
              <div className="flex items-center justify-start gap-3 special:gap-5">
                <span className="bullet-point" />
                VA-OTSHK <PiCopySimple />
              </div>
              <div className="flex items-center justify-start gap-3 special:gap-5">
                <span className="bullet-point" />
                VA-OTSHK <PiCopySimple />
              </div>
              <div className="flex items-center justify-start gap-3 special:gap-5">
                <span className="bullet-point" />
                VA-OTSHK <PiCopySimple />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralsCardcodes;
