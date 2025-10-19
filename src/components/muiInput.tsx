import TextField from "@mui/material/TextField";
import React from "react";
import { FormikProps } from "formik";
import { JSX } from "react";
import { useTheme } from "../context/theme";

type PropsType = {
  formik: any;
  keyName: string;
  label: string;
};

export default function MuiInput({
  formik,
  keyName,
  label,
}: PropsType): JSX.Element {
  const { theme } = useTheme();
  const isDark: boolean = theme === "dark";
  const border: string = isDark ? "1px solid #3d3a3a" : "1px solid #e5d5d5";
  return (
    <TextField
      id="outlined-basic"
      name={keyName}
      value={formik.values[keyName]}
      onChange={formik.handleChange}
      helperText={
        formik.errors[keyName] && formik.touched[keyName]
          ? formik.errors[keyName]
          : ""
      }
      onBlur={formik.handleBlur}
      label={label}
      multiline={keyName === "message" ? true : false}
      minRows={5}
      variant="outlined"
      sx={{
        width: "100%",
        "& .MuiInputLabel-root": {
          color: isDark ? "white" : "black",
        },
        "& .MuiInputBase-input": {
          color: isDark ? "white" : "black",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: border,
          outline: "none",
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
          border: border,
          outline: "none",
        },
        "& .Mui-focused.MuiInputLabel-root": {
          color: "gray",
        },
        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
          border: border,
          outline: "none",
        },
        "& .MuiFormHelperText-root": {
          color: "red",
          marginLeft: "4px",
        },
      }}
    />
  );
}
