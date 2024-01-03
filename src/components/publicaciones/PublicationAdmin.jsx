import React from "react";
import { Box, Button, Typography } from "@mui/material";
import getAllPublications from "../../services/publications/getAllPublications";
import CardPublication from "./CardPublication";
import { Link } from "react-router-dom";
const PublicationAdmin = () => {
  const publications = getAllPublications();
  return (
    <Box sx={{ marginTop: "106px" }}>
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
        Publicaciones
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to={"/cargarPublicacion"}>
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
            }}
          >
            Crear publicación
          </Button>
        </Link>
      </Box>
      <Typography
        sx={{
          marginTop: "48px",
          marginBottom: "32px",
          color: "var(--Negro, #222)",
          textAlign: "center",
          fontFamily: "Nunito",
          fontSize: "22px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "30px", // 125%
        }}
      >
        Publicaciones cargadas
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {publications.map(({ id, description, images, title }) => (
          <CardPublication
            key={id}
            id={id}
            description={description}
            images={images}
            title={title}
            admin
          />
        ))}
      </Box>
    </Box>
  );
};

export default PublicationAdmin;
