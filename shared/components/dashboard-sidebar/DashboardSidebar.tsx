import React from "react";
import "./dashboard-sidebar.scss";
import Image from "next/image";

export const DashboardSidebar = () => {
  return (
    <div className="dashboard-sidebar">
      <div className="logo">
        <Image
          src={"/images/logos/logo-black.png"}
          width={50}
          height={50}
          alt="black logo"
        />
      </div>
    </div>
  );
};
