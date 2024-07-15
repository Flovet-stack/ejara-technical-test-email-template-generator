import { CustomButton } from "@/shared/components/custom-button/CustomButton";
import { SettingIcon } from "@/shared/icons";
import { RootState } from "@/shared/lib/store/store";
import { useAppSelector } from "@/shared/lib/store/store.hooks";
import React from "react";

export const TemplateSettingsButton = () => {
  const editorState = useAppSelector((store: RootState) => store.editor);
  const { selectedTemplate } = editorState;

  if (selectedTemplate) {
    return <CustomButton theme="sidebar-button" icon={<SettingIcon />} />;
  }
  return null;
};
