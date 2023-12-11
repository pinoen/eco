import { Typography, Box, Container } from "@mui/material";

import useAuth from "../../utilities/user";
import SupplierCard from "../common/SupplierCard";
import ProductState from "./ProductState";
import { useNavigate } from "react-router-dom";
import getUserSuppliers from "../../services/suppliers/getUserSuppliers";

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const userSuppliers = getUserSuppliers();
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
          onClick={() => navigate("/profile/add-product")}
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
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
        }}
      >
        {userSuppliers ? (
          userSuppliers.map((item, idx) => (
            <ProductState key={idx} name={item.name} status={item.status} />
          ))
        ) : (
          <Typography>No tenes productos/servicios todavia</Typography>
        )}
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
        {userSuppliers?.map((item, idx) => (
          <SupplierCard item={item} key={idx} />
        ))}
        {/* <SupplierCard
          item={{
            id: 7,
            name: "Lavanda",
            shortDescription: "Cosmética Natural",
            description:
              "Lavanda es un proyecto familiar. Perseguimos una cosmética efectiva, magistral y con personalidad. Nuestro objetivo es hacer productos que enamoren, que cuiden al planeta, con principios activos que dejen el pelo sano y la piel bella.",
            phone: "2994184677",
            email: "supplier1@email.com",
            facebook: "facebook.com/supplier1",
            instagram: "instagram.com/supplier1",
            country: {
              id: 1,
              name: "Argentina",
            },
            province: {
              id: 1,
              name: "Buenos Aires",
            },
            city: "Godoy Cruz",
            images: [
              {
                original:
                  "https://s3-alpha-sig.figma.com/img/1d2e/ea59/1c27a72869b176f8ac7bc5f75f460594?Expires=1702252800&Signature=CbikcnJtiL2vgQtnksqJkfJ-JMlWyMN6NGlbp05mWJYyDncerJIjTi-5XwgZvGzngqqbumintRGULuk9vqjhJ3YuATfyh5BdmEvzv3hS0iC90JsU8rnAgOq2hGmcP3QCDBPwZJyH77ejbspc7PI7KI9RYYuZzNqLg3T0Jao~kW66Wbr7NmuvJ3yvsevdHBI3KKE3zO8Y7Y-wLfhvFxpc4L7i8URcQVxaPsNhfC0AgGIaYGIbWobU4bQpgPhZuE2M6GqW9u9Tp4Gxp5kQFDt1cFDVecveSPC~nwWssHg8cajdwfnDJMLpDXdkyXUzj4BoiSfOsRzTaV85drjfkekCHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
              },
              {
                original:
                  "https://s3-alpha-sig.figma.com/img/76c6/5ee9/4989818dea0524d2fb0186ddb4f48bb3?Expires=1701648000&Signature=TzKeqAXjiWNMMEGzA-BO9TE99v6-JJ8Sl5Mt7uIwfoUyCJ8CMUWA-IdH1nT6M89FSM9c3~J-D-n4Edquzj~CY8bAQ8kETSa9dJxmVx~-a97Ld-Qpu2P1OsQP-iQm3TQ~7vgUpZdhppWeMZTeo11EDxtwuKMqUc2DPz~0qOAl5RYj76MmL~Gy3nR3lXEDOkAzZ9qWcJIfGxu3yaAddXdLov64nNpMx2i3Tx7rjI1yCi0B4wOKX-tfmdcjr4IRh~wcZOJVK6oDgraLL-ziJAfQnQaWQNws1znq5cnRGktk4l~6CMZniTWRTojfes28m69GCmF0RXYD68HPnJDiGowiQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
              },
              {
                original:
                  "https://s3-alpha-sig.figma.com/img/3d63/16ca/e3bd50330ffa28bcb22ef67ef6231dd2?Expires=1701648000&Signature=JAuntl70XIcKGAhh9lYYzUNEMdm~fFr5qQGZG9V75Hk7ao2W-hB3A9GcMyNVQ0Om3w-2v2TTdAfv37wHSCXaelKQpQe4N2URd6hOB4ZAcWuGBBAO-lto1KW2bxuVmWaUbTfogA8xLAGo-2zgtaJvYufVBTWumRVdMhZcnvfiYUO9Lv~tOG0JBymK-sjGICDP0qRU4K4f5HWo-ProqEmEv8DVJ5wP3HZ~b7QYXxEDqTtkoKVdSywOSc3PGuoq-aMQ1Ai3zNwILSiMWOfymyj0KEd8yqwGLXVypNMjLMlVdaYP9SRyxjr0TYOGQlFK38FVIUcYjSqWX3MjO2rTTsly7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
              },
            ],
            category: {
              id: 1,
              name: "Construcción",
            },
            categoryDescription:
              "Encontrá desde productos cosméticos y de cuidado personal natural, servicios de salud, hasta terapias holísticas y más.",
            categoryIcon:
              "https://s3-alpha-sig.figma.com/img/4856/2d94/4caf9ee29f7247dfd42c27b90c6e54d0?Expires=1701648000&Signature=YwcoTLBN3-kKr7jtC2pGEQVH49kd6UFCGsAhbHGlJxY3EAZt753uUw3LakyXXa0GYUcNPhZh7brjlYeYRONxWf8XCE1O6LSQH8hwPDvZMJRi9HEDpW12XhwyS7iiMF3zZ8xjNoX~NVOJpchIXWuXjyJ4gBFVMmP-EgttEwRjlhWFL6Yw~ovjbftctyJ5NdbUIIYvyEllJAiMsYTWF3okdfKoBv8fQxvAAOFmcHNXCAcKXG7s695l-aqk7pIaxGxtolqdTWMTZtoMOG8-Ieu-6PYPtFVju~LMpLZB1m7n8tjP2eJQG8cDqbOaEqcr9ZH4Cg4KhWAxU56IZX7mhoU2eg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            active: true,
            deleted: false,
            feedback: [],
          }}
        /> */}
      </Box>
    </Container>
  );
};

export default Profile;
