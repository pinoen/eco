import { Box, Typography } from "@mui/material";
import { Hero } from "../landing/Hero"
import { useEffect, useState } from "react";
import { getSuppliers } from "../../services/api";
import CategoryGrid from "../common/CategoryGrid";

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
}

const Proveedores = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    getSuppliers().then((data) => {
      setSuppliers(data);
    });
  }, []);

  return (
    <Box sx={boxStyle}>
      <Hero bg='hero' section='PROVEEDORES' title='Directorio ECO' text='Descubrí a quienes comparten tu pasión por el impacto positivo y la sostenibilidad' />
      <Typography sx={categoryStyle}>Categorías</Typography>
      <CategoryGrid suppliers={suppliers} page='proveedores' />
    </Box>
  )
}

export default Proveedores