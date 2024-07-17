import { LoadComponentType } from "@/shared/components/editor-node/LoadComponentTypes";
import { RootState } from "@/shared/lib/store/store";
import { useAppSelector } from "@/shared/lib/store/store.hooks";
import { Html, render } from "@react-email/components";
import React, { useState } from "react";
import "./test-template.scss";
import { Form } from "antd";
import { CustomButton, InputField } from "@/shared/components";
import { Resend } from "resend";

export const TestTemplate = () => {
  const editorState = useAppSelector((store: RootState) => store.editor);
  const [form] = Form.useForm();
  const [error, setError] = useState<string>("");

  const { dnd } = editorState;

  const Template = () => (
    <Html lang="en">
      {dnd.nodes.map((node) => (
        <LoadComponentType key={node.id} node={node} />
      ))}
    </Html>
  );
  const resend = new Resend("re_123456789");

  const onFinish = async (values: any) => {
    setError("");
    if (!values.email) {
      setError("Please enter receiver's email");
    } else {
      await resend.emails.send({
        from: values.email,
        to: "lovetofloveto3@gmail.com",
        subject: "Testing a template",
        react: <Template />,
      });
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="test-template">
      <h3>Send Email with template</h3>
      <Form
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="create-template-form w-full"
      >
        <Form.Item name="email" wrapperCol={{ span: 24 }}>
          <InputField
            name="email"
            label="email"
            placeholder="Enter receiver email"
            errorMessage={error}
            onChange={(e) => {
              setError("");
            }}
          />
        </Form.Item>

        <div className="w-full flex justify-end">
          <CustomButton theme="black" text="Send email" />
        </div>
      </Form>
    </div>
  );
};
