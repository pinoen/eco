import { Alert, Box, Button, MenuItem, Snackbar, TextField, Typography } from "@mui/material"
import useSuppliers from "../../utilities/suppliers"
import UploadIcon from '@mui/icons-material/Upload';
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from 'yup';
import axios from "axios";

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
  const [selectedImages, setSelectedImages] = useState([]);
  const [isSent, setIsSent] = useState("")
  const suppliers = useSuppliers()
  const categories = [...new Set(suppliers.map((item) => item.category))]
  const countries = ["Argentina", "Chile", "Colombia", "Uruguay"]
  const provincies = ["Buenos Aires", "Mendoza", "Cordoba", "San Luis"]

  const initialValues = {
    name: "",
    description: "",
    category: "",
    email: "",
    phone: "",
    instagram: "",
    facebook: "",
    country: "",
    province: "",
    city: "",
    fullDescription: "",
    images: selectedImages,
  }

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues,
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string().required("Este campo es requerido"),
      description: Yup.string().min(10, "La descripción debe tener al menos 10 caracteres").max(50, "La descripción no debe exceder los 50 caracteres").required("Este campo es requerido"),
      category: Yup.string().required("Este campo es requerido"),
      email: Yup.string().lowercase().email("Ingresar un correo electrónico válido").required("Este campo es requerido"),
      phone: Yup.string().matches(/^\+\d{2}\s+\d{1}\s+\d{3}\s+\d{3}\s+\d{3}$/, "El formato debe ser +54 9 261 002 002").required("Este campo es requerido"),
      instagram: Yup.string().matches(/^https:\/\/www\.instagram\.com\/.*$/, "El formato debe comenzar con https://www.instagram.com/"),
      facebook: Yup.string().matches(/^https:\/\/www\.facebook\.com\/.*$/, "El formato debe comenzar con https://www.facebook.com/"),
      country: Yup.string().required("Este campo es requerido"),
      province: Yup.string().required("Este campo es requerido"),
      city: Yup.string().required("Este campo es requerido"),
      fullDescription: Yup.string().min(50, "La descripción debe tener al menos 10 caracteres").max(300, "La descripción no debe exceder los 300 caracteres").required("Este campo es requerido"),
    }),
    onSubmit: (values) => {
      axios.post("http://localhost:5000/suppliers", values).then((res) => {
        setIsSent("sent")
        console.log(res)
      }).catch((err) => {
        setIsSent("error")
        console.log(err)
      })
    },
  })

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <Snackbar open={isSent === 'sent' || isSent === 'error'} autoHideDuration={6000} onClose={() => setIsSent("")}>
        {isSent === 'sent' ?
          <Alert variant="filled" severity="success" sx={{ width: '100%' }}>
            Producto/Servicio cargado con éxito
          </Alert> :
          <Alert variant="filled" severity="error" sx={{ width: '100%' }}>
            Lo sentimos, los cambios no se pudieron guardar.
          </Alert>}
      </Snackbar>

      <Typography sx={titleStyle}>Carga de Producto/Servicio</Typography>
      <Typography style={subTitleStyle}>Completá el formulario para subir tu Producto/Servicio </Typography>

      <TextField
        type="text"
        label="Nombre de la Organización*"
        error={errors.name ? true : false}
        helperText={errors.name ? errors.name : "Se visualizará en el título de la publicación"}
        name="name"
        onChange={handleChange}
        value={values.name}
        fullWidth />

      <TextField
        type="text"
        label="Breve descripción del Producto/Servicio*"
        error={errors.description ? true : false}
        helperText={errors.description ? errors.description : "Se visualizará en el subtítulo de la publicación 0/50"}
        name="description"
        onChange={handleChange}
        value={values.description}
        fullWidth />

      <TextField
        select
        label="Categoría*"
        placeholder="Categoría*"
        error={errors.category ? true : false}
        helperText={errors.category ? errors.category : "Seleccioná la categoría de tu Producto/Servicio"}
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
        error={errors.email ? true : false}
        helperText={errors.email ? errors.email : "El mismo con el que te registraste o uno diferente"}
        name="email"
        onChange={handleChange}
        value={values.email}
        fullWidth />

      <TextField
        type="tel"
        label="Teléfono o Whatsapp*"
        error={errors.phone ? true : false}
        helperText={errors.phone ? errors.phone : "Con el siguiente formato +54 9 261 002 002"}
        name="phone"
        onChange={handleChange}
        value={values.phone}
        fullWidth />

      <TextField
        type="text"
        label="Instagram"
        error={errors.instagram ? true : false}
        helperText={errors.instagram ? errors.instagram : "Podés pegar el link de tu perfil"}
        name="instagram"
        onChange={handleChange}
        value={values.instagram}
        fullWidth />

      <TextField
        type="text"
        label="Facebook"
        error={errors.facebook ? true : false}
        helperText={errors.facebook ? errors.facebook : "Podés pegar el link de tu perfil"}
        name="facebook"
        onChange={handleChange}
        value={values.facebook}
        fullWidth />

      <TextField
        select
        label="País*"
        placeholder="País**"
        error={errors.country ? true : false}
        helperText={errors.country ? errors.country : "Seleccioná un país de la lista"}
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
        error={errors.province ? true : false}
        helperText={errors.province ? errors.province : "Seleccioná una provincia/estado de la lista"}
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
        error={errors.city ? true : false}
        helperText={errors.city ? errors.city : "Sin abreviaturas, nombre completo"}
        name="city"
        onChange={handleChange}
        value={values.city}
        fullWidth />

      <TextField
        type="text"
        label="Descripción del Producto/Servicio*"
        error={errors.fullDescription ? true : false}
        helperText={errors.fullDescription ? errors.fullDescription : "Máximo 300 caracteres"}
        multiline
        rows={6}
        name="fullDescription"
        onChange={handleChange}
        value={values.fullDescription}
        fullWidth />

      <Box sx={{ alignSelf: 'flex-end' }}>
        {selectedImages && selectedImages.length <= 0 &&
          <>
            <Button startIcon={<UploadIcon />} variant="contained" component="label" sx={{ borderRadius: '100px' }}>
              Subir imagén
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => e.target.files && setSelectedImages(Array.from(e.target.files))}
                name="images"
                value={values.images}
                hidden />
            </Button>

            <Typography sx={{ fontSize: '12px' }}>*Requerida al menos una imagen</Typography>
            <Typography sx={{ fontSize: '12px' }}>Hasta 3 imágenes.</Typography>
            <Typography sx={{ fontSize: '12px' }}>Máximo 3Mb cada una</Typography>
          </>
        }
      </Box>

      <Box>
        {selectedImages && selectedImages.map((image, index) => (
          <img key={index} src={URL.createObjectURL(image)} alt="preview" style={{ width: '100px', height: '100px', objectFit: 'cover', margin: '5px' }} />
        ))}
      </Box>
      <Button variant="contained" type="submit" sx={{ borderRadius: '100px' }}>Cargar Producto/Servicio</Button>
    </form>
  )
}

export default AddProduct