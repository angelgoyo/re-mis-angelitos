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

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import bgImage from "assets/images/Presentacion.png";

function Header({ content }) {
  const { title, subtitle } = content;
  return (
    <MKBox>
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: { xs: "none", md: "grid", lg: "grid" },
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent="center"
            mx="auto"
          >
            <Grid item xs={12}>
              <MKTypography
                variant="h1"
                color="warning"
                fontWeight="bold"
                textAlign="center"
                mt={-1}
                mb={1}
              >
                {title}
              </MKTypography>
            </Grid>
            <Grid item xs={12}>
              <MKTypography variant="h3" color="dark" textAlign="center" mt={1}>
                {subtitle}
              </MKTypography>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <MKBox
        minHeight="25vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: { xs: "grid", md: "none", lg: "none" },
          placeItems: "center",
        }}
        mb={8}
      >
        <Container>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent="center"
            mx="auto"
          >
            <Grid item xs={12}>
              <MKTypography
                variant="h3"
                color="primary"
                fontWeight="bold"
                textAlign="center"
                mt={9}
                mb={1}
              >
                {title}
              </MKTypography>
            </Grid>
            <Grid item xs={12}>
              <MKTypography variant="h5" color="white" textAlign="center" mt={1}>
                {subtitle}
              </MKTypography>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

// Typechecking props for the DefaultFooter
Header.propTypes = {
  content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string])).isRequired,
};

export default Header;
