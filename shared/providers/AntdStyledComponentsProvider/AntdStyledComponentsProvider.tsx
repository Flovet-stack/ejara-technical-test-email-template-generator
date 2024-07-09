"use client";
import StyledComponentsRegistry from "@/shared/lib/AntdRegistry";
import React from "react";

export const AntdStyledComponentsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
};
