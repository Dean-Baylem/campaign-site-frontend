import React from 'react';
import MainNavigation from '../navigation/MainNavigation';
import Carousel from '../components/Carousel';
import CarouselStack from '../components/CarouselStack';


const PlayerHub = props => {
    return (
      <div className="page-container">
        <MainNavigation />
        <Carousel></Carousel>
      </div>
    );
}

export default PlayerHub;