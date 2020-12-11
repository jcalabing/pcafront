import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import DatePicker from "components/DatePicker";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

const columns = [{ field: "project", headerName: "Project", width: 150 }];

const rows = [
  { id: 1, project: "Aklan" },
  { id: 2, project: "Antique" },
  { id: 3, project: "Guimaras" },
  { id: 4, project: "Iloilo" },
  { id: 5, project: "Negros Occidental" },
];
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
export default function SidePanel() {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>KAANIB</h4>
        <p className={classes.cardCategoryWhite}>
          Enterprise Development Project
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
            <br />
            <div style={{ height: 320, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                checkboxSelection
                autoPageSize="true"
                hideFooter="true"
              />
            </div>
          </GridItem>
        </GridContainer>
      </CardBody>
    </Card>
  );
}
