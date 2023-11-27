import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ProductState = () => {
  const estado = "postulado";
  // Objeto con los textos correspondientes a cada estado
  const estadosText = {
    postulado: {
      title: "Postulado",
      content: "¡Gracias por querer forma parte de EcoSistema!",
      moreInfo:
        "La postulación de tu Producto/Servicio fue enviada correctamente.",
      footer: "Pronto tendrás más novedades.",
      color: "#505050",
    },
    aprobado: {
      title: "Aprobado",
      content: "¡Felicitaciones! Sos parte de EcoSistema",
      moreInfo:
        "Tu Producto/Servicios está incluído dentro de nuestra Red de Impacto.",
      color: "#1D9129",
    },
    en_revision: {
      title: "En revisión",
      content: "Devolución de la administración:",
      moreInfo: "Lorem ipsum",
      color: "#B86B11",
    },
    denegado: {
      title: "Denegado",
      content: "Devolución de la administración:",
      moreInfo: "Lorem ipsum",
      color: "#BC1111",
    },
  };

  // Obtener los textos correspondientes al estado recibido
  const { title, content, moreInfo, footer, color } = estadosText[estado] || {};

  return (
    <Card // card estado de postulacion
      sx={{
        maxWidth: 328,
        border: "1px solid #4E169D",
        borderRadius: "16px 16px 4px 4px",
      }}
    >
      <Box
        sx={{
          borderRadius: "16px 16px 0px 0px",
          backgroundColor: "#4E169D",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#fafafa",
          padding: "0px 16px",
          height: "40px",
        }}
      >
        <Typography
          sx={{
            color: "#FAFAFA",
            fontFamily: "Nunito",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "24px",
          }}
        >
          Lavanda
        </Typography>
        <Typography
          sx={{
            color: "#FAFAFA",
            fontFamily: "Nunito",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          Editar
          <ArrowForwardIosIcon sx={{ width: "24px", padding: "5px" }} />
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          marginTop: "12px",
          paddingRight: "22px",
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
          gap: "2px",
        }}
      >
        <Box
          sx={{
            width: "16px",
            height: "16px",
            borderRadius: "100px",
            backgroundColor: color,
          }}
        ></Box>
        {title}
      </Box>
      <CardContent>
        <Typography
          sx={{
            color: "#4E169D",
            textAlign: "center",
            fontFamily: "Nunito",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "20px",
            paddingTop: "8px",
          }}
        >
          {content}
        </Typography>
        <Typography
          sx={{
            marginTop: "16px",
            color: "#222",
            textAlign: "center",
            fontFamily: "Nunito",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "20px",
          }}
        >
          {moreInfo}
        </Typography>
        <Typography
          sx={{
            color: "#222",
            fontFamily: "Nunito",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "300",
            lineHeight: "20px",
            textAlign: "center",
            marginTop: "24px",
          }}
        >
          {footer}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductState;
