import React from "react";
import "../../shared/Components/UIComponents/Card.css";
import "./EntryCard.css";

const EntryCard = props => {
    return (
        <div className="entry-card">
            <div className="entry-card-content-container">
                <div className="card-title">
                    <h4>{props.title}</h4>
                </div>
                <div className="card-content">
                    <p>{props.desc.length > 100 ? props.desc.substring(0, 100) + "..." : props.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default EntryCard;