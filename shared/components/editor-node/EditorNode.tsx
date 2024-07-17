"use client";

import { EditorNodeType } from "@/shared/types";
import React from "react";
import "./editor-node.scss";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { DragIcon } from "@/shared/icons/drag-icon";
import { DeleteNodeButton } from "./DeleteNodeButton";
import { render } from "@react-email/components";
import { AddComponentButton } from "../add-component-button/AddComponentButton";
import { useAppSelector } from "@/shared/lib/store/store.hooks";
import { RootState } from "@/shared/lib/store/store";
import { useDispatch } from "react-redux";
import { setSelectedComponent } from "@/shared/lib/store/features";
import { LoadComponentType } from "./LoadComponentTypes";

interface EditorNodeProps {
  node: EditorNodeType;
}

export const EditorNode: React.FC<EditorNodeProps> = ({ node }) => {
  const dispatch = useDispatch();
  const editorState = useAppSelector((store: RootState) => store.editor);
  const defaultState = useAppSelector((store: RootState) => store.default);

  const { theme } = defaultState;
  const { selectedComponent } = editorState;
  const { id } = node;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const baseTemplate = render(<LoadComponentType node={node} />, {});

  // const baseTemplate = render(
  //   <Html lang="en">
  //   </Html>,
  //   {}
  // );

  // const tempHTML = render(
  //   <div dangerouslySetInnerHTML={{ __html: template }} />,
  //   {
  //     pretty: true,
  //   }
  // );

  const setComponentAsSelected = () => {
    dispatch(setSelectedComponent(node));
  };

  return (
    <div
      className={`editor-node ${selectedComponent?.id === id && "selected"} `}
      ref={setNodeRef}
      style={style}
    >
      <DeleteNodeButton />
      <div className="main" onClick={setComponentAsSelected}>
        <div className="btn-top">
          <AddComponentButton />
        </div>
        <div className="btn-bottom">
          <AddComponentButton />
        </div>
        <div dangerouslySetInnerHTML={{ __html: baseTemplate }} />
      </div>
      <button className={`drag-button ${theme}`} {...listeners} {...attributes}>
        <DragIcon />
      </button>
    </div>
  );
};
