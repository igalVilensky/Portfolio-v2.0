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
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc: "Lorem Ipsum is simply dummy text of the printing korem Ipsum is simply dummy texs simply dummy text of the and typesetting industry.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
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
