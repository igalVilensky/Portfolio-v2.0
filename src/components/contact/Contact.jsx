import React, { useState } from "react";
import "./contact.scss";

function Contact() {
  const [msg, setMsg] = useState(false);
  const [inputText, setInputText] = useState("");

  const submitHandle = (e) => {
    /*  e.preventDefault(); */
    setMsg(true);
  };

  const changeHandle = (e) => {
    const text = e.target.value;
    setInputText(text);
    console.log(text);
  };
  const clickHandle = (e) => {
    setInputText("");
  };

  return (
    <div className="contact" id="contact">
      {/* <div className="left">
        <img
          src={`${process.env.PUBLIC_URL}/assets/contact.svg`}
          alt="contact"
        />
      </div> */}
      <div className="right">
        <h2>Contact</h2>
        <form
          action="https://formsubmit.co/vilenskyigal@gmail.com"
          method="POST"
          onSubmit={submitHandle}
        >
          <div className="input_textArea_wrap">
            <input type="text" placeholder="Email" required name="email" />
            <input type="text" placeholder="Name" required name="name" />
            <textarea
              placeholder="Message"
              name="name"
              id="msg"
              cols="30"
              rows="10"
              value={inputText}
              onChange={changeHandle}
            ></textarea>
            <button type="submit" onClick={clickHandle}>
              Send
            </button>
          </div>
        </form>
        <div className="spanMsg">
          {msg && <span>Thanks, I'll reply shortly.</span>}
        </div>
      </div>
    </div>
  );
}

export default Contact;
