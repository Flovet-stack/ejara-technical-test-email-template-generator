import { ComponentAttributeValues } from "@/shared/types";
import { Button, Heading, Section } from "@react-email/components";
import React, { CSSProperties } from "react";

interface ButtonNodeProps {
  data: Partial<ComponentAttributeValues>;
}

export const ButtonNode: React.FC<ButtonNodeProps> = ({ data }) => {
  const {
    textContent,
    buttonWidth,
    buttonColor,
    buttonHeight,
    buttonStyle,
    textColor,
    backgroundColor,
    fontSize,
    fontWeight,
    alignment,
    padding,
    borderWidth,
    borderColor,
    borderRadius,
    url,
  } = data;

  const getBorderRadius = (): number => {
    if (buttonStyle === "pill") {
      const height = buttonHeight as number;
      return height / 2;
    }
    if (buttonStyle === "rectangle") {
      return 0;
    }
    return 5;
  };

  const sectionStyles: CSSProperties = {
    padding,
    backgroundColor,
    margin: 0,
  };

  const buttonStyles: CSSProperties = {
    padding,
    width: buttonWidth,
    height: buttonHeight,
    fontSize,
    fontWeight,
    backgroundColor: buttonColor,
    color: textColor,
    borderRadius: borderRadius ?? getBorderRadius(),
    borderWidth,
    borderColor,
    margin: 0,
  };

  return (
    <Section style={sectionStyles}>
      <Button style={buttonStyles} href={url}>
        {textContent}
      </Button>
    </Section>
  );
};
