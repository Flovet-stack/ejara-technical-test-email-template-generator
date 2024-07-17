import { InputField } from "@/shared/components/input-field/InputField";
import { SidebarSection } from "@/shared/components/sidebar-section/SidebarSection";
import { setSelectedComponentDataValue } from "@/shared/lib/store/features";
import { RootState } from "@/shared/lib/store/store";
import { useAppDispatch, useAppSelector } from "@/shared/lib/store/store.hooks";
import { COMPONENT_ATTRIBUTE } from "@/shared/types";
import React, { useCallback } from "react";

interface TextContentFieldProps {
  content: string;
  handleChange: (value: string) => void;
}

const TextContentField: React.FC<TextContentFieldProps> = ({
  content,
  handleChange,
}) => {
  return (
    <InputField
      name="text-content"
      textarea
      value={content}
      placeholder="Enter content here"
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export const TextContentEditor = () => {
  const dispatch = useAppDispatch();
  const editorState = useAppSelector((store: RootState) => store.editor);

  const { selectedComponent } = editorState;
  const content = selectedComponent?.data[COMPONENT_ATTRIBUTE.TEXT_CONTENT];

  const handleChange = useCallback(
    (value: string) => {
      if (selectedComponent) {
        dispatch(
          setSelectedComponentDataValue({
            key: COMPONENT_ATTRIBUTE.TEXT_CONTENT,
            value,
          })
        );
      }
    },
    [dispatch, selectedComponent]
  );

  return (
    <SidebarSection
      title="Content"
      child={
        <TextContentField
          content={content as string}
          handleChange={handleChange}
        />
      }
      collapsible={"disabled"}
    />
  );
};
