/*
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
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React layouts
import DefaultNavbar from "layouts/Navbars/DefaultNavbar";
import DefaultFooter from "layouts/Footers/DefaultFooter";

// About Us page sections
import Information from "pages/LandingPages/AboutUs/sections/Information";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import Team from "./sections/Team";
import { ElfsightWidget } from "react-elfsight-widget";
import Header from "layouts/Header";

function AboutUs() {
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <Header
        content={{
          title: "Centro de Refuerzo Escolar Mis Angelitos",
          subtitle: "Acerca de Nosotros",
        }}
      />
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        <Team />
        <Grid>
          <ElfsightWidget widgetId="d8d440fe-1bf1-4332-9e1e-c56eaaa4f61d" />
        </Grid>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
