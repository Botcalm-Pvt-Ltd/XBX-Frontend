import React from "react";
import FilterButton from "./FilterButton";
import AnalyticsCard from "./AnalyticsCard";

const MobileAnalytics = () => {
  return (
    <div>
      <FilterButton />
      <div className="grid md:grid-cols-2">
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
