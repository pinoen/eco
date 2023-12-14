import React, { useEffect, useState } from "react";

import { Box, Typography } from "@mui/material";
import ReactImageGallery from "react-image-gallery";
import axios from "axios";
import { apiUrl } from "../../constants";

const CardPublication = ({ id, description, images, title }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const imagesForGallery = images.map((image) => ({
    original: image,
  }));

  const previewText = `${description.substring(0, 173)}...`;

  useEffect(() => {
    if (isExpanded) {
      axios.get(`${apiUrl}/publication/increment/${id}`).catch((error) => {
        console.error(
          "Error al incrementar la visualización de la publicación: ",
          error
        );
      });
    }
  }, [isExpanded, id]);

  const handleButton = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box
      sx={{
        width: "328px",
        minHeight: "400px",
        my: "40px",
        bgcolor: "#EAEAEA",
        borderRadius: "16px",
        padding: "16px 16px 8px 16px",
      }}
    >
      <Box>
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
    </Box>
  );
};

export default CardPublication;
