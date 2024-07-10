"use client";

import "./dashboard-layout.scss";
import { DashboardSidebar } from "@/shared/components";
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
      <div className="main-content">{children}</div>
    </div>
  );
}
