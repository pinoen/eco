import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import CompanyImpact from "./CompanyImpact";
import CTA from "./CTA";
import CTAButton from "../common/CTAButton";
import { Hero } from "./Hero";
import SectionTitle from "./SectionTitle";
import CategoryGrid from "../common/CategoryGrid";
import CardsGrid from "../common/CardsGrid";
import PublicationsSection from "./PublicationsSection";
import Ubicacion from "../../utilities/Location";
import getAceptedSuppliers from "../../services/suppliers/getAceptedSuppliers";
import getAllCategories from "../../services/categories/getAllCategories";

const boxStyle = {
  py: 5,
  backgroundColor: "white.main",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

function LandingPage() {
  const suppliers = getAceptedSuppliers();

  const [openLocation, setOpenLocation] = useState(false);

  useEffect(() => {
    const popupShown = localStorage.getItem("popupShown");
    const locationExists = localStorage.getItem("location");
    if (!popupShown && !locationExists) {
      const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 300) {
          setOpenLocation(true);
          window.removeEventListener("scroll", handleScroll);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <Container>
      <Box sx={boxStyle}>
        <Hero
          bg="landing"
          title="RED DE IMPACTO"
          text="Conectamos proveedores y personas comprometidas con el impacto y el consumo consciente"
        />
        <CompanyImpact />
        <CTA />
        <CTAButton route="/ingresa">Registrate</CTAButton>

        {/* Tarjetas de Información */}
        <Ubicacion
          openLocation={openLocation}
          setOpenLocation={setOpenLocation}
        />
        <SectionTitle
          title="Recomendaciones locales para vos"
          subtitle="Proveedores cerca tuyo"
        />

        <CardsGrid suppliers={suppliers} page="landing" />

        <SectionTitle title="Red de Proveedores ECO" subtitle="Categorías" />
        {/* Categorías */}

        <CategoryGrid page="landing" />
        <CTAButton route="/proveedores">Ver mas Categorías</CTAButton>
        <PublicationsSection />
      </Box>
    </Container>
  );
}

export default LandingPage;
