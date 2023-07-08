import React from "react";
import "./FactionTitle.css";

const FactionTitle = (props) => {
  return (
    <section className="faction-title faction-section">
      <h1 className="page-title center">{props.faction.factionName}</h1>
      <div className="faction-token-motto center">
        <img src={props.faction.factionToken} alt={props.faction.factionName} />
        {props.faction.factionMotto && (
          <h5 className="letter-title">
            <em>"{props.faction.factionMotto}"</em>
          </h5>
        )}
      </div>
    </section>
  );
};

export default FactionTitle;
