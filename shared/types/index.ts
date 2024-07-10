import { ReactNode } from "react";

export type Template = any;

export type SidebarLink = {
  name: string;
  component: ReactNode;
};

export type AppTheme = "light" | "dark";
