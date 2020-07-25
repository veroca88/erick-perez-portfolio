import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavbarPage({
  navLinks,
  background,
  hoverBackground,
  linkColor,
  textHover,
}) {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="responsive-nav">
      <div className="logo">
        <Link style={{ color: linkColor }} to="/erick-perez-portfolio">
          <h1>Erick Perez</h1>
        </Link>
      </div>
      <figure onClick={() => setNavOpen(!navOpen)}>
        <i className="fas fa-server fa-2x logo-nav"></i>
      </figure>
      <ul style={{ background }}>
        {navLinks.map((eachLink, index) => {
          return (
            <li
              key={index}
              className={navOpen ? "" : "li-desactive"}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(-1)}
              style={{
                background: hoverIndex === index ? textHover || "#000" : "",
              }}
            >
              <Link style={{ color: linkColor }} key={index} to={eachLink.path}>
                {eachLink.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
