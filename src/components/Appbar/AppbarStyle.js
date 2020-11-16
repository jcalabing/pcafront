const AppbarStyle = (theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    fontWeight: 500,
    color: "#fff",
    "&:hover, &:focus": {
      color: "#FFCD70",
    },
  },
  logolink: {
    textDecoration: "none",
    fontSize: 25,
    fontWeight: 500,
    marginLeft: 10,
    color: "#fff",
    "&:hover, &:focus": {
      color: "#FFCD70",
    },
  },
  logoimg: {
    height: 40,
    marginTop: 5,
  },
  brand: {
    display: "flex",
    alignItems: "center",
  },
});

export default AppbarStyle;
