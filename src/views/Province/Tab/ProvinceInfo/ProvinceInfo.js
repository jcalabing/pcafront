import React from "react";
import { Typography } from "@material-ui/core";
import ActionButton from "components/ActionButton/ActionButton";
import { Edit } from "@material-ui/icons";

export default function ProvinceInfo(props) {
  const { title, body, onClick } = props;
  return (
    <>
      <Typography variant="h3" component="h2" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {body}
      </Typography>
      <ActionButton color="info" startIcon={<Edit />} onClick={onClick}>
        Edit
      </ActionButton>
    </>
  );
}
