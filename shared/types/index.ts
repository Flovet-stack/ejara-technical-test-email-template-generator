export type AppTheme = "light" | "dark";

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
  component: () => React.JSX.Element | null;
};

export type EditorComponent = {
  id: string;
  name: COMPONENT;
  icon: React.JSX.Element;
};

export interface TextDataType {}

export enum COMPONENT {
  TEXT = "text",
  HEADING = "heading",
  BUTTON = "button",
  IMAGE = "image",
  DIVIDER = "divider",
  SPACER = "spacer",
  CONTAINER = "container",
}

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

export enum COMPONENT_ATTRIBUTE {
  TEXT_CONTENT = "textContent",
  HEADING = "heading",
  TEXT_COLOR = "textColor",
  BACKGROUND_COLOR = "backgroundColor",
  FONT_FAMILY = "fontFamily",
  FONT_WEIGHT = "fontWeight",
  FONT_SIZE = "fontSize",
  ALIGNMENT = "alignment",
  HEADING_LEVEL = "headingLevel",
  PADDING = "padding",
  URL = "url",
  WIDTH = "width",
  HEIGHT = "height",
  BUTTON_WIDTH = "buttonWidth",
  BUTTON_HEIGHT = "buttonHeight",
  BUTTON_STYLE = "buttonStyle",
  BUTTON_COLOR = "buttonColor",
  ALT_TEXT = "altText",
  // CLICK_THROUGH_URL = "clickThroughUrl",
  DIVIDER_COLOR = "dividerColor",
  BORDER_WIDTH = "borderWidth",
  BORDER_COLOR = "borderColor",
  BORDER_RADIUS = "borderRadius",
  LAYOUT_COLUMNS = "layoutColumns",
}

export type ComponentAttributeValues = {
  [COMPONENT_ATTRIBUTE.TEXT_CONTENT]: string;
  // [COMPONENT_ATTRIBUTE.HEADING]: string;
  [COMPONENT_ATTRIBUTE.TEXT_COLOR]: string;
  [COMPONENT_ATTRIBUTE.BACKGROUND_COLOR]: string;
  [COMPONENT_ATTRIBUTE.FONT_FAMILY]: string;
  [COMPONENT_ATTRIBUTE.FONT_WEIGHT]: "regular" | "bold"; // Specific type
  [COMPONENT_ATTRIBUTE.FONT_SIZE]: number;
  [COMPONENT_ATTRIBUTE.ALIGNMENT]: "left" | "center" | "right";
  [COMPONENT_ATTRIBUTE.HEADING_LEVEL]: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  [COMPONENT_ATTRIBUTE.PADDING]: string;
  [COMPONENT_ATTRIBUTE.URL]: string;
  [COMPONENT_ATTRIBUTE.WIDTH]: string | number;
  [COMPONENT_ATTRIBUTE.HEIGHT]: string | number;
  [COMPONENT_ATTRIBUTE.BUTTON_WIDTH]: string | number;
  [COMPONENT_ATTRIBUTE.BUTTON_HEIGHT]: string | number;
  [COMPONENT_ATTRIBUTE.BUTTON_STYLE]: "rectangle" | "rounded" | "pill";
  [COMPONENT_ATTRIBUTE.BUTTON_COLOR]: string;
  [COMPONENT_ATTRIBUTE.ALT_TEXT]: string;
  // [COMPONENT_ATTRIBUTE.CLICK_THROUGH_URL]: string;
  [COMPONENT_ATTRIBUTE.DIVIDER_COLOR]: string;
  [COMPONENT_ATTRIBUTE.BORDER_WIDTH]: string | number;
  [COMPONENT_ATTRIBUTE.BORDER_COLOR]: string;
  [COMPONENT_ATTRIBUTE.BORDER_RADIUS]: string | number;
  [COMPONENT_ATTRIBUTE.LAYOUT_COLUMNS]: 1 | 2 | 3;
};

export type EditorNodeType = {
  id: string;
  componentType: COMPONENT;
  data: Partial<ComponentAttributeValues>;
};
