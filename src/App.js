import React from "react";
import "./App.css";

import { Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Main from "./components/pages/Main";
import Experience from "./components/pages/Experience";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

const navLinks = [
  // {
  //   text: "Home",
  //   path: "/erick-perez-portfolio",
  // },
  {
    text: "Experience",
    path: "/experience",
  },
  {
    text: "About",
    path: "/about",
  },
  {
    text: "Contact",
    path: "/contact-me",
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
      <Route exact path="/" component={Main} />
      <Route exact path="/experience" component={Experience} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact-me" component={Contact} />
    </div>
  );
}

export default App;
