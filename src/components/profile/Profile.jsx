import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Box, Container } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import useAuth from "../../utilities/user";
import SupplierCard from "../common/SupplierCard";

import { getSuppliers } from "../../services/api";

const Profile = () => {
  const { user } = useAuth();
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    getSuppliers().then((data) => {
      setSuppliers(data);
    });
    console.log(suppliers);
  }, []);

  return (
    <Container
      sx={{
        minHeight: "100vh",
        width: "100vw",
        bgcolor: "#fff",
        marginTop: "56px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            color: "#222",
            textAlign: "center",
            fontFamily: "Nunito",
            fontSize: "28px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "30px",
            paddingTop: "40px",
          }}
        >
          {user.name}
        </Typography>
        <button
          style={{
            backgroundColor: "#4E169D",
            width: "328px",
            height: "40px",
            borderRadius: "100px",
            marginTop: "32px",
          }}
        >
          Cargar Producto/Servicio
        </button>
        <Typography
          sx={{
            color: "#222",
            textAlign: "center",
            fontFamily: "Nunito",
            fontSize: "22px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "25px",
            marginTop: "56px",
          }}
        >
          Mis Productos/Servicios
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "32px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
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
                backgroundColor: `#505050`,
              }}
            ></Box>
            Postulado
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
              ¡Gracias por querer forma parte de EcoSistema!
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
              La postulación de tu Producto/Servicio fue enviada correctamente.
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
              Pronto tendrás más novedades.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#222",
            textAlign: "center",
            fontFamily: "Nunito",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "25px",
          }}
        >
          Asi se vería tu Producto/Servicio en el Directorio
        </Typography>
        {/* <SupplierCard item={} /> */}
      </Box>
    </Container>
  );
};

export default Profile;
