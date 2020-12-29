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
    backgroundColor: "#fffeb5",
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

const productData = [createProductData(1, "Virgin Coconut Oil", 10, 10, 6000)];
const nonOperationalData = [createNonOperationalData(1, "Virgin Coconut Oil")];
const machineData = [
  createMachineData(1, "Stainless Grater", "6/20/2018"),
  createMachineData(2, "Hydraulic Presser/Expeller", "6/20/2018"),
  createMachineData(
    3,
    "Fermenting pail(20 L cap.)-transparent -cylindrical",
    "6/20/2018"
  ),
  createMachineData(4, "Collecting Jars (20 L cap.)", "6/20/2018"),
  createMachineData(5, "Plastic Crate", "9/19/2017"),
  createMachineData(6, "Stainless Basin", "9/19/2017"),
  createMachineData(7, "Dehusker", "9/19/2017"),
  createMachineData(8, "Hot Air Sealer", "9/19/2017"),
];

export default function VCOBox() {
  const classes = useStyles();

  return (
    <>
      <Paper className={`${classes.grandTotal} ${classes.root}`}>
        <GridContainer className={classes.headcontainer}>
          <GridItem xs={12} sm={6} md={3}>
            <Typography
              variant="title"
              noWrap
              className={classes.tableheadstyle}
            >
              Region:
            </Typography>
            <Typography variant="subheading" noWrap>
              VI
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
            <Typography variant="subheading">12</Typography>
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
              14
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
                Province
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
                            <TableCell>200 nuts/day</TableCell>
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
                              Target Market based on the RMA results
                            </TableCell>
                            <TableCell>Local</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.tableheadstyle}
                            >
                              Actual Target
                            </TableCell>
                            <TableCell>Local</TableCell>
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
                            <TableCell>Tangalan/ Panayakan</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.tableheadstyle}
                            >
                              Name of CBO
                            </TableCell>
                            <TableCell>Panayakan SCFO</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.tableheadstyle}
                            >
                              CBO Leader
                            </TableCell>
                            <TableCell>Monica Española</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.tableheadstyle}
                            >
                              Contact Number
                            </TableCell>
                            <TableCell>09089223076</TableCell>
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
                            <TableCell>200 nuts/day</TableCell>
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
                              Target Market based on the RMA results
                            </TableCell>
                            <TableCell>Local</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.tableheadstyle}
                            >
                              Actual Target
                            </TableCell>
                            <TableCell>Local</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.tableheadstyle}
                            >
                              Remarks
                            </TableCell>
                            <TableCell></TableCell>
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
                              manpower and market constraints
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
                            <TableCell>
                              CBO entreprenurial reorientation and values
                              formation: product promotion and consolidation
                            </TableCell>
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
