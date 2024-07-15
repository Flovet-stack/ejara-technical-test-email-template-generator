import React, { useState } from "react";
import "./templates-menu.scss";
import { TemplateMenuCard } from "./TemplateMenuCard";
import { useAppSelector } from "@/shared/lib/store/store.hooks";
import { RootState } from "@/shared/lib/store/store";
import { SidebarSection } from "@/shared/components/sidebar-section/SidebarSection";
import { useDispatch } from "react-redux";
import { EDITOR, Template } from "@/shared/types";
import {
  setLeftEditorMenuState,
  setSelectedTemplate,
} from "@/shared/lib/store/features";
import { ConfigProvider, Modal } from "antd";
import { CustomButton } from "@/shared/components/custom-button/CustomButton";
import { ModalWrapper } from "@/shared/components/modal-wrapper/ModalWrapper";

export const TemplatesMenu = () => {
  const dispatch = useDispatch();
  const templatesState = useAppSelector((store: RootState) => store.templates);
  const editorState = useAppSelector((store: RootState) => store.editor);
  const defaultState = useAppSelector((store: RootState) => store.default);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [templateToOpen, setTemplateToOpen] = useState<Template | null>(null);

  const { templates } = templatesState;
  const { selectedTemplate } = editorState;
  const isDarkTheme = defaultState.theme === "dark";

  const openTemplate = (template: Template) => {
    dispatch(setSelectedTemplate(template));
    dispatch(setLeftEditorMenuState(EDITOR.EDITOR_MENU));
  };

  const handleSetActiveTemplate = (template: Template) => {
    if (selectedTemplate !== template) {
      if (selectedTemplate) {
        setTemplateToOpen(template);
        showModal();
      } else {
        openTemplate(template);
      }
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveAndContinue = () => {
    if (templateToOpen) {
      openTemplate(templateToOpen);
    }
  };

  const ModalActions = () => {
    return (
      <div className="modal-actions w-full">
        <CustomButton
          key={1}
          theme="light"
          text="Cancel"
          onClick={handleCloseModal}
        />
        <CustomButton
          key={1}
          theme="black"
          text="Save and continue"
          onClick={handleSaveAndContinue}
        />
      </div>
    );
  };

  return (
    <SidebarSection
      title="Select Template"
      collapsible={"disabled"}
      child={
        <div className={`templates-menu ${defaultState.theme}`}>
          {templates?.map((template) => (
            <TemplateMenuCard
              template={template}
              key={template.id}
              onClick={() => handleSetActiveTemplate(template)}
            />
          ))}
          <ModalWrapper>
            <Modal
              title="Save Changes"
              open={isModalOpen}
              onCancel={handleCloseModal}
              footer={[<ModalActions key={1} />]}
            >
              <p className={`${isDarkTheme && "text-white"}`}>
                The <b>{selectedTemplate?.name}</b> template is currently
                opened. Do you want to save your changes before closing it?
              </p>
            </Modal>
          </ModalWrapper>
        </div>
      }
    />
  );
};
