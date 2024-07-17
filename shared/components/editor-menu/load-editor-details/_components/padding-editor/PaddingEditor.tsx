import { InputField } from "@/shared/components/input-field/InputField";
import { SidebarSection } from "@/shared/components/sidebar-section/SidebarSection";
import { setSelectedComponentDataValue } from "@/shared/lib/store/features";
import { RootState } from "@/shared/lib/store/store";
import { useAppDispatch, useAppSelector } from "@/shared/lib/store/store.hooks";
import { COMPONENT_ATTRIBUTE } from "@/shared/types";
import React, { useCallback } from "react";

interface PaddingFieldProps {
  padding: string;
  handleChange: (value: string) => void;
}

const PaddingField: React.FC<PaddingFieldProps> = ({
  padding,
  handleChange,
}) => {
  const updatePadding = (position: string, value: string) => {
    const padding = {
      top: "1px",
      right: "1px",
      bottom: "1px",
      left: "1px",
    };

    switch (position) {
      case "top":
        padding.top = value;
        break;
      case "right":
        padding.right = value;
        break;
      case "bottom":
        padding.bottom = value;
        break;
      case "left":
        padding.left = value;
        break;
      default:
        throw new Error(
          "Invalid position. Use 'top', 'right', 'bottom', or 'left'."
        );
    }

    return `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`;
  };

  const parsePaddingString = (paddingString: string) => {
    const parts = paddingString.split(" ");

    if (parts.length !== 4) {
      throw new Error(
        "Invalid padding string. Must contain exactly four values."
      );
    }

    const [top, right, bottom, left] = parts;

    return {
      top,
      right,
      bottom,
      left,
    };
  };

  return (
    <div className="flex gap-1">
      <InputField
        name="text-content"
        value={parsePaddingString(padding).top}
        placeholder="Enter content here"
        label="top"
        onChange={(e) => handleChange(updatePadding("top", e.target.value))}
      />
      <InputField
        name="text-content"
        value={parsePaddingString(padding).right}
        placeholder="Enter content here"
        label="right"
        onChange={(e) => handleChange(updatePadding("right", e.target.value))}
      />
      <InputField
        name="text-content"
        value={parsePaddingString(padding).bottom}
        placeholder="Enter content here"
        label="bottom"
        onChange={(e) => handleChange(updatePadding("bottom", e.target.value))}
      />
      <InputField
        name="text-content"
        label="left"
        value={parsePaddingString(padding).left}
        placeholder="Enter content here"
        onChange={(e) => handleChange(updatePadding("left", e.target.value))}
      />
    </div>
  );
};

export const PaddingEditor = () => {
  const dispatch = useAppDispatch();
  const editorState = useAppSelector((store: RootState) => store.editor);

  const { selectedComponent } = editorState;
  const content = selectedComponent?.data[COMPONENT_ATTRIBUTE.PADDING];
  const handleChange = useCallback(
    (value: string) => {
      if (selectedComponent) {
        dispatch(
          setSelectedComponentDataValue({
            key: COMPONENT_ATTRIBUTE.PADDING,
            value,
          })
        );
      }
    },
    [dispatch, selectedComponent]
  );
  return (
    <SidebarSection
      title="Padding"
      child={
        <PaddingField padding={content as string} handleChange={handleChange} />
      }
    />
  );
};
