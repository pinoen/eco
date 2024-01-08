import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import {
  Box,
  Typography,
  Button,
  TextField,
  Container,
  Alert,
  Snackbar,
} from "@mui/material";
import { DeleteOutline, Upload } from "@mui/icons-material";

import { useFormik } from "formik";
import * as Yup from "yup";

import getOnePublication from "../../services/publications/getOnePublication";
import useAlert from "../../utilities/alert";
import useAuth from "../../utilities/user";
import { getToken } from "../../services/securityService";
import { apiUrl } from "../../constants";

const AddPublication = ({ edit }) => {
  const navigate = useNavigate(); //para redireccionar al editar o crear publicacion
  const { id } = useParams(); //id de la publicacion
  const { user } = useAuth(); //id del usuario
  const token = getToken(); //token de admin
  const currentPublication = getOnePublication(id); //data de la publicacion a editar
  const [selectedImages, setSelectedImages] = useState([]); //array de imagenes
  const { open, alertColor, alertMessage, showAlert, hideAlert } = useAlert(); //manejo de alertas

  //estado para desabilitar el boton de submit
  const [isSent, setIsSent] = useState(false);

  const initialValues = { title: "", description: "", userId: user.id }; //valores iniciales para crear publicacion

  const { handleSubmit, handleChange, values, errors, handleBlur, resetForm } =
    useFormik({
      initialValues,
      validateOnChange: false,
      validationSchema: Yup.object({
        title: Yup.string().required("Este campo es requerido"),
        description: Yup.string()
          .min(10, "La descripción debe tener al menos 10 caracteres")
          .max(2000, "La descripción no debe exceder los 2000 caracteres")
          .required("Este campo es requerido"),
      }),
      onSubmit: (values) => {
        // axios
        setIsSent(true); //inabilita el boton para no crear publicaciones dobles
        const finalData = edit
          ? {
              id: id,
              title: values.title,
              description: values.description,
              userId: user.id,
            }
          : {
              title: values.title,
              description: values.description,
              userId: user.id,
            };

        const formData = new FormData();
        formData.append(
          "publication",
          new Blob([JSON.stringify(finalData)], {
            type: "application/json",
          })
        );
        selectedImages.forEach((image) => {
          if (!formData.getAll("images").includes(image)) {
            formData.append("images", image);
          }
        });
        if (edit && currentPublication.data) {
          axios
            .put(`${apiUrl}/publication/${id}`, formData, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((res) => {
              setIsSent(false); // Habilita el botón después de un éxito
              showAlert("Publicacion editada!", "success");
              setTimeout(() => {
                navigate("/publicacionesAdmin");
              }, 1000);
            })
            .catch((err) => {
              showAlert("Error al editar Publicacion", "error");
              setIsSent(false); // Habilita el botón en caso de error
            });
        } else if (!edit) {
          axios
            .post(`${apiUrl}/publication`, formData, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((res) => {
              setIsSent(false); // Habilita el botón después de un éxito
              showAlert("Publicacion creada!", "success");
              setTimeout(() => {
                navigate("/publicacionesAdmin");
              }, 1000);
            })
            .catch((err) => {
              showAlert("Error al cargar Publicacion", "error");
              setIsSent(false); // Habilita el botón en caso de error
            });
        }
      },
    });

  //funcion para que actualize los valores de la publicacion al editar, sino es undefined
  useEffect(() => {
    if (edit && !currentPublication.loading && currentPublication.data) {
      setSelectedImages(currentPublication.data.images);
      resetForm({
        values: {
          id: id,
          title: currentPublication.data.title,
          description: currentPublication.data.description,
          userId: user.id,
        },
      });
    }
  }, [currentPublication]);

  //logica para renderizar imagenes
  const renderImage = (image) => {
    if (typeof image === "string" && image.startsWith("http")) {
      return image; // Si la imagen es una URL remota, se devuelve directamente
    } else if (image instanceof File) {
      return URL.createObjectURL(image); // Si es un objeto File, se crea una URL local
    }
    return ""; // Si no es una imagen válida, se devuelve una cadena vacía
  };

  //pantalla de carga mientras se recuperan los datos de la publicacion a editar
  if (edit && currentPublication.loading) {
    return (
      <Box
        sx={{
          paddingTop: "60px",
          textAlign: "center",
          minHeight: "100vh",
          fontSize: "20px",
          fontWeight: 600,
        }}
      >
        Cargando...
      </Box>
    );
  }
  return (
    <Box sx={{ marginTop: "106px", minHeight: "100vh" }}>
      <Typography
        sx={{
          color: "var(--Negro, #222)",
          textAlign: "center",
          fontFamily: "Nunito",
          fontSize: "28px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "35px", // 125%
        }}
      >
        {edit ? "Edición de publicación" : "Carga de publicación"}
      </Typography>
      <Typography
        sx={{
          marginTop: "32px",
          color: "var(--Negro, #222)",
          textAlign: "center",
          fontFamily: "Nunito",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "30px", // 125%
        }}
      >
        {edit
          ? "Modificá los datos de la publicación"
          : "Completá los datos para crear una nueva publicación"}
      </Typography>
      <Container sx={{ marginTop: "24px" }}>
        <form onSubmit={handleSubmit}>
          <TextField
            helperText="Se visualizará en el título de la publicación"
            label="Título*"
            value={values.title}
            error={errors.title}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            margin="normal"
            name="title" // Nombre del campo debe coincidir con la clave en initialValues
          />
          <TextField
            label="Ingresá el contenido de la publicación*"
            value={values.description} // Cambia a values.description
            helperText={`Máximo 2.000 caracteres - ${values.description?.length}/2000`}
            onChange={handleChange}
            onBlur={handleBlur} // Agrega este manejador onBlur
            fullWidth
            multiline
            rows={7}
            margin="normal"
            name="description" // Nombre del campo debe coincidir con la clave en initialValues
          />
          {selectedImages?.length <= 3 && (
            <Box sx={{ display: "grid", placeItems: "end", marginTop: "32px" }}>
              <Box sx={{ display: "grid", placeItems: "center" }}>
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
                    setSelectedImages(
                      selectedImages.filter((e, i) => i !== index)
                    )
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
          <Button
            type="submit"
            variant="contained"
            disabled={isSent}
            sx={{
              textTransform: "none",
              width: "328px",
              height: "40px",
              borderRadius: "100px",
              marginTop: "32px",
              color: "var(--Blanco, #FAFAFA)",
              textAlign: "center",
              fontFamily: "Nunito",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "30px", // 187.5%
              marginBottom: "16px",
            }}
          >
            {edit ? "Guardar cambios" : "Crear publicación"}
          </Button>
        </form>
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
      </Container>
    </Box>
  );
};

export default AddPublication;
