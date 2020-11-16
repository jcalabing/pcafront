import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Appbar from "components/Appbar";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Theme from "../../assets/jss/material-dashboard-react/layouts/mainStyle.js";
import style from "layouts/Main/mainStyle.js";
import StickyFooter from "components/StickyFooter/StickyFooter.js";

import routes from "routes/main";

const useStyle = makeStyles(style);

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/home") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/home" to="/home/landing" />
  </Switch>
);

export default function Main({ ...rest }) {
  const classes = useStyle();
  return (
    <ThemeProvider theme={Theme}>
      <div className={classes.wrapper}>
        <Appbar />
        {switchRoutes}
        <StickyFooter />
      </div>
    </ThemeProvider>
  );
}
