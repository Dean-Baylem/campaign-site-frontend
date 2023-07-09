import React, {useContext} from "react";
import Carousel from "../../shared/Components/UIComponents/Carousel";
import { Button } from "@mui/material";
import magicItemDisplay from "../../images/magicItemDisplay.jpeg";
import {AuthContext} from "../../shared/context/auth-context"; 
import {NavLink} from "react-router-dom";
import "./ToolDisplay.css";

const ToolDisplay = (props) => {

  const auth = useContext(AuthContext)

  const data = [
    {
      img: "https://fastly.picsum.photos/id/987/600/300.jpg?hmac=G6PzIir0sCmk-BZ_-5isP8xcbdFO3t_YXiMU8D_69Pk",
      alt: "slide1",
    },
    {
      img: magicItemDisplay,
      alt: "slide2",
    },
    {
      img: "https://fastly.picsum.photos/id/987/600/300.jpg?hmac=G6PzIir0sCmk-BZ_-5isP8xcbdFO3t_YXiMU8D_69Pk",
      alt: "slide3",
    },
    {
      img: "https://fastly.picsum.photos/id/391/600/300.jpg?hmac=gK55dr8XBINlC5WW4uttrMZmd5HAVORxfz7oO-nG8ko",
      alt: "slide4",
    },
  ];

  return (
    <section className="landing-section light-bg">
      <div className="page-subtitle">
        <h3 className="landing-h3">DM Toolbox</h3>
      </div>
      <div className="tool-display-section">
        <div className="tool-carsousel-container">
          <Carousel data={data} />
        </div>
        <div className="tool-desc-container">
          <div className="page-body">
            <p className="landing-p">
              The tinkering team at Dungeon Delvers Inc present the DM Toolbox.
              Here you will find various tools and apps that will help manage
              the flow of your games! Members of the Delvers Team have access to
              all the tools for their own personal use. The tools will be
              updated and improved over time, so be sure to check out the DM
              Toolbox section of the hub regularly!
            </p>
          </div>
          <div className="custom-contained">
            <Button variant="contained">
              <NavLink to={auth.isLoggedIn ? `/${auth.playerId}` : "/auth"}>
                Enhance your games now!
              </NavLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolDisplay;
