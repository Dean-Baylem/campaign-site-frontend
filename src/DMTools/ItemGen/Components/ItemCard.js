import React, { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import "./ItemCard.css";

const ItemCard = props => {

  const allItemTypes = [
    {
      name: "Armor",
      token:
        "https://cdn-icons-png.flaticon.com/512/286/286627.png?w=1060&t=st=1682307997~exp=1682308597~hmac=f806137a6264940b88b6064cb37d03f1096b1fb2fbe2cebaba39ed7b3640fd19",
    },
    {
      name: "Potion",
      token:
        "https://cdn-icons-png.flaticon.com/512/867/867876.png?w=1060&t=st=1682308130~exp=1682308730~hmac=a2afa13d6d315cc5a89f885a14d71bccf64c57df75eb8bb75293bcf5caa5714b",
    },
    {
      name: "Ring",
      token:
        "https://cdn-icons-png.flaticon.com/512/546/546593.png?w=1060&t=st=1682308213~exp=1682308813~hmac=85658713b7876ffdcc7b8bfdfccec68c2b6621d93cdee789a87ae07d43412d7a",
    },
    {
      name: "Rod",
      token:
        "https://cdn-icons-png.flaticon.com/512/867/867901.png?w=1060&t=st=1682308272~exp=1682308872~hmac=8943253d63fba8bcb427ace507111ab7471f5c90ce3c3d5897b9c95807b532de",
    },
    {
      name: "Scroll",
      token:
        "https://cdn-icons-png.flaticon.com/512/507/507745.png?w=1060&t=st=1682308335~exp=1682308935~hmac=df40ec764557e39ccc39794f63f3aff873816ff044390bc04aafca9c2f5cd2a6",
    },
    {
      name: "Staff",
      token:
        "https://cdn-icons-png.flaticon.com/512/1074/1074435.png?w=1060&t=st=1682308495~exp=1682309095~hmac=3831f3bb2fd31bef6a6df2dfd50ceae84371c07983cf79e6f6793d8bc65a4848",
    },
    {
      name: "Wand",
      token:
        "https://cdn-icons-png.flaticon.com/512/867/867906.png?w=1060&t=st=1682308375~exp=1682308975~hmac=144f2ad1599b5ec94fceb235f3324bb5e7c3bf51b2124490178686638934b630",
    },
    {
      name: "Weapon",
      token:
        "https://cdn-icons-png.flaticon.com/512/408/408347.png?w=1060&t=st=1682308481~exp=1682309081~hmac=46862856bf2e3ec677b2c11ae6add993975f85784b50f3040bc4c5657674f2c0",
    },
    {
      name: "Wondrous Item",
      token:
        "https://cdn-icons-png.flaticon.com/512/1123/1123953.png?w=1060&t=st=1682308605~exp=1682309205~hmac=20ca4f5111bc11464358fa13d1a807a3587b304bb51867e55157c14219912efb",
    },
  ];

  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const handleUpImageChange = () => {
    if (currentItemIndex === allItemTypes.length - 1) {
      props.updateItem(
        props.id,
        "type",
        allItemTypes[0].name,
        allItemTypes[0].token,
      )
      setCurrentItemIndex(0);
    } else {
      props.updateItem(
        props.id,
        "type",
        allItemTypes[currentItemIndex + 1].name,
        allItemTypes[currentItemIndex + 1].token,
      );
      setCurrentItemIndex(currentItemIndex + 1);
    }
  }

  const handleDownImageChange = () => {
    if (currentItemIndex === 0) {
      props.updateItem(
        props.id,
        "type",
        allItemTypes[allItemTypes.length - 1].name,
        allItemTypes[allItemTypes.length - 1].token,
      );
      setCurrentItemIndex(allItemTypes.length - 1);
    } else {
      props.updateItem(
        props.id,
        "type",
        allItemTypes[currentItemIndex - 1].name,
        allItemTypes[currentItemIndex - 1].token,
      );
      setCurrentItemIndex(currentItemIndex - 1);
    }
  }

  const handleClick = (event) => {
    props.updateItem(props.id, "rarity", event.target.name)
  }

    return (
      <div className="item-card">
        <div className="item-token">
          <div className="nav-before">
            <button className="carousel-button">
              <NavigateBeforeIcon onClick={handleDownImageChange} />
            </button>
          </div>
          <img
            className="item-img"
            src={props.token}
            alt="item"
            style={{ transition: "300ms" }}
          />
          <div className="nav-after">
            <button className="carousel-button">
              <NavigateNextIcon onClick={handleUpImageChange} />
            </button>
          </div>
        </div>
        <div className="rarity-container">
          <ul className="rarity-list">
            <li>
              <button
                onClick={handleClick}
                style={{ backgroundColor: "#f6ff00" }}
                className={
                  props.rarity === "Legendary"
                    ? "active-color-button"
                    : "color-button"
                }
                name="Legendary"
              ></button>
            </li>
            <li>
              <button
                onClick={handleClick}
                style={{ backgroundColor: "#e770ff" }}
                className={
                  props.rarity === "Very Rare"
                    ? "active-color-button"
                    : "color-button"
                }
                name="Very Rare"
              ></button>
            </li>
            <li>
              <button
                onClick={handleClick}
                style={{ backgroundColor: "#00daff" }}
                className={
                  props.rarity === "Rare"
                    ? "active-color-button"
                    : "color-button"
                }
                name="Rare"
              ></button>
            </li>
            <li>
              <button
                onClick={handleClick}
                style={{ backgroundColor: "#8aff91" }}
                className={
                  props.rarity === "Uncommon"
                    ? "active-color-button"
                    : "color-button"
                }
                name="Uncommon"
              ></button>
            </li>
            <li>
              <button
                onClick={handleClick}
                style={{ backgroundColor: "#ffffff" }}
                className={
                  props.rarity === "Common"
                    ? "active-color-button"
                    : "color-button"
                }
                name="Common"
              ></button>
            </li>
          </ul>
          <div className="item-desc" style={{ textAlign: "center" }}>
            {!props.details.name && (
              <p>
                <strong>
                  <em>{props.rarity}</em>
                </strong>{" "}
                {props.type}
              </p>
            )}
            {props.details.name && 
            (<div><p><strong>{props.details.name}</strong></p>{props.details.name !== "No Matching Items" ? <p>Source: <em>{props.details.source}</em>  |  Attunement: {props.details.attunement === "false" ? "No" : "Yes"}</p> : null}</div>)}
          </div>
        </div>
      </div>
    );
}

export default ItemCard;