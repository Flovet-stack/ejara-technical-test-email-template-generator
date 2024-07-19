"use client";

import React from "react";
import { SortableEditor } from "./_components/sortable-editor/SortableEditor";
import { useAppSelector } from "@/shared/lib/store/store.hooks";
import { RootState } from "@/shared/lib/store/store";
import { ElementEqualIcon } from "@/shared/icons/element-equal-icon";
import { PreviewTemplate } from "./_components/preview/Preview";
import { TestTemplate } from "./_components/test-template/TestTemplate";
import { VIEWS } from "@/shared/lib/store/features";
import { HtmlPreview } from "./_components/html-preview/HtmlPreview";

const Display = () => {
  const editorState = useAppSelector((store: RootState) => store.editor);
  const { showView } = editorState;

  switch (showView) {
    case VIEWS.EDITOR:
      return <SortableEditor />;
    case VIEWS.HTML:
      return <HtmlPreview />;
    case VIEWS.PREVIEW:
      return <PreviewTemplate />;
    case VIEWS.TEST:
      return <TestTemplate />;
    default:
      return (
        <div className="no-template">
          <ElementEqualIcon />
          <p>Select a template to continue</p>
        </div>
      );
  }
};

const Page = () => {
  return (
    <div className="h-full flex justify-center pt-[1.5rem]">
      <Display />
    </div>
  );
};

export default Page;
