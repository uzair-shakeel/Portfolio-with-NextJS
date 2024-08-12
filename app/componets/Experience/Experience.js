import "./Experience.css";
const About = () => {
  return (
    <div className="aboutContainer section" id="about">
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className="titleAfter"
      ></div>
      <h1 data-aos="fade-right" data-aos-duration="2500" className="Etitle">
        Experience
      </h1>

      <div data-aos="fade-up" data-aos-duration="3000" className="aboutBox">
        <div className="box">
          <h4>Frontend Dev</h4>
          <p>Agilo (Oct 2023 - Feb 2024)</p>
          <p
            data-aos="fade-right"
            data-aos-duration="3000"
            className="titleDetails"
          >
            As a Frontend Developer at Agilo, I build and maintain user
            interfaces using React JS / Next JS with various UI & CSS Libraries.
            I collaborate with designers and backend developers to create
            responsive, accessible, and high-performance web applications,
            ensuring a great user experience across devices.
          </p>
        </div>
        <div className="box">
          <h4>Fullstack Dev</h4>
          <p>Agilo (Mar 2024 - July 2024)</p>
          <p
            data-aos="fade-right"
            data-aos-duration="3000"
            className="titleDetails"
          >
            As a Full Stack Developer at Agilo, I develop full-stack web
            applications using MongoDB, Express, React / Next, and Node.js. I
            handle everything from the frontend UI to the backend server and
            database management. I ensure that the applications are scalable,
            efficient, and deliver a seamless experience to users. By
            integrating APIs and managing data flow across the stack, I
            contribute to building robust and dynamic web solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
