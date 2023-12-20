import React from "react";

const FilterButton = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="h-[53px] border-[1px] relative bottom-[25px] left-[258px] rotate-[-55deg]"></div>
      <div
        className="w-60 mx-10 flex flex-col items-center justify-center gap-5 bg-gray-500/30 p-3 rounded-xl text-white border-2"
        style={{
          clipPath: "polygon(85% 0, 100% 35%, 100% 100%, 0% 100%, 0% 0%)",
        }}
      >
        <div className="flex justify-center items-center gap-10">
          <h1>Filters</h1>
          <div className="ring-1 ring-white p-2 rounded-xl">+2</div>
        </div>
      </div>
    </div>
  );
};

export default FilterButton;
