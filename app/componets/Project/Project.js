import "./Project.css";
// import Images
import Project1 from "../../assets/project1.webp";
import Project2 from "../../assets/project2.webp";
import Project3 from "../../assets/project3.webp";
import Project4 from "../../assets/Food-Villa.png";
import Project5 from "../../assets/Trips-Travel.png";
import Project6 from "../../assets/Doctor Appointment.png";
import Image from "next/image";
import Link from "next/link";
import { HiEye } from "react-icons/hi";

const Project = () => {
  return (
    <div className="projectContainer section " id="project">
      <div data-aos="fade-right" data-aos-duration="2000">
        <div className="titleAfter"></div>
        <h1 className="title">Projects</h1>
        <p className="titleDetails">
          I build many projects for practice. Few of them are listed below.{" "}
        </p>
      </div>

      <div data-aos="fade-up" data-aos-duration="2000" className="project-box">
        <section className="project">
          <div className="image">
            <Image src={Project4} alt="Project 04" />
          </div>
          <div className="pdetails">
            <span>
              Indulge in culinary delights with Food Villa, a MERN-based
              restaurant web platform. Users can order with ease, while admins
              efficiently manage orders, users, and menu items. Experience
              seamless online food ordering restaurant.
            </span>
            <h2>Food Villa</h2>
            <Link
              href="https://food-villa-five.vercel.app/"
              className="flex "
              target="_blank"
            >
              <HiEye />
            </Link>
          </div>
        </section>

        <section className="project">
          <div className="image">
            <Image src={Project6} alt="Project 06" />
          </div>
          <div className="pdetails">
            <span>
              Built on the MERN stack, our platform enables users to book
              appointments and leave reviews for doctors, while doctors
              efficiently manage their schedules. Elevate healthcare
              interactions effortlessly.
            </span>
            <h2>Medicare</h2>
            <Link
              href="https://doctor-appointment-ten.vercel.app/"
              className="flex"
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
            <span>
              A MERN-based travel booking platform. Users can easily book trips
              and share reviews, while admins efficiently manage tour bookings.
              Discover seamless travel experiences and efficient tour
              management, all with the power of the MERN stack.
            </span>
            <h2>Trips Travel</h2>
            <Link
              href="https://trips-travel.vercel.app/home"
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
            <span>
              Discover your next adventure with our Travel & Stay website,
              crafted entirely with React and SASS for a seamless frontend
              experience. Explore exciting destinations, book accommodations,
              and plan your perfect getaway—all with intuitive design and smooth
              navigation, powered by React and SASS.
            </span>
            <h2>RentUp</h2>
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
            <span>
              Welcome to Hotal Rent-Up, your destination for hassle-free hotel
              rentals. Our website boasts a sleek and responsive frontend
              developed solely with React and CSS. Browse, book, and manage your
              hotel stays effortlessly, all thanks to our intuitive interface
              and modern design, built with React and pure CSS.
            </span>
            <h2>Dot</h2>
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
            <span>
              {" "}
              Experience the convenience of online food ordering with our HTML,
              CSS, and JavaScript. From browsing menus to placing orders
              seamlessly, our website makes satisfying your cravings a breeze.
              Explore our user-friendly interface and streamline your dining
              experience with just a few clicks.
            </span>
            <h2>Food</h2>
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
