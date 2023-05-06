import React, { useState } from "react";
import { Button } from "@mui/material";
import "./Roller.css";

const Roller = props => {

    const [result, setResult] = useState("");
    const [blurResult, setBlurResult] = useState(true);
    const [wobble, setWabble] = useState(false);

    const sleep = (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };

    const handleResult = async () => {
      if (blurResult === false) {
        setResult("");
        setBlurResult(true);
        setWabble(false);
      } else {
        setWabble(true);
        await sleep(2000);
        const randomResult =
          props.wildMagicTable.list[Math.floor(Math.random() * props.wildMagicTable.list.length)];
        setResult(randomResult.result);
        setBlurResult(false);
      }
    };


    return (
      <div className="roller-container">
        <div className={blurResult ? "result-box-clouded" : "result-box-clear"}>
          <p>{result}</p>
        </div>
        <div className={`magical-orb-token ${wobble && "orb-animation"}`}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/218/218159.png?w=740&t=st=1683255138~exp=1683255738~hmac=5b15f1861db07ac0ed572430a7f75cd5f3288b6e49eb27ba27fe7e52ef32796c"
            alt="magic-orb"
          />
        </div>
        <div className="roll-button">
          <Button onClick={handleResult} variant="contained">
            {blurResult ? "Release the Surge!!!" : "Prepare for Chaos!"}
          </Button>
        </div>
      </div>
    );
}

export default Roller;