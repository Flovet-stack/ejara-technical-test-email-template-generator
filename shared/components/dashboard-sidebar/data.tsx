import { SidebarLink } from "@/shared/types";
import {
  ApplicationThemeButton,
  EditorActionsButton,
  TemplatesButton,
  TemplateSettingsButton,
} from "./_components";

export const sidebarTopLinks: SidebarLink[] = [
  {
    name: "templates",
    component: TemplatesButton,
  },
  {
    name: "editor-actions",
    component: EditorActionsButton,
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
