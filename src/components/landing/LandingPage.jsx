import { Box, Container, Grid } from "@mui/material";
import CompanyImpact from "./CompanyImpact";
import CTA from "./CTA";
import CTAButton from "../common/CTAButton";
import { Hero } from "./Hero";
import { useEffect, useState } from "react";
import { getSuppliers } from "../../services/api";
import SupplierCard from "../common/SupplierCard";
import vector from "../../assets/img/Vector1.png";
import SectionTitle from "./SectionTitle";
import CategoryBlock from "../common/CategoryBlock";

const boxStyle = {
  py: 5,
  backgroundColor: "white.main",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const gridCardsStyle = {
  background: `url(${vector})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "24px 17px 8px 17px",
  marginBottom: '40px'
};

const gridCategoriesStyle = {
  gap: "24px",
  marginBottom: '40px',
  padding: "24px 16px 32px 16px",
  justifyContent: "center",
}

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
        <SectionTitle title='Recomendaciones locales para vos' subtitle='Proveedores cerca tuyo' />
        <Grid container spacing={3} sx={gridCardsStyle}>
          {suppliers.slice(0, 4).map((item) => (
            <Grid item xs={6} sm={3} key={item.id}>
              <SupplierCard item={item} />
            </Grid>
          ))}
        </Grid>

        <SectionTitle title='Red de Proveedores ECO' subtitle='Categorías' />

        {/* Categorías */}
        <Grid container spacing={3} sx={gridCategoriesStyle}>
          {suppliers.map((item) => (
            <CategoryBlock key={item.id} icon={item.categoryIcon} categoryName={item.category} />
          ))}
        </Grid>

      </Box>
    </Container>
  );
}

export default LandingPage;
