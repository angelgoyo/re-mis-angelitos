/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
//import Presentation from "pages/Presentation";

const routes = [
  {
    name: "nosotros",
    icon: <Icon>school</Icon>,
    route: "/about-us",
    component: <AboutUs />,
    key: "nosotros",
  },
  {
    name: "contactanos",
    icon: <Icon>map</Icon>,
    route: "/contact-us",
    component: <ContactUs />,
    key: "contactanos",
  },
];

export default routes;
