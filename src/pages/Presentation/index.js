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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
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
import bgImage from "assets/images/Presentacion.png";
// import Download from "pages/Presentation/sections/Download";

function Presentation() {
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={12} justifyContent="center" mx="auto">
            <MKTypography
              variant="h2"
              color="warning"
              fontWeight="bold"
              textAlign="center"
              mt={-6}
              mb={1}
              px={{ xs: 6, lg: 12 }}
            >
              Centro de Refuerzo Escolar Mis Angelitos
            </MKTypography>
            <MKTypography
              variant="h4"
              color="dark"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Apoyo escolar para niñas y niños.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
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
