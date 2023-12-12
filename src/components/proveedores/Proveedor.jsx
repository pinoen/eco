import axios from "axios";
import { useState, useEffect } from "react";
import { apiUrl } from "../../constants";
import { Box, Typography } from "@mui/material";
import { Hero } from "../landing/Hero";
import { useParams } from "react-router-dom";
import CardsGrid from "../common/CardsGrid";

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

// text - align: center;
// font - family: Nunito;
// font - size: 20px;
// font - style: normal;
// font - weight: 600;
// line - height: 25px;

const categoryNameStyle = {
  color: "primary.main",
  fontFamily: "Nunito",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "25px",
  textAlign: "center",
  paddingBottom: "16px",
};

const categoryDescriptionStyle = {
  color: "black.main",
  fontFamily: "Nunito",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "20px",
  textAlign: "center",
  padding: "0px 16px 38px 16px",
  zIndex: 1,
};

const Proveedor = () => {
  const categoryName = useParams().nombre;
  const [suppliersByCategory, setSuppliersByCategory] = useState([]);
  useEffect(() => {
    axios
      .get(`${apiUrl}/suppliers/searchByCategory?category=${categoryName}`)
      .then((response) => {
        setSuppliersByCategory(response.data);
      })
      .catch((error) => {
        console.error("Error proveedores por categoria", error);
      });
  }, []);
  return (
    <Box sx={boxStyle}>
      <Hero
        bg="hero"
        section="PROVEEDORES"
        title="Directorio ECO"
        text="Descubrí a quienes comparten tu pasión por el impacto positivo y la sostenibilidad"
      />
      <Typography sx={categoryStyle}>Categorías</Typography>
      <Typography sx={categoryNameStyle}>{categoryName}</Typography>
      {/* <Typography sx={categoryDescriptionStyle}>
        {selectedCategory[0]?.categoryDescription}
      </Typography> */}

      <CardsGrid suppliers={suppliersByCategory} page="proveedor" />
    </Box>
  );
};

export default Proveedor;
