import { EDITOR } from "@/shared/types";
import React from "react";
import {
  ButtonDetailsMenu,
  ContainerDetailsMenu,
  DividerDetailsMenu,
  EditorDetailsMenu,
  HeadingDetailsMenu,
  ImageDetailsMenu,
  SpacerDetailsMenu,
  TemplatesMenu,
  TextDetailsMenu,
  EditorMenu as EditorMenuDisplay,
} from "./_components";
interface EditorMenuProps {
  menu: EDITOR | null;
  position: "left" | "right";
}

export const EditorMenu: React.FC<EditorMenuProps> = ({ menu, position }) => {
  let SidebarContent;

  const EmptyMenu = () => <></>;

  switch (menu) {
    case EDITOR.TEMPLATES_MENU:
      SidebarContent = TemplatesMenu;
      break;
    case EDITOR.EDITOR_MENU:
      SidebarContent = EditorMenuDisplay;
      break;
    case EDITOR.EDITOR_DETAILS_MENU:
      SidebarContent = EditorDetailsMenu;
      break;
    case EDITOR.TEXT_DETAILS_MENU:
      SidebarContent = TextDetailsMenu;
      break;
    case EDITOR.HEADING_DETAILS_MENU:
      SidebarContent = HeadingDetailsMenu;
      break;
    case EDITOR.BUTTON_DETAILS_MENU:
      SidebarContent = ButtonDetailsMenu;
      break;
    case EDITOR.IMAGE_DETAILS_MENU:
      SidebarContent = ImageDetailsMenu;
      break;
    case EDITOR.DIVIDER_DETAILS_MENU:
      SidebarContent = DividerDetailsMenu;
      break;
    case EDITOR.SPACER_DETAILS_MENU:
      SidebarContent = SpacerDetailsMenu;
      break;
    case EDITOR.CONTAINER_DETAILS_MENU:
      SidebarContent = ContainerDetailsMenu;
      break;
    default:
      SidebarContent = EmptyMenu;
      break;
  }

  return (
    <div className={`editor-menu ${position}`}>
      <SidebarContent />
    </div>
  );
};
