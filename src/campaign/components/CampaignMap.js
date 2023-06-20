import React from "react";
import "./CampaignMap.css";

const CampaignMap = () => {
    return (
      <div className="campaign-map-container light-bg card-box-shadow">
      <div className="page-subtitle center">
        <h5>World Map</h5>
      </div>
        <div className="map-container">
          <img
            src="https://img.freepik.com/free-vector/ancient-abstract-earth-relief-old-map-generated-conceptual-vector-elevation-map-fantasy-landscape_1217-5425.jpg?w=740&t=st=1686016130~exp=1686016730~hmac=cab302f32b1f0ebc8ebf098182f9bb20af283c540260eea3cd085f474fa2141a"
            alt="campaign-map"
            className="card-box-shadow"
          />
        </div>
      </div>
    );
}

export default CampaignMap;