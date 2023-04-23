import React from "react";
import "./Banner.css";

const Banner = props => {
    return (
      <div
        className="banner"
        style={{
          backgroundImage: `linear-gradient(rgba(243,222,186,0.2), rgba(0,0,0,0.2)), url(${props.img}})`,
        }}
      ></div>
    );
}

export default Banner;