import React from "react";
import HomeTitle from "../landingsections/TitleSection";
import Features from "../landingsections/Features";
import Footer from "../../shared/Components/PageComponents/Footer";
import "./Landing.css";
import DisplaySection from "../landingsections/DisplaySection";
import Carousel from "../../shared/Components/UIComponents/Carousel";
import { Button } from "@mui/material";
import FeatureDisplay from "../landingsections/FeatureDisplay";
import ShareDisplay from "../landingsections/ShareDisplay";
import ToolDisplay from "../landingsections/ToolDisplay";


const Landing = () => {
  return (
    <React.Fragment>
      <HomeTitle />
      <Features />
      <FeatureDisplay />
      <ShareDisplay />
      <ToolDisplay />
      <Footer />
    </React.Fragment>
  );
};

export default Landing;
