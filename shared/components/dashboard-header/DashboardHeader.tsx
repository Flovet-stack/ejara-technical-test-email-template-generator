import React from "react";
import "./dashboard-header.scss";
import { CustomButton } from "../custom-button/CustomButton";
import { AddIcon } from "@/shared/icons";
import { useAppSelector } from "@/shared/lib/store/store.hooks";
import { RootState } from "@/shared/lib/store/store";

export const DashboardHeader = () => {
  const defaultState = useAppSelector((store: RootState) => store.default);
  const { theme } = defaultState;

  return (
    <div className={`dashboard-header ${theme}`}>
      <div className="corner">
        <div className="page-details">
          <div className="bg-red-500">
            <h2>Welcome</h2>
            <h1>List of Templates</h1>
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
