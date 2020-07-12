import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Main from "./components/pages/Main";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";

const navLinks = [
  {
    text: "Home",
    path: "/home",
  },
  {
    text: "Projects",
    path: "/projects",
  },
  {
    text: "About",
    path: "/about",
  },
];
function App() {
  return (
    <div className="App">
      <Navbar navLinks={navLinks} />
      <Route path="/home" component={Main} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
