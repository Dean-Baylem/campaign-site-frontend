import React, { useState, useCallback } from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Landing from "./landing/pages/Landing";
import Auth from "./landing/pages/Auth";
import Registration from "./landing/pages/Register";
import WorldMainPage from "./worldbuilding/pages/WorldMainPage";
import "./index.css";
import WorldSubjectPage from "./worldbuilding/pages/WorldSubjectPage";
import { AuthContext } from "./shared/context/auth-context";
import PlayerHub from "./shared/pages/PlayerHub";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [playerId, setPlayerId] = useState(false);

  const login = useCallback((playerid) => {
    setIsLoggedIn(true);
    setPlayerId(playerid);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setPlayerId(null);
  }, []);

  return (
    <AuthContext.Provider
    value={{
      isLoggedIn: isLoggedIn,
      login: login,
      logout: logout,
      playerId: playerId
    }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/:playerId" element={<PlayerHub />} />
          <Route path="/world/:worldId" element={<WorldMainPage />} />
          <Route
            path="/world/:worldId/subject/:subjectType"
            element={<WorldSubjectPage />}
          />
          {/* <Route path="/world/:worldId/settings" element={< />} /> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
