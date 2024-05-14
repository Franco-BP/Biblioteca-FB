import * as React from 'react';
import './RestaurantDetail.css';
import Header from '../Carousel/Carousel.jsx';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import RestaurantMap from './RestaurantMap.jsx';
import Divider from '@mui/material/Divider';
import NavBar from '../NavBar/NavBar.jsx';
import Footer from '../Footer/Footer.jsx';

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
            <Box sx={{ p: 3 , textAlign: 'left'}}>
                <Typography>{children}</Typography>
            </Box>
            )}
        </div>
        );
    }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `tabpanel-${index}`,
      'aria-controls': `tab-${index}`,
    };
  }


const RestaurantDetail = (restaurant) => {

    const theme = useTheme();
    
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return <div>
        <NavBar/>
        <Header/>
        <Box sx={{ width:'100%' }}> {/* GRID PARA DETALLES Y UBICACION */}
            <Grid container columns={2}>
                <Grid item xs={1} className={"Grid"}>        
                    <div className='div-details'>
                        <h4> {restaurant.schedule}</h4>
                        <h3> {restaurant.location} </h3>
                        <h3> {restaurant.phone}</h3>
                        <h3> {restaurant.delivery? "Entrega a cargo del local" : "Solo retiro en el local"} </h3>
                        <h2> {restaurant.description}</h2>
                    </div>
                </Grid>
                <Grid item xs={0} className={"Grid"}>
                    <Divider orientation="vertical" component="div"/>
                </Grid>
                <Grid item xs={1} className={"Grid"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                    <RestaurantMap/>
                </Grid>
            </Grid>
        </Box>
        <Box sx={{ width:'100%' }}> {/* GRID PARA BOTONES DE MENU Y SHOW */}
            <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="secondary"
            aria-label="Menu tab"
            variant="fullWidth"
            >
                <Tab className="Tab" label="Menu" {...a11yProps(0)} />
                <Tab className="Tab" label="Shows" {...a11yProps(1)} />
            </Tabs>

            <TabPanel value={value} index={0} dir={theme.direction}>
            <Typography variant="h5" >Pastas</Typography>
            <ul>
                <li>Ñoquis</li>
                <li>Ravioles</li>
                <li>Tallarines</li>
            </ul>
            <Typography variant="h5" >Pizzas</Typography>
            <ul>
                <li>Muzzarella</li>
                <li>Fugazzeta</li>
                <li>Calabresa</li>
            </ul>
            <Typography variant="h5" >Postres</Typography>
            <ul>
                <li>Flan</li>
                <li>Helado</li>
                <li>Ensalada de frutas</li>
            </ul>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
            <Typography variant="h5" >Shows proximos</Typography>
            <ul>
                <li>Viernes 10/09 - 21:00hs</li>
                <li>Sabado 11/09 - 21:00hs</li>
                <li>Domingo 12/09 - 21:00hs</li>
            </ul>
            </TabPanel>
        </Box>
        <Footer />
    </div>
}

export default RestaurantDetail;