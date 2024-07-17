"use client";

import "./dashboard-layout.scss";
import {
  DashboardHeader,
  DashboardSidebar,
  EditorMenu,
} from "@/shared/components";
import { useAppDispatch, useAppSelector } from "@/shared/lib/store/store.hooks";
import { RootState } from "@/shared/lib/store/store";
import { useEffect } from "react";
import { setRightEditorMenuState } from "@/shared/lib/store/features";
import { COMPONENT, EDITOR } from "@/shared/types";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dispatch = useAppDispatch();
  const defaultState = useAppSelector((store: RootState) => store.default);
  const editorState = useAppSelector((store: RootState) => store.editor);

  const { theme, leftEditorMenu, rightEditorMenu } = defaultState;
  const { selectedComponent } = editorState;

  const componentMenuMap = {
    [COMPONENT.HEADING]: EDITOR.HEADING_DETAILS_MENU,
    [COMPONENT.TEXT]: EDITOR.TEXT_DETAILS_MENU,
    [COMPONENT.BUTTON]: EDITOR.BUTTON_DETAILS_MENU,
    [COMPONENT.IMAGE]: EDITOR.IMAGE_DETAILS_MENU,
    [COMPONENT.DIVIDER]: EDITOR.DIVIDER_DETAILS_MENU,
    [COMPONENT.SPACER]: EDITOR.SPACER_DETAILS_MENU,
    [COMPONENT.CONTAINER]: EDITOR.CONTAINER_DETAILS_MENU,
  };

  useEffect(() => {
    if (selectedComponent) {
      dispatch(
        setRightEditorMenuState(
          componentMenuMap[selectedComponent.componentType]
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedComponent]);

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
