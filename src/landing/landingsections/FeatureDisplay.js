import React from "react";
import "./FeatureDisplay.css";

const FeatureDisplay = (props) => {
  return (
    <section className="landing-section light-bg feature-display">
      <div className="page-subtitle">
        <h3 className="landing-h3">Forge Links</h3>
      </div>
      <div className="feature-display-container">
        <div className="feature-desc-container">
          <div className="page-body">
            <p className="landing-p">
              As a Dungeon Delver, you have access to a variety of methods to
              manage the mayhem of a TTRPG campaign. Keep track of the party;
              location, objectives, villain, events and more! Share these with
              your players and allow them to add comments.
            </p>
            <p className="landing-p">
              Manage the campaign schedule and allow your players to post
              'Session Summaries' from the perspective of their characters!
              Promote and enjoy out-of-game interactions between players and
              Game Master.
            </p>
            <p className="landing-p">
              The danger is always lurking in the depths of the dungeon. As
              such, your players can create and incorporate backup characters
              into the campaign setting allowing the player to switch to a
              separate active character at the drop of an axe!
            </p>
          </div>
        </div>
        <div className="feature-img">
          <img
            src="https://img.freepik.com/free-vector/dungeon-cartoon-poster-with-medieval-castle-door-vector-illustration_1284-78262.jpg?w=740&t=st=1682480998~exp=1682481598~hmac=36fe3c34c75aae262882eac2f005233f6b0aab6d71d39bd7a312b6de33deb6bc"
            alt="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureDisplay;
