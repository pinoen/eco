/* eslint-disable react/prop-types */
import { Box, Grid } from "@mui/material";
import SupplierCard from "./SupplierCard";
import vector from "../../assets/img/Vector1.png";

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
  return (
    <Box spacing={3} sx={gridCardsStyle}>
      {suppliers.slice(0, 4).map((item) => (
        <Grid item xs={page === "landing" ? 6 : 12} sm={3} key={item.id}>
          <SupplierCard item={item} page={page} />
        </Grid>
      ))}
    </Box>
  );
};

export default CardsGrid;
