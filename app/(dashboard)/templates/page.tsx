"use client";

import React from "react";
import { SortableEditor } from "./_components/sortable-editor/SortableEditor";
import { useAppSelector } from "@/shared/lib/store/store.hooks";
import { RootState } from "@/shared/lib/store/store";
import { ElementEqualIcon } from "@/shared/icons/element-equal-icon";
import { PreviewTemplate } from "./_components/preview/Preview";
import { TestTemplate } from "./_components/test-template/TestTemplate";

const Page = () => {
  const editorState = useAppSelector((store: RootState) => store.editor);
  const { selectedTemplate, showPreview, showTest } = editorState;

  return (
    <div className="h-full flex justify-center pt-[1.5rem]">
      {showTest && <TestTemplate />}
      {showPreview && <PreviewTemplate />}
      {!showTest && !showPreview && selectedTemplate && <SortableEditor />}
      {!showTest && !showPreview && !selectedTemplate && (
        <div className="no-template">
          <ElementEqualIcon />
          <p>Select a template to continue</p>
        </div>
      )}
    </div>
  );
};

export default Page;
