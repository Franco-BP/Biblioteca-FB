// LoginForm.js
import React from 'react';
import { TextField, Button } from '@mui/material';

const LoginForm = ({ onClose }) => {
  const handleLogin = () => {
    // Aquí implementar la lógica para realizar el inicio de sesión
    // enviar los datos del formulario a un servidor, etc.
    // Luego,  llama a onClose para cerrar el modal
    onClose();
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleLogin}>
      <TextField
        label="Nombre de usuario o correo electrónico"
        variant="outlined"
        fullWidth
        margin="normal"
        //  los campos  para el inicio de sesión
      />
      <TextField
        label="Contraseña"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        //  los campos para el inicio de sesión
      />

      <Button variant="contained" color="primary" type="submit">
        Iniciar Sesión
      </Button>
    </form>
  );
};

export default LoginForm; 