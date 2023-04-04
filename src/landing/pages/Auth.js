import React, { useState } from "react";
import Subtitle from "../../shared/components/Subtitle";
import "./Auth.css";
import MainNavigation from "../../shared/navigation/MainNavigation";
import Registration from "./Register";
import LoginForm from "./LoginForm";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "../../shared/components/Footer";

const Auth = props => {

    const [tryLogin, setTryLogin] = useState(true);

    const darkTheme = createTheme({
      palette: {
        mode: "dark",
      },
    });

    const handleSwitch = (event) => {
      event.preventDefault();
      setTryLogin(!tryLogin);
    }

    return (
      <React.Fragment>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <div className="login-container">
            <MainNavigation />
            <div className="title-container">
              <Subtitle content={tryLogin === true ? "Login" : "Signup"} />
              <p>Start Building</p>
            </div>
            <div className="login-option-container">
              {tryLogin === true ? (
                <div className="email-login">
                  <LoginForm handleSwitch={handleSwitch} />
                </div>
              ) : (
                <Registration handleSwitch={handleSwitch} />
              )}
            </div>
          </div>
          <Footer />
        </ThemeProvider>
      </React.Fragment>
    );
}

export default Auth;