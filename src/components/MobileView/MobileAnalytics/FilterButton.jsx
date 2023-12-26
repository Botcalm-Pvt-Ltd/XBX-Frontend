import React from "react";

const FilterButton = () => {
  return (
      <div
        className="bg-white p-[1px] rounded-xl"
        style={{
          clipPath: "polygon(85% 0, 100% 35%, 100% 100%, 0% 100%, 0% 0%)",
        }}
      >
        <div
          className="w-full flex flex-col items-center justify-center gap-5 bg-gray-800 p-3 rounded-xl text-white"
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
