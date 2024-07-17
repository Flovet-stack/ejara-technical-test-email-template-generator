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

  const updatePadding = (
    currentPadding: string,
    position: string,
    value: string
  ) => {
    const parsedPadding = parsePaddingString(currentPadding);

    switch (position) {
      case "top":
        parsedPadding.top = value;
        break;
      case "right":
        parsedPadding.right = value;
        break;
      case "bottom":
        parsedPadding.bottom = value;
        break;
      case "left":
        parsedPadding.left = value;
        break;
      default:
        throw new Error(
          "Invalid position. Use 'top', 'right', 'bottom', or 'left'."
        );
    }

    return `${parsedPadding.top} ${parsedPadding.right} ${parsedPadding.bottom} ${parsedPadding.left}`;
  };

  return (
    <div className="flex gap-1">
      <InputField
        name="text-content"
        value={parsePaddingString(padding).top}
        placeholder="Enter content here"
        label="top"
        onChange={(e) =>
          handleChange(updatePadding(padding, "top", e.target.value))
        }
      />
      <InputField
        name="text-content"
        value={parsePaddingString(padding).right}
        placeholder="Enter content here"
        label="right"
        onChange={(e) =>
          handleChange(updatePadding(padding, "right", e.target.value))
        }
      />
      <InputField
        name="text-content"
        value={parsePaddingString(padding).bottom}
        placeholder="Enter content here"
        label="bottom"
        onChange={(e) =>
          handleChange(updatePadding(padding, "bottom", e.target.value))
        }
      />
      <InputField
        name="text-content"
        label="left"
        value={parsePaddingString(padding).left}
        placeholder="Enter content here"
        onChange={(e) =>
          handleChange(updatePadding(padding, "left", e.target.value))
        }
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
