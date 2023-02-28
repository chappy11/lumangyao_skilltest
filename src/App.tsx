import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AwayTooLongWords from "./pages/AwayTooLongWords";
import BoyOrGirl from "./pages/BoyOrGirl";
import Magnet from "./pages/Magnet";
import Word from "./pages/Word";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes as Router } from "react-router";
import { Routes } from "./types/Routes.enum";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route
          path={Routes.A_WAY_TOO_LONG_WORDS}
          element={<AwayTooLongWords />}
        />
        <Route path={Routes.BOY_OR_GIRL} element={<BoyOrGirl />} />
        <Route path={Routes.MAGNET} element={<Magnet />} />
        <Route path={Routes.WORD} element={<Word />} />
      </Router>
    </BrowserRouter>
  );
}

export default App;
