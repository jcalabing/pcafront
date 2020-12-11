import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import TerrainIcon from "@material-ui/icons/Terrain";
import AssessmentIcon from "@material-ui/icons/Assessment";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import TextsmsIcon from "@material-ui/icons/Textsms";
import AssignmentIcon from "@material-ui/icons/Assignment";
// import Unarchive from "@material-ui/icons/Unarchive";
// core components/views for Admin layout
import DashboardPage from "views/Admin/Dashboard";
import UserProfile from "views/UserProfile/UserProfile.js";
import Icons from "views/Icons/Icons.js";
import Province from "views/Admin/Province";
// import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
import Entries from "views/Admin/Entries";
import Kaanib from "views/Admin/Kaanib";

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
    path: "/kaanib",
    name: "KAANIB",
    icon: AssignmentIcon,
    component: Kaanib,
    layout: "/admin",
    collapse: true,
  },
  {
    path: "/entries",
    name: "CHP",
    icon: "content_paste",
    component: Entries,
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
