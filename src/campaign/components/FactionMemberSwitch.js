import React, { useReducer, useContext } from "react";
import { AuthContext } from "../../shared/context/auth-context";
import { useParams } from "react-router-dom";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import "./FactionMemberSwitch.css";
import FactionMemberIcon from "./FactionMemberIcon";

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

  const addNewHandler = (id) => {
    console.log("clicked");
    console.log(id);
    dispatch({ type: "ADD_NEW", npcToAdd: id });
  };

  const removeNewHandler = (id) => {
    console.log("unclicked");
    console.log(id);
    dispatch({ type: "REMOVE_NEW", npcToRemove: id });
  };

  const addToRemoveHandler = (id) => {
    console.log("clicked");
    dispatch({ type: "REMOVE_EXISTING", npcToRemove: id });
  };

  const remainAsMemberHandler = (id) => {
    console.log("unclicked");
    console.log(id);
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
        const addData = await sendRequest(
          process.env.REACT_APP_REQUEST_URL +
            `/npc/faction/add-members/${factionId}`,
          "PATCH",
          JSON.stringify({ newMembers: state.newMembers }),
          {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.playerId}`,
          }
        );
        console.log(addData);
      }
      // Second, make BE call to remove members from database.
      if (state.removeMembers.length !== 0) {
        const removeData = await sendRequest(
          process.env.REACT_APP_REQUEST_URL +
            `/npc/faction/remove-members/${factionId}`,
          "PATCH",
          JSON.stringify({ toRemove: state.removeMembers }),
          {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.playerId}`,
          }
        );
        console.log(removeData);
      }
      // Reset the state to empty arrays.
      resetHandler();
      // Call the BE for updated lists of members and non-members.
      await props.fetchNPCs();
    } catch (err) {}
  };

  return (
    <div className="member-switch-container">
      <div>
        <h5>Non-members</h5>
        <div>
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
        <h5>Members</h5>
        <div>
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
      <button onClick={handleButton}>click me</button>
    </div>
  );
};

export default FactionMemberSwitch;
