import React, { CSSProperties, ReactNode } from "react";
import type { CollapseProps } from "antd";
import { Collapse, theme } from "antd";
import "./sidebar-section.scss";
import { AddIcon, ChevronRightIcon } from "@/shared/icons";
import { useAppSelector } from "@/shared/lib/store/store.hooks";
import { RootState } from "@/shared/lib/store/store";
import { CollapsibleType } from "antd/es/collapse/CollapsePanel";
import { CustomButton } from "../custom-button/CustomButton";

interface SidebarSectionProps {
  title?: string;
  child: ReactNode;
  collapsible?: CollapsibleType;
  extraEvent?: () => void;
}

export const SidebarSection: React.FC<SidebarSectionProps> = ({
  title,
  child,
  collapsible,
  extraEvent,
}) => {
  const defaultState = useAppSelector((store: RootState) => store.default);
  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    // marginBottom: 24,
    background: defaultState.theme === "light" ? "#fff" : "#1c1c1c",
    borderRadius: 0,
    border: "none",
    borderBottom:
      defaultState.theme === "light"
        ? "1px solid rgba(28, 28, 28, 0.1)"
        : "1px solid rgba(255, 255, 255, 0.1)",
    padding: "0.5rem",
    transitionDuration: "0.3s",
  };

  const genExtra = () => (
    <CustomButton
      theme="sidebar-section-button"
      icon={<AddIcon />}
      onClick={(event) => {
        extraEvent && extraEvent();
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );

  const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
    panelStyle
  ) => [
    {
      key: "1",
      label: <div className="sidebar-section-title">{title}</div>,
      children: child,
      style: panelStyle,
      extra: extraEvent && genExtra(),
    },
  ];

  return (
    <div className={`sidebar-section ${defaultState.theme}`}>
      {!title ? (
        <div className="child">{child}</div>
      ) : (
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          expandIconPosition={"end"}
          expandIcon={({ isActive }) => {
            if (collapsible) {
              return undefined;
            }
            return (
              <CustomButton
                theme="sidebar-section-button"
                icon={<ChevronRightIcon rotate={isActive ? 90 : 0} />}
              />
            );
          }}
          style={{ background: token.colorBgContainer }}
          items={getItems(panelStyle)}
          collapsible={collapsible}
        />
      )}
    </div>
  );
};
