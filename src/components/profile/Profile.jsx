import { Typography, Box, Container, Snackbar, Alert } from "@mui/material";

import useAuth from "../../utilities/user";
import SupplierCard from "../common/SupplierCard";
import ProductState from "./ProductState";
import { useNavigate } from "react-router-dom";
import getUserSuppliers from "../../services/suppliers/getUserSuppliers";
import { useState } from "react";
import useAlert from "../../utilities/alert";

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const userSuppliers = getUserSuppliers();
  const [showNotification, setShowNotification] = useState(false);
  const { open, alertColor, alertMessage, showAlert, hideAlert } = useAlert();

  const handleAddProduct = () => {
    if (userSuppliers.length < 3) {
      navigate("/profile/add-product")
    }

    setShowNotification(true);
    showAlert("No puede cargar mas de 3 proveedor", "error")
  }

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
          onClick={handleAddProduct}
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
            <ProductState
              key={idx}
              name={item.name}
              status={item.status}
              id={item.id}
              feedback={item.feedback}
            />
          ))
        ) : (
          <Typography>No tenes productos/servicios todavía</Typography>
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
          {userSuppliers
            ? "Asi se vería tu Producto/Servicio en el Directorio"
            : ""}
        </Typography>
        {userSuppliers?.map((item, idx) => (
          <SupplierCard item={item} key={idx} />
        ))}
      </Box>

      {showNotification && (
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
      )}
    </Container>
  );
};

export default Profile;
