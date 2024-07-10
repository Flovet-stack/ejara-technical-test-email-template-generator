import { CustomButton } from "@/shared/components/custom-button/CustomButton";
import { SettingIcon } from "@/shared/icons";
import React from "react";

export const TemplateSettingsButton = () => {
  return <CustomButton theme="sidebar-button" icon={<SettingIcon />} />;
};
