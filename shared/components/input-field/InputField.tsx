import React from "react";
import "./input-field.scss";
import { Checkbox, Form } from "antd";

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  placeholder?: string;
  label?: string;
  textarea?: boolean;
  select?: boolean;
  checkbox?: boolean;
  options?: any;
  type?: string;
  errorMessage?: string;
};

export const InputField: React.FC<InputFieldProps> = ({
  name,
  placeholder,
  label,
  size: _,
  options,
  select,
  textarea,
  type,
  checkbox,
  errorMessage,
  ...props
}) => {
  let InputComponent: any = "input";
  if (textarea) {
    InputComponent = "textarea";
  } else if (select) {
    InputComponent = "select";
  } else if (checkbox) {
    InputComponent = Checkbox;
  }

  return (
    <div className={`field ${errorMessage ? "error" : ""}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <Form.Item
        help={errorMessage}
        validateStatus={errorMessage ? "error" : "success"}
      >
        {!select && (
          <InputComponent
            {...props}
            id={name}
            name={name}
            placeholder={placeholder}
            type={InputComponent === "input" ? (type ? "number" : "") : ""}
          />
        )}
        {select && (
          <InputComponent
            {...props}
            id={name}
            name={name}
            placeholder={placeholder}
            type={InputComponent === "input" ? (type ? "number" : "") : ""}
          >
            <option value=""></option>
            {options &&
              options.map((option: any, index: number) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
          </InputComponent>
        )}
      </Form.Item>
    </div>
  );
};
