import React, { useState } from "react";
import { ItemGenContext } from "../../../shared/context/item-gen-context";
import MainNavigation from "../../../shared/navigation/MainNavigation";
import ItemGenHeader from "../Components/ItemGenHeader";
import ItemDisplay from "../Components/ItemDisplay";
import ItemCard from "../Components/ItemCard";
import ItemGenUI from "../Components/ItemGenUI";
import ItemGenFooter from "../Components/ItemGenFooter";
import { useHttpRequest } from "../../../shared/hooks/request-hook";
import "./ItemGen.css";
import Footer from "../../../shared/Components/PageComponents/Footer";
import ErrorModal from "../../../shared/Components/UIComponents/ErrorModal";


const ItemGen = (props) => {

  const [numItems, setNumItems] = useState(0);
  const [maxAlert, setMaxAlert] = useState(false);
  const [itemList, setItemList] = useState([]);
  const { error, sendRequest, clearError} = useHttpRequest();

  
  const createDefaultItem = () => {
    const defaultItem = {
      id: itemList.length,
      type: "Armor",
      token:
        "https://cdn-icons-png.flaticon.com/512/286/286627.png?w=1060&t=st=1682307997~exp=1682308597~hmac=f806137a6264940b88b6064cb37d03f1096b1fb2fbe2cebaba39ed7b3640fd19",
      rarity: "Common",
      details: {},
    };
    setItemList((prevValue) => {
      return ([...prevValue, defaultItem])
    })
  }

  const deleteItem = () => {
    setItemList(itemList.filter(item => item.id !== itemList.length - 1))
  }

  const handleAdd = () => {
    if (numItems > 8) {
      setNumItems(9);
      setMaxAlert(true);
    } else {
      setNumItems(numItems + 1);
      createDefaultItem();
    }
  };

  const handleMinus = () => {
    setMaxAlert(false);   
    if (numItems < 1) {
      setNumItems(0);
    } else {
      deleteItem();
      setNumItems(numItems - 1);
    }
  };

  const updateItem = async (id, updateType, update, token) => {
    const newState = itemList.map(item => {
      if (item.id === id) {
        switch (updateType) {
          case "type":
            return { ...item, type: update, token: token };
          case "rarity":
            return {...item, rarity: update}
          case "new":
            return {...item, details: update}
          default:
            return null;
        }
      }
      return item;
    });
    setItemList(newState)
  }

  const generateItem = async () => {
    try {
      for (const item of itemList) {
      const responseData = await sendRequest(
        process.env.REACT_APP_REQUEST_URL + "/tools/getItems",
        "POST",
        JSON.stringify({
          itemType: item.type,
          itemRarity: item.rarity,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      if (responseData.items.length === 0) {
        item.details = {name: "No Matching Items", source: "", attunement: null};
      } else {
      item.details =
        responseData.items[
          Math.floor(Math.random() * responseData.items.length)
        ];
      }
      };
      updateItem();
    } catch (err) {
    }
  }

  return (
    <React.Fragment>
    {error && <ErrorModal modalToggle={clearError} error={error}/>}
      {!error && (<div className="tools-body">
        <MainNavigation clear={true}/>
        <div className="item-gen-body" style={{ minHeight: "80vh" }}>
          <div className="item-gen-container">
            <ItemGenHeader />
            <ItemGenUI
              maxAlert={maxAlert}
              handleAdd={handleAdd}
              handleMinus={handleMinus}
            />
            <ItemDisplay>
              {itemList.map((item, i) => (
                <ItemCard
                  updateItem={updateItem}
                  key={i}
                  id={item.id}
                  type={item.type}
                  token={item.token}
                  rarity={item.rarity}
                  details={item.details}
                />
              ))}
            </ItemDisplay>
            <ItemGenFooter generateItem={generateItem} />
          </div>
        </div>
        <Footer />
      </div>)}
    </React.Fragment>
  );
};

export default ItemGen;
