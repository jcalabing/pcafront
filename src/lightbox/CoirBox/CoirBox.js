import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

const useStyles = makeStyles({
  table: {},
  root: {
    padding: 10,
    paddingBottom: 0,
    marginBottom: 10,
  },
  boxes: {
    marginBottom: 10,
  },
  grandTotal: {
    backgroundColor: "#9c27b0",
    padding: 10,
    paddingRight: 25,
    paddingLeft: 25,
  },
  header: {
    backgroundColor: "#a7b0e2",
    padding: 10,
    paddingRight: 25,
    paddingLeft: 25,
  },
  operational: {
    backgroundColor: "#96deff",
  },
  nonoperational: {
    backgroundColor: "#ffd7d7",
  },
  tableheadstyle: {
    color: "#13A446",
    fontWeight: 400,
    paddingRight: 10,
  },
  headcontainer: {
    width: "100%",
    display: "flex",
  },
  whiteColor: {
    color: "#fff",
  },
});

function createProductData(id, name, volume, quantitySales, income) {
  return { id, name, volume, quantitySales, income };
}
function createNonOperationalData(id, name, volume, quantitySales, income) {
  return { id, name, volume, quantitySales, income };
}

function createMachineData(id, machinery, dateReceived) {
  return {
    id,
    machinery,
    dateReceived,
  };
}

const productData = [
  createProductData(1, "Coco coir", 159, 6.0, 24, 4.0),
  createProductData(2, "Coco peat", 237, 9.0, 37, 4.3),
  createProductData(3, "Cocopole", 262, 16.0, 24, 6.0),
  createProductData(4, "Cocolog Small", 305, 3.7, 67, 4.3),
  createProductData(5, "Cocolog Medium", 356, 16.0, 49, 3.9),
  createProductData(6, "Cocolog Large", 159, 6.0, 24, 4.0),
  createProductData(7, "Coco Pole (1ft)", 237, 9.0, 37, 4.3),
  createProductData(8, "Coco Pole (2ft)", 262, 16.0, 24, 6.0),
  createProductData(9, "Coco Pole (3ft)", 305, 3.7, 67, 4.3),
  createProductData(10, "Twine", 356, 16.0, 49, 3.9),
  createProductData(11, "Hanks", 356, 16.0, 49, 3.9),
  createProductData(12, "Net", 356, 16.0, 49, 3.9),
  createProductData(13, "Geonet", 356, 16.0, 49, 3.9),
];
const nonOperationalData = [
  createNonOperationalData(1, "Coco coir", 159, 6.0, 24, 4.0),
  createNonOperationalData(2, "Coco peat", 237, 9.0, 37, 4.3),
  createNonOperationalData(3, "Cocopole", 262, 16.0, 24, 6.0),
  createNonOperationalData(4, "Cocolog Small", 305, 3.7, 67, 4.3),
  createNonOperationalData(5, "Cocolog Medium", 356, 16.0, 49, 3.9),
  createNonOperationalData(6, "Cocolog Large", 159, 6.0, 24, 4.0),
  createNonOperationalData(7, "Coco Pole (1ft)", 237, 9.0, 37, 4.3),
  createNonOperationalData(8, "Coco Pole (2ft)", 262, 16.0, 24, 6.0),
  createNonOperationalData(9, "Coco Pole (3ft)", 305, 3.7, 67, 4.3),
  createNonOperationalData(10, "Twine", 356, 16.0, 49, 3.9),
  createNonOperationalData(11, "Hanks", 356, 16.0, 49, 3.9),
  createNonOperationalData(12, "Net", 356, 16.0, 49, 3.9),
  createNonOperationalData(13, "Geonet", 356, 16.0, 49, 3.9),
];
const machineData = [
  createMachineData(1, "Wheel Barrow (100 kg-up cap.)", "6/20/2018"),
  createMachineData(2, "Shovel", "6/20/2018"),
  createMachineData(3, "Weighing Scale (platform)", "6/20/2018"),
  createMachineData(4, "Wheel Barrow (100 kg-up cap.)", "6/20/2018"),
  createMachineData(5, "Shovel", "9/19/2017"),
  createMachineData(6, "Weighing Scale (platform)", "9/19/2017"),
  createMachineData(7, "Sieving Machine (5.5 HP gasoline engine)", "9/19/2017"),
  createMachineData(
    8,
    "Twiner (3 spoolers, 1.3x1.5x0.5m dimension)",
    "9/19/2017"
  ),
  createMachineData(9, "Weaving loom (4x1.7x1.3m dimension)", "9/19/2017"),
];

export default function CoirBox() {
  const classes = useStyles();

  return (
    <>
      <Paper className={`${classes.grandTotal} ${classes.root}`}>
        <GridContainer className={classes.headcontainer}>
          <GridItem xs={12} sm={6} md={3}>
            <Typography
              variant="title"
              noWrap
              className={`${classes.tableheadstyle} ${classes.whiteColor}`}
            >
              Region:
            </Typography>
            <Typography
              variant="subheading"
              className={classes.whiteColor}
              noWrap
            >
              VI
            </Typography>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Typography
              variant="title"
              noWrap
              className={`${classes.tableheadstyle} ${classes.whiteColor}`}
            >
              Total CBO:
            </Typography>
            <Typography variant="subheading" className={classes.whiteColor}>
              12
            </Typography>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Typography
              variant="title"
              noWrap
              className={`${classes.tableheadstyle} ${classes.whiteColor}`}
            >
              Sites Operational:
            </Typography>
            <Typography
              variant="subheading"
              className={classes.whiteColor}
              noWrap
            >
              14
            </Typography>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Typography
              variant="title"
              noWrap
              className={`${classes.tableheadstyle} ${classes.whiteColor}`}
            >
              Sites Non-Operational:
            </Typography>
            <Typography
              variant="subheading"
              className={classes.whiteColor}
              noWrap
            >
              14
            </Typography>
          </GridItem>
        </GridContainer>
      </Paper>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <GridContainer className={classes.headcontainer}>
            <GridItem xs={12} sm={6} md={3}>
              <Typography
                variant="title"
                noWrap
                className={classes.tableheadstyle}
              >
                Province:
              </Typography>
              <Typography variant="subheading" noWrap>
                Aklan
              </Typography>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Typography
                variant="title"
                noWrap
                className={classes.tableheadstyle}
              >
                Total CBO:
              </Typography>
              <Typography variant="subheading">9</Typography>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Typography
                variant="title"
                noWrap
                className={classes.tableheadstyle}
              >
                Sites Operational:
              </Typography>
              <Typography variant="subheading" noWrap>
                7
              </Typography>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Typography
                variant="title"
                noWrap
                className={classes.tableheadstyle}
              >
                Sites Non-Operational:
              </Typography>
              <Typography variant="subheading" noWrap>
                2
              </Typography>
            </GridItem>
          </GridContainer>
        </AccordionSummary>
        <AccordionDetails>
          <GridContainer>
            <GridItem xs={12}>
              <Paper className={`${classes.operational} ${classes.root}`}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <TableContainer component={Paper} className={classes.boxes}>
                      <Table
                        className={classes.table}
                        size="small"
                        aria-label="a dense table"
                      >
                        <TableBody>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.tableheadstyle}
                            >
                              Municipality/ Barangay
                            </TableCell>
                            <TableCell>Lezo/Ibao</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.tableheadstyle}
                            >
                              Name of CBO
                            </TableCell>
                            <TableCell>
                              Ibao Coconut Farmers Organization
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.tableheadstyle}
                            >
                              CBO Leader
                            </TableCell>
                            <TableCell>Nieva Diaz</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.tableheadstyle}
                            >
                              Contact Number
                            </TableCell>
                            <TableCell>09198511457</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.tableheadstyle}
                            >
                              Month/Year Processing Facility Made (starts)
                              Operational
                            </TableCell>
                            <TableCell>2018</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.tableheadstyle}
                            >
                              Capacity Husks Per Day
                            </TableCell>
                            <TableCell>3000 husks/day</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.tableheadstyle}
                            >
                              Technical Training Conducted
                            </TableCell>
                            <TableCell>Yes</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.tableheadstyle}
                            >
                              Sites
                            </TableCell>
                            <TableCell>1</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.tableheadstyle}
                            >
                              Status
                            </TableCell>
                            <TableCell>Operational</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.tableheadstyle}
                            >
                              Remarks
                            </TableCell>
                            <TableCell>intermittent operation</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <TableContainer component={Paper} className={classes.boxes}>
                      <Table
                        className={classes.table}
                        size="small"
                        aria-label="a dense table"
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell className={classes.tableheadstyle}>
                              Machineries
                            </TableCell>
                            <TableCell
                              align="right"
                              className={classes.tableheadstyle}
                            >
                              Month/ Year M&E Received
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {machineData.map((row) => (
                            <TableRow key={row.id}>
                              <TableCell component="th" scope="row">
                                {row.machinery}
                              </TableCell>
                              <TableCell align="right">
                                {row.dateReceived}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={5}>
                    <TableContainer component={Paper} className={classes.boxes}>
                      <Table
                        className={classes.table}
                        size="small"
                        aria-label="a dense table"
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell className={classes.tableheadstyle}>
                              Kind of Product
                            </TableCell>
                            <TableCell
                              align="right"
                              className={classes.tableheadstyle}
                            >
                              Monthly Production
                            </TableCell>
                            <TableCell
                              align="right"
                              className={classes.tableheadstyle}
                            >
                              Quantity Sales
                            </TableCell>
                            <TableCell
                              align="right"
                              className={classes.tableheadstyle}
                            >
                              Income Generated
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {productData.map((row) => (
                            <TableRow key={row.id}>
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>
                              <TableCell align="right">{row.volume}</TableCell>
                              <TableCell align="right">
                                {row.quantitySales}
                              </TableCell>
                              <TableCell align="right">{row.income}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </GridItem>
                </GridContainer>
              </Paper>
            </GridItem>

            <GridItem xs={12}>
              <Paper className={`${classes.nonoperational} ${classes.root}`}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <TableContainer component={Paper} className={classes.boxes}>
                      <Table
                        className={classes.table}
                        size="small"
                        aria-label="a dense table"
                      >
                        <TableBody>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.tableheadstyle}
                            >
                              Municipality/ Barangay
                            </TableCell>
                            <TableCell>Malay/Napaan</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.tableheadstyle}
                            >
                              Name of CBO
                            </TableCell>
                            <TableCell>
                              Kalipunan ng Maliliit na Nagniniyog
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.tableheadstyle}
                            >
                              CBO Leader
                            </TableCell>
                            <TableCell>Sally Colesio</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.tableheadstyle}
                            >
                              Contact Number
                            </TableCell>
                            <TableCell>09284497017</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.tableheadstyle}
                            >
                              Month/Year Processing Facility Made (starts)
                              Operational
                            </TableCell>
                            <TableCell>2018</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.tableheadstyle}
                            >
                              Capacity Husks Per Day
                            </TableCell>
                            <TableCell>3000 husks/day</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.tableheadstyle}
                            >
                              Technical Training Conducted
                            </TableCell>
                            <TableCell>Yes</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.tableheadstyle}
                            >
                              Sites
                            </TableCell>
                            <TableCell>1</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.tableheadstyle}
                            >
                              Status
                            </TableCell>
                            <TableCell>Non-Operational</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.tableheadstyle}
                            >
                              Remarks
                            </TableCell>
                            <TableCell>
                              Decorticating machine transferred to CASCOFAMCO,
                              Ivisan, Capiz
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.tableheadstyle}
                            >
                              Reason for non-operational
                            </TableCell>
                            <TableCell>
                              Manpower and Market constraints
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.tableheadstyle}
                            >
                              Corrective Measures/ Action Plan
                            </TableCell>
                            <TableCell>for transfer</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <TableContainer component={Paper} className={classes.boxes}>
                      <Table
                        className={classes.table}
                        size="small"
                        aria-label="a dense table"
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell className={classes.tableheadstyle}>
                              Machineries
                            </TableCell>
                            <TableCell
                              align="right"
                              className={classes.tableheadstyle}
                            >
                              Month/ Year M&E Received
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {machineData.map((row) => (
                            <TableRow key={row.id}>
                              <TableCell component="th" scope="row">
                                {row.machinery}
                              </TableCell>
                              <TableCell align="right">
                                {row.dateReceived}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <TableContainer component={Paper} className={classes.boxes}>
                      <Table
                        className={classes.table}
                        size="small"
                        aria-label="a dense table"
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.tableheadstyle}
                            >
                              Kind of Product
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {nonOperationalData.map((row) => (
                            <TableRow key={row.id}>
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </GridItem>
                </GridContainer>
              </Paper>
            </GridItem>
          </GridContainer>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
