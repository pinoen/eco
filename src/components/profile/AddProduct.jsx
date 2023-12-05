import { Box, MenuItem, TextField, Typography } from "@mui/material"
import useSuppliers from "../../utilities/suppliers"
import CTAButton from "../common/CTAButton"
import UploadIcon from '@mui/icons-material/Upload';

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '96px 16px 70px',
  gap: '32px',
  backgroundColor: 'white.main',
}


const titleStyle = {
  color: "black.main",
  textAlign: "center",
  fontFamily: "Nunito",
  fontSize: "25px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "30px",
}

const subTitleStyle = {
  color: "black.main",
  textAlign: "center",
  fontFamily: "Nunito",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "25px",
}

const AddProduct = () => {
  const suppliers = useSuppliers()
  const categories = suppliers.map((item) => item.category)
  const countries = ["Argentina", "Chile", "Colombia", "Uruguay"]
  const provincies = ["Buenos Aires", "Mendoza", "Cordoba", "San Luis"]

  return (
    <form style={formStyle}>
      <Typography sx={titleStyle}>Carga de Producto/Servicio</Typography>
      <Typography style={subTitleStyle}>Completá el formulario para subir tu Producto/Servicio </Typography>

      <TextField
        type="text"
        label="Nombre de la Organización*"
        helperText="Se visualizará en el título de la publicación"
        fullWidth />

      <TextField
        type="text"
        label="Breve descripción del Producto/Servicio*"
        helperText="Se visualizará en el subtítulo de la publicación 0/50"
        fullWidth />

      <TextField
        select
        label="Categoría*"
        placeholder="Categoría*"
        helperText="Seleccioná la categoría de tu Producto/Servicio"
        fullWidth>
        {categories.map((item) => (
          <MenuItem key={item} value={item}>{item}</MenuItem>
        ))}
      </TextField>

      <TextField
        type="email"
        label="Correo electrónico*"
        helperText="El mismo con el que te registraste o uno diferente"
        fullWidth />

      <TextField
        type="tel"
        label="Teléfono o Whatsapp*"
        helperText="Con el siguiente formato +54 9 261 002 002"
        fullWidth />

      <TextField
        type="text"
        label="Instagram"
        helperText="Podés pegar el link de tu perfil"
        fullWidth />

      <TextField
        type="text"
        label="Facebook"
        helperText="Podés pegar el link de tu perfil"
        fullWidth />

      <TextField
        select
        label="País*"
        placeholder="País**"
        helperText="Seleccioná un país de la lista"
        fullWidth>
        {countries.map((item) => (
          <MenuItem key={item} value={item}>{item}</MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="Provincia/Estado*"
        placeholder="Provincia/Estado*"
        helperText="Seleccioná una provincia/estado de la lista"
        fullWidth>
        {provincies.map((item) => (
          <MenuItem key={item} value={item}>{item}</MenuItem>
        ))}
      </TextField>

      <TextField
        type="text*"
        label="Ciudad*"
        helperText="Sin abreviaturas, nombre completo"
        fullWidth />

      <TextField
        type="text"
        label="Descripción del Producto/Servicio*"
        helperText="Máximo 300 caracteres"
        multiline
        rows={6}
        fullWidth />

      <Box sx={{ alignSelf: 'flex-end' }}>
        <CTAButton icon={<UploadIcon />}>Subir imagén</CTAButton>
        <Typography sx={{ fontSize: '12px' }}>*Requerida al menos una imagen</Typography>
        <Typography sx={{ fontSize: '12px' }}>Hasta 3 imágenes.</Typography>
        <Typography sx={{ fontSize: '12px' }}>Máximo 3Mb cada una</Typography>
      </Box>

      <CTAButton>Cargar Producto/Servicio</CTAButton>

    </form>
  )
}

export default AddProduct