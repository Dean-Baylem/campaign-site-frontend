import React from "react";
import "./FeatureDisplay.css";

const FeatureDisplay = (props) => {
  return (
    <div className="feature-display-container">
      <div className="feature-desc-container">
        <div className="features-title page-subtitle">
          <h3>Forge Links</h3>
        </div>
        <div className="features-body page-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            nibh lorem. Praesent urna sapien, ultrices vel suscipit id,
            facilisis vel arcu. Nullam dui magna, euismod et auctor eu, iaculis
            sit amet ipsum. Etiam auctor leo id est malesuada pharetra. Fusce nec sapien feugiat, congue magna sit
            amet, varius mi.</p> <p>Suspendisse ut sollicitudin lectus. Nam at pretium
            quam, at varius libero. Praesent risus magna, iaculis eget turpis
            sit amet, faucibus aliquet justo. Maecenas a quam lacus. Suspendisse
            eu ullamcorper ipsum. Fusce suscipit erat sed est rhoncus
            ullamcorper. Suspendisse bibendum, augue at pretium porta, dui urna
            mattis nibh, eu pretium est sem at ante.
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
  );
};

export default FeatureDisplay;
