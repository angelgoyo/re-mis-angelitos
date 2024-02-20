// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Mis Angelitos",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/re.mis.angelitos?utm_source=qr&igsh=ZTB0a2wwazdmMW1p",
    },
  ],
  menus: [
    {
      name: "compañia",
      items: [{ name: "contactanos", route: "/presentation#contactanos" }],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Mis Angelitos.
    </MKTypography>
  ),
};
