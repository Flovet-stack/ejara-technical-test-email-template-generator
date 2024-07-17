import { ComponentAttributeValues } from "@/shared/types";
import { Column, Section } from "@react-email/components";
import { Row } from "antd";
import React, { CSSProperties } from "react";

interface ContainerNodeProps {
  data: Partial<ComponentAttributeValues>;
}

export const ContainerNode: React.FC<ContainerNodeProps> = ({ data }) => {
  const {
    backgroundColor,
    borderWidth,
    borderColor,
    borderRadius,
    padding,
    layoutColumns,
  } = data;

  const sectionStyles: CSSProperties = {
    backgroundColor,
    borderWidth,
    borderColor,
    borderRadius,
    padding,
    margin: 0,
  };

  return (
    <Row style={sectionStyles}>
      <Column>A</Column>
      <Column>B</Column>
      <Column>C</Column>
    </Row>
  );
};
