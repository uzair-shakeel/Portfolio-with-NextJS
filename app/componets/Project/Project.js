import React, { useState } from "react";
import "./Project.css";
import { HiEye } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import FoodVilla from "../../assets/Food-Villa.png";
import FoodVillaAdmin from "../../assets/FoodVilla Admin.png";
import Cafena from "../../assets/Cafena.png";
import DreamTalk from "../../assets/DreamTalk.png";
import Netflix from "../../assets/Netflix.png";
import Plantino from "../../assets/Plantino.png";
import TripTravels from "../../assets/Trips-Travel.png";
import TripTravelsAdminPanel from "../../assets/TripsTravelAdmin.png";
import RetailMeNot from "../../assets/RetailMeNot.png";
import Dot from "../../assets/Dot.webp";
import Food from "../../assets/Food.webp";
import RentUp from "../../assets/RentUp.webp";
import Medicare from "../../assets/DrAppointment.png";

const projectsData = [
  {
    name: "Food Villa",
    image: FoodVilla,
    alt: "Project 04",
    description:
      "FoodVilla (User Panel) is a Full Stack Restaurant Web. built with MERN Stack. ",
    link: "https://food-villa-rho.vercel.app/",
    category: "Full Stack",
  },
  {
    name: "Food Villa Admin Panel",
    image: FoodVillaAdmin,
    alt: "Project 04",
    description:
      "FoodVilla (Admin) is a Full Stack Restaurant Web. built with MERN Stack.",
    link: "https://food-villa-rho.vercel.app/",
    category: "Full Stack",
  },
  {
    name: "Trips Travel",
    image: TripTravels,
    alt: "Project 05",
    link: "https://trips-travel.vercel.app/home",
    description:
      "TripsTravel (User Panel) is a Full Stack Travelling web. built with MERN Stack.",
    category: "Full Stack",
  },
  {
    name: "Trips Travel Admin Panel",
    image: TripTravelsAdminPanel,
    alt: "Project 05",
    link: "https://trips-travel.vercel.app/home",
    description:
      "FoodVilla (Admin Panel) is a Full Stack Travelling web. built with MERN Stack.",
    category: "Full Stack",
  },
  {
    name: "Medicare",
    image: Medicare,
    alt: "Project 06",
    link: "https://doctor-appointment-ten.vercel.app/",
    description:
      "Medicare (User Panel) is a Full Stack Dr. Appointment web. built with MERN Stack.",
    category: "Full Stack",
  },
  {
    name: "Netflix",
    image: Netflix,
    alt: "netflix",
    link: "https://netflix-reactt.netlify.app/",
    description:
      "Netflix is a Full Stack Entertainment Web. built with React JS, Tailwind CSS & Firebase.",
    category: "Full Stack",
  },
  {
    name: "RentUp",
    image: RentUp,
    alt: "project 01",
    link: "https://rent-up-phi.vercel.app/",
    description:
      "RentUp is a Frontend Rent Service web. built with React JS and Tailwind CSS.",
    category: "Frontend",
  },
  {
    name: "Dot",
    image: Dot,
    alt: "project 03",
    link: "https://dot-alpha.vercel.app/",
    description:
      "Dot is a Frontend Hotel Service web. built with React JS and SASS.",
    category: "Frontend",
  },
  {
    name: "Food",
    image: Food,
    alt: "project 02",
    link: "https://food-pearl.vercel.app/",
    description:
      "Food is another Frontend Food Service web. built with HTML, CSS & JS.",
    category: "Frontend",
  },
  {
    name: "Retail Me Not",
    image: RetailMeNot,
    alt: "Retail Me Not",
    link: "https://retail-me-not.vercel.app/",
    description:
      "RetailMeNot is a Frontend Coupon web. built with React JS and CSS.",
    category: "Frontend",
  },
  {
    name: "Cafena",
    image: Cafena,
    alt: "Cafena",
    link: "https://cafena-khaki.vercel.app/",
    description:
      "Cafena is a Frontend Coffee Shop web. built with HTML, CSS & JS.",
    category: "Frontend",
  },
  {
    name: "Plantino",
    image: Plantino,
    alt: "Plantino",
    link: "https://plantino.vercel.app/",
    description: "Plantino is a Plant Store web. built with HTML, CSS & JS.",
    category: "Frontend",
  },
  {
    name: "Dream Talk",
    image: DreamTalk,
    alt: "Dream Talk",
    link: "https://dream-talk.vercel.app/",
    description: "DreamTalk is a Basic Landing Page built with React JS & CSS.",
    category: "Frontend",
  },
];

const Project = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filterProjects = (category) => {
    if (category === "All") {
      return projectsData;
    } else {
      return projectsData.filter((project) => project.category === category);
    }
  };

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  return (
    <div className="projectContainer section" id="project">
      <div data-aos="fade-right" data-aos-duration="2000">
        <div className="titleAfter"></div>
        <h1 className="title">Projects</h1>
        <p className="titleDetails">
          I built many projects for practice. Few of them are listed below.{" "}
        </p>
      </div>

      <div className="btngroup">
        <button
          className={activeTab === "All" ? "btnactive" : "btn"}
          onClick={() => handleTabClick("All")}
        >
          All
        </button>
        <button
          className={activeTab === "Full Stack" ? "btnactive" : "btn"}
          onClick={() => handleTabClick("Full Stack")}
        >
          Full Stack
        </button>
        <button
          className={activeTab === "Frontend" ? "btnactive" : "btn"}
          onClick={() => handleTabClick("Frontend")}
        >
          Frontend
        </button>
      </div>

      <div data-aos="fade-up" data-aos-duration="2000" className="project-box">
        {filterProjects(activeTab).map((project, index) => (
          <section className="project" key={index}>
            <div className="image">
              <Image src={project.image} alt="" />
              {/* <img src={project.image} alt={`Project ${index + 1}`} /> */}
            </div>
            <div className="pdetails">
              <span>{project.description}</span>
              <h2>{project.title}</h2>
              {project.link && (
                <Link href={project.link} className="flex" target="_blank">
                  <HiEye />
                </Link>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Project;
