"use client";

import "./dashboard-layout.scss";
import {
  ComponentCard,
  DashboardHeader,
  DashboardSidebar,
  EditorMenu,
} from "@/shared/components";
import { useAppSelector } from "@/shared/lib/store/store.hooks";
import { RootState } from "@/shared/lib/store/store";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  UniqueIdentifier,
} from "@dnd-kit/core";
import { useState } from "react";
import { EditorComponent } from "@/shared/types";
import { editorComponents } from "@/shared/components/editor-menu/_components/editor-menu/data";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const defaultState = useAppSelector((store: RootState) => store.default);
  const [parent, setParent] = useState<UniqueIdentifier | null>(null);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [activeComponent, setActiveComponent] =
    useState<EditorComponent | null>(null);

  const { theme, leftEditorMenu, rightEditorMenu } = defaultState;

  const handleDragStart = (event: DragStartEvent) => {
    const id = event.active.id;
    const component = editorComponents.filter((component) => {
      return component.id === id;
    })[0];
    console.log("🚀 ~ handleDragStart ~ component:", component);

    if (component) {
      setActiveComponent(component);
      setActiveId(event.active.id);
    }
  };

  const handleDragEnd = ({ over }: DragEndEvent) => {
    console.log("🚀 ~ handleDragEnd ~ over:", over);
    setParent(over ? over.id : null);
    setActiveId(null);
    setActiveComponent(null);
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
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
      {activeComponent && (
        <DragOverlay>
          {activeId ? <ComponentCard data={activeComponent} /> : null}
        </DragOverlay>
      )}
    </DndContext>
  );
}
