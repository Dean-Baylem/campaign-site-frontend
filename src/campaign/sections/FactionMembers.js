import React, { useContext } from "react";
import { AuthContext } from "../../shared/context/auth-context";
import "./FactionMembers.css";
import { Button } from "@mui/material";

const FactionMembers = (props) => {
  const auth = useContext(AuthContext);

  return (
    <section className="faction-section">
      <h3 className="page-subtitle faction-h3">Members</h3>
      <div className="member-desc-container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3965/3965950.png"
          alt="faction-members"
        />
        <p className="page-body faction-p">
          Faction members and their roles are as diverse as the different
          collectives themselves. Some factions have strict hierarchies with
          obedience demanded to the rank system. Others are a collective of
          ideologically-similar but independent characters with personal goals
          and reasons for banding together. Below you will find the known
          members of {props.faction.factionName}.
        </p>
      </div>
      <div className="members-container">
        {props.faction.members.length !== 0 ? (
          <div className="member-list-container light-bg">
            <p className="page-subtitle faction-p center">
              <strong>Known Members of {props.faction.factionName}</strong>
            </p>
            <ul className="member-list">
              {props.faction.members.map((member, index) => (
                <li className="faction-token" key={index}>
                  <img src={member.npcToken} alt={member.name} />
                  <p className="letter-body-nobel faction-p">
                    <strong>{member.name}</strong>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="member-list-container light-bg">
            <p className="page-body faction-p center">
              There are no known members of the faction{" "}
              {props.faction.factionName}
            </p>
          </div>
        )}
      </div>
      {auth.playerId === props.faction.campaign.gameMaster && (
        <div className="custom-buttons">
          <Button>Add / Remove Members</Button>
        </div>
      )}
    </section>
  );
};

export default FactionMembers;
