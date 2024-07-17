import { RootState } from "@/shared/lib/store/store";
import { useAppSelector } from "@/shared/lib/store/store.hooks";
import React from "react";
import { LoadDetailsEditor } from "../../load-editor-details/LoadDetailsEditor";
import { EditorNodeType } from "@/shared/types";

export const HeadingDetailsMenu = () => {
  const editorState = useAppSelector((store: RootState) => store.editor);

  const { selectedComponent } = editorState;
  return (
    <div>
      <LoadDetailsEditor node={selectedComponent as EditorNodeType} />
    </div>
  );
};
