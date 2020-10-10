import React, { useState, useEffect } from "react";
import CONTACTME_SERVICE from "../services/ContactMeService";
import { useForm } from "react-hook-form";

export default function Contact() {
  const { register, handleSubmit, watch, errors } = useForm();

  const initialValues = {
    subject: "",
    email: "",
    message: "",
  };

  const saveMessage = (data) => {
    const filledForm = {
      subject: data.subject,
      email: data.email,
      message: data.message,
    };
    CONTACTME_SERVICE.message(filledForm);
  };

  const resetForm = (e) => {
    e.target.reset(e);
  };

  return (
    <>
      <div className="form-message">
        <form onSubmit={handleSubmit(saveMessage)} className="contact-me-form">
          <label htmlFor="subject" className="label">
            Subject:
          </label>
          <input
            // onChange={handleChange}
            // onClick={handleChange}
            // value={values.subject}
            aria-invalid={errors.name ? "true" : "false"}
            className="input"
            name="subject"
            type="text"
            placeholder="Subject"
            // required
            ref={register({ required: true })}
          ></input>
          {errors.subject && <span>This field is required</span>}

          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            // onChange={handleChange}
            // onClick={handleChange}
            // value={values.email}
            className="input"
            name="email"
            type="email"
            placeholder="Email"
            ref={register({ required: true })}
          />
          {errors.email && <span>This field is required</span>}

          <label htmlFor="message" className="label">
            Message:
          </label>
          <textarea
            // onChange={handleChange}
            // onClick={handleChange}
            // value={values.message}
            className="input"
            rows="5"
            cols="50"
            id="message"
            name="message"
            type="text"
            placeholder="Enter your message"
            ref={register({ required: true })}
          />
          {errors.message && <span>This field is required</span>}
          <button className="btn sm">Send message!</button>
        </form>
      </div>
    </>
  );
}
