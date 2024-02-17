import "./Certification.css";
import { FaReact } from "react-icons/fa";
import { BiLogoFirebase } from "react-icons/bi";
import { BsMenuButtonWideFill } from "react-icons/bs";
import HTMLCSS from "../../assets/HTML and CSS in depth.jpg";
import JS from "../../assets/Programming with JS.jpg";
import ReactBasics from "../../assets/React Basics.jpg";
import UIUX from "../../assets/Principles of UI UX.jpg";
import VersionControl from "../../assets/Version Control.jpg";
import Image from "next/image";
import Link from "next/link";

const Technology = () => {
  return (
    <div className="technology section" id="certifications">
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className="titleAfter"
      ></div>
      <h1 data-aos="fade-right" data-aos-duration="2000" className="title">
        Certifications
      </h1>
      <p
        data-aos="fade-right"
        data-aos-duration="2500"
        className="titleDetails"
      >
        Completed my short courses from Coursera
      </p>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="technologyContainer"
      >
        <Link
          href="https://coursera.org/verify/TT6AC4RZPUP9"
          target="_blank"
          className="techBox"
          style={{ height: "auto", width: "full", overflow: "hidden" }}
        >
          <Image
            src={ReactBasics}
            alt="Slider Image"
            style={{ height: "auto", width: "100%", objectFit: "cover" }}
          />
          <h4>React Advance</h4>
          <p>Coursera - META</p>
        </Link>

        <Link
          href="https://coursera.org/verify/TT6AC4RZPUP9"
          target="_blank"
          className="techBox"
          style={{ height: "auto", width: "full", overflow: "hidden" }}
        >
          <Image
            src={ReactBasics}
            alt="Slider Image"
            style={{ height: "auto", width: "100%", objectFit: "cover" }}
          />

          <h4>React Basics</h4>
          <p>Coursera - META</p>
        </Link>

        <Link
          href="https://coursera.org/verify/GW2YKTDUDWUN"
          target="_blank"
          className="techBox"
          style={{ height: "auto", width: "full", overflow: "hidden" }}
        >
          <Image
            src={JS}
            alt="Slider Image"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />

          <h4>Programming of JS</h4>
          <p>Coursera - META</p>
        </Link>

        <Link
          href="https://coursera.org/verify/TG7WYWE98J64"
          target="_blank"
          className="techBox"
          style={{ height: "auto", width: "full", overflow: "hidden" }}
        >
          <Image
            src={HTMLCSS}
            alt="Slider Image"
            style={{ height: "auto", width: "100%", objectFit: "cover" }}
          />

          <h4>HTML & CSS in depth</h4>
          <p>Coursera - META</p>
        </Link>

        <Link
          href="https://coursera.org/verify/NL5KTLGYL7G4"
          target="_blank"
          className="techBox"
          style={{ height: "auto", width: "full", overflow: "hidden" }}
        >
          <Image
            src={VersionControl}
            alt="Slider Image"
            style={{ height: "auto", width: "100%", objectFit: "cover" }}
          />

          <h4>Version Control</h4>
          <p>Coursera - META</p>
        </Link>

        <Link
          href="https://coursera.org/verify/D4JCNBCY82PZ"
          target="_blank"
          className="techBox"
          style={{ height: "auto", width: "full", overflow: "hidden" }}
        >
          <Image
            src={UIUX}
            alt="Slider Image"
            style={{ height: "auto", width: "100%", objectFit: "cover" }}
          />

          <h4>Principles of UI/US</h4>
          <p>Coursera - META</p>
        </Link>
      </div>
    </div>
  );
};

export default Technology;
