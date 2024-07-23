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
import PizzaUNO from "../../assets/Pizza-UNO.jpg";
import Bylinka from "../../assets/bylinka.jpg";
import Lider from "../../assets/lider.jpg";
import Magnin from "../../assets/magnin.jpg";
import Disease from "../../assets/disease.jpg";
import TSI from "../../assets/tsi.jpg";
import Vetjobs from "../../assets/vetjobs.jpg";
import Canna from "../../assets/canna.jpg";
import LinkUP from "../../assets/linkup.jpg";
import Inquiry from "../../assets/inquiry.jpg";

const projectsData = [
  {
    name: "Food Villa",
    image: FoodVilla,
    alt: "Project 04",
    description:
      "Food Villa, a dynamic restaurant website built with the MERN stack, features user and admin panels with secure authentication. Customers can browse menus, place orders, and manage accounts, while admins manage orders and update menus.",
    link: "https://food-villa-rho.vercel.app/",
    category: "multi",
  },
  {
    name: "Trips Travel",
    image: TripTravels,
    alt: "Project 05",
    link: "https://trips-travel.vercel.app/home",
    description:
      "Trips Travel, built with the MERN stack, features secure user and admin panels. Users can browse trips, book itineraries, and leave reviews, while admins manage bookings and trips.",
    category: "multi",
  },
  {
    name: "Pizza UNO",
    image: PizzaUNO,
    alt: "Project 05",
    link: "https://pizza-uno-frontend.vercel.app",
    description:
      "Pizza-UNO, built with the MERN stack, provides seamless online pizza ordering in the UK with customization, secure payments, delivery tracking, and admin management.",
    category: "multi",
  },
  {
    name: "Inquiry Management System",
    image: Inquiry,
    alt: "Project 05",
    link: "https://github.com/uzair-shakeel/Inquiry-Management-System",
    description:
      "The Inquiry Management System efficiently handles student inquiries by streamlining the process for quick and accurate responses, featuring an intuitive interface and robust backend processing.",
    category: "multi",
  },
  {
    name: "LinkUP",
    image: LinkUP,
    alt: "Project 05",
    link: "https://github.com/uzair-shakeel/Link-Up",
    description:
      "Link Up is a fully functional social media platform where users can post content, apply for jobs, interact with others, and enjoy real-time chat, customizable profiles, and theme options.",
    category: "user",
  },
  {
    name: "Bylinka Tannery",
    image: Bylinka,
    alt: "Project 05",
    link: "https://sheep-skin.vercel.app",
    description:
      "Bylinka Tannery is a premier platform for purchasing high-quality animal skins, including sheep, deer, reindeer, and medical-grade options, with a focus on sustainability and exceptional user experience.",
    category: "user",
  },
  {
    name: "Liderpodhale",
    image: Lider,
    alt: "Project 05",
    link: "https://lidher.vercel.app",
    description:
      "Liderpodhale, built with Next.js and Next UI, is an insurance website offering a user-friendly experience in Ukrainian and Polish, featuring comprehensive insurance information and services through an intuitive interface.",
    category: "user",
  },
  {
    name: "Dr. Magnin",
    image: Magnin,
    alt: "Project 05",
    link: "https://dr-magnin.vercel.app",
    description:
      "The portfolio for Dr. Magnin showcases her distinguished work and achievements, offering a comprehensive overview of her projects, research, and publications.",
    category: "user",
  },
  {
    name: "Heart Disease Prediction system",
    image: Disease,
    alt: "Project 05",
    link: "https://disease-prediction-system-hazel.vercel.app/welcome",
    description:
      "Developed a Heart Disease Prediction system with Python and Pandas for backend processing and React and Tailwind for a sleek frontend, using advanced data analysis to predict heart disease risk with an intuitive user interface.",
    category: "user",
  },
  {
    name: "Medicare",
    image: Medicare,
    alt: "Project 06",
    link: "https://doctor-appointment-ten.vercel.app/",
    description:
      "A Doctor Appointment website with a sleek, intuitive interface for booking medical appointments, allowing patients to browse doctors, view schedules, and book appointments with a focus on accessibility and convenience.",
    category: "frontend",
  },
  {
    name: "VetJobs",
    image: Vetjobs,
    alt: "Project 06",
    link: "https://vetjobs.vercel.app",
    description:
      "VetJobs Design, a pet care website that connects pet owners with care providers through a user-friendly interface, emphasizing ease of use and accessibility for a seamless experience.",
    category: "frontend",
  },
  {
    name: "Tu Sonrisa Ideal",
    image: TSI,
    alt: "Project 06",
    link: "https://tusonrisaideal.vercel.app",
    description:
      "Tu Sonrisa Ideal is a static, frontend-only dental website built with Next.js and Tailwind CSS, featuring Home, Clinic, Dental Services, and About Us pages for a clean, professional presentation of the clinic's information and services.",
    category: "frontend",
  },
  {
    name: "Cannamiami",
    image: Canna,
    alt: "Project 06",
    link: "https://www.cannamiami.net",
    description:
      "A static, frontend-only landing page for Cannamiami, featuring a clean and modern layout, built with Next.js and Tailwind CSS.",
    category: "frontend",
  },
  {
    name: "RentUp",
    image: RentUp,
    alt: "project 01",
    link: "https://rent-up-phi.vercel.app/",
    description:
      "RentUp is a Frontend Rent Service web. built with React JS and Tailwind CSS.",
    category: "frontend",
  },
  {
    name: "Dot",
    image: Dot,
    alt: "project 03",
    link: "https://dot-alpha.vercel.app/",
    description:
      "Dot is a Frontend Hotel Service web. built with React JS and SASS.",
    category: "frontend",
  },
  {
    name: "Food",
    image: Food,
    alt: "project 02",
    link: "https://food-pearl.vercel.app/",
    description:
      "Food is another Frontend Food Service web. built with HTML, CSS & JS.",
    category: "frontend",
  },
  {
    name: "Retail Me Not",
    image: RetailMeNot,
    alt: "Retail Me Not",
    link: "https://retail-me-not.vercel.app/",
    description:
      "RetailMeNot is a Frontend Coupon web. built with React JS and CSS.",
    category: "frontend",
  },
  {
    name: "Cafena",
    image: Cafena,
    alt: "Cafena",
    link: "https://cafena-khaki.vercel.app/",
    description:
      "Cafena is a Frontend Coffee Shop web. built with HTML, CSS & JS.",
    category: "frontend",
  },
  {
    name: "Plantino",
    image: Plantino,
    alt: "Plantino",
    link: "https://plantino.vercel.app/",
    description: "Plantino is a Plant Store web. built with HTML, CSS & JS.",
    category: "frontend",
  },
  {
    name: "Dream Talk",
    image: DreamTalk,
    alt: "Dream Talk",
    link: "https://dream-talk.vercel.app/",
    description: "DreamTalk is a Basic Landing Page built with React JS & CSS.",
    category: "frontend",
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
          I have built many projects. Few of them are listed below.{" "}
        </p>
      </div>

      <div className="btngroup">
        <button
          className={activeTab === "All" ? "btnactive" : "btn"}
          onClick={() => handleTabClick("live")}
        >
          All
        </button>
        <button
          className={activeTab === "multi" ? "btnactive" : "btn"}
          onClick={() => handleTabClick("multi")}
        >
          (Multi-Panels) Websites
        </button>
        <button
          className={activeTab === "user" ? "btnactive" : "btn"}
          onClick={() => handleTabClick("user")}
        >
          User Panel Website
        </button>
        <button
          className={activeTab === "frontend" ? "btnactive" : "btn"}
          onClick={() => handleTabClick("frontend")}
        >
          Frontend Designs
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
