import { Typography, Box } from "@mui/material";
import theme from "../../theme/theme";

const h3Style = {
  color: "primary.main",
  fontSize: { xs: "22px", md: "28px" },
  fontFamily: "Nunito",
  textAlign: "center",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "25px",
  padding: "8px 32px",
};

const pStyle = {
  color: "black.main",
  fontSize: { xs: "16px", md: "20px" },
  fontFamily: "Nunito",
  textAlign: "center",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "20px",
  width: { xs: "327px", md: "40vw" },
};

const boxStyle = {
  // backgroundColor: "white.main",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px 16px",
  gap: "8px",
  borderTop: `1px solid ${theme.palette.primary.main}`,
  borderBottom: `1px solid ${theme.palette.primary.main}`,
  width: { xs: "327px", md: "100vw" },
  height: "192px",
};
const CompanyImpact = () => {
  return (
    <Box sx={boxStyle}>
      <Typography variant="h3" sx={h3Style}>
        ¿Qué son las empresas de impacto?
      </Typography>
      <Typography variant="p" sx={pStyle}>
        Son organizaciones con un compromiso fundamental con la generación de un
        impacto positivo en la sociedad y el medio ambiente como parte integral
        de su modelo de negocio.
      </Typography>
    </Box>
  );
};

export default CompanyImpact;
