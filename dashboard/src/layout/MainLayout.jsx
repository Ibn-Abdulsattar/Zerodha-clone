import React from "react";
import { Outlet } from "react-router-dom";
import GlobalAlert from "../Components/GlobalAlert";
import WatchList from "../Components/WatchList";

function MainLayout() {
  return (
    <div className="dashboard-container">
        <GlobalAlert />
        <WatchList />
        <div className="content">
          <Outlet />
        </div>
    </div>
  );
}

export default MainLayout;
