import React, { useState } from "react";
import "./dashboard-header.scss";
import { CustomButton } from "../custom-button/CustomButton";
import { AddIcon } from "@/shared/icons";
import { useAppSelector } from "@/shared/lib/store/store.hooks";
import { RootState } from "@/shared/lib/store/store";
import { EDITOR } from "@/shared/types";
import { ModalWrapper } from "../modal-wrapper/ModalWrapper";
import { Modal } from "antd";
import { CreateTemplateForm } from "../create-template-form/CreateTemplateForm";

export const DashboardHeader = () => {
  const defaultState = useAppSelector((store: RootState) => store.default);
  const editorState = useAppSelector((store: RootState) => store.editor);
  const [isCreateTemplateModalOpen, setIsCreateTemplateModalOpen] =
    useState(false);

  const { theme, leftEditorMenu } = defaultState;
  const { selectedTemplate } = editorState;

  const showModal = () => {
    setIsCreateTemplateModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsCreateTemplateModalOpen(false);
  };

  return (
    <div className={`dashboard-header ${theme}`}>
      <div className="corner">
        <div className="page-details">
          <div>
            <h2>{selectedTemplate ? "Template name" : "Welcome"}</h2>
            <h1>
              {selectedTemplate ? selectedTemplate.name : "List of Templates"}
            </h1>
          </div>
        </div>
      </div>
      <div className="center">DashboardHeader</div>
      <div className="corner">
        {leftEditorMenu === EDITOR.TEMPLATES_MENU && (
          <>
            <CustomButton
              theme="black"
              text="Create template"
              fullWidth
              onClick={showModal}
            />
            <ModalWrapper>
              <Modal
                title="Create a template"
                open={isCreateTemplateModalOpen}
                onCancel={handleCloseModal}
                footer={null}
                width={500}
              >
                <CreateTemplateForm closeModal={handleCloseModal} />
              </Modal>
            </ModalWrapper>
          </>
        )}
        {leftEditorMenu !== EDITOR.TEMPLATES_MENU && selectedTemplate && (
          <div className="w-full flex gap-2">
            <CustomButton
              theme="light"
              text="Preview"
              fullWidth
              onClick={showModal}
            />
            <CustomButton
              theme="black"
              text="Save"
              fullWidth
              onClick={showModal}
            />
          </div>
        )}
      </div>
    </div>
  );
};
