import React from "react";
import "./ShareDisplay.css";

const ShareDisplay = (props) => {
  return (
    <section className="landing-section share-display">
      <div className="page-subtitle">
        <h3 className="landing-h3">Share Your World</h3>
      </div>
      <div className="share-display-container">
        <div className="share-img-container">
          <img
            className="share-img"
            src="https://img.freepik.com/free-vector/isometric-game-nature-landscape-template_1284-37819.jpg?w=740&t=st=1682551567~exp=1682552167~hmac=54f22c171a819881193c0dce740538890319e6fbffcb3600a53ee15f969c4d8c"
            alt="share"
          />
        </div>
        <div className="share-desc-container">
          <div className="share-desc page-body">
            <p className="landing-p">
              The archives of Dungeon Delvers Inc. contain categorised
              information regarding the worlds built by its members. The tools
              used to manage and organise this information is available to all
              within the corporation. Easy to write, read, update and remove
              entries allow you to provide convenient easy-to-access information
              to your players. These tools are always improving and our clever
              companions constantly create new and interesting methods of
              managing your creation.
            </p>
            <p className="landing-p">
              Share your creation with your players and allow them to contribute
              to your world through the comments section located at the base of
              the world page. If you have any suggestions for improvements,
              contact Dungeon Devler HQ through our contact survey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShareDisplay;
