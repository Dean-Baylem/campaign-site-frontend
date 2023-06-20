import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Landing from "./landing/pages/Landing";
import Auth from "./landing/pages/Auth";
import Registration from "./landing/landingsections/Register";
import WorldMainPage from "./worldbuilding/pages/WorldMainPage";
import WorldSubjectPage from "./worldbuilding/pages/WorldSubjectPage";
import { AuthContext } from "./shared/context/auth-context";
import PlayerHub from "./worldbuilding/pages/PlayerHub";
import { WorldContext } from "./shared/context/WorldContext";
import "./index.css";
import ItemGen from "./DMTools/ItemGen/pages/ItemGen";
import WildMagic from "./DMTools/WildMagic/WildMagic";
import CampaignMainPage from "./campaign/pages/CampaignMainPage";
import { CampaignContext } from "./shared/context/CampaignContext";

function App() {
  const [token, setToken] = useState(false);
  const [playerId, setPlayerId] = useState(false);
  const [currentWorld, setCurrentWorld] = useState({});
  const [currentCampaign, setCurrentCampaign] = useState({});

  const login = useCallback((playerid, token) => {
    setToken(token);
    setPlayerId(playerid);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setPlayerId(null);
  }, []);

  const changeWorld = useCallback((world) => {
    setCurrentWorld(world);
  });

  const changeCampaign = useCallback((campaign) => {
    setCurrentCampaign(campaign);
  });

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
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
        <CampaignContext.Provider
          value={{
            currentCampaign: currentCampaign,
            changeCampaign: changeCampaign,
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
              <Route
                path="/campaign/:campaignId"
                element={<CampaignMainPage />}
              />
              {/* <Route path="/world/:worldId/settings" element={< />} /> */}
              <Route path="/DMTools/itemGenerator" element={<ItemGen />} />
              <Route path="/DMTools/wildmagictables" element={<WildMagic />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
        </CampaignContext.Provider>
      </WorldContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
