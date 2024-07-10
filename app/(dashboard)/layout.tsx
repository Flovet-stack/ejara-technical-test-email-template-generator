import type { Metadata } from "next";
import "./dashboard-layout.scss";
import { DashboardSidebar } from "@/shared/components";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="dashboard-layout">
      <div className="sidebar">
        <DashboardSidebar />
      </div>
      <div className="main-content">{children}</div>
    </div>
  );
}