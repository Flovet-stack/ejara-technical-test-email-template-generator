import { InputField } from "@/shared/components/input-field/InputField";
import { SidebarSection } from "@/shared/components/sidebar-section/SidebarSection";
import { setSelectedComponentDataValue } from "@/shared/lib/store/features";
import { RootState } from "@/shared/lib/store/store";
import { useAppDispatch, useAppSelector } from "@/shared/lib/store/store.hooks";
import { COMPONENT_ATTRIBUTE, ComponentAttributeValues } from "@/shared/types";
import React, { useCallback } from "react";

interface FontFieldProps {
  fontSize: string;
  fontWeight: string;
  fontFamily: string;
  handleChange: (key: keyof ComponentAttributeValues, value: string) => void;
}

const FontField: React.FC<FontFieldProps> = ({
  fontFamily,
  fontWeight,
  fontSize,
  handleChange,
}) => {
  return (
    <div className="w-full">
      <InputField
        name="font-family"
        value={fontFamily}
        placeholder="Font family"
        label="Font family"
        onChange={(e) =>
          handleChange(COMPONENT_ATTRIBUTE.FONT_FAMILY, e.target.value)
        }
      />
      <div className="flex gap-1">
        <InputField
          name="font-size"
          value={fontSize}
          placeholder="Font size"
          label="Font size"
          onChange={(e) =>
            handleChange(COMPONENT_ATTRIBUTE.FONT_SIZE, e.target.value)
          }
        />
        <InputField
          name="font-weight"
          value={fontWeight}
          placeholder="Font weight"
          label="Font weight"
          options={[
            {
              key: "1",
              label: "Regular",
              value: "regular",
            },
            {
              key: "1",
              label: "Bold",
              value: "bold",
            },
          ]}
          select
          onChange={(e) =>
            handleChange(COMPONENT_ATTRIBUTE.FONT_WEIGHT, e.target.value)
          }
        />
      </div>
    </div>
  );
};

export const FontEditor = () => {
  const dispatch = useAppDispatch();
  const editorState = useAppSelector((store: RootState) => store.editor);

  const { selectedComponent } = editorState;
  const size = selectedComponent?.data[COMPONENT_ATTRIBUTE.FONT_SIZE];
  const weight = selectedComponent?.data[COMPONENT_ATTRIBUTE.FONT_WEIGHT];
  const family = selectedComponent?.data[COMPONENT_ATTRIBUTE.FONT_FAMILY];

  const handleChange = useCallback(
    (key: keyof ComponentAttributeValues, value: string) => {
      if (selectedComponent) {
        dispatch(
          setSelectedComponentDataValue({
            key,
            value,
          })
        );
      }
    },
    [dispatch, selectedComponent]
  );

  return (
    <SidebarSection
      title="Font"
      child={
        <FontField
          fontFamily={family as string}
          fontSize={size as unknown as string}
          fontWeight={weight as string}
          handleChange={(key, value) => handleChange(key, value)}
        />
      }
    />
  );
};
