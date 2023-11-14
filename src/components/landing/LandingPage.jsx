
import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import CompanyImpact from './CompanyImpact';
import CTA from './CTA';
import CTAButton from '../common/CTAButton';
import { Hero } from './Hero';
//import { SearchBar } from './SearchBar';



function LandingPage() {
  return (
    <Container>
      <Box sx={{ my: 4, display:"flex",flexDirection:"column",alignItems:"center" }}>
        
        <Hero></Hero>
        
        <CompanyImpact />
        <CTA />
        <CTAButton>Registrate</CTAButton>

        {/* Tarjetas de Información */}
        <Grid container spacing={3}>
          {[1, 2, 3].map((item) => (
            <Grid item xs={12} sm={4} key={item}>
              <Card>
                <CardMedia
                  component="img"
                  alt="Imagen de muestra"
                  height="140"
                  image="https://bruchoufunes.com/wp-content/uploads/2021/07/bruchou-compromiso-sustentable.jpg"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    Título {item}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Descripción detallada del contenido de esta tarjeta. Puede variar según el propósito de la tarjeta.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default LandingPage;