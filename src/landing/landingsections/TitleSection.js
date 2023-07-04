import React, {useContext} from "react";
import {Button} from "@mui/material";
import {AuthContext} from "../../shared/context/auth-context";
import "./TitleSection.css";
import MainNavigation from "../../shared/navigation/MainNavigation";
import { NavLink } from "react-router-dom";


const HomeTitle = props => {

  const auth = useContext(AuthContext);

    return (
      <React.Fragment>
        <section
          className="home-title-section"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://img.freepik.com/free-photo/still-life-map-with-dices_23-2149352310.jpg?w=1800&t=st=1681948965~exp=1681949565~hmac=cd991a9c63839587bc068551e928e50fbfd90b4c466231793e0fdacf10e25633)`,
          }}
        >
          <MainNavigation clear={true} />
          <div className="home-heading-container">
            <div>
              <div className="home-title-container">
                <h1 className="home-title">
                  Campaign Management;
                  <br></br>
                  <em className="page-body">Simplified</em>
                </h1>
              </div>
              <div>
                <h5 className="page-body title-text">
                  Welcome to Dungeon Delvers Incorportated.<br></br>Become part
                  of a community of world builders and mangage your campaigns
                  with expertise.
                </h5>
              </div>
              <div className="custom-contained">
                <Button variant="contained">
                  <NavLink className="login-nav" to={auth.isLoggedIn ? `/${auth.playerId}` : "/auth"}>Begin Building</NavLink>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
};

export default HomeTitle;