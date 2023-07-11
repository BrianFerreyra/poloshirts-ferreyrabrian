import { Button, TextField } from "@mui/material";

const CheckOut = ({ handleChange, handleSubmit, errors }) => {
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
          label="E-mail"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          label="Telefono"
          name="phone"
          onChange={handleChange}
          error={errors.phone ? true : false}
          helperText={errors.phone}
        />
        <Button type="submit" variant="contained">
          Send
        </Button>
      </form>
    </div>
  );
};

export default CheckOut;
