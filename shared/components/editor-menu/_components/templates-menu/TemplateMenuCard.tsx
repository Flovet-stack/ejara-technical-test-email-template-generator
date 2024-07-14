import { ChevronRightIcon } from "@/shared/icons";
import { Template } from "@/shared/types";
import React from "react";

interface TemplateMenuCardProps {
  template: Template;
  onClick?: () => void;
}

export const TemplateMenuCard: React.FC<TemplateMenuCardProps> = ({
  template,
  onClick,
}) => {
  return (
    <div className="template-card" onClick={() => onClick && onClick()}>
      <p>{template.name}</p>
      <div className="icon">
        <ChevronRightIcon width={14} />
      </div>
    </div>
  );
};
