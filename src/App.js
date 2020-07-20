import React from "react";
import "./App.css";

import { Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Main from "./components/pages/Main";
import Experience from "./components/pages/Experience";
import About from "./components/pages/About";

const navLinks = [
  {
    text: "Home",
    path: "/erick-perez-portfolio",
  },
  {
    text: "Experience",
    path: "/experience",
  },
  {
    text: "About",
    path: "/about",
  },
];
function App() {
  return (
    <div className="App">
      <Navbar
        navLinks={navLinks}
        linkColor="#fff"
        textHover="rgba(201, 201, 201, 0.32)"
      />
      <Route exact path="/erick-perez-portfolio" component={Main} />
      <Route exact path="/experience" component={Experience} />
      <Route exact path="/about" component={About} />
    </div>
  );
}

export default App;
