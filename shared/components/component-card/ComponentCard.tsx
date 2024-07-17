import { EditorComponent, EditorNodeType } from "@/shared/types";
import React from "react";
import "./component-card.scss";
import { useAppDispatch, useAppSelector } from "@/shared/lib/store/store.hooks";
import { RootState } from "@/shared/lib/store/store";
import { loadInitialNodeData } from "./data";
import { v4 as uuidv4 } from "uuid";
import {
  setEditorNodes,
  setEditorState,
  setSelectedComponent,
} from "@/shared/lib/store/features";

interface ComponentCardProps {
  data: EditorComponent;
  small?: true;
}

export const ComponentCard: React.FC<ComponentCardProps> = ({
  data,
  small,
}) => {
  const dispatch = useAppDispatch();
  const defaultState = useAppSelector((store: RootState) => store.default);
  const editorState = useAppSelector((store: RootState) => store.editor);

  const { theme } = defaultState;
  const { nodes } = editorState.dnd;
  const { icon, name } = data;
  const Icon = () => icon;

  const CreateNode = () => {
    const node: EditorNodeType = {
      id: uuidv4(),
      componentType: data.name,
      data: loadInitialNodeData(data.name),
    };
    const newNodes: EditorNodeType[] = [...nodes, node];
    dispatch(
      setEditorState({
        ...editorState,
        dnd: {
          nodes: newNodes,
        },
        selectedComponent: node,
      })
    );
  };

  return (
    <div
      className={`component-card ${theme} ${small && "small"}`}
      onClick={CreateNode}
    >
      <div className="icon">
        <Icon />
      </div>
      <p>{name}</p>
    </div>
  );
};
