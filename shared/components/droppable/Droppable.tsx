import React from "react";
import { useDroppable } from "@dnd-kit/core";

interface DroppableProps {
  id: string;
  children: React.JSX.Element;
}

export const Droppable: React.FC<DroppableProps> = ({ id, children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });
  const style = {
    opacity: isOver ? 1 : 0.5,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
};
