import React, { useContext } from "react";
import { WorldContext } from "../../shared/context/WorldContext";

const WorldTitle = () => {

  const world = useContext(WorldContext);

    return (
      <div className="world-title">
        <p className="page-subtitle">Presenting</p>
        <h2 className="page-title">{world.currentWorld.worldName}</h2>
      </div>
    );
}

export default WorldTitle;