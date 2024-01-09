import { Box, Button, Typography } from "@mui/material";
import { RemoveRedEyeOutlined } from "@mui/icons-material";
import getSuppliersStatistics from "../../services/suppliers/getSuppliersStatistics";
import getUsersStatistics from "../../services/users/getUsersStatistics";
import getPublicationsStatistics from "../../services/publications/getPublicationsStatistics";

export const DashboardAdmin = () => {
  const providersStatistics = getSuppliersStatistics();
  const publicationsStatistics = getPublicationsStatistics();
  const userStatistics = getUsersStatistics();

  const approved = {
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "0%", // Inicia en el centro
      width: "50%", // Ocupa el 50% del ancho del elemento
      height: "2px", // Grosor del borde
      background: "#1D9129",
    },
  };

  const revision = {
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "0%", // Inicia en el centro
      width: "50%", // Ocupa el 50% del ancho del elemento
      height: "2px", // Grosor del borde
      background: "#B86B11",
    },
  };

  const denegade = {
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "0%", // Inicia en el centro
      width: "50%", // Ocupa el 50% del ancho del elemento
      height: "2px", // Grosor del borde
      background: "#BC1111",
    },
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "328px",

        margin: "0 auto 0",
        fontFamily: "Nunito",
        paddingTop: "56px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="outlined"
          href="#outlined-buttons"
          sx={{
            backgroundColor: "#D2D2D2",
            color: "#000000",
            textTransform: "none",
            borderStyle: "none",
          }}
        >
          Cerrar sesión
        </Button>
      </Box>
      <Typography textAlign="center" variant="h5" sx={{ mb: "24px" }}>
        Dashboard Administrador
      </Typography>
      <Typography textAlign="center" variant="h6" sx={{ mb: "32px" }}>
        Estadisticas mensuales
      </Typography>

      <Box
        sx={{
          m: "0 auto",
          width: "328px",
          backgroundColor: "#4E169D",
          color: "#fff",
          borderRadius: "5px",
          padding: "8px 0px 8px 16px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography>Nuevos perfiles creados</Typography>
        <Typography sx={{ paddingRight: "6px" }}>{userStatistics}</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "8px", mt: 2 }}>
        <Box
          sx={{
            mt: "6px",
            width: "104px",
            border: "2px solid #1D9129",
            padding: "8px",
            borderRadius: "8px",
          }}
        >
          <Typography sx={approved}>Aprobados</Typography>
          <Typography
            sx={{
              color: "var(--Negro, #222)",
              fontFamily: "Nunito",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "25px", // 138.889%
            }}
          >
            {providersStatistics.approved}
          </Typography>
        </Box>
        <Box
          sx={{
            mt: "6px",
            width: "104px",
            border: "2px solid #B86B11",
            padding: "8px",
            borderRadius: "8px",
          }}
        >
          <Typography sx={revision}>En revision</Typography>
          <Typography
            sx={{
              color: "var(--Negro, #222)",
              fontFamily: "Nunito",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "25px", // 138.889%
            }}
          >
            {providersStatistics.inReview}
          </Typography>
        </Box>
        <Box
          sx={{
            mt: "6px",
            width: "104px",
            border: "2px solid #BC1111",
            padding: "8px",
            borderRadius: "8px",
          }}
        >
          <Typography sx={denegade}>Denegados</Typography>
          <Typography
            sx={{
              color: "var(--Negro, #222)",
              fontFamily: "Nunito",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "25px", // 138.889%
            }}
          >
            {providersStatistics.denied}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          mt: "32px",
          mb: "24px",
          borderRadius: "8px",
          width: "328px",
          backgroundColor: "#EAEAEA",
          padding: "8px",
        }}
      >
        <Box
          sx={{
            borderBottom: "2px solid #4E169D",
            padding: "8px",
          }}
        >
          <Typography
            textAlign="center"
            sx={{
              color: "#4E169D",
              fontFamily: "Nunito",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "25px",
            }}
          >
            Proveedores por categoria
          </Typography>
        </Box>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "280px",
            padding: "16px",
            margin: "auto",
          }}
        >
          {providersStatistics?.categories?.map((item) => (
            <Box
              sx={{
                display: "flex",
                borderBottom: "1px solid",
                paddingBottom: "8px",
                marginBottom: "7.5px",
                justifyContent: "space-between",
                width: "100%",
              }}
              key={item.name}
            >
              <Typography>{item.name}</Typography>
              <Typography
                sx={{
                  color: "var(--Negro, #222)",
                  textAlign: "center",
                  fontFamily: "Nunito",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "25px", // 138.889%
                }}
              >
                {item.registered}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Typography
        sx={{
          color: "var(--Negro, #222)",
          textAlign: "center",
          fontFamily: "Nunito",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "30px", // 138.889%
        }}
      >
        Visualizaciones por publicacion
      </Typography>
      <Box sx={{ width: "100%", paddingBottom: "32px" }}>
        {publicationsStatistics.map((item, idx) => (
          <Box
            key={idx}
            sx={{
              border: "solid 1px #4E169D",
              marginTop: "16px",
              minHeight: "48px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px 16px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
              }}
            >
              <Typography
                sx={{
                  color: "var(--Negro, #222)",
                  textAlign: "center",
                  fontFamily: "Nunito",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "25px", // 138.889%
                }}
              >
                {" "}
                {item.title}
              </Typography>
              <Typography
                sx={{
                  color: "var(--Negro, #222)",
                  textAlign: "center",
                  fontFamily: "Nunito",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "25px", // 138.889%
                }}
              >
                {item.dateOfCreation}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                color: "#4E169D",
                fontFamily: "Nunito",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "25px", // 138.889%
              }}
            >
              <RemoveRedEyeOutlined />
              {item.visualizationsAmount}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default DashboardAdmin;
