import React from 'react';
import MainNavigation from '../navigation/MainNavigation';
import Carousel from '../components/Carousel';
import "./PlayerHub.css";
import { NavLink } from 'react-router-dom';
import HubNav from '../navigation/HubNav';



const PlayerHub = props => {
    return (
      <div className="page-container">
        <MainNavigation />
        <Carousel></Carousel>
        <HubNav></HubNav>
      </div>
    );
}

export default PlayerHub;