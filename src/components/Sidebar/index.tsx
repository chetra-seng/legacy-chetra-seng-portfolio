import React, { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import C from "../../assets/images/C.png";
// import LogoSubtitle from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Sidebar: FC = () => {
  return (
    <div className="h-10 md:min-w-screen md:min-h-screen md:w-16 flex flex-row justify-center md:flex-col md:justify-between md:bg-[#181818] items-center z-10">
      <Link
        className="hidden md:flex md:flex-col justify-center items-center self-center mt-4"
        to="/"
        style={{ textDecoration: "none", textAlign: "center" }}
      >
        <img className="w-6 my-2 h-auto" src={C} alt="Logo" />
        {/* <img className="sub-logo" src={LogoSubtitle} alt="sub-logo" /> */}
        <p className="text-white text-[0.75rem] tracking-widest font-medium">
          Chetra
        </p>
      </Link>
      <nav className="flex flex-row md:flex-col gap-12 md:gap-6 text-2xl justify-center items-start bg-[#181818] py-4 px-8 mb-6 md:mb-0 md:p-0 md:bg-transparent md:items-center self-center rounded-full md:rounded-none">
        <NavLink
          end
          to={"/"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FontAwesomeIcon icon={faHome} color={"#4d4d4e"} />
        </NavLink>
        <NavLink end to={"/about"}>
          <FontAwesomeIcon icon={faUser} color={"#4d4d4e"} />
        </NavLink>
        <NavLink
          end
          to={"/contact"}
          className={({ isActive }) => {
            const classnames = ["contact-link"];
            if (isActive) {
              classnames.push("active");
            }
            return classnames.join(" ");
          }}
        >
          <FontAwesomeIcon icon={faEnvelope} color={"#4d4d4e"} />
        </NavLink>
      </nav>
      <ul className="hidden md:flex md:flex-col text-base mb-6 gap-2">
        <li>
          <a
            target={"_blank"}
            rel={"noreferrer"}
            href="https://github.com/chetra-seng"
          >
            <FontAwesomeIcon icon={faGithub} color={"#4d4d4e"} />
          </a>
        </li>
        <li>
          <a
            target={"_blank"}
            rel={"noreferrer"}
            href="https://www.linkedin.com/in/chetra-s-5b4048ab"
          >
            <FontAwesomeIcon icon={faLinkedin} color={"#4d4d4e"} />
          </a>
        </li>
        <li>
          <a
            target={"_blank"}
            rel={"noreferrer"}
            href="https://web.facebook.com/chetraseng11"
          >
            <FontAwesomeIcon icon={faFacebook} color={"#4d4d4e"} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
