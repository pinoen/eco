import { Box, Button, Typography } from "@mui/material";


export const DashboardAdmin = () => {


  const categoryProvider={
    marginBottom:"1rem",
    borderBottom:"1px solid",
    width:"248px",

  }
  const approved={
    position: "relative",
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '0%', // Inicia en el centro
    width: '50%', // Ocupa el 50% del ancho del elemento
    height: '2px', // Grosor del borde
    background:"#1D9129"
  },}

  const revision={
    position: "relative",
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '0%', // Inicia en el centro
    width: '50%', // Ocupa el 50% del ancho del elemento
    height: '2px', // Grosor del borde
    background:"#B86B11"
  },}

  const denegade={
    position: "relative",
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '0%', // Inicia en el centro
    width: '50%', // Ocupa el 50% del ancho del elemento
    height: '2px', // Grosor del borde
    background:"#BC1111"
  },}
  


  return (
    <Box sx={{ width:"328px",margin:"65px auto 0",fontFamily:"Nunito" }}>
      <Box
        sx={{display: "flex", justifyContent: "flex-end" }}
      >
        <Button
          variant="outlined"
          href="#outlined-buttons"
          sx={{
            backgroundColor: "#D2D2D2",
            color: "#000000",
            textTransform: "none",
            borderStyle:"none"
          }}
        >
          Cerrar sesión
        </Button>
      </Box>
      <Typography textAlign="center" variant="h5" sx={{mb:"24px"}}>Dashboard Administrador</Typography>
      <Typography textAlign="center" variant="h6" sx={{mb:"32px"}}>Estadisticas mensuales</Typography>

      <Box sx={{m:"0 auto", width:"328px" ,backgroundColor:"#4E169D",color: "#fff",borderRadius:"5px",padding:"8px 0px 8px 16px"}}>Nuevos perfiles creados</Box>
      <Box sx={{display:"flex",gap:"8px",mt:2}}>

        <Box sx={{mt:"6px",width:"104px",border:"2px solid #1D9129",padding:"8px",borderRadius:"8px"}}>
        <Typography sx={approved}>Aprobados</Typography> 
        <Typography>80</Typography>
      </Box>
      <Box sx={{mt:"6px",width:"104px",border:"2px solid #B86B11",padding:"8px",borderRadius:"8px"}}>
        <Typography sx={revision}>En revision</Typography> 
        <Typography>80</Typography>
      </Box>
      <Box sx={{mt:"6px",width:"104px",border:"2px solid #BC1111",padding:"8px",borderRadius:"8px"}}>
        <Typography sx={denegade} >Denegados</Typography> 
        <Typography>80</Typography>
      </Box>
      </Box>
      <Box sx={{mt:"32px",mb:5,borderRadius:"8px",width:"328px",height:"520px",backgroundColor:"#EAEAEA", padding:"8px"}}>
        <Box sx={{borderBottom:"2px solid #4E169D",padding:"8px"}}>
          <Typography textAlign="center" sx={{color:"#4E169D"}}>Proveedores por categoria</Typography>

        </Box>
        <Box sx={{mt:2,display:"flex",flexDirection:"column",alignItems:"center"}}>
          <Typography textAlign="center" sx={categoryProvider}>Bienestar</Typography>
          <Typography textAlign="center" sx={categoryProvider}>Capacitaciones</Typography>
          <Typography textAlign="center" sx={categoryProvider}>Construccion</Typography>
          <Typography textAlign="center" sx={categoryProvider}>Cultivos</Typography>
          <Typography textAlign="center" sx={categoryProvider}>Gastronomia</Typography>
          <Typography textAlign="center" sx={categoryProvider}>Indumentaria</Typography>
          <Typography textAlign="center" sx={categoryProvider}>Merchandising</Typography>
          <Typography textAlign="center" sx={categoryProvider}>Muebles/Deco</Typography>
          <Typography textAlign="center" sx={categoryProvider}>Reciclaje</Typography>
          <Typography textAlign="center" sx={categoryProvider}>Tecnologia</Typography>
          <Typography textAlign="center" sx={categoryProvider}>Transporte</Typography>
        </Box>

      </Box>

      <Typography variant="h6" textAlign="center">Visualizaciones por publicacion</Typography>
      
    
    </Box>
  );
};
export default DashboardAdmin;
