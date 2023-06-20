import React from "react";
import "./RecapSheet.css"

const RecapSheet = () => {
  const data =
    "Suspendisse potenti. Etiam eget magna lobortis, hendrerit felis id, gravida lectus. Etiam accumsan metus eu ipsum finibus aliquet. Crassit amet sapien nec quam tempus blandit in quis justo. Vivamus gravid auctor justo sed bibendum. Proin eget lacus mollis, laoreet magna sit amet, semper tortor. Aenean erat nunc, blandit sit amet augue at, eleifend hendrerit lectus. Sed sagittis, lacus et interdum dignissim, odio diam dapibus risus, quis efficitur risus ligula in dolor. Fusce lobortis gravida tempor. Morbi quis quam lacinia, efficitur neque sed, ullamcorper lorem. Aliquam erat volutpat. Duis ultricies mauris non rutrum lacinia. Aliquam erat volutpat. Maecenas enim urna, elementum ac scelerisque non, tincidunt in enim. In mollis porttitor dui, non porttitor lorem eleifend eu.";

  return (
    <div className="session-recap-container page-body card-light-bg">
      <h5>
        <strong>
          <em>Title</em>
        </strong>
      </h5>
      <p>{data}</p>
    </div>
  );
};

export default RecapSheet;
