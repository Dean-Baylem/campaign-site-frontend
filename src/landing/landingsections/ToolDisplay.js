import React from "react";
import Carousel from "../../shared/Components/UIComponents/Carousel";
import { Button } from "@mui/material";
import magicItemDisplay from "../../images/magicItemDisplay.jpeg";
import "./ToolDisplay.css";

const ToolDisplay = (props) => {
  const data = [
    {
      img: "https://fastly.picsum.photos/id/987/600/300.jpg?hmac=G6PzIir0sCmk-BZ_-5isP8xcbdFO3t_YXiMU8D_69Pk",
      alt: "slide1",
    },
    {
      img: magicItemDisplay,
      alt: "slide2",
    },
    {
      img: "https://fastly.picsum.photos/id/987/600/300.jpg?hmac=G6PzIir0sCmk-BZ_-5isP8xcbdFO3t_YXiMU8D_69Pk",
      alt: "slide3",
    },
    {
      img: "https://fastly.picsum.photos/id/391/600/300.jpg?hmac=gK55dr8XBINlC5WW4uttrMZmd5HAVORxfz7oO-nG8ko",
      alt: "slide4",
    },
  ];

  return (
    <div className="tool-display-section">
      <div className="tool-carsousel-container">
        <Carousel data={data} />
      </div>
      <div className="tool-desc-container">
        <div className="page-subtitle">
          <h3>DM Tool Description</h3>
        </div>
        <div className="page-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            suscipit sem id metus venenatis interdum. Integer gravida nulla sit
            amet metus rhoncus, non ultrices justo rhoncus. Suspendisse non
            blandit odio. Morbi congue magna in sapien blandit, id ultrices
            lectus placerat. Pellentesque dictum erat vitae ipsum viverra, et
            ultrices elit consectetur. Phasellus et nunc leo. Pellentesque ut
            fringilla elit, a placerat arcu. Nulla eget leo nibh. Morbi in nulla
            at metus tristique commodo. Sed a nisi enim. Etiam a erat a odio
            scelerisque viverra et in odio.
          </p>
        </div>
        <div className="custom-contained">
          <Button variant="contained">Enhance your games now!</Button>
        </div>
      </div>
    </div>
  );
};

export default ToolDisplay;
