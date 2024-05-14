//RegistrationForm.js
import React from 'react';
import { TextField, Button } from '@mui/material';

const RegistrationForm = ({ onClose }) => {
  const handleRegister = () => {
    // Aquí  implementar la lógica para realizar el registro
    //  enviar los datos del formulario a un servidor, etc.
    // Luego,  llamar a onClose para cerrar el modal
    onClose();
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleRegister}>
      <TextField
        label="Nombre de usuario"
        variant="outlined"
        fullWidth
        margin="normal"
        // los campos que necesites para el registro
      />
      <TextField
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        margin="normal"
        // los campos que necesites para el registro
      />
      <TextField
        label="Contraseña"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        // los campos que necesites para el registro
      />

      <Button variant="contained" color="primary" type="submit">
        Registrarse
      </Button>
    </form>
  
  
 
  );
};
export default RegistrationForm;