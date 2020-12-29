import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import DatePicker from "components/DatePicker";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Button from "components/CustomButtons/Button.js";

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
  submit: {
    marginTop: 20,
    width: "100%",
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
export default function SidePanel() {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Coco Hub Project</h4>
        <p className={classes.cardCategoryWhite}>
          Capiz Small Coconut Farmers Marketing Cooperative (CASCOFAMCO)
        </p>
      </CardHeader>
      <CardBody>
        <GridContainer>
          <GridItem xs={6} md={12}>
            <DatePicker label="From" />
          </GridItem>
          <GridItem xs={6} lg={12}>
            <DatePicker label="To" />
          </GridItem>
          <GridItem xs={12}>
            <Button color="info" className={classes.submit}>
              Generate
            </Button>
          </GridItem>
        </GridContainer>
      </CardBody>
    </Card>
  );
}
