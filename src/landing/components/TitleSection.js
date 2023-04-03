import React from "react";
import MainTitle from "../../shared/components/MainTitle";
import Subtitle from "../../shared/components/Subtitle";
import Button from "../../shared/components/Button";
import "./TitleSection.css";
import MainNavigation from "../../shared/navigation/MainNavigation";
import ImageBlock from "../../shared/components/ImageBlock";

const titleContent = "Campaign Management; ";
const titleHighlight = "Simplified";
const titleText = "Discover the simpler way to manage your games";

const titleSection = props => {
    return (
      <React.Fragment>
        <section className="title-section">
          <MainNavigation />
          <div>
            <div className="title-box">
              <MainTitle content={titleContent} highlight={titleHighlight} />
              <p className="title-text">{titleText}</p>
            </div>
            <div className="button-box">
              <Button content="Sign up for free" styleType="landing-btn" />
            </div>
            <ImageBlock
              name="example"
              imgSrc="https://img.freepik.com/free-photo/still-life-objects-with-role-playing-game-sheet_23-2149352298.jpg?w=900&t=st=1680415381~exp=1680415981~hmac=cdb235b650e6eded060e07cd2a12115e452d15dc8f399f4ce6bbeaeba5b5bb05"
            />
          </div>
        </section>
      </React.Fragment>
    );
};

export default titleSection;