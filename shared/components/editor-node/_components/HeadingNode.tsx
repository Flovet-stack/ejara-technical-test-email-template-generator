import { ComponentAttributeValues } from "@/shared/types";
import { Heading } from "@react-email/components";
import React, { CSSProperties } from "react";

interface HeadingNodeProps {
  data: Partial<ComponentAttributeValues>;
}

export const HeadingNode: React.FC<HeadingNodeProps> = ({ data }) => {
  const {
    textContent,
    headingLevel,
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

  return (
    <Heading style={styles} as={headingLevel}>
      {textContent}
    </Heading>
  );
};
