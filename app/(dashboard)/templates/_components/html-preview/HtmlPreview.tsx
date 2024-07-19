import { LoadComponentType } from "@/shared/components/editor-node/LoadComponentTypes";
import { RootState } from "@/shared/lib/store/store";
import { useAppSelector } from "@/shared/lib/store/store.hooks";
import { Html, render } from "@react-email/components";
import React, { useEffect, useState } from "react";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";
import "highlight.js/styles/github.css";
import "./html-preview.scss";

export const HtmlPreview = () => {
  const editorState = useAppSelector((store: RootState) => store.editor);
  const { dnd } = editorState;

  const [highlightedHtml, setHighlightedHtml] = useState("");

  hljs.registerLanguage("html", html);

  useEffect(() => {
    // Convert the nodes to an HTML string
    const htmlString = render(
      <Html lang="en">
        {dnd.nodes.map((node) => (
          <LoadComponentType key={node.id} node={node} />
        ))}
      </Html>,
      { pretty: true }
    );

    // Highlight the HTML string
    const highlighted = hljs.highlight(htmlString, { language: "html" }).value;

    // Set the highlighted HTML
    setHighlightedHtml(highlighted);
  }, [dnd.nodes]);

  return (
    <div className="html-preview">
      <pre>
        <code
          className="html"
          dangerouslySetInnerHTML={{ __html: highlightedHtml }}
        />
      </pre>
    </div>
  );
};
