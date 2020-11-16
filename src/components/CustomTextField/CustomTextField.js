import { makeStyles, TextField } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  textField: {
    width: "100%",
  },
}));

export default function CustomTextInput(params) {
  const classes = useStyle();
  return (
    <TextField
      variant="outlined"
      className={classes.textField}
      label={params.labelText}
      type={params.type}
    />
  );
}
