import { SidebarSection } from "@/shared/components/sidebar-section/SidebarSection";
import { setSelectedComponentDataValue } from "@/shared/lib/store/features";
import { RootState } from "@/shared/lib/store/store";
import { useAppDispatch, useAppSelector } from "@/shared/lib/store/store.hooks";
import { COMPONENT_ATTRIBUTE } from "@/shared/types";
import { ConfigProvider, Segmented } from "antd";
import React, { useCallback } from "react";

interface HeadingLevelFieldProps {
  headingLevel: string;
  handleChange: (value: string) => void;
}

const HeadingLevelField: React.FC<HeadingLevelFieldProps> = ({
  headingLevel,
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
        options={["H1", "H2", "H3", "H4", "H5", "H6"]}
        value={headingLevel.toUpperCase()}
        onChange={(value) => {
          handleChange(value);
        }}
      />
    </ConfigProvider>
  );
};

export const HeadingLevelEditor = () => {
  const dispatch = useAppDispatch();
  const editorState = useAppSelector((store: RootState) => store.editor);

  const { selectedComponent } = editorState;
  const headingLevel =
    selectedComponent?.data[COMPONENT_ATTRIBUTE.HEADING_LEVEL];

  const fontSizeMap = {
    h1: "24px",
    h2: "22px",
    h3: "20px",
    h4: "18px",
    h5: "16px",
    h6: "14px",
  };

  type Heading = keyof typeof fontSizeMap;

  const getFontSize = (value: string): string | undefined => {
    const key = value.toLowerCase() as Heading;
    return fontSizeMap[key];
  };

  const handleChange = useCallback(
    (value: string) => {
      const size = getFontSize(value);

      if (selectedComponent) {
        dispatch(
          setSelectedComponentDataValue({
            key: COMPONENT_ATTRIBUTE.HEADING_LEVEL,
            value: value.toLocaleLowerCase(),
          })
        );
        dispatch(
          setSelectedComponentDataValue({
            key: COMPONENT_ATTRIBUTE.FONT_SIZE,
            value: size,
          })
        );
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch, selectedComponent]
  );

  return (
    <SidebarSection
      title="Heading level"
      child={
        <HeadingLevelField
          headingLevel={headingLevel as string}
          handleChange={handleChange}
        />
      }
    />
  );
};
