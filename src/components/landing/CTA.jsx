import { Typography } from "@mui/material";

const h2Style = {
  marginBottom: "48px",
  color: "black.main",
  textAlign: "center",
  fontFamily: "Nunito",
  fontSize: { xs: "24px", md: "28px" },
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "27px",
  // backgroundColor: "white.main",
  width: { xs: "327px", md: "100vw" },
  height: "80px",
  padding: "45px 16px 16px 16px",
};

const CTA = () => {
  return (
    <Typography variant="h2" sx={h2Style}>
      ¿Querés formar parte de la Red de impacto ECO como Proveedor?
    </Typography>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;
