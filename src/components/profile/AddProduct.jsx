import { Box, Button, MenuItem, TextField, Typography } from "@mui/material"
import useSuppliers from "../../utilities/suppliers"
import CTAButton from "../common/CTAButton"
import UploadIcon from '@mui/icons-material/Upload';
import { useFormik } from "formik";

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

  const initialValues = {
    name: "",
    briefDescription: "",
    category: "",
    email: "",
    phone: "",
    instagram: "",
    facebook: "",
    country: "",
    province: "",
    city: "",
    fullDescription: "",
    images: [],
  }

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <Typography sx={titleStyle}>Carga de Producto/Servicio</Typography>
      <Typography style={subTitleStyle}>Completá el formulario para subir tu Producto/Servicio </Typography>

      <TextField
        type="text"
        label="Nombre de la Organización*"
        helperText="Se visualizará en el título de la publicación"
        name="name"
        onChange={handleChange}
        value={values.name}
        fullWidth />

      <TextField
        type="text"
        label="Breve descripción del Producto/Servicio*"
        helperText="Se visualizará en el subtítulo de la publicación 0/50"
        name="briefDescription"
        onChange={handleChange}
        value={values.briefDescription}
        fullWidth />

      <TextField
        select
        label="Categoría*"
        placeholder="Categoría*"
        helperText="Seleccioná la categoría de tu Producto/Servicio"
        name="category"
        onChange={handleChange}
        value={values.category}
        fullWidth>
        {categories.map((item) => (
          <MenuItem key={item} value={item}>{item}</MenuItem>
        ))}
      </TextField>

      <TextField
        type="email"
        label="Correo electrónico*"
        helperText="El mismo con el que te registraste o uno diferente"
        name="email"
        onChange={handleChange}
        value={values.email}
        fullWidth />

      <TextField
        type="tel"
        label="Teléfono o Whatsapp*"
        helperText="Con el siguiente formato +54 9 261 002 002"
        name="phone"
        onChange={handleChange}
        value={values.phone}
        fullWidth />

      <TextField
        type="text"
        label="Instagram"
        helperText="Podés pegar el link de tu perfil"
        name="instagram"
        onChange={handleChange}
        value={values.instagram}
        fullWidth />

      <TextField
        type="text"
        label="Facebook"
        helperText="Podés pegar el link de tu perfil"
        name="facebook"
        onChange={handleChange}
        value={values.facebook}
        fullWidth />

      <TextField
        select
        label="País*"
        placeholder="País**"
        helperText="Seleccioná un país de la lista"
        name="country"
        onChange={handleChange}
        value={values.country}
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
        name="province"
        onChange={handleChange}
        value={values.province}
        fullWidth>
        {provincies.map((item) => (
          <MenuItem key={item} value={item}>{item}</MenuItem>
        ))}
      </TextField>

      <TextField
        type="text*"
        label="Ciudad*"
        helperText="Sin abreviaturas, nombre completo"
        name="city"
        onChange={handleChange}
        value={values.city}
        fullWidth />

      <TextField
        type="text"
        label="Descripción del Producto/Servicio*"
        helperText="Máximo 300 caracteres"
        multiline
        rows={6}
        name="fullDescription"
        onChange={handleChange}
        value={values.fullDescription}
        fullWidth />

      <Box sx={{ alignSelf: 'flex-end' }}>
        <CTAButton icon={<UploadIcon />}>Subir imagén</CTAButton>
        <Typography sx={{ fontSize: '12px' }}>*Requerida al menos una imagen</Typography>
        <Typography sx={{ fontSize: '12px' }}>Hasta 3 imágenes.</Typography>
        <Typography sx={{ fontSize: '12px' }}>Máximo 3Mb cada una</Typography>
      </Box>

      <Button variant="contained" type="submit" sx={{ borderRadius: '100px' }}>Cargar Producto/Servicio</Button>
    </form>
  )
}

export default AddProduct