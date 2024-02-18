import React, { useState } from "react";
import "./Project.css";
import { HiEye } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import FoodVilla from "../../assets/Food-Villa.png";
import FoodVillaAdmin from "../../assets/FoodVilla Admin.png";
import Cafena from "../../assets/Cafena.png";
import DreamTalk from "../../assets/DreamTalk.png";
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
    description: "Indulge in culinary delights with Food Villa...",
    link: "https://food-villa-five.vercel.app/",
    category: "Full Stack",
  },
  {
    name: "Food Villa Admin Panel",
    image: FoodVillaAdmin,
    alt: "Project 04",
    description: "Indulge in culinary delights with Food Villa...",
    link: "https://food-villa-five.vercel.app/",
    category: "Full Stack",
  },
  {
    name: "Medicare",
    image: Medicare,
    alt: "Project 06",
    link: "https://doctor-appointment-ten.vercel.app/",
    description:
      "Built on the MERN stack, our platform enables users to book appointments...",
    category: "Full Stack",
  },
  {
    name: "Trips Travel",
    image: TripTravels,
    alt: "Project 05",
    link: "https://trips-travel-frontend.vercel.app/",
    description: "A MERN-based travel booking platform...",
    category: "Full Stack",
  },
  {
    name: "Trips Travel Admin Panel",
    image: TripTravelsAdminPanel,
    alt: "Project 05",
    link: "https://trips-travel-frontend.vercel.app/",
    description: "A MERN-based travel booking platform...",
    category: "Full Stack",
  },
  {
    name: "RentUp",
    image: RentUp,
    alt: "project 01",
    link: "https://rent-up-phi.vercel.app/",
    description:
      "Discover your next adventure with our Travel & Stay website...",
    category: "Frontend",
  },
  {
    name: "Dot",
    image: Dot,
    alt: "project 03",
    link: "https://dot-alpha.vercel.app/",
    description:
      "Welcome to Hotal Rent-Up, your destination for hassle-free hotel rentals...",
    category: "Frontend",
  },
  {
    name: "Food",
    image: Food,
    alt: "project 02",
    link: "https://food-pearl.vercel.app/",
    description:
      "Experience the convenience of online food ordering with our HTML, CSS, and JavaScript...",
    category: "Frontend",
  },
  {
    name: "Retail Me Not",
    image: RetailMeNot,
    alt: "Retail Me Not",
    link: "https://retail-me-not.vercel.app/",
    description:
      "Experience the convenience of online food ordering with our HTML, CSS, and JavaScript...",
    category: "Frontend",
  },
  {
    name: "Cafena",
    image: Cafena,
    alt: "Cafena",
    link: "https://cafena-khaki.vercel.app/",
    description:
      "Experience the convenience of online food ordering with our HTML, CSS, and JavaScript...",
    category: "Frontend",
  },
  {
    name: "Plantino",
    image: Plantino,
    alt: "Plantino",
    link: "https://plantino.vercel.app/",
    description:
      "Experience the convenience of online food ordering with our HTML, CSS, and JavaScript...",
    category: "Frontend",
  },
  {
    name: "Dream Talk",
    image: DreamTalk,
    alt: "Dream Talk",
    link: "https://dream-talk.vercel.app/",
    description:
      "Experience the convenience of online food ordering with our HTML, CSS, and JavaScript...",
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
