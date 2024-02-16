import "./Project.css";
// import Images
import Project1 from "../../assets/project1.webp";
import Project2 from "../../assets/project2.webp";
import Project3 from "../../assets/project3.webp";
import Project4 from "../../assets/project4.webp";
import Project5 from "../../assets/project5.webp";
import Project6 from "../../assets/project6.webp";
import Image from "next/image";
import Link from "next/link";
import { HiEye } from "react-icons/hi";

const Project = () => {
  return (
    <div className="projectContainer section " id="project">
      <div data-aos="fade-right" data-aos-duration="2000">
        <div className="titleAfter"></div>
        <h1 className="title">Projects</h1>
        <p className="titleDetails">Here are my some Projects</p>
      </div>

      <div data-aos="fade-up" data-aos-duration="2000" className="project-box">
        <section className="project">
          <div className="image">
            <Image src={Project6} alt="Project 06" />
          </div>
          <div className="pdetails">
            <span>React js / CSS3 / Firebase / API Integration</span>
            <h2>eCommerce Website</h2>
            <Link
              href="https://ecommerce-website-by-suneel.netlify.app/"
              className="flex"
              target="_blank"
            >
              <HiEye />
            </Link>
          </div>
        </section>

        <section className="project">
          <div className="image">
            <Image src={Project4} alt="Project 04" />
          </div>
          <div className="pdetails">
            <span>REACT Js / CSS3 / API</span>
            <h2>Multipage Saylani Website</h2>
            <Link
              href="https://saylani-welfare-website-suneel.vercel.app/"
              className="flex "
              target="_blank"
            >
              <HiEye />
            </Link>
          </div>
        </section>

        <section className="project">
          <div className="image">
            <Image src={Project5} alt="Project 05" />
          </div>
          <div className="pdetails">
            <span>NEXT JS / Tailwind CSS </span>
            <h2>Netflix Landing Page </h2>
            <Link
              href="https://netflix-website-landing-page.netlify.app/"
              className="flex"
              target="_blank"
            >
              <HiEye />
            </Link>
          </div>
        </section>

        <section className="project">
          <div className="image">
            <Image src={Project1} alt="project 01" />
          </div>
          <div className="pdetails">
            <span>REACT JS / SASS (SCSS)</span>
            <h2>Travel & Stay Website</h2>
            <Link
              href="https://trip-website-lemon.vercel.app/"
              className="flex "
              target="_blank"
            >
              <HiEye />
            </Link>
          </div>
        </section>

        <section className="project">
          <div className="image">
            <Image src={Project3} alt="project 03" />
          </div>
          <div className="pdetails">
            <span>REACT Js / CSS3</span>
            <h2>Hotal Rent-Up Website</h2>
            <Link
              href="https://rent-up-website-react-js.vercel.app/"
              className="flex"
              target="_blank"
            >
              <HiEye />
            </Link>
          </div>
        </section>

        <section className="project">
          <div className="image">
            <Image src={Project2} alt="project 02" />
          </div>
          <div className="pdetails">
            <span> HTML5 / CSS3 / JavaScript</span>
            <h2>Food Order Website</h2>
            <Link
              href="https://food-website-suneeldeveloper.netlify.app/"
              className="flex"
              target="_blank"
            >
              <HiEye />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project;
