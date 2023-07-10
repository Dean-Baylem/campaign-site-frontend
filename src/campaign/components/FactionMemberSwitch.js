import React, { useReducer, useContext } from "react";
import { AuthContext } from "../../shared/context/auth-context";
import { useParams } from "react-router-dom";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import "./FactionMemberSwitch.css";
import FactionMemberIcon from "./FactionMemberIcon";
import { Button } from "@mui/material";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW":
      return { ...state, newMembers: [action.npcToAdd, ...state.newMembers] };
    case "REMOVE_NEW":
      return {
        ...state,
        newMembers: state.newMembers.filter(
          (member) => member !== action.npcToRemove
        ),
      };
    case "REMOVE_EXISTING":
      return {
        ...state,
        removeMembers: [action.npcToRemove, ...state.removeMembers],
      };
    case "RETURN_EXISTING":
      return {
        ...state,
        removeMembers: state.removeMembers.filter(
          (member) => member !== action.npcToKeep
        ),
      };
    case "RESET":
      return {
        newMembers: [],
        removeMembers: [],
      };
    default:
      return state;
  }
};

const FactionMemberSwitch = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    newMembers: [],
    removeMembers: [],
  });

  // Handler functions to call the dispatch function for managing state.

  const addNewHandler = (id) => {
    dispatch({ type: "ADD_NEW", npcToAdd: id });
  };

  const removeNewHandler = (id) => {
    dispatch({ type: "REMOVE_NEW", npcToRemove: id });
  };

  const addToRemoveHandler = (id) => {
    dispatch({ type: "REMOVE_EXISTING", npcToRemove: id });
  };

  const remainAsMemberHandler = (id) => {
    dispatch({ type: "RETURN_EXISTING", npcToKeep: id });
  };

  const resetHandler = () => {
    dispatch({ type: "RESET" });
  };

  const { sendRequest } = useHttpRequest();
  const factionId = useParams().factionId;
  const auth = useContext(AuthContext);

  const handleButton = async () => {
    console.log(state);
    // First make BE call to add new members to database.
    try {
      if (state.newMembers.length !== 0) {
        await sendRequest(
          process.env.REACT_APP_REQUEST_URL +
            `/npc/faction/add-members/${factionId}`,
          "PATCH",
          JSON.stringify({ newMembers: state.newMembers }),
          {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.playerId}`,
          }
        );
      }
      // Second, make BE call to remove members from database.
      if (state.removeMembers.length !== 0) {
        await sendRequest(
          process.env.REACT_APP_REQUEST_URL +
            `/npc/faction/remove-members/${factionId}`,
          "PATCH",
          JSON.stringify({ toRemove: state.removeMembers }),
          {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.playerId}`,
          }
        );
      }
      // Reset the state to empty arrays.
      resetHandler();
      // Call the BE for updated lists of members and non-members.
      await props.fetchNPCs();
    } catch (err) {}
  };

  return (
    <div>
      <div className="member-switch-container">
        <div className="non-member-column">
          <h5 className="page-subtitle center">Non-members</h5>
          <div className="member-token-container">
            {props.nonMembers.map((npc, index) => (
              <FactionMemberIcon
                nonMember
                removeNewHandler={removeNewHandler}
                addNewHandler={addNewHandler}
                npcName={npc.name}
                id={npc._id}
              />
            ))}
          </div>
        </div>
        <div>
          <h5 className="page-subtitle center">Members</h5>
          <div className="member-token-container">
            {props.members.map((npc, index) => (
              <FactionMemberIcon
                addToRemoveHandler={addToRemoveHandler}
                remainAsMemberHandler={remainAsMemberHandler}
                npcName={npc.name}
                id={npc._id}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="custom-buttons member-switch-buttons">
        <Button onClick={handleButton}>click me</Button>
        <Button onClick={props.closeModal}>Close</Button>
      </div>
    </div>
  );
};

export default FactionMemberSwitch;
