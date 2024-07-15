import { EditorComponent } from "@/shared/types";
import React from "react";
import "./component-card.scss";
import { useAppSelector } from "@/shared/lib/store/store.hooks";
import { RootState } from "@/shared/lib/store/store";

interface ComponentCardProps {
  data: EditorComponent;
}

export const ComponentCard: React.FC<ComponentCardProps> = ({ data }) => {
  const defaultState = useAppSelector((store: RootState) => store.default);

  const { theme } = defaultState;
  const { icon, name } = data;
  const Icon = () => icon;

  return (
    <div className={`component-card ${theme}`}>
      <div className="icon">
        <Icon />
      </div>
      <p>{name}</p>
    </div>
  );
};
