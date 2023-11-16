import { Box, Container, Grid } from "@mui/material";
import CompanyImpact from "./CompanyImpact";
import CTA from "./CTA";
import CTAButton from "../common/CTAButton";
import { Hero } from "./Hero";
import { useEffect, useState } from "react";
import { getSuppliers } from "../../services/api";
import SupplierCard from "../common/SupplierCard";
import vector from "../../assets/img/Vector1.png";
import RecommendationCardTitle from "./RecommendationCardTitle";

const boxStyle = {
  py: 5,
  backgroundColor: "white.main",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const gridStyle = {
  background: `url(${vector})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "24px 17px 8px 17px",
};

function LandingPage() {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    getSuppliers().then((data) => {
      setSuppliers(data);
    });
  }, []);

  return (
    <Container>
      <Box sx={boxStyle}>
        <Hero />
        <CompanyImpact />
        <CTA />
        <CTAButton>Registrate</CTAButton>

        {/* Tarjetas de Información */}
        <RecommendationCardTitle />
        <Grid container spacing={3} sx={gridStyle}>
          {suppliers.map((item) => (
            <Grid item xs={6} sm={3} key={item.id}>
              <SupplierCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default LandingPage;
