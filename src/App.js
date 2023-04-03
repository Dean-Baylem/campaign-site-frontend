import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Landing from "./landing/pages/Landing";
import MainNavigation from "./shared/navigation/MainNavigation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Navigate to="/" replace/>} />
      </Routes>
    </Router>
  );
}

export default App;
