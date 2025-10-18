import TextField from "@mui/material/TextField";
import React from "react";
import { FormikProps } from "formik";
import { JSX } from "react";

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
          color: "white",
        },
        "& .MuiInputBase-input": {
          color: "white",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "1px solid #3d3a3a",
          outline: "none",
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
          border: "1px solid #3d3a3a",
          outline: "none",
        },
        "& .Mui-focused.MuiInputLabel-root": {
          color: "gray",
        },
        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
          border: "1px solid #3d3a3a",
          outline:"none"
        },
        "& .MuiFormHelperText-root": {
          color: "red",
          marginLeft: "4px",
        },
      }}
    />
  );
}
