import React from "react";
import TitleSection from "../components/TitleSection";
import Features from "../components/Features";
import "./Landing.css";
import Footer from "../../shared/components/Footer";

const Landing = () => {
    return (
      <React.Fragment>
        <TitleSection />
        <Features />
        <Footer />
      </React.Fragment>
    );
}

export default Landing;