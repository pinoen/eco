import * as Yup from "yup";

export const productValidationSchema = Yup.object({
  name: Yup.string().required("Este campo es requerido"),
  shortDescription: Yup.string()
    .min(10, "La descripción debe tener al menos 10 caracteres")
    .max(50, "La descripción no debe exceder los 50 caracteres")
    .required("Este campo es requerido"),
  category: Yup.object()
    .shape({
      id: Yup.number().min(0),
      name: Yup.string(),
    })
    .required("Este campo es requerido"),
  email: Yup.string()
    .lowercase()
    .email("Ingresar un correo electrónico válido")
    .required("Este campo es requerido"),
  phone: Yup.string()
    .matches(
      /^\+\s*\d+(?:\s*\d+){4}$/,
      "El formato debe ser +54 9 2994 002 452"
    )
    .required("Este campo es requerido"),
  instagram: Yup.string().matches(
    /^https:\/\/www\.instagram\.com\/.*$/,
    "El formato debe comenzar con https://www.instagram.com/"
  ),
  facebook: Yup.string().matches(
    /^https:\/\/www\.facebook\.com\/.*$/,
    "El formato debe comenzar con https://www.facebook.com/"
  ),
  country: Yup.object()
    .shape({
      id: Yup.number().min(0),
      name: Yup.string(),
    })
    .required("Este campo es requerido"),
  province: Yup.object()
    .shape({
      id: Yup.number().min(0),
      name: Yup.string(),
    })
    .required("Este campo es requerido"),
  city: Yup.string().required("Este campo es requerido"),
  description: Yup.string()
    .min(10, "La descripción debe tener al menos 10 caracteres")
    .max(300, "La descripción no debe exceder los 300 caracteres")
    .required("Este campo es requerido"),
})