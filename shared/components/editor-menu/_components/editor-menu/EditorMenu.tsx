import { SidebarSection } from "@/shared/components/sidebar-section/SidebarSection";
import React from "react";

export const EditorMenu = () => {
  return (
    <div className="editor-menu">
      <SidebarSection
        title="Variables"
        collapsible="disabled"
        extraEvent={() => {}}
        child={<>test</>}
      />
      <SidebarSection title="Components" child={<>test</>} />
    </div>
  );
};
