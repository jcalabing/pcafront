import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import CoirTab from "./Tab/Coir/CoirTab";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function Kcontent() {
  const classes = useStyles();
  return (
    <CustomTabs
      plain
      headerColor="info"
      tabs={[
        {
          tabName: "COIR",
          tabContent: <CoirTab />,
        },
        {
          tabName: "VCO",
          tabContent: <></>,
        },
        {
          tabName: "COCOSAP Sugar",
          tabContent: <></>,
        },
        {
          tabName: "Others",
          tabContent: <></>,
        },
      ]}
    />
  );
}
