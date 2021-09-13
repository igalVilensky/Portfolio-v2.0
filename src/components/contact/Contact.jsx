import React, { useState } from "react";
import "./contact.scss";

function Contact() {
  const [msg, setMsg] = useState(false);

  const submitHandle = (e) => {
    e.preventDefault();
    setMsg(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img
          src={`${process.env.PUBLIC_URL}/assets/contact.svg`}
          alt="contact"
        />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={submitHandle}>
          <input type="text" placeholder="eMail" />
          <textarea
            placeholder="Message"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">Send</button>
          {msg ? (
            <span style={{ display: "block" }}>
              Thanks, I'll reply shortly.
            </span>
          ) : (
            <span style={{ display: "block" }}></span>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
