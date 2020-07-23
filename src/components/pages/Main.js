import React, { useState } from "react";
import TypingEffect from "../TypingEffect/TypingEffect";

export default function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="container">
        <TypingEffect />
      </div>
      <div className="button-contact">
        <button className="btn" onClick={() => setIsModalOpen(true)}>
          Contact Me
        </button>
        {isModalOpen && (
          <div className="overlay">
            <div className="form-message">
              <form className="contact-me-form">
                <label htmlFor="subject" className="label">
                  Subject:
                </label>
                <input
                  className="input"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                ></input>

                <label htmlFor="email" className="label">
                  Email:
                </label>
                <input
                  className="input"
                  name="email"
                  type="email"
                  placeholder="Email"
                />

                <label htmlFor="message" for="multiLineInput" className="label">
                  Message:
                </label>
                <textarea
                  className="input"
                  rows="5"
                  cols="50"
                  id="multiLineInput"
                  name="message"
                  placeholder="Enter your message"
                />
                {/* {message && <div className="error-message">{message}</div>} */}
                <button
                  className="btn sm"
                  onClick={() => setIsModalOpen(false)}
                >
                  Send message!
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
