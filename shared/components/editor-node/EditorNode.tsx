import { EditorNodeType } from "@/shared/types";
import React from "react";
import "./editor-node.scss";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { DragIcon } from "@/shared/icons/drag-icon";
import { DeleteNodeButton } from "./DeleteNodeButton";

interface EditorNodeProps {
  node: EditorNodeType;
}

export const EditorNode: React.FC<EditorNodeProps> = ({ node }) => {
  const { id, name } = node;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div className="editor-node" ref={setNodeRef} style={style}>
      <DeleteNodeButton />
      <div className="main">{name}</div>
      <button className="drag-button" {...listeners} {...attributes}>
        <DragIcon />
      </button>
    </div>
  );
};
