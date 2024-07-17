import { InputField } from "@/shared/components/input-field/InputField";
import { SidebarSection } from "@/shared/components/sidebar-section/SidebarSection";
import { setSelectedComponentDataValue } from "@/shared/lib/store/features";
import { RootState } from "@/shared/lib/store/store";
import { useAppDispatch, useAppSelector } from "@/shared/lib/store/store.hooks";
import { COMPONENT_ATTRIBUTE } from "@/shared/types";
import React, { useCallback } from "react";

interface UrlFieldProps {
  url: string;
  handleChange: (value: string) => void;
}

const UrlField: React.FC<UrlFieldProps> = ({ url, handleChange }) => {
  return (
    <InputField
      name="text-content"
      value={url}
      placeholder="Enter content here"
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export const UrlEditor = () => {
  const dispatch = useAppDispatch();
  const editorState = useAppSelector((store: RootState) => store.editor);

  const { selectedComponent } = editorState;
  const url = selectedComponent?.data[COMPONENT_ATTRIBUTE.URL];

  const handleChange = useCallback(
    (value: string) => {
      if (selectedComponent) {
        dispatch(
          setSelectedComponentDataValue({
            key: COMPONENT_ATTRIBUTE.URL,
            value,
          })
        );
      }
    },
    [dispatch, selectedComponent]
  );

  return (
    <SidebarSection
      title="Url"
      child={<UrlField url={url as string} handleChange={handleChange} />}
    />
  );
};
