import React, { useState } from "react";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./CreateNewCard.css";
import CreateNewWorld from "../../worldbuilding/pages/CreateNewWorld";
import Collapsible from "react-collapsible";
import CreateNewCampaign from "./CreateNewCampaign";

const CreateNewCard = props => {

  const [createForm, setCreateForm] = useState(false);

  const handleClick = () => {
    setCreateForm(!createForm);
  }

    return (
      <div
        className={`create-new-card ${props.campaigns && "campaign-create"}`}
      >
        {!createForm ? (
          <div className="new-item-notification">
            {props.data.length < 5 ? (
              <div className="create-new-body page-body">
                <p>
                  {props.data.length} {props.successTitle}
                </p>
                <p>{props.successDesc}</p>
                <Button
                  sx={{ margin: "0% 20%" }}
                  className="dark-button"
                  variant="outlined"
                  onClick={handleClick}
                >
                  {props.type}
                </Button>
              </div>
            ) : (
              <div className="create-new-body page-body">
                <p>{props.failDesc}</p>
              </div>
            )}
          </div>
        ) : (
          props.campaigns ? <CreateNewCampaign hub={true} return={handleClick} worlds={props.worlds} /> : <CreateNewWorld return={handleClick}/>
        )}
        {props.campaigns && (
          <div className="page-body">
            <Collapsible trigger="Upcoming Games">
              <ul className="upcoming-container">
                {props.upcomingGames.map((gameDetails, index) => (
                  <li className={`${index % 2 === 0 ? "light-bg" : "dark-bg"} ${index === props.upcomingGames.length - 1 ? "last-game-detail" : ""}`} key={index}>
                    <p>{gameDetails.name}</p>
                    <p>
                      {gameDetails.day} - {gameDetails.hour}:{gameDetails.mins}
                      {gameDetails.am ? "AM" : "PM"} - {gameDetails.time}{" "}
                      {gameDetails.timeZone}
                    </p>
                  </li>
                ))}
              </ul>
            </Collapsible>
          </div>
        )}
      </div>
    );
}

export default CreateNewCard;