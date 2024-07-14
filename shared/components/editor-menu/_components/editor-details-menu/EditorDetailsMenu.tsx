import { SidebarSection } from "@/shared/components/sidebar-section/SidebarSection";
import React from "react";

export const EditorDetailsMenu = () => {
  return (
    <div>
      <SidebarSection
        title="Variables"
        collapsible="disabled"
        extraEvent={() => {}}
        child={<>test</>}
      />
      <SidebarSection title="Background" child={<>test</>} />
    </div>
  );
};
