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

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <MKTypography variant="h2">Acerca de nosotros</MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Somos un Centro de refuerzo escolar para peques en edades desde jardin hasta 6to grado,
            atendido por una licenciada en educación básica primaria, con diplomados en educación
            inicial y pedagogía infantil, brindando un ambiente de atención individual teniendo
            enfasis en el apoyo en lectura, escritura, aritmetica entre otros.
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Nuestro enfoque esta basado en el trabajo con las metodologías Montessori, Doman, STEAM,
            entre otras, siempre buscando la que mejor se adapte para el aprendizaje de tus peques.
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Adicionalmente se brinda apoyo con planes de mejoramiento y recuperación.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
