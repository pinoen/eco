import { Box, Typography } from "@mui/material";
import { SearchBar } from "../common/SearchBar";
import plant from "../../assets/img/plant.png";
import CardPublication from "./CardPublication";

const boxStyle = {
  py: 5,
  backgroundColor: "white.main",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const Publicaciones = () => {
  return (
    <Box sx={boxStyle}>
      <Box
        sx={{
          width: 360,
          height: 488,
          backgroundImage: `linear-gradient(0deg, rgba(34, 34, 34, 0.70) 0%, rgba(34, 34, 34, 0.70) 100%), url(${plant})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white", // Color del texto
          paddingTop: "10px",
          paddingLeft: "16px",
          marginTop: "16px",
        }}
      >
        <SearchBar />
        <Typography
          sx={{
            color: "#FAFAFA",
            fontFamily: "Nunito",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "24px",
            marginTop: "40px",
          }}
        >
          PUBLICACIONES
        </Typography>
        <Typography
          sx={{
            color: "#FAFAFA",
            fontFamily: "Nunito",
            fontSize: "28px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "30px",
            width: "240px",
            marginTop: "8px",
          }}
        >
          Historias de impacto
        </Typography>
        <Typography
          sx={{
            color: "var(--Blanco, #FAFAFA)",
            fontFamily: "Nunito",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "30px",
            width: "240px",
            marginTop: "16px",
          }}
        >
          Encontrá inspiración y explorá las noticias y tendencias que están
          dando forma a un mundo más verde
        </Typography>
      </Box>
      <Box sx={{ position: "absolute", zIndex: 0, top: "544px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="360"
          height="620"
          viewBox="0 0 361 620"
          fill="none"
        >
          <path
            d="M361 183C189.669 191.629 104.632 167.382 0 0V550C0 550 361 706 361 550V183Z"
            fill="#00A364"
          />
        </svg>
      </Box>
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <CardPublication />
        <CardPublication />
        <CardPublication />
      </Box>
    </Box>
  );
};

export default Publicaciones;
