import React from "react";
import "./portfolio.scss";

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Branding</li>
        <li>Design</li>
      </ul>
      <div className="container">
        <div className="item">
          <img
            src={`${process.env.PUBLIC_URL}/assets/portfolio.png`}
            alt=""
          ></img>
          <h3>Portfolio website</h3>
        </div>
        <div className="item">
          <img
            src={`${process.env.PUBLIC_URL}/assets/portfolio2.png`}
            alt=""
          ></img>
          <h3>Bootstrap website</h3>
        </div>
        <div className="item">
          <img
            src={`${process.env.PUBLIC_URL}/assets/portfolio.png`}
            alt=""
          ></img>
          <h3>Portfolio website</h3>
        </div>
        <div className="item">
          <img
            src={`${process.env.PUBLIC_URL}/assets/portfolio2.png`}
            alt=""
          ></img>
          <h3>Bootstrap website</h3>
        </div>
        <div className="item">
          <img
            src={`${process.env.PUBLIC_URL}/assets/portfolio.png`}
            alt=""
          ></img>
          <h3>Portfolio website</h3>
        </div>
        <div className="item">
          <img
            src={`${process.env.PUBLIC_URL}/assets/portfolio.png`}
            alt=""
          ></img>
          <h3>Portfolio website</h3>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
