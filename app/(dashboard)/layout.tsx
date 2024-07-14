"use client";

import "./dashboard-layout.scss";
import {
  DashboardHeader,
  DashboardSidebar,
  EditorMenu,
} from "@/shared/components";
import { useAppSelector } from "@/shared/lib/store/store.hooks";
import { RootState } from "@/shared/lib/store/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const defaultState = useAppSelector((store: RootState) => store.default);

  const { theme, leftEditorMenu, rightEditorMenu } = defaultState;

  return (
    <div className={`dashboard-layout ${theme}`}>
      <div className={`sidebar ${theme}`}>
        <DashboardSidebar />
      </div>
      <div className={`main-content ${theme}`}>
        <DashboardHeader />
        <div className="editor-wrapper">
          <EditorMenu position={"left"} menu={leftEditorMenu} />
          <div className="editor">{children}</div>
          <EditorMenu position={"right"} menu={rightEditorMenu} />
        </div>
      </div>
    </div>
  );
}
