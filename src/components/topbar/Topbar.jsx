import React from "react";
import "./topbar.scss";
import { WhatsApp, Mail } from "@material-ui/icons";

function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Igal Vilensky ©
          </a>
          <div className="itemContainer">
            <WhatsApp className="icon" />
            <span>+49 458 22 54</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>vilenskyigal@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line_1"></span>
            <span className="line_2"></span>
            <span className="line_3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
