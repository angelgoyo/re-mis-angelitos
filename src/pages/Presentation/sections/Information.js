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

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/pexels-lina-kivaka.jpg";
import bgBack from "assets/images/pexels-lina.jpg";

let iconColor = "primary";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                color="primary"
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Todas las edades
                    <br />
                    hasta 6to grado
                  </>
                }
                description=""
              />
              <RotatingCardBack
                color="error"
                image={bgBack}
                title="Horarios flexibles"
                description="Atención todos los días"
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "start with header",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  color={iconColor}
                  icon="auto_stories"
                  title="Lectura"
                  description="Potenciar habilidades de lectura e interpretación de textos"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  color={iconColor}
                  icon="history_edu"
                  title="Escritura"
                  description="Mejorar la escritura y expresiones de palabras"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  color={iconColor}
                  icon="calculate"
                  title="Aritmetica"
                  description="Elevar el potencial lógico aritmético, identificación de números y operaciones aritméticas."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  color={iconColor}
                  icon="psychology"
                  title="Otros"
                  description="Apoyo con planes de mejoramiento, recuperaciones y tareas."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
