import "./Button.css";
import { ButtonBase } from "@mui/material";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  children,
  disabled,
  onClick,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <ButtonBase
      className="custom-button"
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </ButtonBase>
  );
};
