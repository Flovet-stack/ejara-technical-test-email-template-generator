import React from "react";

interface ChevronRightIconProps {
  styles?: React.CSSProperties;
  rotate?: number; // Add a rotate prop
  width?: number;
}

export const ChevronRightIcon: React.FC<ChevronRightIconProps> = ({
  styles,
  rotate = 0,
  width,
}) => (
  <svg
    width={width ?? "24"}
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      ...styles,
      transform: `rotate(${rotate}deg)`,
      transition: "transform 0.3s ease-in-out",
    }}
  >
    <path
      d="M6.6825 15.4401L11.5725 10.5501C12.15 9.97256 12.15 9.02756 11.5725 8.45006L6.6825 3.56006"
      stroke="#1C1C1C"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
