import React from "react";
import "./skills.modules.css";

// import skills Images
import Image1 from "../../assets/html.webp";
import Image2 from "../../assets/css.webp";
import Image3 from "../../assets/js.webp";
import express from "../../assets/express.png";
import node from "../../assets/node.png";
import Image5 from "../../assets/react.webp";
import Image6 from "../../assets/nextjs.webp";
import Image7 from "../../assets/tailwind.webp";
import mongo from "../../assets/mongodb.png";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="slider section" id="skills">
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className="titleAfter"
      ></div>
      <h1 data-aos="fade-right" data-aos-duration="2000" className="title">
        Skills
      </h1>
      <p
        data-aos="fade-right"
        data-aos-duration="2500"
        className="titleDetails"
      >
        Here is my skills related to Web Development
      </p>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="sliderTrack flex"
      >
        <div className="slide">
          <Image src={Image1} alt="Slider Image" />
          <div>
            <h2>HTML5</h2>
            <span>Frontend</span>
          </div>
        </div>
        <div className="slide">
          <Image src={Image2} alt="Slider Image" />
          <div>
            <h2>CSS3</h2>
            <span>Frontend</span>
          </div>
        </div>
        <div className="slide">
          <Image src={Image3} alt="Slider Image" />
          <div>
            <h2>JavaScript</h2>
            <span>Frontend</span>
          </div>
        </div>
        <div className="slide">
          <Image src={Image7} alt="Slider Image" />
          <div>
            <h2>Tailwind CSS</h2>
            <span>Frontend</span>
          </div>
        </div>
        <div className="slide">
          <Image src={Image5} alt="Slider Image" />
          <div>
            <h2>React Js</h2>
            <span>Frontend</span>
          </div>
        </div>
        <div className="slide">
          <Image src={node} alt="Slider Image" />
          <div>
            <h2>Node js</h2>
            <span>Backend</span>
          </div>
        </div>
        <div className="slide">
          <Image src={express} alt="Slider Image" />
          <div>
            <h2>Express js</h2>
            <span>Backend</span>
          </div>
        </div>
        <div className="slide">
          <Image src={mongo} alt="Slider Image" />
          <div>
            <h2>Mongo DB</h2>
            <span>Database</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
