import React from 'react'
import greenCard from "../../../assets/Mobile/MobileReferrals/MobileGreenCard.png";
import { PiCopySimple } from "react-icons/pi";

const MobileReferralsCardcodes = () => {
  return (
    <div className="flex justify-center">
      <div className="absolute -z-10">
      <img src={greenCard} alt="greenCard" className="w-80" />
    </div>
      <div className="flex flex-col gap-30 text-white text-lg pt-8">
        <div className="flex flex-col relative right-2 bottom-2">
          <h1 className="text-base">REFERRALS CODES</h1>
            <div className="grid grid-cols-2 gap-x-14 gap-y-4 text-xs py-5">
              <div className="flex items-center justify-start gap-3">
                <span className="Mobile-bullet-point" />
                VA-OTSHK <PiCopySimple />
              </div>
              <div className="flex items-center justify-start gap-3">
                <span className="Mobile-bullet-point" />
                VA-OTSHK <PiCopySimple />
              </div>
              <div className="flex items-center justify-start gap-3">
                <span className="Mobile-bullet-point" />
                VA-OTSHK <PiCopySimple />
              </div>
              <div className="flex items-center justify-start gap-3">
                <span className="Mobile-bullet-point" />
                VA-OTSHK <PiCopySimple />
              </div>
              <div className="flex items-center justify-start gap-3">
                <span className="Mobile-bullet-point" />
                VA-OTSHK <PiCopySimple />
              </div>
              <div className="flex items-center justify-start gap-3">
                <span className="Mobile-bullet-point" />
                VA-OTSHK <PiCopySimple />
              </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default MobileReferralsCardcodes
