import { ComponentAttributeValues } from "@/shared/types";
import { Button, Heading, Img, Section } from "@react-email/components";
import React, { CSSProperties } from "react";

interface ImageNodeProps {
  data: Partial<ComponentAttributeValues>;
}

export const ImageNode: React.FC<ImageNodeProps> = ({ data }) => {
  const {
    url,
    clickThroughUrl,
    width,
    height,
    backgroundColor,
    padding,
    borderRadius,
  } = data;

  const sectionStyles: CSSProperties = {
    padding,
    backgroundColor,
    margin: 0,
  };

  const imageStyles: CSSProperties = {
    padding,
    width,
    height,
    borderRadius,
    margin: 0,
  };

  return (
    <Section style={sectionStyles}>
      <Img
        style={imageStyles}
        src={url}
        width={width ?? "150px"}
        height={height ?? "150px"}
      />
    </Section>
  );
};
