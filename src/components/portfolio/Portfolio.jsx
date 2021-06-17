import React from "react";
import "./portfolio.scss";

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li>Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Branding</li>
        <li>Design</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="" alt=""></img>
          <h3>Forex App</h3>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
