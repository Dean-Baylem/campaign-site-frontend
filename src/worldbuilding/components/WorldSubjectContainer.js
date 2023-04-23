import React from "react";
import ImageCard from "../../shared/Components/UIComponents/ImageCard";
import { NavLink } from "react-router-dom";
import "./WorldSubjectContainer.css";

// I will store these details in the database and then pull them from there for use below when 
// the backend has been completed!

const subjects = [
  {
    cardType: "top",
    content: "Country",
    imgSrc:
      "https://img.freepik.com/free-photo/two-travelers-discovered-ruins-ancient-city-dense-forest-3d-illustration_456031-166.jpg?w=740&t=st=1680580227~exp=1680580827~hmac=752e2f77c64e456d8ba6a8397b8c3f54d08ff51620dac7e62dd1be9324a3c025",
  },
  {
    cardType: "top",
    content: "Religions",
    imgSrc:
      "https://img.freepik.com/free-vector/maya-square-set-with-civilization-culture-symbols-flat-isolated-vector-illustration_98292-3398.jpg?w=740&t=st=1680580352~exp=1680580952~hmac=c55d478820817e6b76a575c269b69575360db5fbb30ccc7b60b3c1786aae4bf6",
  },
  {
    cardType: "top",
    content: "Mythology",
    imgSrc:
      "https://img.freepik.com/free-photo/fantastic-illustration-ancient-chinese-themes_456031-89.jpg?w=740&t=st=1680580415~exp=1680581015~hmac=e58356c055f3d4bccb43bb0a65d5fd56d2a6547bfeaf14f185e2ba492c694b1f",
  },
  {
    cardType: "top",
    content: "Conflicts",
    imgSrc:
      "https://img.freepik.com/premium-photo/roguelike-video-game-flat-illustration_250484-3629.jpg?w=740",
  },
  {
    cardType: "top",
    content: "Magic",
    imgSrc:
      "https://img.freepik.com/free-vector/wizard-magic-isometric-flowchart_1284-72567.jpg?w=740&t=st=1680580315~exp=1680580915~hmac=4375e58ab8a8220d9a315e0b7c5cd83f95d392f6a3fed86815f850c1eb5d455f",
  },
  {
    cardType: "top",
    content: "Ecology",
    imgSrc:
      "https://img.freepik.com/free-photo/green-growing-trees-circle-generative-ai_169016-28712.jpg?w=740&t=st=1680580450~exp=1680581050~hmac=68a52cb115e578d66faca38cefbf8732874df3833ba63b10a727dddd6aeaafbd",
  },
  {
    cardType: "top",
    content: "Factions",
    imgSrc:
      "https://img.freepik.com/free-vector/set-fantasy-game-shields-isolated-background_107791-18097.jpg?w=740&t=st=1680580538~exp=1680581138~hmac=18ccd58f7874f352951ae485912fb7e727e95a8f576e1439db445540922a924b",
  },
  {
    cardType: "top",
    content: "Cosmology",
    imgSrc:
      "https://img.freepik.com/free-vector/knight-magic-portal-stone-frame-mountain-landscape-night-vector-cartoon-fantasy-illustration-with-man-medieval-costume-with-spear-ancient-arch-with-mystic-blue-glow_107791-5203.jpg?w=740&t=st=1680580620~exp=1680581220~hmac=8166ec604916f9102291a46a73ba4682ed1e22743c9721fd5930092d69aece58",
  },
  {
    cardType: "top",
    content: "Misc",
    imgSrc:
      "https://img.freepik.com/free-vector/video-game-element-collection_23-2150237447.jpg?w=740&t=st=1680580588~exp=1680581188~hmac=d0304aef847df13bd7e13cb62db3e7ae9d33af3f4978ddc4c0fabf84f69d2d84",
  },
];

const WorldSubjectContainer = props => {
    return (
      <div className="world-subject-container">
        {subjects.map((subject, index) => (
          <NavLink to={`/world/${props.worldID}/subject/${subject.content.toLowerCase()}`}>
            <ImageCard
              cardType={subject.cardType}
              content={subject.content}
              imgSrc={subject.imgSrc}
              key={index}
            />
          </NavLink>
        ))}
      </div>
    );
}

export default WorldSubjectContainer;