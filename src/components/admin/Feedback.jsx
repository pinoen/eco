import { Alert, Button, Snackbar, TextField } from "@mui/material"
import { useFormik } from "formik"
import { useState } from "react";
import * as Yup from "yup";

const buttonStyle = {
  width: '328px',
  height: '40px',
  padding: '10px 24px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '100px',
  backgroundColor: 'primary.main',
  color: 'white.main',
  fontFamily: 'Nunito',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '20px',
  textTransform: 'capitalize',
  '&:hover': {
    backgroundColor: '#6100EA',
  },
}

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '24px',
  gap: '16px',
}

const Feedback = () => {
  const [showNotification, setShowNotification] = useState(false);

  const initialFeedback = {
    feedback: "",
  }

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: initialFeedback,
    validateOnChange: false,
    validationSchema: Yup.object({
      feedback: Yup.string()
        .min(10, "La descripción debe tener al menos 10 caracteres")
        .max(300, "Máximo 300 caracteres")
        .required("Devolución al Proveedor (Obligatorio)"),
    }),
    onSubmit: (values) => {
      console.log(values.feedback)
      setShowNotification(true)
    }
  })

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <TextField
        type="text"
        label="Devolución al Proveedor (Obligatorio)"
        error={errors.feedback ? true : false}
        helperText={
          errors.feedback ? errors.feedback : "Máximo 300 caracteres"
        }
        multiline
        rows={6}
        name="feedback"
        onChange={handleChange}
        value={values.feedback}
        fullWidth
      />

      <Button sx={buttonStyle} type="submit">Enviar</Button>

      {
        showNotification && <Snackbar
          open={showNotification}
          autoHideDuration={6000}
          onClose={() => setShowNotification(false)}>
          <Alert variant="filled" severity="success" sx={{ width: '100%' }}>
            Devolución enviada con éxito
          </Alert>
        </Snackbar>
      }
    </form>
  )
}

export default Feedback