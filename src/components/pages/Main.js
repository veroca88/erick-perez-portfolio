import React, { useState } from "react";
import TypingEffect from "../TypingEffect/TypingEffect";
import useContactMeForm from "../Forms/ContactMeForm";
import { Link } from "react-router-dom";

export default function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect(() =>
  //   fetch("https://api/contact-me/")
  //     .then((res) => res.json())
  //     .then((res) => this.setState({ message: res }))
  //     .catch(() => this.setState({ hasErrors: true }))
  // );
  return (
    <>
      <div className="container">
        <TypingEffect />
      </div>
      <div className="button-contact">
        {/* <button 
        className="btn" 
        onClick={() => setIsModalOpen(true)}
        >
          Contact Me
        </button> */}
        <button className="btn">
          <Link to="/contact-me">Contact Me</Link>
        </button>
      </div>
    </>
  );
}
