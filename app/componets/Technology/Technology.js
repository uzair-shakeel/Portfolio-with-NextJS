import "./technology.css";
import { FaReact } from "react-icons/fa";
import { BiLogoFirebase } from "react-icons/bi";
import { BsMenuButtonWideFill } from "react-icons/bs";

const Technology = () => {
  return (
    <div className="technology section" id="technology">
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className="titleAfter"
      ></div>
      <h1 data-aos="fade-right" data-aos-duration="2000" className="title">
        Technologies
      </h1>
      <p
        data-aos="fade-right"
        data-aos-duration="2500"
        className="titleDetails"
      >
        Technologies I used to learn to become a Full Stack Web Developer.
      </p>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="technologyContainer"
      >
        <div className="techBox">
          <FaReact />
          <h4>Front-End</h4>
          <p>
            Experience with <br />
            Next JS, React JS, JavaScript, CSS, <br /> Tailwind CSS & HTML
          </p>
        </div>
        <div className="techBox">
          <BiLogoFirebase />
          <h4>Back-End</h4>
          <p>
            Experience with <br />
            Node JS & Express JS
          </p>
        </div>
        <div className="techBox">
          <BsMenuButtonWideFill />
          <h4>Database</h4>
          <p>
            Experience with <br />
            Mongo DB
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
