import React from "react";
import MobileLeadMainboard from "./MobileLeadMainboard";
import MobileLeadboardCard from "./MobileLeadboardCard";

const MobileLeadboard = () => {
  return (
    <div>
      <MobileLeadMainboard />
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
