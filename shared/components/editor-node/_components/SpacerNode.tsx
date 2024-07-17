import { ComponentAttributeValues } from "@/shared/types";
import { Section } from "@react-email/components";
import React, { CSSProperties } from "react";

interface SpacerNodeProps {
  data: Partial<ComponentAttributeValues>;
}

export const SpacerNode: React.FC<SpacerNodeProps> = ({ data }) => {
  const { height, backgroundColor } = data;

  const sectionStyles: CSSProperties = {
    height,
    backgroundColor,
    margin: 0,
  };

  return <Section style={sectionStyles}></Section>;
};
