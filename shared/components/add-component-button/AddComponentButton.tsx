import React from "react";
import "./add-component-button.scss";
import { ConfigProvider, Popover } from "antd";
import { editorComponents } from "../editor-menu/_components/editor-menu/data";
import { ComponentCard } from "../component-card/ComponentCard";
import { useAppSelector } from "@/shared/lib/store/store.hooks";
import { RootState } from "@/shared/lib/store/store";
import { AddIcon } from "@/shared/icons";

const content = (
  <div className="component-list grid grid-cols-1 w-[270px]">
    <div className="grid grid-cols-3 gap-2">
      {editorComponents.map((component) => (
        <ComponentCard key={component.id} data={component} small />
      ))}
    </div>
  </div>
);

export const AddComponentButton = () => {
  const defaultState = useAppSelector((store: RootState) => store.default);

  const { theme } = defaultState;
  const isDark = theme === "dark";

  return (
    <div className="add-component-button">
      <ConfigProvider
        theme={{
          token: {
            colorBgElevated: isDark ? "#1c1c1c" : "#fff",
          },
          components: {
            Popover: {
              /* here is your component tokens */
            },
          },
        }}
      >
        <Popover content={content} trigger="click">
          <button>
            <AddIcon />
          </button>
        </Popover>
      </ConfigProvider>
    </div>
  );
};
