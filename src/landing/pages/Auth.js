import React, { useState } from "react";
import Subtitle from "../../shared/Components/PageComponents/Subtitle";
import MainNavigation from "../../shared/navigation/MainNavigation";
import Registration from "../landingsections/Register";
import LoginForm from "../landingsections/LoginForm";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "../../shared/Components/PageComponents/Footer";
import "./Auth.css";

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
        <MainNavigation />
        <div className="auth-body">
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div className="login-container">
              <div className="title-container">
                <Subtitle type="login-subtitle" content={tryLogin === true ? "Login" : "Signup"} />
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
          </ThemeProvider>
        </div>
        <Footer />
      </React.Fragment>
    );
}

export default Auth;