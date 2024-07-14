import { SidebarLink } from "@/shared/types";
import {
  ApplicationThemeButton,
  EditorActionsButton,
  TemplatesButton,
  TemplateSettingsButton,
} from "./_components";

export const sidebarTopLinks: SidebarLink[] = [
  {
    name: "editor-actions",
    component: EditorActionsButton,
  },
  {
    name: "templates",
    component: TemplatesButton,
  },
];

export const sidebarBottomLinks: SidebarLink[] = [
  {
    name: "template-settings",
    component: TemplateSettingsButton,
  },
  {
    name: "theme",
    component: ApplicationThemeButton,
  },
];
