import { CustomButton } from "@/shared/components/custom-button/CustomButton";
import { FolderIcon } from "@/shared/icons";
import React from "react";

export const EditorActionsButton = () => {
  return <CustomButton theme="sidebar-button" icon={<FolderIcon />} />;
};
