import { Button, TextField } from "@mui/material"
import { useFormik } from "formik"
import * as Yup from "yup";


const Feedback = () => {

  const initialFeedback = {
    feedback: "",
  }

  const { handleSubmit, handleChange, values, errors } = useFormik({

    initialValues: initialFeedback,
    validateOnChange: false,
    validationSchema: Yup.object({
      feedback: Yup.string()
        .max(300, "Máximo 300 caracteres")
        .required("Devolución al Proveedor (Obligatorio)"),
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <form onSubmit={handleSubmit} style={{ paddingTop: "32px" }}>
      <TextField
        type="text"
        label="Devolución al Proveedor (Obligatorio)"
        error={errors.description ? true : false}
        helperText={
          errors.description ? errors.description : "Máximo 300 caracteres"
        }
        multiline
        rows={6}
        name="feedback"
        onChange={handleChange}
        value={values.feedback}
        fullWidth
      />

      <Button type="submit">Enviar</Button>
    </form>
  )
}

export default Feedback