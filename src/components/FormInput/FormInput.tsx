import "./FormInput.css";
import { KeyboardEvent } from "react";
import { Box, InputBase, Typography } from "@mui/material";

interface FormInputProps {
  title?: string;
  type: string;
  fieldName: string;
  placeholder?: string;
  endAdornment?: React.ReactNode;
  indication?: string;
  warning?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => Promise<void>;
}

export const FormInput = ({
  title,
  type,
  fieldName,
  placeholder,
  endAdornment,
  indication,
  warning,
  onChange,
  onSubmit,
}: FormInputProps): JSX.Element => {
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && onSubmit) {
      onSubmit();
    }
  };

  return (
    <Box className="form-input">
      <Typography className="form-input__title" variant="body2">
        {title}
      </Typography>

      <Box className="form-input__container">
        <InputBase
          className="input"
          type={type}
          name={fieldName}
          placeholder={placeholder}
          onKeyDown={handleKeyPress}
          onChange={onChange}
          endAdornment={endAdornment}
        ></InputBase>
      </Box>

      {indication && (
        <Typography className="indication-label">{indication}</Typography>
      )}

      {warning && (
        <Typography className="warning-label" color="error">
          {warning}
        </Typography>
      )}
    </Box>
  );
};
