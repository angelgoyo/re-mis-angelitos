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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
//import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React layouts
import DefaultNavbar from "layouts/Navbars/DefaultNavbar";
import DefaultFooter from "layouts/Footers/DefaultFooter";

// Presentation page sections
import Information from "pages/Presentation/sections/Information";
import AboutUsShort from "pages/Presentation/sections/AboutUsShort";
// import Testimonials from "pages/Presentation/sections/Testimonials";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import Header from "layouts/Header";
// import Download from "pages/Presentation/sections/Download";

function Presentation() {
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <Header
        content={{
          title: "Centro de Refuerzo Escolar Mis Angelitos",
          subtitle: "Apoyo escolar para niñas y niños.",
        }}
      />
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <AboutUsShort />
        <Information />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
