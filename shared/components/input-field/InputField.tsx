import React from "react";
import "./input-field.scss";
import { Checkbox, Form } from "antd";
import { useAppSelector } from "@/shared/lib/store/store.hooks";
import { RootState } from "@/shared/lib/store/store";

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
  const defaultState = useAppSelector((store: RootState) => store.default);

  let InputComponent: any = "input";
  if (textarea) {
    InputComponent = "textarea";
  } else if (select) {
    InputComponent = "select";
  } else if (checkbox) {
    InputComponent = Checkbox;
  }

  return (
    <div
      className={`field ${defaultState.theme} ${errorMessage ? "error" : ""}`}
    >
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
            value={props.value}
            type={type}
          />
        )}
        {select && (
          <InputComponent
            {...props}
            id={name}
            name={name}
            placeholder={placeholder}
            value={props.value}
            type={InputComponent === "input" ? (type ? "number" : "") : ""}
          >
            {/* <option value=""></option> */}
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
