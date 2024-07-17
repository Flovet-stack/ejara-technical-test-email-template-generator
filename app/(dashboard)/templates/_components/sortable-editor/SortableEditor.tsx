import { AddComponentButton, Droppable, EditorNode } from "@/shared/components";
import { RootState } from "@/shared/lib/store/store";
import { useAppDispatch, useAppSelector } from "@/shared/lib/store/store.hooks";
import {
  closestCorners,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import React from "react";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import "./sortable-editor.scss";
import { setEditorNodes } from "@/shared/lib/store/features";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

export const SortableEditor = () => {
  const dispatch = useAppDispatch();
  const editorState = useAppSelector((store: RootState) => store.editor);
  const { nodes } = editorState.dnd;

  const getNodePosition = (id: UniqueIdentifier) =>
    nodes.findIndex((node) => node.id === id);

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;

    if (active.id === over?.id) return;

    const originalPosition = getNodePosition(active.id);
    const newPosition = getNodePosition(over?.id as UniqueIdentifier);
    const updatedNodes = arrayMove(nodes, originalPosition, newPosition);
    dispatch(setEditorNodes(updatedNodes));
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // return (
  //   <div className="sortable-editor">
  //     <div className="column">
  //       {nodes.length > 0 ? (
  //         nodes.map((node) => <EditorNode key={node.id} node={node} />)
  //       ) : (
  //         <div className="starting-node">
  //           <AddComponentButton />
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // );

  return (
    <div className="sortable-editor">
      <DndContext
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToVerticalAxis]}
        sensors={sensors}
      >
        <div className="column">
          <SortableContext items={nodes} strategy={verticalListSortingStrategy}>
            {nodes.length > 0 ? (
              nodes.map((node) => <EditorNode key={node.id} node={node} />)
            ) : (
              <div className="starting-node">
                <AddComponentButton />
              </div>
            )}
          </SortableContext>
        </div>
      </DndContext>
    </div>
  );
};
