import React, { useEffect, useState } from "react";
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
import useAlert from "../../utilities/alert";
import getOnePublication from "../../services/publications/getOnePublication";
import { useParams } from "react-router-dom";
const AddPublication = ({ edit }) => {
  const { id } = useParams();
  const currentPublication = getOnePublication(id);
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const { open, alertColor, alertMessage, showAlert, hideAlert } = useAlert();

  //funcion para que actualize los valor de la publicacion a editar, sino es undefined
  useEffect(() => {
    if (edit) {
      setTitulo(currentPublication.title);
      setContenido(currentPublication.description);
      setSelectedImages(currentPublication.images);
    }
  }, [currentPublication]);

  const handleTituloChange = (event) => {
    setTitulo(event.target.value);
  };

  const handleContenidoChange = (event) => {
    setContenido(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario
  };
  //logica para renderizar imagenes
  const renderImage = (image) => {
    if (typeof image === "string" && image.startsWith("http")) {
      return image; // Si la imagen es una URL remota, se devuelve directamente
    } else if (image instanceof File) {
      return URL.createObjectURL(image); // Si es un objeto File, se crea una URL local
    }
    return ""; // Si no es una imagen válida, se devuelve una cadena vacía
  };

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
            value={titulo}
            onChange={handleTituloChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Ingresá el contenido de la publicación*"
            value={contenido}
            helperText={`Máximo 2.000 caracteres - ${contenido?.length}/2000`}
            onChange={handleContenidoChange}
            fullWidth
            multiline
            rows={7}
            margin="normal"
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
                      value={null}
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
              <Box sx={{ position: "relative", display: "inline-block" }}>
                <Container>
                  <img
                    key={index}
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
            variant="contained"
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
