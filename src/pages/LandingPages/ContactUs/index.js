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
import MuiLink from "@mui/material/Link";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React layouts
import DefaultNavbar from "layouts/Navbars/DefaultNavbar";
import DefaultFooter from "layouts/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Image
import bgImage1 from "assets/images/Presentacion.png";
import bgImage from "assets/images/waves-white.svg";

function ContactUs() {
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage1})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
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
              color="primary"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Contactanos
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
        <MKBox component="section" py={{ xs: 0, sm: 12 }}>
          <MKBox
            variant="gradient"
            bgColor="error"
            opacity={0.8}
            position="relative"
            borderRadius="xl"
            sx={{ overflow: "hidden" }}
          >
            <MKBox
              component="img"
              src={bgImage}
              alt="pattern-lines"
              position="absolute"
              top={0}
              left={0}
              width="100%"
              zIndex={1}
              opacity={0.2}
            />
            <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
              <Grid
                container
                item
                xs={6}
                lg={4}
                md={5}
                justifyContent="center"
                mx="auto"
                textAlign="center"
              >
                <MKTypography
                  component={MuiLink}
                  href="https://www.google.com/maps/place/Refuerzo+escolar+Mis+Angelitos/@6.2318154,-75.5448417,15z/data=!4m15!1m8!3m7!1s0x8e44292f14b41b05:0x2cbbdd9c805b3865!2sRefuerzo+escolar+Mis+Angelitos!8m2!3d6.2318154!4d-75.5448417!10e1!16s%2Fg%2F11vsvzl_4n!3m5!1s0x8e44292f14b41b05:0x2cbbdd9c805b3865!8m2!3d6.2318154!4d-75.5448417!16s%2Fg%2F11vsvzl_4n?entry=ttu"
                  target="_blank"
                  rel="noreferrer"
                  variant="body2"
                  color="white"
                  mb={1}
                >
                  <MKTypography variant="body2" color="white">
                    <i className="fa fa-map-marker" style={{ fontSize: "1.50rem" }} />
                  </MKTypography>
                  Dirección: Calle 45A - #15A - 31{" "}
                </MKTypography>
                <MKTypography
                  component={MuiLink}
                  href="https://wa.me/573108947369"
                  target="_blank"
                  rel="noreferrer"
                  variant="body2"
                  color="white"
                  mb={1}
                >
                  <MKTypography variant="body2" color="white">
                    <i className="fa fa-whatsapp" style={{ fontSize: "1.50rem" }} />
                  </MKTypography>
                  Telefóno: 310-8947369
                </MKTypography>
                <MKTypography
                  component={MuiLink}
                  href="mailto:angelyeinel22@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  variant="body2"
                  color="white"
                  mb={1}
                >
                  <MKTypography variant="body2" color="white">
                    <i className="fa fa-envelope-o" style={{ fontSize: "1.50rem" }} />
                  </MKTypography>
                  Correo: angelyeinel22@gmail.com{" "}
                </MKTypography>
              </Grid>
            </Container>
          </MKBox>
        </MKBox>
        <MKBox pt={4} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                lg={12}
                ml="auto"
                sx={{ textAlign: { xs: "center", lg: "center" } }}
              >
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Gracias por confiar en nosotros!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  Lo hacemos con el mayor de los gustos
                </MKTypography>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
