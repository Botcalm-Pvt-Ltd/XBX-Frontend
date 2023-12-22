import React from "react";
import topCardBody from "../../../assets/Mobile/MobileAnalytics_2/topCardBody.png";
import LeaderBoardButton from "../../Leadboard/LeaderBoardButton";

const MobileTableCard = ({date, type, usd, zuzu, weth, price}) => {
  return (
    <div className="flex justify-center items-center py-4">
              <div className="absolute -z-10">
        <img src={topCardBody} alt="topCardBody" className="w-80 sm:w-80 sm:h-48"/>
      </div>
      <div>
        <div className="flex gap-5 w-80 Grotesk mx-1 p-1 text-white">
          <div className="scale-50 relative bottom-9">
                  <LeaderBoardButton />
                </div>
          <div className="flex flex-col justify-between items-start gap-5">
            <div className="flex gap-12">
              <div>
                <h1 className="text-gray-500">DATE</h1>
                <h1>{date}</h1>
              </div>
              <div>
                <h1 className="text-gray-500">Type</h1>
                <h1 className="text-emerald-500">{type}</h1>
              </div>
            </div>
            <div className="flex gap-12">
              <div>
                <h1 className="text-gray-500">USD</h1>
                <h1 className="text-emerald-500">{usd}</h1>
              </div>
              <div>
                <h1 className="text-gray-500">ZuZU</h1>
                <h1 className="text-emerald-500">{zuzu}</h1>
              </div>
            </div>
            <div className="flex gap-12">
              <div>
                <h1 className="text-gray-500">WETH</h1>
                <h1 className="text-orange-700">{weth}</h1>
              </div>
              <div>
                <h1 className="text-gray-500">Price</h1>
                <h1 className="text-orange-700">{price}</h1>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTableCard;
