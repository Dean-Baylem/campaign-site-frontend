import React from "react";
import MainTitle from "../../shared/components/MainTitle";
import Subtitle from "../../shared/components/Subtitle";
import Button from "../../shared/components/Button";
import "./TitleSection.css";

const titleSection = props => {
    return (
      <section className="title-section">
          <MainTitle content="Campaign Management; " highlight="Simplified"/>
          <Subtitle content="Experience a wide variety of tools for managing your games. Build your world and share with your players. Have access to useful tools for managing the progress of your campaign. Make your life easier with a variety of Game Master tools for in-game moments." />
        <div className="button-box">
          <Button content="Features" styleType="landing-btn" />
          <Button content="World-Building" styleType="landing-btn" />
          <Button content="Campaing-Tracking" styleType="landing-btn" />
        </div>
      </section>
    );
};

export default titleSection;