import { CustomButton } from "@/shared/components/custom-button/CustomButton";
import { FolderIcon } from "@/shared/icons";
import { setLeftEditorMenuState } from "@/shared/lib/store/features";
import { useAppDispatch } from "@/shared/lib/store/store.hooks";
import { EDITOR } from "@/shared/types";
import React from "react";

export const TemplatesButton = () => {
  const dispatch = useAppDispatch();

  const handleShowTemplates = () => {
    dispatch(setLeftEditorMenuState(EDITOR.TEMPLATES_MENU));
  };

  return (
    <CustomButton
      theme="sidebar-button"
      icon={<FolderIcon />}
      onClick={handleShowTemplates}
    />
  );
};
