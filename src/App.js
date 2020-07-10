import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Main from "./components/pages/Main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Main} />
    </div>
  );
}

export default App;
