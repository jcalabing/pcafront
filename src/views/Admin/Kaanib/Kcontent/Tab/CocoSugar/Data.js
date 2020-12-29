import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  root: {
    color: "#13A446",
  },
});

function createData(product, volume, sales, income) {
  return { product, volume, sales, income };
}

const rows = [createData("Coco Sugar", "500 L", "500 L", 5000)];

export default function Data() {
  const classes = useStyles();

  return (
    <TableContainer>
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
            <TableRow key={row.name}>
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
