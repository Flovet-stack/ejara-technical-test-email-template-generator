import React from "react";
import "./dashboard-header.scss";
import { CustomButton } from "../custom-button/CustomButton";
import { AddIcon } from "@/shared/icons";
import { useAppSelector } from "@/shared/lib/store/store.hooks";
import { RootState } from "@/shared/lib/store/store";

export const DashboardHeader = () => {
  const defaultState = useAppSelector((store: RootState) => store.default);
  const editorState = useAppSelector((store: RootState) => store.editor);
  const { theme } = defaultState;
  const { selectedTemplate } = editorState;

  return (
    <div className={`dashboard-header ${theme}`}>
      <div className="corner">
        <div className="page-details">
          <div>
            <h2>{selectedTemplate ? "Template name" : "Welcome"}</h2>
            <h1>
              {selectedTemplate ? selectedTemplate.name : "List of Templates"}
            </h1>
          </div>
        </div>
      </div>
      <div className="center">DashboardHeader</div>
      <div className="corner">
        <CustomButton
          theme="black"
          text="Create template"
          icon={<AddIcon />}
          fullWidth
        />
      </div>
    </div>
  );
};
