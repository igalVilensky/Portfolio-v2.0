import React from "react";
import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["Web Developer", "Web Designer", "Product Manager"],
      typeSpeed: 150,
      backDelay: 1000,
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="img__container">
          <img
            src={`${process.env.PUBLIC_URL}/assets/profileMe.png`}
            alt="Igal Vilensky"
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm </h2>
          <h1>Igal Vilensky</h1>
          <h3>
            Full Stack <br />
            <span ref={textRef}></span>
          </h3>
          <a href="#portfolio">
            <img
              src={`${process.env.PUBLIC_URL}/assets/down.png`}
              alt="me"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
