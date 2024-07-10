"use client";

import React from "react";
import "./dashboard-sidebar.scss";
import Image from "next/image";
import { sidebarBottomLinks, sidebarTopLinks } from "./data";
import { useAppSelector } from "@/shared/lib/store/store.hooks";
import { RootState } from "@/shared/lib/store/store";

export const DashboardSidebar = () => {
  const defaultState = useAppSelector((store: RootState) => store.default);
  const { theme } = defaultState;

  const logoBlack = "/images/logos/logo-black.png";
  const logoWhite = "/images/logos/logo-white.png";
  const logo = theme === "light" ? logoBlack : logoWhite;

  return (
    <div className="dashboard-sidebar">
      <div className="logo">
        <Image src={logo} width={40} height={40} alt="black logo" />
      </div>
      <nav>
        <div className="top">
          {sidebarTopLinks.map((link, index) => {
            const Component = link.component;
            return <Component key={index} />;
          })}
        </div>
        <div className="bottom">
          {sidebarBottomLinks.map((link, index) => {
            const Component = link.component;
            return <Component key={index} />;
          })}
        </div>
      </nav>
    </div>
  );
};
