import React, { useState, useEffect } from "react";
// import useContactMeForm from "../Forms/ContactMeForm";
import CONTACTME_SERVICE from "../services/ContactMeService";
import axios from "axios";

export default function Contact() {
  const initialValues = {
    subject: "",
    email: "",
    message: "",
  };
  const [message, setMessage] = useState({ initialValues });
  const [onSubmitting, setOnSubmitting] = useState(false);
  const [values, setValues] = useState({});
  const [error, setError] = useState("");

  const saveMessage = (event) => {
    !event.target.value
      ? setError("Please fill all the required fields")
      : setOnSubmitting(true);
    event.preventDefault();
    const data = {
      subject: message.subject,
      email: message.email,
      message: message.message,
    };
    CONTACTME_SERVICE.message(data);
    setMessage(data);
    setOnSubmitting(false);
    resetForm(event);
  };

  const resetForm = (e) => {
    e.target.reset(e);
  };

  const handleChange = (e) => {
    e.persist();
    !e.target.value
      ? setError(
          `Please fill all the required fields (You missed ${e.target.name}).`
        )
      : setMessage({ ...message, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="form-message">
        <form onSubmit={saveMessage} className="contact-me-form">
          <label htmlFor="subject" className="label">
            Subject:
          </label>
          <input
            onChange={handleChange}
            value={values.subject}
            className="input"
            name="subject"
            type="text"
            placeholder="Subject"
          ></input>

          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            onChange={handleChange}
            value={values.email}
            className="input"
            name="email"
            type="email"
            placeholder="Email"
          />

          <label htmlFor="message" className="label">
            Message:
          </label>
          <textarea
            onChange={handleChange}
            value={values.message}
            className="input"
            rows="5"
            cols="50"
            id="message"
            name="message"
            type="text"
            placeholder="Enter your message"
          />
          {error && <span>{error}</span>}
          <button className="btn sm">Send message!</button>
        </form>
      </div>
    </>
  );
}
