import { ConfigProvider, Form, message } from "antd";
import React, { useState } from "react";
import { CustomButton } from "../custom-button/CustomButton";
import { useAppDispatch, useAppSelector } from "@/shared/lib/store/store.hooks";
import { RootState } from "@/shared/lib/store/store";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { InputField } from "../input-field/InputField";
import "./create-variable-form.scss";
import { EditorVariable } from "@/shared/types";
import { setVariablesState } from "@/shared/lib/store/features";
import { CancelIcon } from "@/shared/icons/cancel-icon";

interface CreateVariableFormProps {
  data?: EditorVariable;
  onClose?: () => void;
}

export const CreateVariableForm: React.FC<CreateVariableFormProps> = ({
  data,
  onClose,
}) => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const defaultState = useAppSelector((store: RootState) => store.default);
  const variablesState = useAppSelector((store: RootState) => store.variables);
  const [messageApi, contextHolder] = message.useMessage();

  const { variables } = variablesState;
  const isDarkTheme = defaultState.theme === "dark";

  const alertDuplicate = () => {
    messageApi.info("A variable with this name already exists");
  };

  const onFinish = (values: any) => {
    const duplicate = variables.find(
      (variable) => variable.name === values.name
    );
    if (data) {
      const updatedVariables = variables.map((variable) =>
        variable.id === data.id ? { ...variable, ...values } : variable
      );
      onClose && onClose();
      dispatch(
        setVariablesState({
          showForm: false,
          variables: updatedVariables,
        })
      );
    } else {
      if (duplicate) {
        alertDuplicate();
      } else {
        const variable: EditorVariable = {
          id: uuidv4(),
          ...values,
        };
        dispatch(
          setVariablesState({
            showForm: false,
            variables: [variable, ...variables],
          })
        );
      }
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="create-variable-form">
      {contextHolder}
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
        <Form
          form={form}
          name="basic"
          initialValues={{
            remember: true,
            name: data?.name,
            value: data?.value,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="create-template-form w-full"
        >
          <div className="flex gap-[5px]">
            <Form.Item name="name">
              <InputField
                type="text"
                name="name"
                label="name"
                placeholder="Name"
                // value={"test r"}
                required
              />
            </Form.Item>
            <Form.Item name="value">
              <InputField
                type="text"
                name="value"
                label="value"
                placeholder="Value"
                // value={"test r"}
                required
              />
            </Form.Item>
          </div>

          <div className="w-full flex gap-1">
            {data && (
              <CustomButton
                theme="light"
                icon={<CancelIcon />}
                type="button"
                onClick={onClose}
              />
            )}
            <CustomButton
              theme="black"
              text={`${data ? "Update" : "Create"} variable`}
              type="submit"
              fullWidth
            />
          </div>
        </Form>
      </ConfigProvider>
    </div>
  );
};
