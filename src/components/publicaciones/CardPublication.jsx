import React, { useEffect, useState } from "react";

import {
  Box,
  Typography,
  Menu,
  MenuItem,
  Alert,
  Snackbar,
} from "@mui/material";
import ReactImageGallery from "react-image-gallery";
import axios from "axios";
import { apiUrl } from "../../constants";
import { MoreVert } from "@mui/icons-material";
import { Link } from "react-router-dom";
import useAlert from "../../utilities/alert";
import { getToken } from "../../services/securityService";

const CardPublication = ({ id, description, images, title, admin }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const token = getToken();
  const { open, alertColor, alertMessage, showAlert, hideAlert } = useAlert(); //manejo de alertas

  const imagesForGallery = images.map((image) => ({
    original: image,
  }));

  const previewText = `${description.substring(0, 173)}...`;

  useEffect(() => {
    //logica para incrementar la visualizacion al hacer click en ver mas
    if (isExpanded) {
      axios.get(`${apiUrl}/publication/increment/${id}`).catch((error) => {
        console.error(
          "Error al incrementar la visualización de la publicación: ",
          error
        );
      });
    }
    //logica para ocultar publicacion
  }, [isExpanded, id]);

  const handleButton = () => {
    setIsExpanded(!isExpanded);
  };

  //manejo de el hover del boton de edicion en vista de admin
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  //manejo del desplegable del boton de edicion en vista admin
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOcultar = () => {
    axios
      .put(`${apiUrl}/publication/setDeleted/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(showAlert("Publicacion ocultada", "success"))
      .catch((error) => {
        showAlert("Error al ocultar publicacion", "error");
        console.error("Error al ocultar la publicacion: ", error);
      });

    handleClose();
  };
  return (
    <Box
      sx={{
        width: "328px",
        minHeight: "400px",
        marginBottom: `${admin ? "16px" : "40px"}`,
        marginTop: `${admin ? "0px" : "40px"}`,
        bgcolor: "#EAEAEA",
        borderRadius: "16px",
        padding: "16px 16px 8px 16px",
      }}
    >
      <Box>
        {admin ? (
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                color: "var(--Negro, #222)",
                textAlign: "center",
                fontFamily: "Nunito",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "25px",
              }}
            >
              {title}
            </Typography>
            <Box
              onClick={handleClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                borderRadius: "100px",
                display: "grid",
                placeItems: "center",
                padding: "3px",
                backgroundColor: hovered ? "#4E169D" : "transparent",
                cursor: "pointer",
              }}
            >
              <MoreVert
                style={{
                  color: hovered ? "white" : "black", // Cambio de color al hacer hover
                }}
              />
            </Box>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link to={`/editarPublicacion/${id}`}>
                  <Typography
                    sx={{
                      color: "var(--Negro, #222)",
                      fontFamily: "Nunito",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "24px", // 150%
                    }}
                  >
                    Editar
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleOcultar}>
                {" "}
                <Typography
                  sx={{
                    minWidth: "100px",
                    color: "var(--Negro, #222)",
                    fontFamily: "Nunito",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "24px", // 150%
                  }}
                >
                  Ocultar
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <Typography
            sx={{
              color: "var(--Negro, #222)",
              textAlign: "center",
              fontFamily: "Nunito",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "25px",
            }}
          >
            {title}
          </Typography>
        )}

        <Box sx={{ borderRadius: "16px", marginTop: "16px" }}>
          <ReactImageGallery
            items={imagesForGallery}
            showPlayButton={false}
            showFullscreenButton={false}
            showIndex={false}
            showBullets={true}
            // autoPlay={true}
            // slideInterval={5000}
          />
        </Box>
      </Box>
      <Box sx={{ minHeight: "124px", marginTop: "26px", width: "304px" }}>
        <Typography
          sx={{
            color: "var(--Negro, #222)",
            fontFamily: "Nunito",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "20px",
          }}
        >
          17/04/2023
        </Typography>
        <Typography
          sx={{
            color: "var(--Negro, #222)",
            fontFamily: "Nunito",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "20px",
            marginTop: "4px",
          }}
        >
          {isExpanded ? description : previewText}
        </Typography>
      </Box>
      <Box onClick={() => handleButton()}>
        <Typography
          sx={{
            color: "var(--Violeta, #4E169D)",
            fontFamily: "Nunito",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "20px",
            textAlign: "center",
            paddingTop: "10px",
            marginTop: "8px",
          }}
        >
          {isExpanded ? "Ver Menos" : "Ver más"}
        </Typography>
      </Box>
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
    </Box>
  );
};

export default CardPublication;
