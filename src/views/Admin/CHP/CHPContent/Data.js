import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    color: "#13A446",
  },
});

function createData(
  product,
  targetProduction,
  actualProduction,
  targetSales,
  actualSales
) {
  return {
    product,
    targetProduction,
    actualProduction,
    targetSales,
    actualSales,
  };
}

const rows = [
  createData("Copra", 180000, 79094, 3330000, 1893170),
  createData("Cooking Oil", 36000, 325, 3420000, 353796),
  createData("Crude Oil", 120000, 37252, 4140000, 1562796),
  createData("Copra Meal", 79200, 28303, 950000, 264323),
  createData("Coco Coir/ Fiber", 120000, 2801, 1200000, 53054),
  createData("Coco peat/ Dust", 240000, 55215, 480000, 76005),
  createData("Ropes/hanks", 24000, 2456, 168000, 20890),
  createData("Geonet", 600, 400, 1440000, 1021980),
  createData("Virgin Coconut Oil", 600, 74, 528000, 50410),
  createData("Massage Oil", 360, 6, 316800, 3015),
  createData("Regular Bath soap", 144, 2400, 60000, 3920),
  createData("VCO Soap", 2400, 102, 72000, 4665),
  createData("Husk", 480000, 4024, 240000, 1462),
  createData("Vinegar", 12000, 93, 276000, 2035),
];

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default function Data() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.root}>Product</TableCell>
            <TableCell className={classes.root} align="right">
              Target Production
            </TableCell>
            <TableCell className={classes.root} align="right">
              Actual Production
            </TableCell>
            <TableCell className={classes.root} align="right">
              Target Sales
            </TableCell>
            <TableCell className={classes.root} align="right">
              Actual Sales
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.product}
              </TableCell>
              <TableCell align="right">{row.targetProduction}</TableCell>
              <TableCell align="right">{row.actualProduction}</TableCell>
              <TableCell align="right">{row.targetSales}</TableCell>
              <TableCell align="right">{row.actualSales}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
