import { Box, Typography } from "@mui/material";
import { SearchBar } from "../common/SearchBar";
import plant from "../../assets/img/plant.png";
import CardPublication from "./CardPublication";
import verde from "../../assets/verde1.png";
import getAllPublications from "../../services/publications/getAllPublications";
const boxStyle = {
  py: 5,
  backgroundColor: "white.main",
  width: "100vw",
};

const Publicaciones = () => {
  const publications = getAllPublications();
  return (
    <Box sx={boxStyle}>
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
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
            fontSize: { xs: "18px", md: "28px" },
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
            width: { xs: "240px", md: "440px" },
            marginTop: "8px",
          }}
        >
          Historias de impacto
        </Typography>
        <Typography
          sx={{
            color: "var(--Blanco, #FAFAFA)",
            fontFamily: "Nunito",
            fontSize: { xs: "24px", md: "28px" },
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "30px",
            width: { xs: "240px", md: "440px" },
            marginTop: "16px",
          }}
        >
          Encontrá inspiración y explorá las noticias y tendencias que están
          dando forma a un mundo más verde
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          zIndex: 0,
          top: "544px",
          width: "100vw",
        }}
      >
        <img width="100%" src={verde} />
      </Box>
      <Box sx={{ position: "relative", zIndex: 1 }}>
        {publications.map(({ id, description, images, title }) => (
          <CardPublication
            key={id}
            id={id}
            description={description}
            images={images}
            title={title}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Publicaciones;
