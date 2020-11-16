import Home from "views/Home";
import Login from "views/Login";

const mainRoutes = [
  {
    path: "/landing",
    name: "Home",
    component: Home,
    layout: "/home",
    hide: true,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    layout: "/home",
    hide: true,
  },
];

export default mainRoutes;
