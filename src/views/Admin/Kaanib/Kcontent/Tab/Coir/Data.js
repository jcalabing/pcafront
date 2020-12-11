import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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

function createData(product, volume, sales, income) {
  return { product, volume, sales, income };
}

const rows = [
  createData("Coco coir", "1400 pcs", "1000 pcs", 15400),
  createData("Coco peat", "400 bags", "400 bags", 4000),
  createData("Cocopole", "1100 pcs", "1000 pcs", 20000),
  createData("Cocolog Small", "0 pcs", "0 pcs", 0),
  createData("Cocolog Medium", "10 pcs", "0 pcs", 0),
  createData("Cocolog Large", "15 pcs", "0 pcs", 0),
  createData("Coco Pole (1ft)", "0 pcs", "0 pcs", 0),
  createData("Coco Pole (2ft)", "90 pcs", "90 pcs", 9000),
  createData("Coco Pole (3ft)", "103 pcs", "103 pcs", 12875),
  createData("Twine", "30 pcs", "30 pcs", 3000),
  createData("Hanks", "2500", "2500", 12500),
  createData("Net", "500 meters", "500 meters", 25000),
  createData("Geonet", "0", "0", 0),
];

export default function Data() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.root}>
              Kind of Coconut-by Products Produced
            </TableCell>
            <TableCell className={classes.root} align="right">
              Volume of Production
            </TableCell>
            <TableCell className={classes.root} align="right">
              Quantity Sales
            </TableCell>
            <TableCell className={classes.root} align="right">
              Income Generated
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} onClick={() => alert(row.volume)}>
              <TableCell component="th" scope="row">
                {row.product}
              </TableCell>
              <TableCell align="right">{row.volume}</TableCell>
              <TableCell align="right">{row.sales}</TableCell>
              <TableCell align="right">{row.income}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
