import React, { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoS from "../../assets/images/logo-s.png";
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
    <div className="nav-bar">
      <Link className="logo" to="/" style={{textDecoration: "none", textAlign: 'center'}}>
        <img className="logo" src={LogoS} alt="Logo" />
        {/* <img className="sub-logo" src={LogoSubtitle} alt="sub-logo" /> */}
        <p className="sub-logo">Chetra</p>
      </Link>
      <nav>
        <NavLink end to={"/"} className={"active"}>
          <FontAwesomeIcon icon={faHome} color={"#4d4d4e"} />
        </NavLink>
        <NavLink
          end
          to={"/about"}
          className={({ isActive }) => {
            const classnames = ["about-link"];
            if (isActive) {
              classnames.push("active");
            }
            return classnames.join(" ");
          }}
        >
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
      <ul>
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
