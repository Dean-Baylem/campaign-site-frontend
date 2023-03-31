import React from "react";
import MainTitle from "../../shared/components/MainTitle";
import Subtitle from "../../shared/components/Subtitle";
import Button from "../../shared/components/Button";

const titleSection = props => {
    return (
      <section className="landing-title">
        <div>
          <MainTitle content="Hello" />
        </div>
        <div>
          <Subtitle content="This is the subtitle" />
        </div>
        <div>
          <Button content="Features" styleType="landing-btn" />
          <Button content="World-Building" styleType="landing-btn" />
          <Button content="Campaing-Tracking" styleType="landing-btn" />
        </div>
      </section>
    );
};

export default titleSection;