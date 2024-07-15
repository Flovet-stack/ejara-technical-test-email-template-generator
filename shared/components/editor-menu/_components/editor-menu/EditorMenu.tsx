import { SidebarSection } from "@/shared/components/sidebar-section/SidebarSection";
import { VariablesList } from "@/shared/components/variables-list/VariablesList";
import { setShowCreateVariableForm } from "@/shared/lib/store/features";
import { RootState } from "@/shared/lib/store/store";
import { useAppDispatch, useAppSelector } from "@/shared/lib/store/store.hooks";
import React from "react";
import { ComponentList } from "./ComponentList";

export const EditorMenu = () => {
  const dispatch = useAppDispatch();
  const variablesState = useAppSelector((store: RootState) => store.variables);

  const handleOpenCreateForm = () => {
    dispatch(setShowCreateVariableForm(!variablesState.showForm));
  };

  return (
    <div className="editor-menu">
      <SidebarSection
        title="Variables"
        collapsible="disabled"
        extraEvent={handleOpenCreateForm}
        child={<VariablesList />}
      />
      <SidebarSection title="Components" child={<ComponentList />} />
    </div>
  );
};
