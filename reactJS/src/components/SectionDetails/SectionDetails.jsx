import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info.js';
import './SectionDetails.css';
import NavBar from '../NavBar/NavBar.jsx'
import Footer from '../Footer/Footer.jsx'
import PropTypes from 'prop-types';

const SectionDetails = ({sectionName, section}) => {
  return (
    <div className="section-main-div">
      <NavBar/>
      <div className="section-hero-section">
        <ImageList className="section-image-list">
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader className="list-sub-header" component="div">{sectionName}</ListSubheader>
        </ImageListItem>
        {section.map((item) => (
          <ImageListItem key={item.image} className='section-image-item'>
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.name}
              subtitle={item.location}
              actionIcon={
                <IconButton
                  className="icon-button"
                  aria-label={`info about ${item.name}`}
                  onClick={() => window.open(item.link, "_blank")}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
        </ImageList>
      </div>
      <Footer/>
    </div>
  )
}

SectionDetails.propTypes = {
  sectionName: PropTypes.string,
  section: PropTypes.array
};

export default SectionDetails;