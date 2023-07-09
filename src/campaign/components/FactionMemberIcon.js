import React, { useState } from "react";

const FactionMemberIcon = (props) => {
  const [clicked, setClicked] = useState(false);

  const handleNewClick = () => {
    if (!clicked) {
      props.addNewHandler(props.id);
      setClicked(true);
    } else {
      props.removeNewHandler(props.id);
      setClicked(false);
    }
  };

  const handleRemoveClick = () => {
    if (!clicked) {
      props.addToRemoveHandler(props.id);
      setClicked(true);
    } else {
      props.remainAsMemberHandler(props.id);
      setClicked(false);
    }
  };

  return (
    <div className={clicked ? "clicked-token" : "faction-token"}>
      <img
        onClick={props.nonMember ? handleNewClick : handleRemoveClick}
        src="https://cdn.weasyl.com/static/media/3c/1d/e1/3c1de1ba9db16feeeeb51a2be117949d43b17e4511980842b08113fc2488cdbf.png"
        alt="icon"
      />
      <p>{props.npcName}</p>
    </div>
  );
};

export default FactionMemberIcon;
