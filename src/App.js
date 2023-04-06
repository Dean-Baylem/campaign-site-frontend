import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Landing from "./landing/pages/Landing";
import Auth from "./landing/pages/Auth";
import Registration from "./landing/pages/Register";
import WorldMainPage from "./worldbuilding/pages/WorldMainPage";
import "./index.css";
import WorldSubjectPage from "./worldbuilding/pages/WorldSubjectPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/world/:worldId" element={<WorldMainPage />} />
        <Route path="/world/:worldId/subject/:subjectType" element={<WorldSubjectPage />} />
        {/* <Route path="/world/:worldId/settings" element={< />} /> */}
        <Route path="*" element={<Navigate to="/" replace/>} />
      </Routes>
    </Router>
  );
}

export default App;
