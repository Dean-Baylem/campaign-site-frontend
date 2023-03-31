import React from 'react';
import "./MainTitle.css"

const MainTitle = props => {
    return (
      <div className="main-title">
        <h1>{props.content}{props.highlight && <em>{props.highlight}</em>}</h1>
      </div>
    );
}

export default MainTitle;