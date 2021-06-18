import React, { useState } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
function Portfolio() {
  const [selected, setSelected] = useState("featured");

  const list = [
    { id: "featured", title: "Featured" },
    { id: "web", title: "Web App" },
    { id: "mobile", title: "Mobile App" },
    { id: "content", title: "Content" },
    { id: "design", title: "Design" },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
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
