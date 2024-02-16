import "./About.css";
const About = () => {
  return (
    <div className="aboutContainer section" id="about">
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className="titleAfter"
      ></div>
      <h1 data-aos="fade-right" data-aos-duration="2500" className="title">
        About Me
      </h1>
      <p
        data-aos="fade-right"
        data-aos-duration="3000"
        className="titleDetails"
      >
        Hi, <br />
        My name is Uzair Shakeel, A Computer Science student & a Full Stack web
        developer. I Completed my HSC Degree from the City Scholars Sec. School,
        FSC Degree from DJ Sindh Govt. Science College, & currently completing
        my Computer Science degree degree from BBSUL.
      </p>
      <div data-aos="fade-up" data-aos-duration="3000" className="aboutBox">
        <div className="box">
          <h4>2005 - 2017</h4>
          <p>Matriculation</p>
        </div>
        <div className="box">
          <h4>2017-2019</h4>
          <p>Intermediate</p>
        </div>
        <div className="box">
          <h4>2020 - 2024</h4>
          <p>BSCS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
