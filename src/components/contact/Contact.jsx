import React from "react";
import "./contact.scss";

function Contact() {
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
        <form>
          <input type="text" placeholder="eMail" />
          <textarea
            placeholder="Message"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
