import React from "react";
import "./testimonials.scss";
export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Vlad Sol",
      title: "Senior Developer at Cashdo Ltd.",
      img: `${process.env.PUBLIC_URL}/assets/senDev.jpeg`,
      icon: `${process.env.PUBLIC_URL}/assets/twitter.png`,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Muller",
      title: "Co-Founder of MyFxBook",
      img: `${process.env.PUBLIC_URL}/assets/ceo.jpg`,
      icon: `${process.env.PUBLIC_URL}/assets/youtube.png`,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Pavel Rekun",
      title: "CEO of PaybackFx",
      img: `${process.env.PUBLIC_URL}/assets/ceo2.jpg`,
      icon: `${process.env.PUBLIC_URL}/assets/linkedin.png`,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img
                src={`${process.env.PUBLIC_URL}/assets/rightArrow.png`}
                alt="rightArrow"
                className="left"
              />
              <img src={d.img} alt="rightArrow" className="user" />
              <img src={d.icon} alt="rightArrow" className="right" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
