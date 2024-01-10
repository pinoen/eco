/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import { DeleteOutline, Upload } from "@mui/icons-material";

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
import { useNavigate, useParams } from "react-router-dom";
import getSupplierById from "../../services/suppliers/getSupplierById";
import { productValidationSchema } from "./productValidationSchema";
import { urlToFile } from "../../services/urlImage";

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

const AddProduct = ({ edit }) => {
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
  const { id } = useParams();

  const editSupplier = getSupplierById(id);
  console.log(editSupplier);

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

  const { handleSubmit, handleChange, values, errors, handleBlur, resetForm } =
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
          countryId: values.countryId,
          provinceId: values.provinceId,
          city: values.city,
          categoryId: values.categoryId,
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
        if (edit) {
          axios
            .put(`${apiUrl}/suppliers/${id}`, formData, {
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

  //funcion para que actualize los valores de la publicacion al editar, sino es undefined
  useEffect(() => {
    const fetchImages = async () => {
      if (edit && !editSupplier.loading && editSupplier.data) {
        const filesPromises = editSupplier.data.images.map(async (image) => {
          return await urlToFile(image);
        });

        try {
          const files = await Promise.all(filesPromises);
          setSelectedImages(files);
          resetForm({
            values: {
              name: editSupplier.data.name,
              description: editSupplier.data.description,
              shortDescription: editSupplier.data.shortDescription,
              phone: editSupplier.data.phone,
              email: editSupplier.data.email,
              facebook: editSupplier.data.facebook,
              instagram: editSupplier.data.instagram,
              countryId: editSupplier.data.country.id,
              provinceId: editSupplier.data.province.id,
              city: editSupplier.data.city,
              categoryId: editSupplier.data.category.id,
              userId: user.id,
            },
          });
        } catch (error) {
          console.error("Error al obtener los archivos:", error);
          // Manejar el error si es necesario
        }
      }
    };

    fetchImages();
  }, [editSupplier]);

  const renderImage = (image) => {
    if (typeof image === "string" && image.startsWith("http")) {
      return image; // Si la imagen es una URL remota, se devuelve directamente
    } else if (image instanceof File) {
      return URL.createObjectURL(image); // Si es un objeto File, se crea una URL local
    }
    return ""; // Si no es una imagen válida, se devuelve una cadena vacía
  };
  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <Typography sx={titleStyle}>
        {edit ? "Edición de Producto/Servicio" : "Carga de Producto/Servicio"}
      </Typography>
      <Typography style={subTitleStyle}>
        {edit
          ? "Editá el formulario de carga de tu Producto/Servicio "
          : "Completá el formulario para subir tu Producto/Servicio"}
      </Typography>

      <TextField
        type="text"
        label="Nombre de la Organización*"
        error={errors.name}
        helperText="Se visualizará en el título de la publicación"
        onBlur={handleBlur}
        name="name"
        onChange={handleChange}
        value={values.name}
        fullWidth
      />

      <TextField
        type="text"
        label="Breve descripción del Producto/Servicio*"
        error={errors.shortDescription}
        helperText="Se visualizará en el subtítulo de la publicación 0/50"
        onBlur={handleBlur}
        name="shortDescription"
        onChange={handleChange}
        value={values.shortDescription}
        fullWidth
      />

      <TextField
        select
        label="Categoría*"
        placeholder="Categoría*"
        error={errors.categoryId}
        helperText="Seleccioná la categoría de tu Producto/Servicio"
        onBlur={handleBlur}
        name="categoryId"
        onChange={handleChange}
        value={values.categoryId}
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
        error={errors.email}
        helperText={"El mismo con el que te registraste o uno diferente"}
        name="email"
        onChange={handleChange}
        value={values.email}
        onBlur={handleBlur}
        fullWidth
      />

      <TextField
        type="tel"
        label={"Teléfono o Whatsapp*"}
        error={errors.phone}
        helperText={"Con el siguiente formato +54 9 261 002 002"}
        name="phone"
        onChange={handleChange}
        value={values.phone}
        onBlur={handleBlur}
        fullWidth
      />

      <TextField
        type="text"
        label="Instagram"
        error={errors.instagram}
        helperText="Podés pegar el link de tu perfil"
        onBlur={handleBlur}
        name="instagram"
        onChange={handleChange}
        value={values.instagram}
        fullWidth
      />

      <TextField
        type="text"
        label="Facebook"
        error={errors.facebook}
        helperText="Podés pegar el link de tu perfil"
        onBlur={handleBlur}
        name="facebook"
        onChange={handleChange}
        value={values.facebook}
        fullWidth
      />

      <TextField
        select
        label="País*"
        placeholder="País*"
        error={errors.countryId}
        helperText="Seleccioná un país de la lista"
        onBlur={handleBlur}
        name="countryId"
        onChange={handleChange}
        value={values.countryId}
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
        error={errors.provinceId}
        helperText="Seleccioná una provincia/estado de la lista"
        onBlur={handleBlur}
        name="provinceId"
        onChange={handleChange}
        value={values.provinceId}
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
        error={errors.city}
        helperText="Sin abreviaturas, nombre completo"
        onBlur={handleBlur}
        name="city"
        onChange={handleChange}
        value={values.city}
        fullWidth
      />

      <TextField
        type="text"
        label="Descripción del Producto/Servicio*"
        error={errors.description}
        helperText="Máximo 300 caracteres"
        onBlur={handleBlur}
        multiline
        rows={6}
        name="description"
        onChange={handleChange}
        value={values.description}
        fullWidth
      />

      {selectedImages?.length <= 3 && (
        <Box
          sx={{
            display: "flex",
            marginTop: "16px",
            marginLeft: "auto", // Agregar esta línea para alinear a la derecha
            marginRight: "0", // Asegura que no haya margen derecho adicional
          }}
        >
          <Box sx={{}}>
            <Box>
              <Button
                startIcon={<Upload />}
                variant="contained"
                component="label"
                sx={{ borderRadius: "100px", width: "152px" }}
              >
                <Typography
                  sx={{
                    color: "var(--Blanco, #FAFAFA)",
                    textAlign: "center",
                    fontFamily: "Nunito",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "20px", // 142.857%
                    textTransform: "none",
                  }}
                >
                  Subir imagén
                </Typography>
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png, .gif, .bmp"
                  multiple
                  onChange={(e) => {
                    const newImages = e.target.files;

                    if (
                      newImages &&
                      newImages.length > 0 &&
                      selectedImages.length < 3
                    ) {
                      setSelectedImages((prevImages) =>
                        prevImages.concat(Array.from(newImages))
                      );
                    }
                  }}
                  name="images"
                  value={""}
                  hidden
                />
              </Button>
              <Box
                sx={{
                  placeSelf: "start",
                  width: "152px",
                  marginTop: "4px",
                }}
              >
                <Typography sx={{ fontSize: "12px" }}>
                  *Requerida al menos una imagen
                </Typography>
                <Typography sx={{ fontSize: "12px" }}>
                  Hasta 3 imágenes.
                </Typography>
                <Typography sx={{ fontSize: "12px" }}>
                  Máximo 3Mb cada una
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      <Box
        sx={{
          marginTop: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {selectedImages?.map((image, index) => (
          <Box
            key={index}
            sx={{ position: "relative", display: "inline-block" }}
          >
            <Container>
              <img
                src={renderImage(image)}
                alt="preview"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  margin: "5px",
                }}
              />
            </Container>
            <Box
              onClick={() =>
                setSelectedImages(selectedImages.filter((e, i) => i !== index))
              }
              sx={{
                position: "absolute",
                top: 10,
                right: 15,
                cursor: "pointer",
                padding: "1px",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
              }}
            >
              <DeleteOutline color="white" />
            </Box>
          </Box>
        ))}
      </Box>
      {edit ? (
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
          {edit ? "Guardar Cambios" : "Cargar Producto/Servicio"}
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
