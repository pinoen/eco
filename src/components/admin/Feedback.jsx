/* eslint-disable no-unused-vars */
import { Alert, Button, Snackbar, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useStatusContext } from "../../context/StatusContext";
import axios from "axios";
import { apiUrl } from "../../constants";
import { getToken } from "../../services/securityService";
import useAlert from "../../utilities/alert";
import { useNavigate } from "react-router";

const buttonStyle = {
  width: "328px",
  height: "40px",
  padding: "10px 24px",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  borderRadius: "100px",
  backgroundColor: "primary.main",
  color: "white.main",
  fontFamily: "Nunito",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "20px",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#6100EA",
  },
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "24px",
  gap: "16px",
};

const Feedback = () => {
  const [showNotification, setShowNotification] = useState(false);
  const { status, setStatus, id, setReload, setStatusPage, setShowSupplier } = useStatusContext();
  const { open, alertColor, alertMessage, showAlert, hideAlert } = useAlert(); //manejo de alertas
  const navigate = useNavigate();
  const token = getToken();
  const initialFeedback = {
    status: "",
    feedback: "",
  };

  const { handleSubmit, handleChange, values, errors, resetForm } = useFormik({
    initialValues: initialFeedback,
    validateOnChange: false,
    validationSchema: Yup.object({
      feedback: Yup.string()
        .min(10, "La descripción debe tener al menos 10 caracteres")
        .max(300, "Máximo 300 caracteres")
        .required("Devolución al Proveedor (Obligatorio)"),
    }),
    onSubmit: (values) => {
      const finalData = {
        status: status.value,
        feedback: values.feedback,
      };
      axios
        .put(`${apiUrl}/suppliers/feedback/${id}`, finalData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          showAlert("Feedback enviado!", "success");
          setReload((prev) => !prev);
          resetForm();
        })
        .catch((err) => {
          showAlert("Error al enviar Feedback", "error");
        });

      setShowNotification(true);
      setTimeout(() => {
        setStatusPage("Nuevos Perfiles");
        setShowSupplier(false);
        setStatus({ value: "", label: "" });
      }, 2000);
    },
  });

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <TextField
        type="text"
        label="Devolución al Proveedor (Obligatorio)"
        error={errors.feedback ? true : false}
        helperText={errors.feedback ? errors.feedback : "Máximo 300 caracteres"}
        multiline
        rows={6}
        name="feedback"
        onChange={handleChange}
        value={values.feedback}
        fullWidth
      />

      <Button sx={buttonStyle} type="submit">
        Enviar
      </Button>

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
    </form>
  );
};

export default Feedback;
