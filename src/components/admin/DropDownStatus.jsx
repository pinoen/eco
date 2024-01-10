/* eslint-disable no-unused-vars */
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import { useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import { useStatusContext } from "../../context/StatusContext";
import axios from "axios";
import { apiUrl } from "../../constants";
import { getToken } from "../../services/securityService";
import useAlert from "../../utilities/alert";

const DropDownStatus = () => {
  const { setStatus, status, id, setReload, setStatusPage, setShowSupplier } = useStatusContext();
  const [showNotification, setShowNotification] = useState(false);
  const { open, alertColor, alertMessage, showAlert, hideAlert } = useAlert();
  const token = getToken();

  const handleChange = (event) => {
    let label = "";
    switch (event.target.value) {
      case "ACEPTADO":
        label = "Aprobado";
        break;
      case "REQUIERE_CAMBIOS":
        label = "En revisión";
        break;
      case "DENEGADO":
        label = "Denegado";
    }
    setStatus({ value: event.target.value, label: label });

    if (event.target.value === "ACEPTADO") {
      // Make PUT request if status is "ACEPTADO"
      const finalData = {
        status: event.target.value,
        feedback: "",
      };

      axios
        .put(`${apiUrl}/suppliers/feedback/${id}`, finalData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          showAlert("Status actualizado!", "success");
          setReload((prev) => !prev);
        })
        .catch((error) => {
          showAlert("Error al actualizar el estado", "error");
        });

      setShowNotification(true);
      setTimeout(() => {
        setStatusPage("Nuevos Perfiles");
        setShowSupplier(false);
        setStatus({ value: "", label: "" });
      }, 2000)
    }
  };

  return (
    <Box sx={{ display: "flex", paddingLeft: "170px" }}>
      <FormControl fullWidth sx={{ width: 152 }}>
        <InputLabel>Estado</InputLabel>
        <Select
          value={status.value}
          label="Estado"
          placeholder="Estado"
          onChange={handleChange}
        >
          <MenuItem value="ACEPTADO">
            <Brightness1Icon sx={{ color: "#1D9129", paddingRight: "10px" }} />
            Aprobado
          </MenuItem>
          <MenuItem value="REQUIERE_CAMBIOS">
            <Brightness1Icon sx={{ color: "#B86B11", paddingRight: "10px" }} />
            En revisión
          </MenuItem>
          <MenuItem value="DENEGADO">
            <Brightness1Icon sx={{ color: "#B91C1C", paddingRight: "10px" }} />
            Denegado
          </MenuItem>
        </Select>
      </FormControl>

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
    </Box>
  );
};

export default DropDownStatus;
