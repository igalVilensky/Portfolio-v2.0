import React from "react";
import "./works.scss";

function Works() {
  return (
    <div className="works" id="works">
      <div className="slider">
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
                <h2>Title</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem vel similique doloremque aperiam reiciendis.
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
