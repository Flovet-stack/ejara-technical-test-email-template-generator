export type Template = any;

export type SidebarLink = {
  name: string;
  component: () => React.JSX.Element;
};

export type AppTheme = "light" | "dark";

export enum EDITOR {
  TEMPLATES_MENU = "templates-menu",
  EDITOR_MENU = "editor-menu",
  EDITOR_DETAILS_MENU = "editor-details",
  TEXT_DETAILS_MENU = "text-details",
  HEADING_DETAILS_MENU = "heading-details",
  BUTTON_DETAILS_MENU = "button-details",
  IMAGE_DETAILS_MENU = "image-details",
  DIVIDER_DETAILS_MENU = "divider-details",
  SPACER_DETAILS_MENU = "spacer-details",
  CONTAINER_DETAILS_MENU = "container-details",
}
