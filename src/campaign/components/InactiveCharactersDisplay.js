import React, {useState} from "react";
import CharacterForm from "./CharacterForm";
import Modal from "../../shared/Components/UIComponents/Modal";
import DeleteModal from "../../shared/Components/UIComponents/DeleteModal";
import { Button } from "@mui/material";
import "./InactiveCharactersDisplay.css"
import InactiveCharacterItem from "./InactiveCharacterItem";

const InactiveCharactersDisplay = (props) => {

  const [characterToEdit, setCharacterToEdit] = useState(false);
  const [characterToDelete, setCharacterToDelete] = useState(false);

  const deleteModalToggle = () => {
    setCharacterToDelete(false);
  }

    return (
      <React.Fragment>
        {characterToEdit && (
          <Modal modalHeader="Edit Character">
            <CharacterForm
              url={process.env.REACT_APP_REQUEST_URL + `/character/update-character/${characterToEdit._id}`}
              requestType="PATCH"
              reload={props.reload}
              setEditable={setCharacterToEdit}
              name={characterToEdit.name}
              species={characterToEdit.species}
              age={characterToEdit.age}
              playerClass={characterToEdit.playerClass}
              subclass={characterToEdit.subclass}
              level={characterToEdit.level}
              appearance={characterToEdit.appearance}
              desciption={characterToEdit.description}
              closeButton={
                <Button onClick={() => setCharacterToEdit(false)}>
                  Cancel
                </Button>
              }
            />
          </Modal>
        )}
        {characterToDelete && (
          <Modal modalHeader="Delete Character?">
            <DeleteModal
              url={process.env.REACT_APP_REQUEST_URL + `/character/delete-character/${characterToDelete._id}`}
              reload={props.reload}
              modalToggle={deleteModalToggle}
            />
          </Modal>
        )}
        <div
          style={{ display: "block" }}
          className="character-display-container character-box page-body light-bg"
        >
          <div className="character-list-container">
            <ul className="character-list space-evenly">
              {props.characters.map((character, index) => (
                <InactiveCharacterItem
                  setDelete={setCharacterToDelete}
                  setEdit={setCharacterToEdit}
                  character={character}
                  key={index}
                />
              ))}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
}
export default InactiveCharactersDisplay;