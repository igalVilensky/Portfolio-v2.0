import React from "react";
import "./testimonials.scss";
export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        <div className="card">
          <div className="top">
            <img
              src={`${process.env.PUBLIC_URL}/assets/rightArrow.png`}
              alt="rightArrow"
              className="left"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/senDev.jpeg`}
              alt="rightArrow"
              className="user"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/youtube.png`}
              alt="rightArrow"
              className="right"
            />
          </div>
          <div className="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            impedit sed reprehenderit quo, iure magni molestiae dolor
          </div>
          <div className="bottom">
            <h3>David</h3>
            <h4>CEO of Cashdo Ltd.</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
