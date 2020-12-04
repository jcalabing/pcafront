import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import Toolbar from "@material-ui/core/Toolbar";

import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";

import EditIcon from "@material-ui/icons/Edit";

import CustomTabs from "components/CustomTabs/CustomTabs.js";
import CustomButtons from "components/CustomButtons/Button.js";
import Popup from "components/Popup";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import InfoIcon from "@material-ui/icons/Info";

import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

import Typography from "@material-ui/core/Typography";
import UserProfile from "views/UserProfile/UserProfile";
import ProvinceBox from "lightbox/ProvinceBox/ProvinceBox";
import ActionButton from "components/ActionButton/ActionButton";
import ProvinceInfo from "./Tab/ProvinceInfo/ProvinceInfo";
import ProvinceCBO from "./Tab/ProvinceCBO/ProvinceCBO";
import ProvinceAdmin from "./Tab/ProvinceAdmin/ProvinceAdmin";

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
  title: {
    flexGrow: 1,
  },
};

const useStyles = makeStyles(styles);

export default function Provinces() {
  const classes = useStyles();
  const [openProvinceBox, setOpenProvinceBox] = useState(false);
  return (
    <>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={4}>
          <Card>
            <CardHeader color="primary">
              <Toolbar>
                <div className={classes.title}>
                  <h4 className={classes.cardTitleWhite}>Provinces</h4>
                  <p className={classes.cardCategoryWhite}>List of Provinces</p>
                </div>
              </Toolbar>
            </CardHeader>
            <CardBody>
              <div>
                <CustomButtons
                  onClick={() => {
                    setOpenProvinceBox(true);
                  }}
                  variant="outlined"
                  color="primary"
                  startIcon={<AddCircleRoundedIcon />}
                >
                  Add New
                </CustomButtons>
              </div>
              <Table
                tableHeaderColor="primary"
                tableHead={["Province", "Total CBO"]}
                tableData={[
                  ["Aklan", "14"],
                  ["Antique", "9"],
                  ["Guimaras", "5"],
                  ["Iloilo", "10"],
                  ["Negros Occidental", "11"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={8}>
          <CustomTabs
            title="Aklan"
            headerColor="info"
            tabs={[
              {
                tabName: "Information",
                tabIcon: InfoIcon,
                tabContent: (
                  <ProvinceInfo
                    title="Aklan"
                    body="Aklan, officially the Province of Aklan, is a province in
                  the Western Visayas region of the Philippines. Its capital
                  is Kalibo. The province is situated in the northwest
                  portion of Panay Island, bordering Antique to the
                  southwest, and Capiz to the east. Aklan faces the Sibuyan
                  Sea and Romblon province to the north."
                    onClick={() => {
                      setOpenProvinceBox(true);
                    }}
                  />
                ),
              },
              {
                tabName: "Admin",
                tabIcon: AccountCircleIcon,
                tabContent: <ProvinceAdmin />,
              },
              {
                tabName: "CBO",
                tabIcon: SupervisedUserCircleIcon,
                tabContent: <ProvinceCBO />,
              },
            ]}
          />
        </GridItem>
      </GridContainer>
      <Popup
        title="Province Form"
        openPopup={openProvinceBox}
        setOpenPopup={setOpenProvinceBox}
        fullWidth="true"
      >
        <ProvinceBox></ProvinceBox>
      </Popup>
      <Popup></Popup>
    </>
  );
}
