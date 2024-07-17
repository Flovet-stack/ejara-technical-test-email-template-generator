import { ComponentAttributeValues } from "@/shared/types";
import { Text } from "@react-email/components";
import React, { CSSProperties } from "react";

interface TextNodeProps {
  data: Partial<ComponentAttributeValues>;
}

export const TextNode: React.FC<TextNodeProps> = ({ data }) => {
  const {
    textContent,
    textColor,
    backgroundColor,
    fontSize,
    fontWeight,
    alignment,
    padding,
  } = data;

  const styles: CSSProperties = {
    padding,
    color: textColor,
    backgroundColor,
    fontSize,
    fontWeight,
    margin: 0,
    textAlign: alignment,
  };

  return <Text style={styles}>{textContent}</Text>;
};
