import { EditIcon } from "@/shared/icons";
import { ScrollIcon } from "@/shared/icons/scroll-icon";
import { setShowView, VIEWS } from "@/shared/lib/store/features";
import { useAppDispatch } from "@/shared/lib/store/store.hooks";
import { ConfigProvider, Segmented } from "antd";
import React from "react";

export const DeviceToggler = () => {
  const dispatch = useAppDispatch();

  const handleToggle = (value: string) => {
    if (value === "code") {
      dispatch(setShowView(VIEWS.HTML));
    } else {
      dispatch(setShowView(VIEWS.EDITOR));
    }
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Segmented: {
            itemSelectedBg: "#1c1c1c",
            itemSelectedColor: "#ffffff",
            itemColor: "#1c1c1c",
            trackBg: "#f4f4f4",
          },
        },
      }}
    >
      <Segmented<string>
        options={[
          { value: "editor", icon: <EditIcon /> },
          { value: "code", icon: <ScrollIcon /> },
        ]}
        // value={}
        onChange={(value) => {
          handleToggle(value);
        }}
      />
    </ConfigProvider>
  );
};
