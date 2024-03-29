import React, { useContext } from "react";
import { AuthContext } from "../../shared/context/auth-context";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./FactionRecords.css";

const FactionRecords = (props) => {
  const auth = useContext(AuthContext);

  const handleNewClick = () => {
    props.noteModalToggle();
  };

  const handleEditClick = (note) => {
    props.handleEditNote(note);
  };

  const handleDeleteClick = (note) => {
    props.handleDeleteNote(note);
  };

  return (
    <section className="faction-section light-bg">
      <h3 className="page-subtitle faction-h3">Faction Records</h3>
      <div className="faction-notes">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4127/4127372.png"
          alt="record-token"
        />

        <p className="page-body faction-p">
          Factions coming into contact with adventuring parties usually results
          in a positive boost to the surroundings or the beginning of a skirmish
          that could reshape the region entirely. Historians will surely mull
          over the reasonings for each decision, coincidences causing
          catastrophic conclusions, or the temptation to think of alternative
          realities. Here at Dungeon Delvers Incorporated, we merely record
          below the known events when such meetings occur.
        </p>
      </div>
      <div className="faction-notes-accordion">
        {props.faction.factionNotes.length !== 0 ? (
          props.faction.factionNotes.map((note, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="page-subtitle faction-p">
                  <strong>{note.title}</strong>
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="page-body faction-p">{note.note}</p>
                {auth.playerId === props.faction.campaign.gameMaster && (
                  <IconButton onClick={() => handleEditClick(note)}>
                  <EditIcon fontSize="sm" />
                </IconButton>)}
                {auth.playerId === props.faction.campaign.gameMaster && (<IconButton onClick={() => handleDeleteClick(note)}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
                )}
              </AccordionDetails>
            </Accordion>
          ))
        ) : (
          <div className="member-list-container light-bg">
            <p className="page-body faction-p center">
              There are currently no records for this faction
            </p>
          </div>
        )}
      </div>
      {auth.playerId === props.faction.campaign.gameMaster && (
        <div className="custom-buttons">
          <Button onClick={handleNewClick}>New Note</Button>
        </div>
      )}
    </section>
  );
};

export default FactionRecords;
