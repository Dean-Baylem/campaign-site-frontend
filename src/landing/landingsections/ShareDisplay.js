import React from "react";
import "./ShareDisplay.css"

const ShareDisplay = props => {
    return (
      <div className="share-display-container">
        <div className="share-img-container">
          <img
            className="share-img"
            src="https://img.freepik.com/free-vector/isometric-game-nature-landscape-template_1284-37819.jpg?w=740&t=st=1682551567~exp=1682552167~hmac=54f22c171a819881193c0dce740538890319e6fbffcb3600a53ee15f969c4d8c"
            alt="share"
          />
        </div>
        <div className="share-desc-container">
          <div className="share-title page-subtitle">
            <h3>Share Your World</h3>
          </div>
          <div className="share-desc page-body">
            <p>
              Duis dapibus eros non odio consequat, in mollis dui venenatis.
              Nulla sit amet tortor nec nibh sagittis vestibulum. Nunc eu metus
              luctus nulla maximus tincidunt sed sed ligula. Aliquam rhoncus
              metus accumsan tellus tincidunt aliquet. Etiam et neque vehicula,
              tincidunt dui vitae, eleifend nulla. 
            </p>
            <p>
              Duis orci velit, euismod ultrices nibh ut, pretium fermentum dui.
              Suspendisse potenti. Proin mattis ullamcorper nibh. Nullam vel
              tellus sit amet ante scelerisque venenatis sed vitae velit.
              Pellentesque risus dolor, vehicula in augue at, hendrerit
              consequat eros. Nulla facilisi. Curabitur consectetur leo a
              pharetra blandit. Nullam non sapien sagittis, varius risus id,
              ultricies mauris. 
            </p>
          </div>
        </div>
      </div>
    );
}

export default ShareDisplay;