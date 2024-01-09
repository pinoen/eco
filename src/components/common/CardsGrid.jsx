/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import SupplierCard from "./SupplierCard";
import vector from "../../assets/img/Vector1.png";
import getSuppliersByLocation from "../../services/suppliers/getSuppliersByLocation";
import SectionTitle from "../landing/SectionTitle";

const gridCardsStyle = {
  background: `url(${vector})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "24px 16px 8px 16px",
  marginBottom: "40px",
  marginLeft: "0px",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "24px",
};

const CardsGrid = ({ suppliers, page }) => {
  const locationExists = localStorage.getItem("location");

  const coordenadasSeparadas = locationExists?.split(" ");

  // Obtener la latitud y longitud en constantes separadas
  const latitud = locationExists ? coordenadasSeparadas[0] : null; // Primer valor (latitud)
  const longitud = locationExists ? coordenadasSeparadas[2] : null; // Segundo valor (longitud)

  const locationSuppliers = getSuppliersByLocation(
    latitud,
    longitud,
    locationExists
  );
  return (
    <>
      <SectionTitle
        title={
          locationExists
            ? "Recomendaciones locales para vos"
            : "Recomendaciones para vos"
        }
        subtitle={locationExists ? "Proveedores cerca tuyo" : "Proveedores ECO"}
      />
      <Box spacing={3} sx={gridCardsStyle}>
        {locationExists &&
          locationSuppliers.slice(0, 4).map((item) => (
            <Grid item xs={page === "landing" ? 6 : 12} sm={3} key={item.id}>
              <SupplierCard item={item} page={page} />
            </Grid>
          ))}
        {!locationExists &&
          suppliers.slice(0, 4).map((item) => (
            <Grid item xs={page === "landing" ? 6 : 12} sm={3} key={item.id}>
              <SupplierCard item={item} page={page} />
            </Grid>
          ))}
      </Box>
    </>
  );
};

export default CardsGrid;
