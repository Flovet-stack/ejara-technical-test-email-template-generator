import { LoadComponentType } from "@/shared/components/editor-node/LoadComponentTypes";
import { RootState } from "@/shared/lib/store/store";
import { useAppSelector } from "@/shared/lib/store/store.hooks";
import { Html, render } from "@react-email/components";
import React from "react";
import "./preview.scss";

export const PreviewTemplate = () => {
  const editorState = useAppSelector((store: RootState) => store.editor);

  const { dnd } = editorState;

  return (
    <div className="preview-template">
      <div
        dangerouslySetInnerHTML={{
          __html: render(
            <Html lang="en">
              {dnd.nodes.map((node) => (
                <LoadComponentType key={node.id} node={node} />
              ))}
            </Html>,
            {}
          ),
        }}
      />
    </div>
  );
};
