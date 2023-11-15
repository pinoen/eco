import { Box, Container, Grid } from "@mui/material";
import CompanyImpact from "./CompanyImpact";
import CTA from "./CTA";
import CTAButton from "../common/CTAButton";
import { Hero } from "./Hero";
import { useEffect, useState } from "react";
import { getSuppliers } from "../../services/api";
import SupplierCard from "../common/SupplierCard";

const boxStyle = {
  py: 5,
  backgroundColor: 'white.main',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

function LandingPage() {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    getSuppliers().then((data) => {
      setSuppliers(data);
    })
  }, [])

  return (
    <Container>
      <Box sx={boxStyle}>
        <Hero />
        <CompanyImpact />
        <CTA />
        <CTAButton>Registrate</CTAButton>

        {/* Tarjetas de Información */}
        <Grid container spacing={3}>
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
