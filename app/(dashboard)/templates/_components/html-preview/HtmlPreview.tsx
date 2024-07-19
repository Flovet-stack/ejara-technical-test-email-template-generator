import { LoadComponentType } from "@/shared/components/editor-node/LoadComponentTypes";
import { RootState } from "@/shared/lib/store/store";
import { useAppSelector } from "@/shared/lib/store/store.hooks";
import { Html, render } from "@react-email/components";
import React, { useEffect, useState } from "react";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";
import "highlight.js/styles/github.css";
import "./html-preview.scss";
import { CustomButton } from "@/shared/components";

export const HtmlPreview = () => {
  const editorState = useAppSelector((store: RootState) => store.editor);
  const { dnd } = editorState;

  const [highlightedHtml, setHighlightedHtml] = useState("");
  const [htmlString, setHtmlString] = useState("");

  hljs.registerLanguage("html", html);

  useEffect(() => {
    // Convert the nodes to an HTML string
    const generatedHtmlString = render(
      <Html lang="en">
        {dnd.nodes.map((node) => (
          <LoadComponentType key={node.id} node={node} />
        ))}
      </Html>,
      { pretty: true }
    );

    // Highlight the HTML string
    const highlighted = hljs.highlight(generatedHtmlString, {
      language: "html",
    }).value;

    // Set the highlighted HTML
    setHighlightedHtml(highlighted);
    setHtmlString(generatedHtmlString);
  }, [dnd.nodes]);

  const downloadHtml = () => {
    const blob = new Blob([htmlString], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "preview.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="html-preview">
      <div className="flex justify-end mb-4">
        <CustomButton
          theme="black"
          text="Download HTML"
          onClick={downloadHtml}
        />
      </div>
      <pre>
        <code
          className="html"
          dangerouslySetInnerHTML={{ __html: highlightedHtml }}
        />
      </pre>
    </div>
  );
};
