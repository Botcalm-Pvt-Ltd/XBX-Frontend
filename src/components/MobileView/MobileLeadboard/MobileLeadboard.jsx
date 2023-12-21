import React from "react";
import MobileLeadMainboard from "./MobileLeadMainboard";
import MobileLeadboardCard from "./MobileLeadboardCard";
import TabLeadMainboard from "./TabLeadMainboard";

const MobileLeadboard = () => {
  return (
    <div>
      <div className="sm:hidden">
        <MobileLeadMainboard />
      </div>
      <div className="max-sm:hidden">
        <TabLeadMainboard />
      </div>
      <div className="pt-20 grid md:grid-cols-2">
        <MobileLeadboardCard />
        <MobileLeadboardCard />
        <MobileLeadboardCard />
        <MobileLeadboardCard />
      </div>
    </div>
  );
};

export default MobileLeadboard;
