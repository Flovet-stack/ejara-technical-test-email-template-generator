import { SidebarSection } from "@/shared/components/sidebar-section/SidebarSection";
import { setSelectedComponentDataValue } from "@/shared/lib/store/features";
import { RootState } from "@/shared/lib/store/store";
import { useAppDispatch, useAppSelector } from "@/shared/lib/store/store.hooks";
import { COMPONENT_ATTRIBUTE } from "@/shared/types";
import { ColorPicker, ColorPickerProps, GetProp, Space } from "antd";
import React, { useCallback, useState } from "react";

interface ColorPickerFieldProps {
  color: string;
  handleChange: (value: string) => void;
}
type Color = GetProp<ColorPickerProps, "value">;
type Format = GetProp<ColorPickerProps, "format">;

const ColorPickerField: React.FC<ColorPickerFieldProps> = ({
  color,
  handleChange,
}) => {
  const [formatHex, setFormatHex] = useState<Format | undefined>("hex");

  const hexString = React.useMemo<string>(() => {
    if (typeof color === "string") {
      return color;
    }
    return (color as any).toHexString ? (color as any).toHexString() : color;
  }, [color]);

  return (
    <Space>
      <ColorPicker
        format={formatHex}
        value={color}
        size="small"
        onChange={(value) => {
          const colorValue =
            typeof value === "object" && "toHexString" in value
              ? value.toHexString()
              : value;
          handleChange(colorValue as string);
        }}
        onFormatChange={setFormatHex}
      />
      <span>{hexString}</span>
    </Space>
  );
};

export const TextColorEditor = () => {
  const dispatch = useAppDispatch();
  const editorState = useAppSelector((store: RootState) => store.editor);

  const { selectedComponent } = editorState;
  const color = selectedComponent?.data[COMPONENT_ATTRIBUTE.TEXT_COLOR];

  const handleChange = useCallback(
    (value: string) => {
      if (selectedComponent) {
        dispatch(
          setSelectedComponentDataValue({
            key: COMPONENT_ATTRIBUTE.TEXT_COLOR,
            value,
          })
        );
      }
    },
    [dispatch, selectedComponent]
  );

  return (
    <SidebarSection
      title="Color"
      child={
        <ColorPickerField color={color as string} handleChange={handleChange} />
      }
    />
  );
};
