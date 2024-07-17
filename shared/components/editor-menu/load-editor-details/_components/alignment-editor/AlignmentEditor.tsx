import { SidebarSection } from "@/shared/components/sidebar-section/SidebarSection";
import {
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
} from "@/shared/icons";
import { setSelectedComponentDataValue } from "@/shared/lib/store/features";
import { RootState } from "@/shared/lib/store/store";
import { useAppDispatch, useAppSelector } from "@/shared/lib/store/store.hooks";
import { COMPONENT_ATTRIBUTE } from "@/shared/types";
import { ConfigProvider, Segmented } from "antd";
import React, { useCallback } from "react";

interface HeadingLevelFieldProps {
  alignment: string;
  handleChange: (value: string) => void;
}

const HeadingLevelField: React.FC<HeadingLevelFieldProps> = ({
  alignment,
  handleChange,
}) => {
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
          { label: "", value: "left", icon: <TextAlignLeftIcon /> },
          { label: "", value: "center", icon: <TextAlignCenterIcon /> },
          { label: "", value: "right", icon: <TextAlignRightIcon /> },
        ]}
        value={alignment}
        onChange={(value) => {
          handleChange(value);
        }}
      />
    </ConfigProvider>
  );
};

export const AlignmentEditor = () => {
  const dispatch = useAppDispatch();
  const editorState = useAppSelector((store: RootState) => store.editor);

  const { selectedComponent } = editorState;
  const alignment = selectedComponent?.data[COMPONENT_ATTRIBUTE.ALIGNMENT];

  const handleChange = useCallback(
    (value: string) => {
      if (selectedComponent) {
        dispatch(
          setSelectedComponentDataValue({
            key: COMPONENT_ATTRIBUTE.ALIGNMENT,
            value: value,
          })
        );
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch, selectedComponent]
  );

  return (
    <SidebarSection
      title="Alignment"
      child={
        <HeadingLevelField
          alignment={alignment as string}
          handleChange={handleChange}
        />
      }
    />
  );
};
