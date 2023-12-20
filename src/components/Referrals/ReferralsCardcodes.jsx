import React from "react";
import greenCard from "../../assets/Referrals/greencard.png";
import { PiCopySimple } from "react-icons/pi";

const ReferralsCardcodes = () => {
  return (
    <div>
      <img src={greenCard} alt="greenCard" className="absolute -z-10 4xl:w-[800px]" />
      <div className="flex flex-col gap-10 text-white text-lg 4xl:text-4xl 4xl:w-[800px] pt-8 pl-10">
        <div className="flex flex-col">
          <h1 className="">REFERRALS CODES</h1>
            <div className="grid grid-cols-3 gap-x-8 text-base 4xl:text-2xl pt-5 4xl:pt-16">
              <div className="flex items-center justify-start gap-2 4xl:gap-5">
                <span className="bullet-point" />
                VA-OTSHK <PiCopySimple />
              </div>
              <div className="flex items-center justify-start gap-2 4xl:gap-5">
                <span className="bullet-point" />
                VA-OTSHK <PiCopySimple />
              </div>
              <div className="flex items-center justify-start gap-2 4xl:gap-5">
                <span className="bullet-point" />
                VA-OTSHK <PiCopySimple />
              </div>
              <div className="flex items-center justify-start gap-2 4xl:gap-5">
                <span className="bullet-point" />
                VA-OTSHK <PiCopySimple />
              </div>
              <div className="flex items-center justify-start gap-2 4xl:gap-5">
                <span className="bullet-point" />
                VA-OTSHK <PiCopySimple />
              </div>
              <div className="flex items-center justify-start gap-2 4xl:gap-5">
                <span className="bullet-point" />
                VA-OTSHK <PiCopySimple />
              </div>
              <div className="flex items-center justify-start gap-2 4xl:gap-5">
                <span className="bullet-point" />
                VA-OTSHK <PiCopySimple />
              </div>
              <div className="flex items-center justify-start gap-2 4xl:gap-5">
                <span className="bullet-point" />
                VA-OTSHK <PiCopySimple />
              </div>
              <div className="flex items-center justify-start gap-2 4xl:gap-5">
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
