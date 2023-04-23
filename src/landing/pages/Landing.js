import React from "react";
import HomeTitle from "../landingsections/TitleSection";
import Features from "../landingsections/Features";
import Footer from "../../shared/Components/PageComponents/Footer";
import "./Landing.css";
import DisplaySection from "../landingsections/DisplaySection";
import Carousel from "../../shared/Components/UIComponents/Carousel";
import { Button } from "@mui/material";

const data = [
  {
    img: "https://fastly.picsum.photos/id/987/600/300.jpg?hmac=G6PzIir0sCmk-BZ_-5isP8xcbdFO3t_YXiMU8D_69Pk",
    alt: "slide1",
  },
  {
    img: "https://fastly.picsum.photos/id/391/600/300.jpg?hmac=gK55dr8XBINlC5WW4uttrMZmd5HAVORxfz7oO-nG8ko",
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

const Landing = () => {
  return (
    <React.Fragment>
      <HomeTitle />
      <Features />
      <DisplaySection />
      <div className="tool-display-section">
        <div className="tool-carsousel-container">
          <Carousel data={data} />
        </div>
        <div className="tool-desc-container">
          <h3>DM Tool Description</h3>
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
          <Button variant="contained">Enhance your games now!</Button>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Landing;
