import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Popup from "components/Popup";
import VCOBox from "lightbox/VCOBox";

const useStyles = makeStyles({
  root: {
    marginBottom: 10,
  },
  header: {
    color: "#13A446",
  },
});
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(date) {
  return { date };
}

const rows = [
  createData("12/23/2020"),
  createData("12/16/2020"),
  createData("12/9/2020"),
];

export default function DateData() {
  const classes = useStyles();

  const [openPopBox, setopenPopBox] = useState(false);
  return (
    <>
      <TableContainer component={Paper} className={classes.root}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <StyledTableRow>
              <TableCell className={classes.header}>Date</TableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow
                key={row.date}
                onClick={() => {
                  setopenPopBox(true);
                }}
              >
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Popup
        title="Virgin Coconut Oil Processing"
        openPopup={openPopBox}
        setOpenPopup={setopenPopBox}
        fullWidth="true"
        maxWidth="xl"
      >
        <VCOBox></VCOBox>
      </Popup>
    </>
  );
}
