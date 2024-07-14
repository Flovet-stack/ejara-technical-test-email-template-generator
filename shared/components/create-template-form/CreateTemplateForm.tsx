import { ConfigProvider, Form, Input } from "antd";
import React, { useState } from "react";
import { CustomButton } from "../custom-button/CustomButton";
import { useAppSelector } from "@/shared/lib/store/store.hooks";
import { RootState } from "@/shared/lib/store/store";
import {
  setLeftEditorMenuState,
  setSelectedTemplate,
  setTemplatesState,
} from "@/shared/lib/store/features";
import { useDispatch } from "react-redux";
import { EDITOR, Template } from "@/shared/types";
import { v4 as uuidv4 } from "uuid";
import { InputField } from "../input-field/InputField";
import "./create-template-form.scss";

interface CreateTemplateFormProps {
  closeModal?: () => void;
}

export const CreateTemplateForm: React.FC<CreateTemplateFormProps> = ({
  closeModal,
}) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const defaultState = useAppSelector((store: RootState) => store.default);
  const editorState = useAppSelector((store: RootState) => store.editor);
  const templatesState = useAppSelector((store: RootState) => store.templates);
  const [saveOptions, setSaveOptions] = useState<boolean>(false);
  const [templateToOpen, setTemplateToOpen] = useState<Template | null>(null);
  const [error, setError] = useState<string>("");

  const { selectedTemplate } = editorState;
  const isDarkTheme = defaultState.theme === "dark";

  const openTemplate = (template: Template | null) => {
    if (closeModal) {
      closeModal();
    }
    if (template) {
      dispatch(
        setTemplatesState({
          templates: [template, ...(templatesState.templates as Template[])],
        })
      );
      dispatch(setSelectedTemplate(template));
      dispatch(setLeftEditorMenuState(EDITOR.EDITOR_MENU));
    }
  };

  const onFinish = (values: any) => {
    console.log("🚀 ~ onFinish ~ values:", values);
    setError("");
    if (!values.name) {
      setError("Please enter template name");
    } else {
      const template: Template = {
        id: uuidv4(),
        name: values.name,
      };
      if (selectedTemplate) {
        setTemplateToOpen(template);
        setSaveOptions(true);
      } else {
        openTemplate(template);
      }
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorBgContainer: isDarkTheme ? "#1c1c1c" : "#f4f4f4",
            colorTextPlaceholder: isDarkTheme ? "#f4f4f4" : "#1c1c1c",
            colorText: isDarkTheme ? "#fff" : "#1c1c1cf",
          },
        },
      }}
    >
      {saveOptions ? (
        <div className="create-template-form">
          <p className={`${isDarkTheme && "text-white"}`}>
            The <b>{selectedTemplate?.name}</b> template is currently opened. Do
            you want to save your changes before closing it?
          </p>
          <div className="flex gap-2 mt-4">
            <CustomButton
              theme="white"
              text="Save and continue"
              fullWidth
              onClick={() => openTemplate(templateToOpen)}
            />
            <CustomButton
              theme="black"
              text="Continue without saving"
              fullWidth
              onClick={() => openTemplate(templateToOpen)}
            />
          </div>
        </div>
      ) : (
        <Form
          form={form}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="create-template-form w-full"
        >
          <Form.Item name="name" wrapperCol={{ span: 24 }}>
            <InputField
              style={{ height: "40px", fontSize: "1em" }}
              name="name"
              placeholder="Enter template name"
              errorMessage={error}
              onChange={(e) => {
                setError("");
              }}
            />
          </Form.Item>

          <div className="w-full flex justify-end">
            <CustomButton theme="black" text="Create template" />
          </div>
        </Form>
      )}
    </ConfigProvider>
  );
};
