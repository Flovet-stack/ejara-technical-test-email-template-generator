import { EDITOR } from "@/shared/types";
import React from "react";
import { TemplatesMenu } from "../editor-menu/_components";

interface ComponentDetailsProps {
  menu: EDITOR;
  position: "left" | "right";
}

export const ComponentDetails: React.FC<ComponentDetailsProps> = ({
  menu,
  position,
}) => {
  let SidebarContent;
  switch (menu) {
    case EDITOR.TEMPLATES_MENU:
      SidebarContent = TemplatesMenu;
      break;
    case EDITOR.EDITOR_MENU:
      SidebarContent = TemplatesMenu;
      break;
    case EDITOR.EDITOR_DETAILS_MENU:
      SidebarContent = TemplatesMenu;
      break;
    case EDITOR.TEXT_DETAILS_MENU:
      SidebarContent = TemplatesMenu;
      break;
    case EDITOR.HEADING_DETAILS_MENU:
      SidebarContent = TemplatesMenu;
      break;
    case EDITOR.BUTTON_DETAILS_MENU:
      SidebarContent = TemplatesMenu;
      break;
    case EDITOR.IMAGE_DETAILS_MENU:
      SidebarContent = TemplatesMenu;
      break;
    case EDITOR.DIVIDER_DETAILS_MENU:
      SidebarContent = TemplatesMenu;
      break;
    case EDITOR.SPACER_DETAILS_MENU:
      SidebarContent = TemplatesMenu;
      break;
    case EDITOR.CONTAINER_DETAILS_MENU:
      SidebarContent = TemplatesMenu;
      break;
    default:
      SidebarContent = TemplatesMenu;
      break;
  }

  return (
    <div className={`editor-menu ${position}`}>
      <SidebarContent />
    </div>
  );
};
