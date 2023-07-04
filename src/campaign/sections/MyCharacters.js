import React, { useContext, useState, useEffect } from "react";
import { Button } from "@mui/material";
import { CampaignContext } from "../../shared/context/CampaignContext";
import { AuthContext } from "../../shared/context/auth-context";
import "./MyCharacters.css";
import ActiveCharacterDisplay from "../components/ActiveCharacterDisplay";
import InactiveCharactersDisplay from "../components/InactiveCharactersDisplay";

const MyCharacters = (props) => {
  const campaignManager = useContext(CampaignContext);
  const auth = useContext(AuthContext);

  const [myCharacters, setMyCharacters] = useState();
  const [blankCharacters, setBlankCharacters] = useState(["blank"]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setChararcters = async () => {
      let characters = campaignManager.currentCampaign.party.filter(
        (char) => char.player === auth.playerId
      );
      // Reduce the number of blank slots based on current characters in campaign.
      let blanks = [];
      for (let i=characters.length; i < 5;  i++) {
        blanks.push("blank");
      }
      setBlankCharacters(blanks);
      if (characters.length === 0) {
        setMyCharacters([]);
      } else {
        setMyCharacters(characters);
      }
      console.log("loading")
      setLoading(false);
    };
    setChararcters();
  }, []);

  const handleNewCharacterClick = () => {
    props.setCharacterModal(true);
  }

  const selectToEdit = (character) => {
    props.setCharacterToEdit(character);
  }

  const selectToDelete = (character) => {
    props.setCharacterToDelete(character);
  }

  return (
    <section className="player-characters light-bg">
      <div className="character-container page-body">
        <h3 style={{ paddingLeft: "1rem" }} className="page-subtitle my-characters">
          My Characters
        </h3>
        {!loading && (
          <div className="player-characters-container">
            {myCharacters
              .filter((char) => char.active === true)
              .map((character, index) => (
                <ActiveCharacterDisplay
                  selectToDelete={selectToDelete}
                  selectToEdit={selectToEdit}
                  character={character}
                  key={index}
                />
              ))}
          </div>
        )}
        <div className="char-desc">
          <div>
            <p>
              Your characters are central to the campaign the Game Master is
              running. You can edit the character details, create new characters
              and set your active character for the current campaign. You have
              up to 5 character slots available per campaign, so let's get
              building!
            </p>
          </div>
          <div className="center button-list">
            <div className="custom-contained">
              <Button onClick={handleNewCharacterClick}>New Character</Button>
            </div>
            <div className="custom-buttons">
              <Button>Change Active</Button>
            </div>
          </div>
        </div>
        {!loading && (
          <div className="inactive-list">
            {myCharacters.filter((char) => char.active !== true).length !==
              0 && (
              <InactiveCharactersDisplay
                reload={props.reload}
                characters={myCharacters.filter((char) => char.active !== true)}
                blankCharacters={blankCharacters}
                addNew={handleNewCharacterClick}
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyCharacters;
