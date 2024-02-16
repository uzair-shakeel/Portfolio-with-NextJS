import "./Hero.css";

const Hero = () => {
  return (
    <section className="heroContainer flex section">
      <h1
        data-aos="fade-right"
        data-aos-duration="2000"
        className="heroHeading"
      ></h1>
      <h1
        data-aos="fade-right"
        data-aos-duration="2000"
        className="heroHeading"
      >
        Hey,
      </h1>
      <p data-aos="fade-right" data-aos-duration="2000" className="heroDetails">
        I'm a MERN stack developer passionate about creating amazing web
        applications.
      </p>
      <a
        data-aos="fade-right"
        data-aos-duration="2000"
        href="https://wa.me/923482129578"
        target="_blank"
        className="btn flex"
      >
        Hire Me{" "}
      </a>
    </section>
  );
};

export default Hero;
