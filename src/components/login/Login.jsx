import React from "react";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

import logo from "../../assets/login/logoLogin.png";
import google from "../../assets/login/google.png";

const Logo = styled("img")({
  height: 75,
  width: 80,
});

function LoginCard({ user }) {
  return (
    <Box
      sx={{
        height: "calc(100vh - 56px)", // 56px height que deberia tener el nav
        "::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "url(https://s3-alpha-sig.figma.com/img/4369/010e/e2ffa5e4c8bf751bceb287ec6e3df4fb?Expires=1700438400&Signature=aId3lKOSnfIToCTQJvZR2awbqhtt7elN9O-PWxUl51abK8-phnBYMBkHXAaMRlN6Ims2CEGQCSTWVRIGI9P7ME9qc88HZ2-kup9adICPWFzVZXHRGn-EAUhoX-NOH80mWW7azvSjXs0CNUOkLxeQuB2AMsbhPD-UXXCATGog8Y90fmxRWvEQBWvsjR85Kuk8OiCFPNCCzsvn81~nSXuSu7SVKI0z7jjRT~6z~9GPK2bUlepZElp6AEEEk5gTi2jfAiqsYT2nILVFEnPrj9h0z1J2H7bmAd9RIGWsbkzjk5JWVMqVrRfRz4~6PRnpzJGpzgEP-ZJlR3ypeNwLN-j6og__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)", // replace {backgroundImageUrl} with your image url
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5,
          zIndex: -1,
        },
      }}
    >
      <Card //card registro
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          top: 168,
          margin: "auto",
          maxWidth: 328,
          minHeight: 320,
          paddingBottom: 4,
          background: "#FAFAFA",
          borderRadius: 2,
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
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default LoginCard;
