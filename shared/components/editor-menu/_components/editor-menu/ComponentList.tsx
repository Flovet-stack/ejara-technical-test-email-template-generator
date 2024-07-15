import React from "react";
import { editorComponents } from "./data";
import { ComponentCard } from "@/shared/components/component-card/ComponentCard";

export const ComponentList = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {editorComponents.map((component) => (
        <ComponentCard key={component.id} data={component} />
      ))}
    </div>
  );
};
