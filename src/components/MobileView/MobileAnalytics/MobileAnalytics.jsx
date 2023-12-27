import React from "react";
import FilterButton from "./FilterButton";
import AnalyticsCard from "./AnalyticsCard";

const MobileAnalytics = () => {
  return (
    <div className="mx-10">
      <FilterButton />
      <div className="grid md:grid-cols-2 gap-x-5 lg:gap-x-56 pt-5">
        <AnalyticsCard />
        <AnalyticsCard />
        <AnalyticsCard />
        <AnalyticsCard />
        <AnalyticsCard />
        <AnalyticsCard />
      </div>
    </div>
  );
};

export default MobileAnalytics;
