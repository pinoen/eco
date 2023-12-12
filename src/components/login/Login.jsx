import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { apiUrl, googleClientID } from "../../constants";
import useAlert from "../../utilities/alert";

import { Card, Snackbar, Alert, Box, Typography } from "@mui/material";
import logo from "../../assets/login/logoLogin.png";

function LoginCard({ user }) {
  const navigate = useNavigate(); // para redireccionar cuando se haga el login

  const { open, alertColor, alertMessage, showAlert, hideAlert } = useAlert(); // manejo de alertas

  // manejo del token con el back
  const handleGoogleSuccess = (credentialResponse) => {
    if (credentialResponse && credentialResponse.credential) {
      axios
        .post(
          `${apiUrl}/auth/googleAuth?tokenId=${credentialResponse.credential}`
        )
        .then((res) => {
          // guardamos el token en local storage
          localStorage.setItem("authToken", res.data.token);

          // Muestra la alerta de éxito
          showAlert("Autenticacion exitosa!", "success");

          setTimeout(() => {
            // Redirige a "/" desp de 1s
            navigate("/");
          }, 1000);
        })
        .catch((error) => {
          showAlert("Error en la autenticacion", "error");
          console.error("Error al autenticar con Google en el backend:", error);
        });
    } else {
      showAlert("Fallo en la autenticación de Google", "error");
      console.error("Fallo en la autenticación de Google:", credentialResponse);
    }
  };

  return (
    <Box
      sx={{
        height: "calc(100vh - 56px)", // 56px height que deberia tener el nav
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(0deg, rgba(34, 34, 34, 0.50) 0%, rgba(34, 34, 34, 0.50) 100%), url(https://s3-alpha-sig.figma.com/img/4369/010e/e2ffa5e4c8bf751bceb287ec6e3df4fb?Expires=1702252800&Signature=e7nEuO1fji~Db2V1y~AhEJYtBbOjx8QztlPfZKswKvyssDahkxM1BnA3Ac~6XaIXYplOwtC-tOPf7B5eyExpNp8rs11-3OkFWiW4ridPkn5DQlrKAzAtJwBBY90OnzidIQA~T5pKrB4D5kSn7qAthZc5xuNu8Qn-2LQAnxtZCUbtlraOw1TvI38vuRp089Zil5Fr1Wksyjkuuaor6-nABrfgN0kZoAUYAcr3Jae1LOc~YD7fvkrQv-E-XNPVLSkpGdZUo6GgaJv1GHyYG8suVFXXRDc7aJZr7aksb1VE5joflRnzGNXBCanGmJP5nBkyLNppRaIqfLhA6EAEz4t-Fg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "absolute",
        }}
      ></Box>
      <Card //card registro
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          top: 224,
          margin: "auto",
          maxWidth: 328,
          minHeight: 320,
          paddingBottom: 4,
          background: "#FAFAFA",
          borderRadius: 2,
          zIndex: 10,
        }}
      >
        <Box>
          <Box //frame 110
            paddingTop={2}
            paddingBottom={4}
          >
            <Box //frame 109
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
                  fontSize: "28px",
                  fontWeight: 700,
                  lineHeight: "30px",
                  letterSpacing: 0,
                  fontFamily: "Nunito",
                }}
              >
                {user ? "Inicia sesión" : "Registrate"}
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
                {user
                  ? "Seguí disfrutando de ECOSistema"
                  : "Sumate a ECOSistema"}
              </Typography>
            </Box>
            <img height={75} width={80} src={logo} alt="App Logo" />
          </Box>

          <Box //frame 111
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={"8px"}
          >
            <Typography
              sx={{
                color: "#222",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "30px",
                letterSpacing: 0,
                fontFamily: "Nunito",
              }}
            >
              {user
                ? "Ingresá con tu cuenta de Gmail"
                : "Registrate con tu cuenta de Gmail"}
            </Typography>
            <GoogleOAuthProvider clientId={googleClientID}>
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                theme="filled_black"
                shape="circle"
              />
            </GoogleOAuthProvider>
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
        </Box>
      </Card>
    </Box>
  );
}

export default LoginCard;
