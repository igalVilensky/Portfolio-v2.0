import React, { useState } from "react";
import "./works.scss";

function Works() {
  const [curSlide, setCurSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mob.png",
      title: "Web Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text.",
      img: "",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc: "Lorem Ipsum is simply dummy text of the printing korem Ipsum is aply dummy text of the and typesetting industry.",
      img: "",
    },
  ];

  const handleClick = (dir) => {
    dir === "left"
      ? setCurSlide(curSlide > 0 ? curSlide - 1 : 2)
      : setCurSlide(curSlide < data.length - 1 ? curSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${curSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/mob.png`}
                      alt="mobile"
                    />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://wpthemego.com/images/themes/themeforest/emarket/mobile-layout-qr.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/assets/leftRight.png`}
        alt="arrow left"
        className="arrow left"
        onClick={() => handleClick("left")}
        /* style={{ background: false }} */
      />
      <img
        src={`${process.env.PUBLIC_URL}/assets/leftRight.png`}
        alt="arrow right"
        className="arrow right"
        onClick={() => handleClick("right")}
      />
    </div>
  );
}

export default Works;
