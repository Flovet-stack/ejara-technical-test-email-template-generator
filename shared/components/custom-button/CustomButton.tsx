import React, { ReactNode } from "react";
import { SpinnerCircular } from "spinners-react";
import "./CustomButton.scss";

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  text?: string;
  loading?: boolean;
  loadingText?: string;
  smallPadding?: boolean;
  loaderPosition?: "left" | "right";
  theme: "white" | "light" | "dark" | "black";
  width?: number;
  height?: number;
  fullWidth?: true;
  loaderSize?: number;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  icon,
  iconPosition,
  text,
  loading,
  loadingText,
  loaderPosition,
  theme,
  width,
  height,
  smallPadding,
  fullWidth,
  loaderSize,
  ...props
}) => {
  const LoadingSpinner: React.FC = () => (
    <SpinnerCircular
      color="white"
      style={{ height: loaderSize ?? 22, width: loaderSize ?? 22 }}
    />
  );
  return (
    <button
      {...props}
      className={`custom-button ${smallPadding ? "icon-btn" : ""} ${theme} ${
        fullWidth ? "w-full" : ""
      }`}
      style={{ width, height }}
    >
      {loading && loaderPosition !== "right" && <LoadingSpinner />}
      {icon && iconPosition !== "right" && <div className="icon">{icon}</div>}
      {text &&
        (loading ? <span>{loadingText ?? text}</span> : <span>{text}</span>)}
      {icon && iconPosition === "right" && <div className="icon">{icon}</div>}
      {loading && loaderPosition === "right" && <LoadingSpinner />}
    </button>
  );
};
