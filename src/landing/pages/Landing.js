import React from "react";
import HomeTitle from "../landingsections/TitleSection";
import Features from "../landingsections/Features";
import Footer from "../../shared/Components/PageComponents/Footer"
import FeatureDisplay from "../landingsections/FeatureDisplay";
import ShareDisplay from "../landingsections/ShareDisplay";
import ToolDisplay from "../landingsections/ToolDisplay";
import "./Landing.css";


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
