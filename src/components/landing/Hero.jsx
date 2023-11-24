/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { SearchBar } from "./SearchBar";
import allhands from "../../assets/img/EcoSistemas-hero.png";
import hero from "../../assets/img/Imagen-Hero.png";

const tipografiaH2 = {
  color: "#FAFAFA",
  fontFamily: "Nunito",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "24px",
};

const tipografiaH1 = {
  color: "#FAFAFA",
  fontFamily: "Nunito",
  fontSize: "28px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "24px",
  paddingTop: "8px",
  paddingBottom: "16px",
};

const tipografiaP = {
  width: "240px",
  fontSize: "28px",
  color: "#fff",
  fontFamily: "Nunito",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "30px",
};

export const Hero = ({ bg, section, title, text }) => {
  return (
    <Box
      sx={{
        marginBottom: "40px",
        width: 360,
        height: 488,
        backgroundImage: bg === "landing" ? `linear-gradient(0deg, rgba(34, 34, 34, 0.70) 0%, rgba(34, 34, 34, 0.70) 100%), url(${allhands})` : `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white", // Color del texto
        paddingTop: "10px",
        paddingLeft: "16px",
        flexShrink: 0,
      }}
    >
      <SearchBar />
      <Typography sx={tipografiaH2}>{section}</Typography>
      <Typography sx={tipografiaH1}>{title}</Typography>
      <Typography sx={tipografiaP}>
        {text}
      </Typography>
    </Box>
  );
};
