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
import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/shapes/waves-white.svg";

function Download() {
  return (
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
            xs={5}
            lg={3}
            md={3}
            justifyContent="center"
            mx="auto"
            textAlign="center"
          >
            <MKTypography id="contactanos" variant="h3" color="white">
              Contactanos
            </MKTypography>
            <MKTypography
              component={MuiLink}
              href="https://www.google.com/maps/place/Refuerzo+escolar+Mis+Angelitos/@6.2318154,-75.5448417,15z/data=!4m15!1m8!3m7!1s0x8e44292f14b41b05:0x2cbbdd9c805b3865!2sRefuerzo+escolar+Mis+Angelitos!8m2!3d6.2318154!4d-75.5448417!10e1!16s%2Fg%2F11vsvzl_4n!3m5!1s0x8e44292f14b41b05:0x2cbbdd9c805b3865!8m2!3d6.2318154!4d-75.5448417!16s%2Fg%2F11vsvzl_4n?entry=ttu"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="white"
              mb={1}
            >
              Dirección: Calle 45A - #15A - 31{" "}
              <MKTypography variant="body2" color="white">
                <i className="fa fa-map-marker" style={{ fontSize: "1.50rem" }} />
              </MKTypography>
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
              Telefóno: 310-8947369
              <MKTypography variant="body2" color="white">
                <i className="fa fa-whatsapp" style={{ fontSize: "1.50rem" }} />
              </MKTypography>
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
              Correo: angelyeinel22@gmail.com{" "}
              <MKTypography variant="body2" color="white">
                <i className="fa fa-envelope-o" style={{ fontSize: "1.50rem" }} />
              </MKTypography>
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default Download;
