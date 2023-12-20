import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex lg:flex-row flex-row  items-stretch justify-between">
      <Sidebar />
      <div className="w-full lg:w-full overflow-hidden  ">
        <div className="xl:px-3 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
