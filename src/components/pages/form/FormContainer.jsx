import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import * as yup from "yup";

const FormContainer = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      mail: "",
    },
    onSubmit: (datos) => {
      console.log(datos);
    },
    validateOnchenge: false,
    validationSchema: yup.object({
      name: yup
        .string()
        .required("Este campo es requerido")
        .min(3, "Debe tener al menos 3 letras"),
      lastname: yup
        .string()
        .required("Este campo es requerido")
        .min(3, "Debe tener al menos 3 letras"),
      mail: yup.string().email("No corresponde a un E-mail valido"),
    }),
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          name="name"
          onChange={handleChange}
          error={errors.name ? true : false}
          helperText={errors.name}
        />
        <TextField
          label="Apellido"
          name="lastname"
          onChange={handleChange}
          error={errors.lastname ? true : false}
          helperText={errors.lastname}
        />
        <TextField
          label="Mail"
          name="mail"
          onChange={handleChange}
          error={errors.mail ? true : false}
          helperText={errors.mail}
        />
        <Button type="submit" variant="contained">
          Send
        </Button>
      </form>
    </div>
  );
};

export default FormContainer;
