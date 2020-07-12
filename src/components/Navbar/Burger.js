import React, { useState } from "react";

export default function Burger() {
  const [toggle, setToggle] = useState("off");

  const handleClick = () => {
    setToggle(toggle === "off" ? "on" : "off");
  };
  return (
    <div onClick={() => handleClick()} className={`burger${toggle}`}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
