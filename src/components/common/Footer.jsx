import { Container, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Footer() {
  return (
    <Box>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Mi Sitio
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Descripción de mi sitio
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '20px' }}>
          © {new Date().getFullYear()} Mi Sitio. Todos los derechos reservados.
        </Typography>
        <Box mt={3} textAlign="center">
          <Link href="#" color="textSecondary">Términos y condiciones</Link>
          {' | '}
          <Link href="#" color="textSecondary">Política de privacidad</Link>
        </Box>
      </Container>
    </Box>
  );
}
