/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import { useFormik } from "formik";
import { useState } from "react";
import axios from "axios";
import { apiUrl } from "../../constants";
import getAllCategories from "../../services/categories/getAllCategories";
import getAllCountries from "../../services/countries/getCountries";
import getAllProvinces from "../../services/province/getAllProvince";
import useAuth from "../../utilities/user";
import { getToken } from "../../services/securityService";
import useAlert from "../../utilities/alert";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import getSupplierById from "../../services/suppliers/getSupplierById";
import { productValidationSchema } from "./productValidationSchema";

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "96px 16px 70px",
  gap: "32px",
  backgroundColor: "white.main",
};

const titleStyle = {
  width: "328px",
  color: "black.main",
  textAlign: "center",
  fontFamily: "Nunito",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "30px",
};

const subTitleStyle = {
  color: "black.main",
  textAlign: "center",
  fontFamily: "Nunito",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "25px",
};

const AddProduct = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [isSent, setIsSent] = useState(false);
  const navigate = useNavigate();
  const categories = getAllCategories();
  const countries = getAllCountries();
  const provincies = getAllProvinces();
  const { open, alertColor, alertMessage, showAlert, hideAlert } = useAlert(); // manejo de alertas
  const { user } = useAuth();
  const token = getToken();
  // parte de edicion
  const location = useLocation();
  const { id } = useParams();
  const isEditPath = location.pathname === `/profile/edit-product/${id}`;
  const editSupplier = getSupplierById(id);

  const initialValues = {
    name: "",
    description: "",
    shortDescription: "",
    categoryId: -1,
    email: "",
    phone: "",
    instagram: "",
    facebook: "",
    countryId: -1,
    provinceId: -1,
    city: "",
    userId: -1,
  };

  const { handleSubmit, handleChange, values, errors } =
    useFormik({
      initialValues,
      validateOnChange: false,
      validationSchema: productValidationSchema,
      onSubmit: (values) => {
        // axios
        setIsSent(true);
        const finalData = {
          name: values.name,
          description: values.description,
          shortDescription: values.shortDescription,
          phone: values.phone,
          email: values.email,
          facebook: values.facebook,
          instagram: values.instagram,
          countryId: values.country.id,
          provinceId: values.province.id,
          city: values.city,
          categoryId: values.category.id,
          userId: user.id,
        };

        const formData = new FormData();
        formData.append(
          "supplier",
          new Blob([JSON.stringify(finalData)], {
            type: "application/json",
          })
        );
        selectedImages.forEach((image) => {
          if (!formData.getAll("images").includes(image)) {
            formData.append("images", image);
          }
        });
        if (isEditPath) {
          axios
            .post(`${apiUrl}/suppliers/${id}`, formData, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((res) => {
              setIsSent(false); // Habilita el botón después de un éxito
              showAlert("Proveedor editado!", "success");
              setTimeout(() => {
                navigate("/");
              }, 1000);
            })
            .catch((err) => {
              showAlert("Error al editar Proveedor", "error");
              setIsSent(false); // Habilita el botón en caso de error
            });
        } else {
          axios
            .post(`${apiUrl}/suppliers`, formData, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((res) => {
              setIsSent(false); // Habilita el botón después de un éxito
              showAlert("Proveedor creado!", "success");
              setTimeout(() => {
                navigate("/");
              }, 1000);
            })
            .catch((err) => {
              showAlert("Error al cargar Proveedor", "error");
              setIsSent(false); // Habilita el botón en caso de error
            });
        }
      },
    });

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <Typography sx={titleStyle}>
        {isEditPath
          ? "Edición de Producto/Servicio"
          : "Carga de Producto/Servicio"}
      </Typography>
      <Typography style={subTitleStyle}>
        {isEditPath
          ? "Editá el formulario de carga de tu Producto/Servicio "
          : "Completá el formulario para subir tu Producto/Servicio"}
      </Typography>

      <TextField
        type="text"
        label={isEditPath ? "" : "Nombre de la Organización*"}
        error={errors.name ? true : false}
        helperText={
          errors.name
            ? errors.name
            : "Se visualizará en el título de la publicación"
        }
        name="name"
        onChange={handleChange}
        value={isEditPath ? editSupplier.name : values.name}
        fullWidth
      />

      <TextField
        type="text"
        label={isEditPath ? "" : "Breve descripción del Producto/Servicio*"}
        error={errors.shortDescription ? true : false}
        helperText={
          errors.shortDescription
            ? errors.shortDescription
            : "Se visualizará en el subtítulo de la publicación 0/50"
        }
        name="shortDescription"
        onChange={handleChange}
        value={
          isEditPath ? editSupplier.shortDescription : values.shortDescription
        }
        fullWidth
      />

      <TextField
        select
        label={isEditPath ? "" : "Categoría*"}
        placeholder="Categoría*"
        error={errors.category ? true : false}
        helperText={
          errors.category
            ? errors.category
            : "Seleccioná la categoría de tu Producto/Servicio"
        }
        name="category"
        onChange={handleChange}
        value={isEditPath ? editSupplier?.category?.name : values.category}
        fullWidth
      >
        {categories.map((item) => (
          <MenuItem key={item.id} value={item}>
            {item.name}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        type="email"
        label={isEditPath ? "" : "Correo electrónico*"}
        error={errors.email ? true : false}
        helperText={
          errors.email
            ? errors.email
            : "El mismo con el que te registraste o uno diferente"
        }
        name="email"
        onChange={handleChange}
        value={isEditPath ? editSupplier.email : values.email}
        fullWidth
      />

      <TextField
        type="tel"
        label={isEditPath ? "" : "Teléfono o Whatsapp*"}
        error={errors.phone ? true : false}
        helperText={
          errors.phone
            ? errors.phone
            : "Con el siguiente formato +54 9 261 002 002"
        }
        name="phone"
        onChange={handleChange}
        value={isEditPath ? editSupplier.phone : values.phone}
        fullWidth
      />

      <TextField
        type="text"
        label={isEditPath ? "" : "Instagram"}
        error={errors.instagram ? true : false}
        helperText={
          errors.instagram
            ? errors.instagram
            : "Podés pegar el link de tu perfil"
        }
        name="instagram"
        onChange={handleChange}
        value={isEditPath ? editSupplier.instagram : values.instagram}
        fullWidth
      />

      <TextField
        type="text"
        label={isEditPath ? "" : "Facebook"}
        error={errors.facebook ? true : false}
        helperText={
          errors.facebook ? errors.facebook : "Podés pegar el link de tu perfil"
        }
        name="facebook"
        onChange={handleChange}
        value={isEditPath ? editSupplier.facebook : values.facebook}
        fullWidth
      />

      <TextField
        select
        label={isEditPath ? "" : "País*"}
        placeholder="País**"
        error={errors.country ? true : false}
        helperText={
          errors.country ? errors.country : "Seleccioná un país de la lista"
        }
        name="country"
        onChange={handleChange}
        value={isEditPath ? editSupplier.country : values.country}
        fullWidth
      >
        {countries.map((item) => (
          <MenuItem key={item.id} value={item}>
            {item.name}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label={isEditPath ? "" : "Provincia/Estado*"}
        placeholder="Provincia/Estado*"
        error={errors.province ? true : false}
        helperText={
          errors.province
            ? errors.province
            : "Seleccioná una provincia/estado de la lista"
        }
        name="province"
        onChange={handleChange}
        value={isEditPath ? editSupplier.province : values.province}
        fullWidth
      >
        {provincies.map((item) => (
          <MenuItem key={item.id} value={item}>
            {item.name}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        type="text*"
        label={isEditPath ? "" : "Ciudad*"}
        error={errors.city ? true : false}
        helperText={
          errors.city ? errors.city : "Sin abreviaturas, nombre completo"
        }
        name="city"
        onChange={handleChange}
        value={isEditPath ? editSupplier.city : values.city}
        fullWidth
      />

      <TextField
        type="text"
        label={isEditPath ? "" : "Descripción del Producto/Servicio*"}
        error={errors.description ? true : false}
        helperText={
          errors.description ? errors.description : "Máximo 300 caracteres"
        }
        multiline
        rows={6}
        name="description"
        onChange={handleChange}
        value={isEditPath ? editSupplier.description : values.description}
        fullWidth
      />

      <Box sx={{ alignSelf: "flex-end" }}>
        {selectedImages && selectedImages.length <= 0 && (
          <>
            <Button
              startIcon={<UploadIcon />}
              variant="contained"
              component="label"
              sx={{ borderRadius: "100px" }}
            >
              Subir imagén
              <input
                type="file"
                accept=".jpg, .jpeg, .png, .gif, .bmp"
                multiple
                onChange={(e) =>
                  e.target.files &&
                  setSelectedImages(Array.from(e.target.files))
                }
                name="images"
                value={values.images}
                hidden
              />
            </Button>

            <Typography sx={{ fontSize: "12px" }}>
              *Requerida al menos una imagen
            </Typography>
            <Typography sx={{ fontSize: "12px" }}>Hasta 3 imágenes.</Typography>
            <Typography sx={{ fontSize: "12px" }}>
              Máximo 3Mb cada una
            </Typography>
          </>
        )}
      </Box>

      <Box>
        {isEditPath
          ? editSupplier.images?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="preview"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                margin: "5px",
              }}
            />
          ))
          : // Si no es una ruta de edición, renderiza las imágenes seleccionadas
          selectedImages &&
          selectedImages.map((image, index) => (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt="preview"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                margin: "5px",
              }}
            />
          ))}
      </Box>
      {isEditPath ? (
        <Button
          disabled={isSent} // Deshabilita el botón cuando se envía
          variant="contained"
          type="submit"
          sx={{ borderRadius: "100px" }}
        >
          Guardar Cambios
        </Button>
      ) : (
        <Button
          disabled={isSent} // Deshabilita el botón cuando se envía
          variant="contained"
          type="submit"
          sx={{ borderRadius: "100px" }}
        >
          {isEditPath ? "Guardar Cambios" : "Cargar Producto/Servicio"}
        </Button>
      )}

      <Snackbar open={open} autoHideDuration={6000} onClose={hideAlert}>
        <Alert
          variant="filled"
          onClose={hideAlert}
          severity={alertColor}
          sx={{ width: "100%" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </form>
  );
};

export default AddProduct;
