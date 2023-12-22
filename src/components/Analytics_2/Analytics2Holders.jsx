import React from "react";
import bottom_card1 from "../../assets/Analytics-2/bottom_card1.png";

const Analytics2Holders = () => {
  const colorId = [
    { color: "solid" },
    { color: "buy_again" },
    { color: "solid" },
    { color: "sold_part" },
    { color: "solid" },
    { color: "transfer" },
    { color: "solid" },
    { color: "hold" },
    { color: "solid" },
    { color: "sold_part" },
    { color: "solid" },
    { color: "solid" },
    { color: "buy_again" },
    { color: "sold_part" },
    { color: "transfer" },
    { color: "solid" },
    { color: "solid" },
    { color: "solid" },
    { color: "buy_again" },
    { color: "transfer" },
    { color: "sold_part" },
    { color: "transfer" },
    { color: "solid" },
    { color: "solid" },
    { color: "solid" },
    { color: "solid" },
    { color: "hold" },
    { color: "solid" },
    { color: "solid" },
    { color: "sold_part" },
    { color: "solid" },
    { color: "transfer" },
    { color: "solid" },
    { color: "buy_again" },
    { color: "sold_part" },
    { color: "transfer" },
    { color: "solid" },
    { color: "buy_again" },
    { color: "sold_part" },
    { color: "transfer" },
    { color: "solid" },
    { color: "solid" },
    { color: "sold_part" },
    { color: "solid" },
    { color: "transfer" },
    { color: "solid" },
    { color: "hold" },
    { color: "solid" },
    { color: "sold_part" },
    { color: "solid" },
    { color: "transfer" },
    { color: "solid" },
    { color: "buy_again" },
    { color: "sold_part" },
  ];

  return (
    <div className="flex flex-col">
      <div className="absolute -z-10">
        <img src={bottom_card1} alt="bottom_card1" />
      </div>
      <div className="p-5 pl-10">
      <div className="flex flex-col gap-3">
        <h1 className="text-white Grotesk text-xl">Holders</h1>
        <div className="text-white flex justify-between items-center gap-5 text-xs">
            <div className="flex justify-center items-center gap-2"><div className="w-3 h-3 bg-red-800"></div><div>SOLD</div></div>
            <div className="flex justify-center items-center gap-2"><div className="w-3 h-3 bg-yellow-500"></div><div>SOLD_PART</div></div>
            <div className="flex justify-center items-center gap-2"><div className="w-3 h-3 bg-green-800"></div><div>HOLD</div></div>
            <div className="flex justify-center items-center gap-2"><div className="w-3 h-3 bg-blue-800"></div><div>BUY_AGAIN</div></div>
            <div className="flex justify-center items-center gap-2"><div className="w-3 h-3 bg-purple-700"></div><div>TRANSFER</div></div>
        </div>
      </div>
      <div className="pt-5 grid analyticsColorGrid">
      {colorId.map((item, index) => (
        <div
          key={index}
          className={`w-6 h-6 ${
            item.color === "solid"
              ? "bg-red-800"
              : item.color === "sold_part"
              ? "bg-yellow-500"
              : item.color === "hold"
              ? "bg-green-800"
              : item.color === "buy_again"
              ? "bg-blue-800"
              : item.color === "transfer"
              ? "bg-purple-700"
              : ""
          }`}
        ></div>
      ))}
      </div>
    </div>
    </div>
  );
};

export default Analytics2Holders;
