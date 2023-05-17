import React, { useContext } from "react";
import { WorldContext } from "../../shared/context/WorldContext";

const WorldTitle = props => {

  const world = useContext(WorldContext);

  const handleClick = () => {
    console.log(world.currentWorld.id)
  }

    return (
      <div className="world-title">
        <p className="page-subtitle" onClick={handleClick}>Presenting</p>
        <h2 className="page-title">{world.currentWorld.worldName}</h2>
      </div>
    );
}

export default WorldTitle;