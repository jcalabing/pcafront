import React from "react";
import Typography from "@material-ui/core/Typography";
import {
  Grid,
  makeStyles,
  Paper,
  Avatar,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import CustomTextField from "components/CustomTextField";
import Button from "components/CustomButtons/Button.js";
import Background from "../../assets/img/loginbg.jpg";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const useStyle = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
  },
  root: {
    padding: theme.spacing(3),
    backgroundImage: "url(" + Background + ")",
    minHeight: "80vh",
    backgroundSize: "cover",
    flexGrow: 1,
  },
  avatar: {
    backgroundColor: "#FFA400",
    margin: "auto",
  },
  signin: {
    textAlign: "center",
  },
  submit: {
    float: "right",
  },
}));
export default function LogInPage() {
  const classes = useStyle();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={6} lg={7}></Grid>
      <Grid item xs={12} md={6} lg={4} className={classes.container}>
        <Paper className={classes.container}>
          <Grid container spacing={2}>
            <Grid item xs={12} justify="center">
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
            </Grid>
            <Grid item xs={12} className={classes.signin}>
              <Typography component="h1" variant="h5">
                Sign In
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <CustomTextField labelText="Username" id="username" />
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              <CustomTextField
                labelText="Password"
                id="password"
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={6}>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Button color="primary" className={classes.submit}>
                    Sign In
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <hr />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">Forgot Password ?</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
