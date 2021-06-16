import React from "react";
import "./intro.scss";

function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="img__container">
          <img src={`${process.env.PUBLIC_URL}/assets/me.png`} alt="me" />
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default Intro;
