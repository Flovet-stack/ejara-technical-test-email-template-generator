import { InputField } from "@/shared/components/input-field/InputField";
import { SidebarSection } from "@/shared/components/sidebar-section/SidebarSection";
import { setSelectedComponentDataValue } from "@/shared/lib/store/features";
import { RootState } from "@/shared/lib/store/store";
import { useAppDispatch, useAppSelector } from "@/shared/lib/store/store.hooks";
import { COMPONENT_ATTRIBUTE, ComponentAttributeValues } from "@/shared/types";
import React, { useCallback } from "react";

interface FontFieldProps {
  width: string;
  height: string;
  handleChange: (key: keyof ComponentAttributeValues, value: string) => void;
}

const FontField: React.FC<FontFieldProps> = ({
  width,
  height,
  handleChange,
}) => {
  return (
    <div className="w-full">
      <div className="flex gap-1">
        <InputField
          name="width"
          value={width}
          placeholder="Button width"
          label="Button width"
          onChange={(e) =>
            handleChange(COMPONENT_ATTRIBUTE.BUTTON_WIDTH, e.target.value)
          }
        />
        <InputField
          name="height"
          value={height}
          placeholder="Button height"
          label="Button height"
          onChange={(e) =>
            handleChange(COMPONENT_ATTRIBUTE.BUTTON_HEIGHT, e.target.value)
          }
        />
      </div>
    </div>
  );
};

export const ButtonSizeEditor = () => {
  const dispatch = useAppDispatch();
  const editorState = useAppSelector((store: RootState) => store.editor);

  const { selectedComponent } = editorState;
  const height = selectedComponent?.data[COMPONENT_ATTRIBUTE.BUTTON_HEIGHT];
  const width = selectedComponent?.data[COMPONENT_ATTRIBUTE.BUTTON_WIDTH];

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
      title="Button size"
      child={
        <FontField
          width={width as string}
          height={height as string}
          handleChange={(key, value) => handleChange(key, value)}
        />
      }
    />
  );
};
