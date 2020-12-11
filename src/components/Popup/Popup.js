import React from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Typography,
  makeStyles,
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";
import CustomButtons from "../CustomButtons/Button.js";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    overflowY: "visible",
  },
  dialogTitle: {
    paddingRight: "0px",
  },
  title: {
    background: "#19C856",
    color: "#FFF",
    marginTop: -50,
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
}));

export default function Popup(props) {
  const {
    title,
    children,
    openPopup,
    setOpenPopup,
    fullWidth,
    maxWidth,
  } = props;
  const classes = useStyles();
  return (
    <Dialog
      open={openPopup}
      TransitionComponent={Transition}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={classes.title}>
        <div style={{ display: "flex" }}>
          <Typography
            variant="h6"
            component="div"
            style={{ flexGrow: 1 }}
            className={classes.cardTitleWhite}
          >
            {title}
          </Typography>
          <CustomButtons
            color="warning"
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            <CloseIcon />
          </CustomButtons>
        </div>
      </DialogTitle>

      <DialogContent>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
}
