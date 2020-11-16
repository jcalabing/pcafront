import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import styles from "../StickyFooter/StickyFooterStyle.js";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function StickyFooter(props) {
  const classes = useStyles();

  return (
    <footer className={classes.stickyFooter}>
      <Container>
        <Typography variant="body1">PCAR6 Online Services</Typography>
        <Typography variant="body2">
          Philippine Coconut Authority Region 6
        </Typography>
      </Container>
    </footer>
  );
}
