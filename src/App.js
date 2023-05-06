import React, { useState, useCallback } from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Landing from "./landing/pages/Landing";
import Auth from "./landing/pages/Auth";
import Registration from "./landing/landingsections/Register";
import WorldMainPage from "./worldbuilding/pages/WorldMainPage";
import WorldSubjectPage from "./worldbuilding/pages/WorldSubjectPage";
import { AuthContext } from "./shared/context/auth-context";
import PlayerHub from "./worldbuilding/pages/PlayerHub";
import CreateNewWorld from "./worldbuilding/pages/CreateNewWorld";
import { WorldContext } from "./shared/context/WorldContext";
import "./index.css";
import ItemGen from "./DMTools/ItemGen/pages/ItemGen";
import WildMagic from "./DMTools/WildMagic/WildMagic";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [playerId, setPlayerId] = useState(false);
  const [currentWorld, setCurrentWorld] = useState({});

  const login = useCallback((playerid) => {
    setIsLoggedIn(true);
    setPlayerId(playerid);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setPlayerId(null);
  }, []);

  const changeWorld = useCallback((world) => {
    setCurrentWorld(world);
  })

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        playerId: playerId,
      }}
    >
      <WorldContext.Provider
        value={{
          currentWorld: currentWorld,
          changeWorld: changeWorld,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/:playerId" element={<PlayerHub />} />
            <Route path="/world/:worldId" element={<WorldMainPage />} />
            <Route path="/world/create" element={<CreateNewWorld />} />
            <Route
              path="/world/:worldId/subject/:subjectType"
              element={<WorldSubjectPage />}
            />
            {/* <Route path="/world/:worldId/settings" element={< />} /> */}
            <Route path="/DMTools/itemGenerator" element={<ItemGen />} />
            <Route path="/DMTools/wildmagictables" element={<WildMagic />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </WorldContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
