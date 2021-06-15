import React from "react";
import "./topbar.scss";
import { Person, Mail, LocalPhone } from "@material-ui/icons";

function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Igal Vilensky ©
          </a>
          <div className="itemContainer">
            <LocalPhone className="icon" />
            <span>+49 458 22 54</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>vilenskyigal@gmail.com</span>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default Topbar;
