import React, { useState, useEffect } from "react";
import { Close, LocationOn } from "@mui/icons-material";
import {
  Box,
  Typography,
  DialogContent,
  Dialog,
  Snackbar,
  Alert,
} from "@mui/material";
import logo from "../assets/login/logoLogin.png";
import useAlert from "./alert";

function Ubicacion({ openLocation, setOpenLocation }) {
  const { open, alertColor, alertMessage, showAlert, hideAlert } = useAlert(); // manejo de alertas

  const [location, setLocation] = useState({
    lat: null,
    long: null,
  });

  const useLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
        localStorage.setItem(
          "location",
          `${position.coords.latitude}  ${position.coords.longitude}`
        );
        showAlert("Ubicacion activada", "success");
        setTimeout(() => {
          setOpenLocation(false);
        }, 1500);
      });
    } else {
      showAlert("No se pudo obtener la ubicacion", "error");
    }
  };

  const closeModal = () => {
    setOpenLocation(false);
    localStorage.setItem("popupShown", "true");
  };

  return (
    <Dialog
      open={openLocation}
      sx={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Close
        onClick={() => setOpenLocation(false)}
        sx={{
          bgcolor: "#4E169D",
          color: "#FAFAFA",
          borderRadius: "100px",
          padding: "3px",
          position: "absolute",
          right: "5px",
          top: "5px",
          cursor: "pointer",
        }}
      />

      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box>
          <Box paddingTop={2} paddingBottom={4}>
            <Box
              paddingTop={2}
              paddingBottom={2}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              gap={"24px"}
            >
              <Typography
                sx={{
                  color: "#222",
                  fontSize: "26px",
                  fontWeight: 700,
                  lineHeight: "30px",
                  letterSpacing: 0,
                  fontFamily: "Nunito",
                }}
              >
                Activá tu ubicación
              </Typography>
              <Typography
                sx={{
                  color: "#222",
                  fontSize: "18px",
                  fontWeight: 600,
                  lineHeight: "30px",
                  letterSpacing: 0,
                  fontFamily: "Nunito",
                }}
              >
                Disfruta de una experiencia personalizada
              </Typography>
            </Box>
            <img height={75} width={80} src={logo} alt="App Logo" />
          </Box>

          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={"8px"}
          >
            <Box
              sx={{
                bgcolor: "#4E169D",
                color: "#FAFAFA",
                borderRadius: "100px",
                color: "var(--Blanco, #FAFAFA)",
                textAlign: "center",
                fontFamily: "Nunito",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 700,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "2px",
                padding: "6px 8px",
                lineHeight: "30px",
              }}
              onClick={useLocation}
            >
              <LocationOn sx={{ width: "20px", height: "20px" }} />
              Activar Ubicación
            </Box>
            <Typography
              sx={{
                color: "#222",
                textAlign: "center",
                fontFamily: "Nunito",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "30px",
                ":hover": {
                  textDecoration: "underline",
                },
              }}
              onClick={closeModal}
            >
              No volver a preguntar
            </Typography>
          </Box>
        </Box>
      </DialogContent>
      <Snackbar open={open} autoHideDuration={5000} onClose={hideAlert}>
        <Alert
          variant="filled"
          onClose={hideAlert}
          severity={alertColor}
          sx={{ width: "100%" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </Dialog>
  );
}

export default Ubicacion;
