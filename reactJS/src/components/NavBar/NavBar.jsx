import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Modal, Box } from '@mui/material';
import LoginForm from './LoginForm'; // Ajusta la ruta según la ubicación de LoginForm.js
import RegistrationForm from './RegistrationForm'; // Ajusta la ruta según la ubicación de RegistrationForm.js
import './NavBar.css';
import { IconButton } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { useNavigate } from 'react-router';


const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [formType, setFormType] = useState(null);
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/')
  }

  const handleOpen = (type) => {
    setFormType(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormClose = () => {
    setOpen(false);
  };

  const SXAPPBAR = {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  }

  return (
    <div className="navbar">
      <AppBar sx={SXAPPBAR}>
        <Toolbar className="toolbar">
           {/* Ícono de usuario */}
          <div className="logo">
           <IconButton edge="start" color="black" aria-label="menu"   >
            <FastfoodIcon />
          </IconButton>
         
         
            <Typography variant="h6" component="h1" align="left" color={'black'} onClick={navigateToHome}>
              GuiaRest
            </Typography>
          
          </div>
          <div className="buttons">
            <Button variant='text' color='inherit' onClick={() => handleOpen('login')}>
              Iniciar Sesión
            </Button>
            <Button variant='text' color='inherit' onClick={() => handleOpen('register')}>
              Registrarse
            </Button>
          </div>
        </Toolbar>  
      </AppBar>

      {/* Modal para el formulario de inicio de sesión y registro */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: '2rem',
        }}>
          <Typography variant="h6" id="modal-title">
            {formType === 'login' ? 'Iniciar Sesión' : 'Registro'}
          </Typography>

          {/* Utiliza LoginForm o RegistrationForm según el valor de formType */}
          {formType === 'login' ? <LoginForm onClose={handleFormClose} /> : <RegistrationForm onClose={handleFormClose} />}
        </Box>
      </Modal>
    </div>
  );
};

export default NavBar;