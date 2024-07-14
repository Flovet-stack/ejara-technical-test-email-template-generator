import { CustomButton } from "@/shared/components/custom-button/CustomButton";
import { ModalWrapper } from "@/shared/components/modal-wrapper/ModalWrapper";
import { ElementPlusIcon } from "@/shared/icons";
import { setLeftEditorMenuState } from "@/shared/lib/store/features";
import { RootState } from "@/shared/lib/store/store";
import { useAppDispatch, useAppSelector } from "@/shared/lib/store/store.hooks";
import { EDITOR } from "@/shared/types";
import { Modal } from "antd";
import React, { useState } from "react";

export const EditorActionsButton = () => {
  const dispatch = useAppDispatch();
  const editorState = useAppSelector((store: RootState) => store.editor);
  const defaultState = useAppSelector((store: RootState) => store.default);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { selectedTemplate } = editorState;
  const isDarkTheme = defaultState.theme === "dark";

  const handleShowEditorActions = () => {
    if (!selectedTemplate) {
      showModal();
    } else {
      dispatch(setLeftEditorMenuState(EDITOR.EDITOR_MENU));
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const ModalActions = () => {
    return (
      <div className="modal-actions w-full">
        <CustomButton
          key={1}
          theme="black"
          text="Ok"
          onClick={handleCloseModal}
        />
      </div>
    );
  };

  return (
    <div className={`templates-menu ${defaultState.theme}`}>
      <CustomButton
        theme="sidebar-button"
        icon={<ElementPlusIcon />}
        onClick={handleShowEditorActions}
      />
      <ModalWrapper>
        <Modal
          title="Select a template"
          open={isModalOpen}
          onCancel={handleCloseModal}
          footer={[<ModalActions key={1} />]}
        >
          <p className={`${isDarkTheme && "text-white"}`}>
            There is no opened template, please open one first
          </p>
        </Modal>
      </ModalWrapper>
    </div>
  );
};
