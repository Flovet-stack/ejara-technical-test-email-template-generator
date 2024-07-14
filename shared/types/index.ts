export interface Template {
  id: string;
  name: string;
}

export interface EditorVariable {
  id: string;
  name: string;
  value: string;
}

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

export enum COMPONENT {
  TEXT = "text",
  HEADING = "heading",
  BUTTON = "button",
  IMAGE = "image",
  DIVIDER = "divider",
  SPACER = "spacer",
  CONTAINER = "container",
}

export enum COMPONENT_ATTRIBUTE {
  TEXT_CONTENT = "text-content",
  HEADING = "heading",
  TEXT_COLOR = "text-color",
  BACKGROUND_COLOR = "background-color",
  FONT_FAMILY = "font-family",
  FONT_WEIGHT = "font-weight",
  FONT_SIZE = "font-size",
  ALIGNMENT = "alignment",
  HEADING_LEVEL = "heading-level",
  PADDING = "padding",
  URL = "url",
  WIDTH = "width",
  HEIGHT = "height",
  BUTTON_WIDTH = "button-width",
  BUTTON_SIZE = "button-size",
  BUTTON_STYLE = "button-style",
  BUTTON_COLOR = "button-color",
  ALT_TEXT = "alt-text",
  CLICK_THROUGH_URL = "click-through-url",
  DIVIDER_COLOR = "divider",
  BORDER_WIDTH = "border-width",
  BORDER_COLOR = "border-color",
  BORDER_RADIUS = "border-radius",
  LAYOUT_COLUMNS = "layout-columns",
}
