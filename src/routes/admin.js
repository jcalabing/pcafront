/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import TerrainIcon from "@material-ui/icons/Terrain";
import AssessmentIcon from "@material-ui/icons/Assessment";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import TextsmsIcon from "@material-ui/icons/Textsms";
// import Unarchive from "@material-ui/icons/Unarchive";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import Province from "views/Province";
// import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/province",
    name: "Provinces",
    icon: TerrainIcon,
    component: Province,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
    hide: true,
  },
  {
    path: "/table",
    name: "Entries",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Reports",
    icon: AssessmentIcon,
    component: Icons,
    layout: "/admin",
  },
];

export default dashboardRoutes;
