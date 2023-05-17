import React from 'react';
import "./MainTitle.css"

const MainTitle = props => {
    return (
      <div className={`${props.titleType}`}>
        <h1>{props.content}</h1>
      </div>
    );
}

export default MainTitle;