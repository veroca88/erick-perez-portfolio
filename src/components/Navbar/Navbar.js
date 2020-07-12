import React, { useState } from "react";
import { Link } from "react-router-dom";
import Burger from "./Burger";

export default function NavbarPage({ navLinks, background, hoverBackground }) {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav>
      <div className="logo">
        <h3>Erick Perez</h3>
      </div>
      <ul className="nav-links">
        {navLinks.map((eachLink, index) => {
          return (
            <li
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(-1)}
              style={{
                background:
                  hoverIndex === index ? hoverBackground || "#999" : "",
              }}
            >
              <Link key={index} to={eachLink.path}>
                {eachLink.text}
              </Link>
            </li>
          );
        })}
      </ul>
      <Burger />
      {/* <div className="burger">
        <div></div>
        <div></div>
        <div></div>
      </div> */}
    </nav>
  );
}
