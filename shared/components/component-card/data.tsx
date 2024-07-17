import {
  COMPONENT,
  COMPONENT_ATTRIBUTE,
  ComponentAttributeValues,
} from "@/shared/types";

// Initial data for Text component
const initialTextData: Partial<ComponentAttributeValues> = {
  [COMPONENT_ATTRIBUTE.TEXT_CONTENT]: "Edit text",
  [COMPONENT_ATTRIBUTE.TEXT_COLOR]: "#000000",
  [COMPONENT_ATTRIBUTE.BACKGROUND_COLOR]: "#ffffff",
  [COMPONENT_ATTRIBUTE.FONT_FAMILY]: "Inter",
  [COMPONENT_ATTRIBUTE.FONT_SIZE]: "14px",
  [COMPONENT_ATTRIBUTE.FONT_WEIGHT]: "regular",
  [COMPONENT_ATTRIBUTE.ALIGNMENT]: "left",
  [COMPONENT_ATTRIBUTE.PADDING]: "7px 14px 7px 14px",
};

// Initial data for Heading component
const initialHeadingData: Partial<ComponentAttributeValues> = {
  [COMPONENT_ATTRIBUTE.TEXT_CONTENT]: "Edit heading",
  [COMPONENT_ATTRIBUTE.HEADING_LEVEL]: "h1",
  [COMPONENT_ATTRIBUTE.TEXT_COLOR]: "#000000",
  [COMPONENT_ATTRIBUTE.BACKGROUND_COLOR]: "#ffffff",
  [COMPONENT_ATTRIBUTE.FONT_FAMILY]: "Inter",
  [COMPONENT_ATTRIBUTE.FONT_SIZE]: "22px",
  [COMPONENT_ATTRIBUTE.FONT_WEIGHT]: "bold",
  [COMPONENT_ATTRIBUTE.ALIGNMENT]: "left",
  [COMPONENT_ATTRIBUTE.PADDING]: "14px 14px 14px 14px",
};

// Initial data for Button component
const initialButtonData: Partial<ComponentAttributeValues> = {
  [COMPONENT_ATTRIBUTE.TEXT_CONTENT]: "Click me",
  [COMPONENT_ATTRIBUTE.URL]: "#",
  [COMPONENT_ATTRIBUTE.BUTTON_WIDTH]: "fit-content",
  [COMPONENT_ATTRIBUTE.BUTTON_HEIGHT]: "40px",
  [COMPONENT_ATTRIBUTE.BUTTON_STYLE]: "rounded",
  [COMPONENT_ATTRIBUTE.TEXT_COLOR]: "#ffffff",
  [COMPONENT_ATTRIBUTE.BUTTON_COLOR]: "#1c1c1c",
  [COMPONENT_ATTRIBUTE.BACKGROUND_COLOR]: "#fffff",
  [COMPONENT_ATTRIBUTE.FONT_FAMILY]: "Inter",
  [COMPONENT_ATTRIBUTE.FONT_SIZE]: "14px",
  [COMPONENT_ATTRIBUTE.FONT_WEIGHT]: "bold",
  [COMPONENT_ATTRIBUTE.ALIGNMENT]: "center",
  [COMPONENT_ATTRIBUTE.PADDING]: "7px 14px 7px 14px",
  [COMPONENT_ATTRIBUTE.BORDER_WIDTH]: 1,
  [COMPONENT_ATTRIBUTE.BORDER_COLOR]: "#1c1c1c",
  [COMPONENT_ATTRIBUTE.BORDER_RADIUS]: "0.5rem",
};

// Initial data for Image component
const initialImageData: Partial<ComponentAttributeValues> = {
  [COMPONENT_ATTRIBUTE.URL]: "https://via.placeholder.com/150",
  [COMPONENT_ATTRIBUTE.ALT_TEXT]: "Placeholder Image",
  // [COMPONENT_ATTRIBUTE.CLICK_THROUGH_URL]: "#",
  [COMPONENT_ATTRIBUTE.WIDTH]: "150px",
  [COMPONENT_ATTRIBUTE.HEIGHT]: "auto",
  [COMPONENT_ATTRIBUTE.ALIGNMENT]: "center",
  [COMPONENT_ATTRIBUTE.BACKGROUND_COLOR]: "#ffffff",
  [COMPONENT_ATTRIBUTE.PADDING]: "14px 14px 14px 14px",
  [COMPONENT_ATTRIBUTE.BORDER_RADIUS]: "",
};

// Initial data for Divider component
const initialDividerData: Partial<ComponentAttributeValues> = {
  [COMPONENT_ATTRIBUTE.DIVIDER_COLOR]: "#000000",
  [COMPONENT_ATTRIBUTE.HEIGHT]: 1,
  [COMPONENT_ATTRIBUTE.BACKGROUND_COLOR]: "#ffffff",
  [COMPONENT_ATTRIBUTE.PADDING]: "14px 0px 14px 0px",
};

// Initial data for Spacer component
const initialSpacerData: Partial<ComponentAttributeValues> = {
  [COMPONENT_ATTRIBUTE.HEIGHT]: 5,
  [COMPONENT_ATTRIBUTE.BACKGROUND_COLOR]: "#ffffff",
};

// Initial data for Container component
const initialContainerData: Partial<ComponentAttributeValues> = {
  [COMPONENT_ATTRIBUTE.BACKGROUND_COLOR]: "#ffffff",
  [COMPONENT_ATTRIBUTE.BORDER_WIDTH]: 1,
  [COMPONENT_ATTRIBUTE.BORDER_COLOR]: "#000000",
  [COMPONENT_ATTRIBUTE.BORDER_RADIUS]: "0.5rem",
  [COMPONENT_ATTRIBUTE.PADDING]: "14px 14px 14px 14px",
  [COMPONENT_ATTRIBUTE.LAYOUT_COLUMNS]: 1,
};
export const loadInitialNodeData = (
  componentType: COMPONENT
): Partial<ComponentAttributeValues> => {
  switch (componentType) {
    case COMPONENT.TEXT:
      return initialTextData;
    case COMPONENT.HEADING:
      return initialHeadingData;
    case COMPONENT.BUTTON:
      return initialButtonData;
    case COMPONENT.IMAGE:
      return initialImageData;
    case COMPONENT.DIVIDER:
      return initialDividerData;
    case COMPONENT.SPACER:
      return initialSpacerData;
    case COMPONENT.CONTAINER:
      return initialContainerData;
    default:
      return initialTextData;
  }
};
