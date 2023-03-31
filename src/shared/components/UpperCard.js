import React from "react";

const UpperCard = props => {
    return (
        <div>
            <div>
                <img src={props.imgSrc} alt={props.title} />
            </div>
            <div>
                <h5>{props.title}</h5>
            </div>
            <div>
                <p>{props.content}</p>
            </div>
        </div>
    );
}

export default UpperCard;