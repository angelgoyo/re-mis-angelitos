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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function AboutUsShort() {
  return (
    <MKBox component="section" my={6}>
      <Container>
        <Grid container item xs={10} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <MKTypography variant="body1" color="text">
            Somos un Centro de refuerzo escolar para peques en edades desde jardin hasta 6to grado,
            brindando un ambiente de atención individual teniendo enfasis en el apoyo en lectura,
            escritura, aritmetica entre otros.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AboutUsShort;
