import { EditorVariable } from "@/shared/types";
import React from "react";
import "./variable-card.scss";

interface VariableCardProps {
  data: EditorVariable;
}

export const VariableCard: React.FC<VariableCardProps> = ({ data }) => {
  return <div className="variable-card">VariableCard</div>;
};
