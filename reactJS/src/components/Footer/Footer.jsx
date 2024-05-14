import React from 'react';
import { Toolbar, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css'; // Importar el archivo CSS
import FastfoodIcon from '@mui/icons-material/Fastfood';
const styles = {
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  socialIcons: {
    display: 'flex',
    alignItems: 'center',
    '& > *': {
      marginLeft: '0.5rem',
    },
  },
};


const Footer = () => {
  return (
    <footer className="footer">
      <Toolbar sx={styles.toolbar}>
        {/* Ícono de usuario */}
        <IconButton edge="start" color="inherit" aria-label="menu">
            <FastfoodIcon />
          </IconButton>
        <Typography variant="body1" color="inherit">
          contacto: +0987654321
        </Typography>
        <Typography variant="body1" color="inherit">
          Email: info@example.com
        </Typography>
        <div sx={styles.socialIcons}>
          <IconButton color="inherit">
            <a href="https://www.facebook.com/RestoGuia-100655632425184" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
            </a>
          </IconButton>
          <IconButton color="inherit">
            <a href="https://twitter.com/restoguia" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
            </a>
          </IconButton>
            <IconButton color="inherit">
                <a href="https://www.instagram.com/restoguia/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
                </a>
            </IconButton>
        </div>
        <Typography variant="body1" color="inherit">
          © {new Date().getFullYear()} RestoGuia
        </Typography>
      </Toolbar>      
    </footer>
  
  );
};

export default Footer;