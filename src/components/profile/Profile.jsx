import { Card, CardContent, Typography, Box, Container } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import useAuth from "../../utilities/user";
import SupplierCard from "../common/SupplierCard";
// import useSuppliers from "../../utilities/suppliers";

const Profile = () => {
  const { user } = useAuth();
  // const suppliers = useSuppliers();

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
          flexDirection: "column",
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
            marginBottom: "16px",
          }}
        >
          Asi se vería tu Producto/Servicio en el Directorio
        </Typography>
        <SupplierCard
          item={{
            id: 1,
            name: "Lavanda",
            description: "Cosmética Natural",
            fullDescription:
              "Lavanda es un proyecto familiar. Perseguimos una cosmética efectiva, magistral y con personalidad. Nuestro objetivo es hacer productos que enamoren, que cuiden al planeta, con principios activos que dejen el pelo sano y la piel bella.",
            phone: "2994184677",
            email: "supplier1@email.com",
            facebook: "facebook.com/supplier1",
            instagram: "instagram.com/supplier1",
            country: "Argentina",
            state: "Mendoza",
            city: "Godoy Cruz",
            images:
              [
                {
                  "original": "https://s3-alpha-sig.figma.com/img/1d2e/ea59/1c27a72869b176f8ac7bc5f75f460594?Expires=1702252800&Signature=CbikcnJtiL2vgQtnksqJkfJ-JMlWyMN6NGlbp05mWJYyDncerJIjTi-5XwgZvGzngqqbumintRGULuk9vqjhJ3YuATfyh5BdmEvzv3hS0iC90JsU8rnAgOq2hGmcP3QCDBPwZJyH77ejbspc7PI7KI9RYYuZzNqLg3T0Jao~kW66Wbr7NmuvJ3yvsevdHBI3KKE3zO8Y7Y-wLfhvFxpc4L7i8URcQVxaPsNhfC0AgGIaYGIbWobU4bQpgPhZuE2M6GqW9u9Tp4Gxp5kQFDt1cFDVecveSPC~nwWssHg8cajdwfnDJMLpDXdkyXUzj4BoiSfOsRzTaV85drjfkekCHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                },
                {
                  "original": "https://s3-alpha-sig.figma.com/img/76c6/5ee9/4989818dea0524d2fb0186ddb4f48bb3?Expires=1701648000&Signature=TzKeqAXjiWNMMEGzA-BO9TE99v6-JJ8Sl5Mt7uIwfoUyCJ8CMUWA-IdH1nT6M89FSM9c3~J-D-n4Edquzj~CY8bAQ8kETSa9dJxmVx~-a97Ld-Qpu2P1OsQP-iQm3TQ~7vgUpZdhppWeMZTeo11EDxtwuKMqUc2DPz~0qOAl5RYj76MmL~Gy3nR3lXEDOkAzZ9qWcJIfGxu3yaAddXdLov64nNpMx2i3Tx7rjI1yCi0B4wOKX-tfmdcjr4IRh~wcZOJVK6oDgraLL-ziJAfQnQaWQNws1znq5cnRGktk4l~6CMZniTWRTojfes28m69GCmF0RXYD68HPnJDiGowiQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                },
                {
                  "original": "https://s3-alpha-sig.figma.com/img/3d63/16ca/e3bd50330ffa28bcb22ef67ef6231dd2?Expires=1701648000&Signature=JAuntl70XIcKGAhh9lYYzUNEMdm~fFr5qQGZG9V75Hk7ao2W-hB3A9GcMyNVQ0Om3w-2v2TTdAfv37wHSCXaelKQpQe4N2URd6hOB4ZAcWuGBBAO-lto1KW2bxuVmWaUbTfogA8xLAGo-2zgtaJvYufVBTWumRVdMhZcnvfiYUO9Lv~tOG0JBymK-sjGICDP0qRU4K4f5HWo-ProqEmEv8DVJ5wP3HZ~b7QYXxEDqTtkoKVdSywOSc3PGuoq-aMQ1Ai3zNwILSiMWOfymyj0KEd8yqwGLXVypNMjLMlVdaYP9SRyxjr0TYOGQlFK38FVIUcYjSqWX3MjO2rTTsly7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                }
              ],
            category: "Bienestar",
            active: true,
            deleted: false,
            feedback: [],
          }}
        />
      </Box>
    </Container>
  );
};

export default Profile;
