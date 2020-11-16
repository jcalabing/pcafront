import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";

import AppBar from "@material-ui/core/AppBar";

import classNames from "classnames";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";

import logo from "assets/img/pcalogo.png";

import styles from "components/Appbar/AppbarStyle.js";

const useStyles = makeStyles(styles);

export default function Appbar(props) {
  const classes = useStyles();
  var brand = (
    <div className={classes.brand}>
      <Link to="/">
        <img src={logo} alt="logo" className={classes.logoimg} />
      </Link>
      <Link to="/" className={classes.logolink}>
        <span>PCA Region 6</span>
      </Link>
    </div>
  );
  return (
    <AppBar position="static" color="primary">
      <Container>
        <Toolbar>
          <div className={classes.title}>{brand}</div>
          <Link to="/home/login" className={classes.link}>
            Log-In
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
