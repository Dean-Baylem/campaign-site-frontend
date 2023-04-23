import React, { useContext } from "react";
import { WorldContext } from "../../shared/context/WorldContext";

const WorldTitle = props => {

  const world = useContext(WorldContext);

  const handleClick = () => {
    console.log(world.currentWorld.id)
  }

    return (
      <div className="world-title">
        <p onClick={handleClick}>Presenting</p>
        <h2>{world.currentWorld.worldName}</h2>
        {/* Note that the below section will include the names of all Campanigns
              currently being run in this world. Will change to a map function*/}
        <h5>
          {world.currentWorld.campaigns &&
            "Campanigns: " +
              (world.currentWorld.campaigns.length === 0
                ? "None"
                : world.currentWorld.campaigns)}
        </h5>
      </div>
    );
}

export default WorldTitle;