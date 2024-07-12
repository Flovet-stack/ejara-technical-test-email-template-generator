"use client";

import "./dashboard-layout.scss";
import { DashboardHeader, DashboardSidebar } from "@/shared/components";
import { useAppSelector } from "@/shared/lib/store/store.hooks";
import { RootState } from "@/shared/lib/store/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const defaultState = useAppSelector((store: RootState) => store.default);
  const { theme } = defaultState;

  return (
    <div className={`dashboard-layout ${theme}`}>
      <div className={`sidebar ${theme}`}>
        <DashboardSidebar />
      </div>
      <div className={`main-content ${theme}`}>
        <DashboardHeader />
        <div className="editor-wrapper">
          <div className="editor-menu"></div>
          <div className="editor">{children}</div>
          <div className="editor-menu"></div>
        </div>
      </div>
    </div>
  );
}
