import { Box } from "@mui/material";
import { Hero } from "../landing/Hero"

const boxStyle = {
  py: 5,
  backgroundColor: "white.main",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const Proveedores = () => {
  return (
    <Box sx={boxStyle}>
      <Hero bg='hero' section='PROVEEDORES' title='Directorio ECO' text='Descubrí a quienes comparten tu pasión por el impacto positivo y la sostenibilidad' />

    </Box>
  )
}

export default Proveedores