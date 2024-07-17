import { COMPONENT_ATTRIBUTE, EditorNodeType } from "@/shared/types";
import {
  AlignmentEditor,
  AltTextEditor,
  BackgroundColorEditor,
  BorderEditor,
  ButtonColorEditor,
  ButtonSizeEditor,
  ButtonStyleEditor,
  DividerColorEditor,
  FontEditor,
  HeadingLevelEditor,
  LayoutEditor,
  PaddingEditor,
  SizeEditor,
  TextColorEditor,
  TextContentEditor,
  UrlEditor,
} from "./_components";

const componentMap = {
  [COMPONENT_ATTRIBUTE.TEXT_CONTENT]: TextContentEditor,
  [COMPONENT_ATTRIBUTE.HEADING]: HeadingLevelEditor,
  [COMPONENT_ATTRIBUTE.TEXT_COLOR]: TextColorEditor,
  [COMPONENT_ATTRIBUTE.BACKGROUND_COLOR]: BackgroundColorEditor,
  [COMPONENT_ATTRIBUTE.FONT_FAMILY]: FontEditor,
  [COMPONENT_ATTRIBUTE.FONT_WEIGHT]: FontEditor,
  [COMPONENT_ATTRIBUTE.FONT_SIZE]: FontEditor,
  [COMPONENT_ATTRIBUTE.ALIGNMENT]: AlignmentEditor,
  [COMPONENT_ATTRIBUTE.HEADING_LEVEL]: HeadingLevelEditor,
  [COMPONENT_ATTRIBUTE.PADDING]: PaddingEditor,
  [COMPONENT_ATTRIBUTE.URL]: UrlEditor,
  [COMPONENT_ATTRIBUTE.WIDTH]: SizeEditor,
  [COMPONENT_ATTRIBUTE.HEIGHT]: SizeEditor,
  [COMPONENT_ATTRIBUTE.BUTTON_WIDTH]: ButtonSizeEditor,
  [COMPONENT_ATTRIBUTE.BUTTON_HEIGHT]: ButtonSizeEditor,
  [COMPONENT_ATTRIBUTE.BUTTON_STYLE]: ButtonStyleEditor,
  [COMPONENT_ATTRIBUTE.BUTTON_COLOR]: ButtonColorEditor,
  [COMPONENT_ATTRIBUTE.ALT_TEXT]: AltTextEditor,
  [COMPONENT_ATTRIBUTE.DIVIDER_COLOR]: DividerColorEditor,
  [COMPONENT_ATTRIBUTE.BORDER_WIDTH]: BorderEditor,
  [COMPONENT_ATTRIBUTE.BORDER_COLOR]: BorderEditor,
  [COMPONENT_ATTRIBUTE.BORDER_RADIUS]: BorderEditor,
  [COMPONENT_ATTRIBUTE.LAYOUT_COLUMNS]: LayoutEditor,
};

interface LoadDetailsEditorProps {
  node: EditorNodeType;
}

export const LoadDetailsEditor: React.FC<LoadDetailsEditorProps> = ({
  node,
}) => {
  const { data } = node;
  const uniqueComponents = new Set();

  const componentsArray = Object.keys(data)
    .map((key) => {
      const componentKey = key as COMPONENT_ATTRIBUTE;
      const Component = componentMap[componentKey];
      if (Component && !uniqueComponents.has(Component)) {
        uniqueComponents.add(Component);
        return <Component key={key} />;
      }
      return null;
    })
    .filter(Boolean);

  return <div>{componentsArray}</div>;
};
