import React, { useState } from "react";
import {
  DragOverlay,
  DragStartEvent,
  UniqueIdentifier,
  useDraggable,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

interface DraggableProps {
  id: string;
  children: React.JSX.Element;
}

export const Draggable: React.FC<DraggableProps> = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };

  // const handleDragEnd = () => {
  //   setActiveId(null);
  // };

  // if (isDragging) {
  //   return children;
  // }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      role="gridcell"
      className="relative"
    >
      {children}
    </div>
  );
};
