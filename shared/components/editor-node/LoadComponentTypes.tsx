import { COMPONENT, EditorNodeType } from "@/shared/types";
import {
  ButtonNode,
  ContainerNode,
  DividerNode,
  HeadingNode,
  ImageNode,
  SpacerNode,
  TextNode,
} from "./_components";

interface LoadComponentTypeProps {
  node: EditorNodeType;
}

export const LoadComponentType: React.FC<LoadComponentTypeProps> = ({
  node,
}) => {
  switch (node.componentType) {
    case COMPONENT.TEXT:
      return <TextNode data={node.data} />;
    case COMPONENT.HEADING:
      return <HeadingNode data={node.data} />;
    case COMPONENT.BUTTON:
      return <ButtonNode data={node.data} />;
    case COMPONENT.IMAGE:
      return <ImageNode data={node.data} />;
    case COMPONENT.DIVIDER:
      return <DividerNode data={node.data} />;
    case COMPONENT.SPACER:
      return <SpacerNode data={node.data} />;
    case COMPONENT.CONTAINER:
      return <ContainerNode data={node.data} />;
    default:
      return <TextNode data={node.data} />;
  }
};
