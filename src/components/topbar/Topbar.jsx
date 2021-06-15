import React from "react";
import "./topbar.scss";

function Topbar() {
  return (
    <div className="topbar" id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Igal Vilensky ©
          </a>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default Topbar;
