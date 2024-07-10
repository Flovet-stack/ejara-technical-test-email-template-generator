"use client";

import { CustomButton } from "@/shared/components/custom-button/CustomButton";
import { useTheme } from "@/shared/hooks";
import { MoonIcon, SunIcon } from "@/shared/icons";
import { RootState } from "@/shared/lib/store/store";
import { useAppSelector } from "@/shared/lib/store/store.hooks";
import React from "react";

export const ApplicationThemeButton = () => {
  const { toggleTheme } = useTheme();
  const defaultState = useAppSelector((store: RootState) => store.default);
  const Icon = defaultState.theme === "light" ? MoonIcon : SunIcon;

  const handleChangeTheme = () => {
    toggleTheme();
  };

  return (
    <CustomButton
      theme="sidebar-button"
      icon={<Icon />}
      onClick={handleChangeTheme}
    />
  );
};
