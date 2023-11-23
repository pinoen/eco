import { Box, Container } from "@mui/material";
import CompanyImpact from "./CompanyImpact";
import CTA from "./CTA";
import CTAButton from "../common/CTAButton";
import { Hero } from "./Hero";
import { useEffect, useState } from "react";
import { getSuppliers } from "../../services/api";
import SectionTitle from "./SectionTitle";
import CategoryGrid from "../common/CategoryGrid";
import CardsGrid from "../common/CardsGrid";

const boxStyle = {
  py: 5,
  backgroundColor: "white.main",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
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
        <Hero bg='landing' title='RED DE IMPACTO' text='Conectamos proveedores y personas comprometidas con el impacto y el consumo consciente' />
        <CompanyImpact />
        <CTA />
        <CTAButton>Registrate</CTAButton>

        {/* Tarjetas de Información */}
        <SectionTitle title='Recomendaciones locales para vos' subtitle='Proveedores cerca tuyo' />
        <CardsGrid suppliers={suppliers} />

        <SectionTitle title='Red de Proveedores ECO' subtitle='Categorías' />
        {/* Categorías */}
        <CategoryGrid suppliers={suppliers} page='landing' />
      </Box>
    </Container>
  );
}

export default LandingPage;
