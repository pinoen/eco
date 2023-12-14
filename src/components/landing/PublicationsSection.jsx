import React from "react";
import { Box, Typography } from "@mui/material";
import CardPublications from "../publicaciones/CardPublication";
import { Link } from "react-router-dom";
import getAllPublications from "../../services/publications/getAllPublications";
const PublicationsSection = () => {
  const publications = getAllPublications();
  return (
    <Box>
      <Typography
        sx={{
          color: "var(--Negro, #222)",
          textAlign: "center",
          fontFamily: "Nunito",
          fontSize: 16,
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "25px", // 156.25%
          textAlign: "left",
        }}
      >
        Publicaciones
      </Typography>
      <Typography
        sx={{
          color: "var(--Negro, #222)",
          textAlign: "center",
          fontFamily: "Nunito",
          fontSize: 22,
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "25px", // 113.636%
          textAlign: "left",
        }}
      >
        Impulsando transformaciones
      </Typography>
      {publications.map(({ id, description, images, title }) => (
        <CardPublications
          key={id}
          id={id}
          description={description}
          images={images}
          title={title}
        />
      ))}

      <Link to="/publicaciones">
        <Box
          sx={{
            width: 184,
            height: 40,
            padding: "10px 24px",
            bgcolor: "#4E169D",
            borderRadius: "100px",
            margin: "auto",
          }}
        >
          <Typography
            sx={{
              color: "#FAFAFA",
              fontFamily: "Nunito",
              fontSize: 16,
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "20px", // 125%
            }}
          >
            Ir a Publicaciones
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};

export default PublicationsSection;
