import React from "react";

import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

import logo from "../../assets/login/logoLogin.png";
import google from "../../assets/login/google.png";
import { apiUrl, googleClientID } from "../../constants";

const Logo = styled("img")({
  height: 75,
  width: 80,
});

function LoginCard({ user }) {
  const handleGoogleSuccess = (credentialResponse) => {
    console.log(credentialResponse);

    // Verificar si existe la propiedad "credential"
    // if (credentialResponse && credentialResponse.credential) {
    //   axios
    //     .post(`${apiUrl}/auth/login`, {
    //       tokenId: credentialResponse.credential,
    //     })
    //     .then((res) => {
    //       // Guarda el token JWT u otra respuesta del backend
    //       console.log("RES", res);
    //       localStorage.setItem("authToken", res.data.token);
    //     })
    //     .catch((error) => {
    //       console.error("Error al autenticar con Google en el backend:", error);
    //     });
    // } else {
    //   console.error("Fallo en la autenticación de Google:", credentialResponse);
    // }
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
            "linear-gradient(0deg, rgba(34, 34, 34, 0.50) 0%, rgba(34, 34, 34, 0.50) 100%), url(https://s3-alpha-sig.figma.com/img/4369/010e/e2ffa5e4c8bf751bceb287ec6e3df4fb?Expires=1700438400&Signature=aId3lKOSnfIToCTQJvZR2awbqhtt7elN9O-PWxUl51abK8-phnBYMBkHXAaMRlN6Ims2CEGQCSTWVRIGI9P7ME9qc88HZ2-kup9adICPWFzVZXHRGn-EAUhoX-NOH80mWW7azvSjXs0CNUOkLxeQuB2AMsbhPD-UXXCATGog8Y90fmxRWvEQBWvsjR85Kuk8OiCFPNCCzsvn81~nSXuSu7SVKI0z7jjRT~6z~9GPK2bUlepZElp6AEEEk5gTi2jfAiqsYT2nILVFEnPrj9h0z1J2H7bmAd9RIGWsbkzjk5JWVMqVrRfRz4~6PRnpzJGpzgEP-ZJlR3ypeNwLN-j6og__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
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
            <Logo src={logo} alt="App Logo" />
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
                onError={() => {
                  console.log("Login Failed");
                }}
                useOneTap
              >
                <Button
                  sx={{
                    background: "#4E169D",
                    color: "#FAFAFA",
                    borderRadius: "100px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    textTransform: "none",
                    fontFamily: "Nunito",
                  }}
                >
                  <img
                    src={google}
                    alt="logo google"
                    style={{
                      background: "#FAFAFA",
                      borderRadius: "100px",
                      padding: "3px",
                    }}
                  />
                  Continuá con Google
                </Button>
              </GoogleLogin>
            </GoogleOAuthProvider>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default LoginCard;
