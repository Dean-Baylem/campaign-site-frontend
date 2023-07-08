import React from "react";
import "./FactionBackground.css"

const FactionBackground = props => {
    return (
      <section className="faction-section light-bg">
        <h3 className="page-subtitle faction-h3">Background</h3>
        <p className="page-body faction-p">{props.faction.factionDesc}</p>
      </section>
    );
}

export default FactionBackground;