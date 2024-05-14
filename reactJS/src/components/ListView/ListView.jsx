import React, { useState } from 'react';
import { Box } from '@mui/system';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import './ListView.css';
import ShowCard from '../ShowCard/ShowCard';

const ListView = ({cards, type}) => {

  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const itemsPerPage = 5; // Número de elementos por página o grupo

  const handleNextGroup = () => {
    setCurrentGroupIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousGroup = () => {
    setCurrentGroupIndex((prevIndex) => prevIndex - 1);
  };

  const cardData = cards.map((card) => ({
    image: card.image,
    link: card.link,
    icon: card.image,
    name: card.name,
  }));
  
  return (
    <Box className="media-container" style={{overflow: "hidden" }}>
    <Box className={`media-scroller ${currentGroupIndex > 0 ? 'animate-previous' : ''} ${currentGroupIndex < Math.floor(cardData.length / itemsPerPage) - 1 ? 'animate-next' : ''}`}>
        <Box className="media-group" id={`group-${currentGroupIndex + 1}`}>
          {
            type === "restaurant" ?
              cardData
              .slice(currentGroupIndex , currentGroupIndex + itemsPerPage)
              .map((card, index) => (
                <RestaurantCard
                key={index}
                image={card.image}
                link={card.link}
                icon={card.icon}
                name={card.name}
              />
              ))
              :
              cardData
              .slice(currentGroupIndex , currentGroupIndex + itemsPerPage)
              .map((card, index) => (
                <ShowCard
                key={index}
                image={card.image}
                link={card.link}
                icon={card.icon}
                name={card.name}
              />
              ))
          }

              { currentGroupIndex+ itemsPerPage <= cardData.length && (
                <Box className="next" aria-label="next">
                  <ChevronRightIcon />
                </Box>
              )}
              { currentGroupIndex+ itemsPerPage < cardData.length && (
                <Box className="next" onClick={handleNextGroup} aria-label="next">
                  <ChevronRightIcon />
                </Box>
              )}
        </Box>

        <Box className="media-group" id={`group-${currentGroupIndex + 1}`}></Box>
            {currentGroupIndex >= 0 && (
              <Box className="previous" aria-label="previous">
                <ChevronLeftIcon />
              </Box>
            )}
            {currentGroupIndex > 0 && (
              <Box className="previous" onClick={handlePreviousGroup} aria-label="previous">
                <ChevronLeftIcon />
              </Box>
            )}
        <Box className="navigation-indicators">
          {Array.from({ length: Math.ceil(cardData.length / itemsPerPage) }, (_, index) => (
            <Box key={index}></Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ListView;