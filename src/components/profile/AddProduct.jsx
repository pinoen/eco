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
import * as Yup from "yup";
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

const titleTextStyle = {
  color: "primary.main",
  fontFamily: "Nunito",
  fontSize: "22px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "24px",
}


const categoryStyle = {
  fontFamily: "Nunito",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "20px",
  color: "black.main",
}

const AddProduct = ({ showSupplier }) => {
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
  const isEditPath = location.pathname === `/profile/edit-product/${id}` || location.pathname === `/suppliers/${id}`;
  const editSupplier = getSupplierById(id);

  const initialValues = {
    name: editSupplier?.name ? editSupplier?.name : "",
    description: editSupplier?.description ? editSupplier?.description : "",
    shortDescription: editSupplier?.shortDescription ? editSupplier?.shortDescription : "",
    categoryId: editSupplier?.category ? editSupplier?.category.id : -1,
    email: editSupplier?.email ? editSupplier?.email : "",
    phone: editSupplier?.phone ? editSupplier?.phone : "",
    instagram: editSupplier?.instagram ? editSupplier?.instagram : "",
    facebook: editSupplier?.facebook ? editSupplier?.facebook : "",
    countryId: editSupplier?.country ? editSupplier?.country.id : -1,
    provinceId: editSupplier?.province ? editSupplier?.province.id : -1,
    city: editSupplier?.city ? editSupplier?.city : "",
    userId: editSupplier?.userId ? editSupplier?.userId : -1,
  };

  const { handleSubmit, handleChange, values, errors, setSubmitting } =
    useFormik({
      initialValues,
      validateOnChange: false,
      validationSchema: Yup.object({
        name: Yup.string().required("Este campo es requerido"),
        shortDescription: Yup.string()
          .min(10, "La descripción debe tener al menos 10 caracteres")
          .max(50, "La descripción no debe exceder los 50 caracteres")
          .required("Este campo es requerido"),
        category: Yup.object()
          .shape({
            id: Yup.number().min(0),
            name: Yup.string(),
          })
          .required("Este campo es requerido"),
        email: Yup.string()
          .lowercase()
          .email("Ingresar un correo electrónico válido")
          .required("Este campo es requerido"),
        phone: Yup.string()
          .matches(
            /^\+\d{2}\s+\d{1}\s+\d{3}\s+\d{3}\s+\d{3}$/,
            "El formato debe ser +54 9 261 002 002"
          )
          .required("Este campo es requerido"),
        instagram: Yup.string().matches(
          /^https:\/\/www\.instagram\.com\/.*$/,
          "El formato debe comenzar con https://www.instagram.com/"
        ),
        facebook: Yup.string().matches(
          /^https:\/\/www\.facebook\.com\/.*$/,
          "El formato debe comenzar con https://www.facebook.com/"
        ),
        country: Yup.object()
          .shape({
            id: Yup.number().min(0),
            name: Yup.string(),
          })
          .required("Este campo es requerido"),
        province: Yup.object()
          .shape({
            id: Yup.number().min(0),
            name: Yup.string(),
          })
          .required("Este campo es requerido"),
        city: Yup.string().required("Este campo es requerido"),
        description: Yup.string()
          .min(10, "La descripción debe tener al menos 10 caracteres")
          .max(300, "La descripción no debe exceder los 300 caracteres")
          .required("Este campo es requerido"),
      }),
      onSubmit: (values, { setSubmitting }) => {
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
          countryId: values.countryId.id,
          provinceId: values.provinceId.id,
          city: values.city,
          categoryId: values.categoryId.id,
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
      {!showSupplier ? <>
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
      </> :
        <>

          <Typography sx={titleTextStyle}>{editSupplier?.name}</Typography>
          <Typography sx={categoryStyle}>{editSupplier?.shortDescription}</Typography>
        </>

      }

      <TextField
        type="text"
        label="Nombre de la Organización*"
        error={errors.name ? true : false}
        helperText={
          errors.name
            ? errors.name
            : "Se visualizará en el título de la publicación"
        }
        name="name"
        onChange={handleChange}
        value={initialValues.name}
        fullWidth
      />

      <TextField
        type="text"
        label="Breve descripción del Producto/Servicio*"
        error={errors.shortDescription ? true : false}
        helperText={
          errors.shortDescription
            ? errors.shortDescription
            : "Se visualizará en el subtítulo de la publicación 0/50"
        }
        name="shortDescription"
        onChange={handleChange}
        value={
          initialValues.shortDescription
        }
        fullWidth
      />

      <TextField
        select
        label="Categoría*"
        placeholder="Categoría*"
        error={errors.categoryId ? true : false}
        helperText={
          errors.categoryId
            ? errors.categoryId
            : "Seleccioná la categoría de tu Producto/Servicio"
        }
        name="categoryId"
        onChange={handleChange}
        value={initialValues.categoryId}
        fullWidth
      >
        {categories.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        type="email"
        label="Correo electrónico*"
        placeholder="Correo electrónico*"
        error={errors.email ? true : false}
        helperText={
          errors.email
            ? errors.email
            : "El mismo con el que te registraste o uno diferente"
        }
        name="email"
        onChange={handleChange}
        value={initialValues.email}
        fullWidth
      />

      <TextField
        type="tel"
        label="Teléfono o Whatsapp*"
        error={errors.phone ? true : false}
        helperText={
          errors.phone
            ? errors.phone
            : "Con el siguiente formato +54 9 261 002 002"
        }
        name="phone"
        onChange={handleChange}
        value={initialValues.phone}
        fullWidth
      />

      <TextField
        type="text"
        label="Instagram"
        placeholder="Instagram"
        error={errors.instagram ? true : false}
        helperText={
          errors.instagram
            ? errors.instagram
            : "Podés pegar el link de tu perfil"
        }
        name="instagram"
        onChange={handleChange}
        value={initialValues.instagram}
        fullWidth
      />

      <TextField
        type="text"
        label="Facebook"
        placeholder="Facebook"
        error={errors.facebook ? true : false}
        helperText={
          errors.facebook ? errors.facebook : "Podés pegar el link de tu perfil"
        }
        name="facebook"
        onChange={handleChange}
        value={initialValues.facebook}
        fullWidth
      />

      <TextField
        select
        label="País*"
        placeholder="País**"
        error={errors.countryId ? true : false}
        helperText={
          errors.countryId ? errors.countryId : "Seleccioná un país de la lista"
        }
        name="countryId"
        onChange={handleChange}
        value={initialValues.countryId}
        fullWidth
      >
        {countries.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="Provincia/Estado*"
        placeholder="Provincia/Estado*"
        error={errors.provinceId ? true : false}
        helperText={
          errors.provinceId
            ? errors.provinceId
            : "Seleccioná una provincia/estado de la lista"
        }
        name="province"
        onChange={handleChange}
        value={initialValues.provinceId}
        fullWidth
      >
        {provincies.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        type="text*"
        label="Ciudad*"
        placeholder="Ciudad*"
        error={errors.city ? true : false}
        helperText={
          errors.city ? errors.city : "Sin abreviaturas, nombre completo"
        }
        name="city"
        onChange={handleChange}
        value={initialValues.city}
        fullWidth
      />

      <TextField
        type="text"
        label={initialValues.description ? "" : "Descripción del Producto/Servicio*"}
        placeholder="Descripción del Producto/Servicio*"
        error={errors.description ? true : false}
        helperText={
          errors.description ? errors.description : "Máximo 300 caracteres"
        }
        multiline
        rows={6}
        name="description"
        onChange={handleChange}
        defaultValue={initialValues.description}
        fullWidth
      />

      {!showSupplier && <Box sx={{ alignSelf: "flex-end" }}>
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
      </Box>}

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
