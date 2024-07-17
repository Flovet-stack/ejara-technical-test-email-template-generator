import { ComponentAttributeValues } from "@/shared/types";
import { Button, Heading, Hr, Section } from "@react-email/components";
import React, { CSSProperties } from "react";

interface DividerNodeProps {
  data: Partial<ComponentAttributeValues>;
}

export const DividerNode: React.FC<DividerNodeProps> = ({ data }) => {
  const { dividerColor, height, backgroundColor, padding } = data;

  const sectionStyles: CSSProperties = {
    padding,
    backgroundColor,
    margin: 0,
  };

  const dividerStyles: CSSProperties = {
    height,
    borderTopColor: dividerColor,
  };

  return (
    <div style={sectionStyles}>
      <Hr style={dividerStyles} />
    </div>
  );
};
