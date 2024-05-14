import * as React from 'react';
import './Layout.css';
import Carousel from '../Carousel/Carousel.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import Footer from '../Footer/Footer.jsx';
import ListView from '../ListView/ListView.jsx';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router';

const Layout = ({restaurantes, shows}) => {
    const navigate = useNavigate();

    const navigateToRestaurants = () => {
        navigate('/restaurantes');
    }

    const navigateToShows = () => {
        navigate('/shows');
    }

    return <div>

        <NavBar /> 
        <Carousel/>

        <div className="hero-section">
            <SearchBar/> 

            <div className="categoria">
                <div className="layout-section-container">
                    <Typography className="layout-section-name" variant="h4" sx={{mb: 6}} onClick={navigateToRestaurants}>
                        Restaurantes
                    </Typography>
                </div>
                <ListView cards={restaurantes} type="restaurant"/>
                
            </div>

            <div className="categoria">
                <div className="layout-section-container">
                    <Typography className="layout-section-name" variant="h4" sx={{mb: 6}} onClick={navigateToShows}>
                        Shows
                    </Typography>
                </div>
                <ListView cards={shows} type="shows"/>
            </div>
        </div>
        <Footer/>
    </div>;
}

export default Layout;