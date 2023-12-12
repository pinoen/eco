import { Box, Typography } from "@mui/material";
import { Hero } from "../landing/Hero";
import CategoryGrid from "../common/CategoryGrid";
import useSuppliers from "../../services/suppliers/suppliers";

const boxStyle = {
  py: 5,
  backgroundColor: "white.main",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const categoryStyle = {
  fontFamily: "Nunito",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "25px",
  textAlign: "center",
  color: "black.main",
  paddingBottom: "24px",
};

const Proveedores = () => {
  const suppliers = useSuppliers();

  return (
    <Box sx={boxStyle}>
      <Hero
        bg="hero"
        section="PROVEEDORES"
        title="Directorio ECO"
        text="Descubrí a quienes comparten tu pasión por el impacto positivo y la sostenibilidad"
      />
      <Typography sx={categoryStyle}>Categorías</Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <CategoryGrid suppliers={suppliers} page="proveedores" />
      </Box>
    </Box>
  );
};

export default Proveedores;
