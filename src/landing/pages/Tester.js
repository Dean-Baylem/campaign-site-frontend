import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import { AuthContext } from "../../shared/context/auth-context";

const Tester = () => {
  const { sendRequest } = useHttpRequest();
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const testLogin = async () => {
    console.log("1")
    try {
      const responseData = await sendRequest(
        process.env.REACT_APP_REQUEST_URL + "/player/testerlogin",
        "GET",
      );
      console.log("2");
      auth.login(responseData.playerId, responseData.token);
      navigate("/");
    } catch (err) {console.log(err)}
  };

  return (
    <div className="tester-page-container">
      <div className="page-subtitle">
        <h2>Tester Login Page</h2>
      </div>
      <div className="page-body">
        <p>Hello There!</p>
        <p>
          Welcome to the tester section of Dungeon Delvers Incorporated. Since
          this web app is a concept app without the intention of going into
          production, I wish to allow you access to all the available features
          without registration.
        </p>
        <p>
          Please use the button below to initiate the "Tester Login Procedure"
          and interact with the web app freely, like you were an administrator
          user.
        </p>
      </div>
      <div className="custom-buttons">
        <Button onClick={testLogin}>Continue</Button>
      </div>
    </div>
  );
};

export default Tester;
