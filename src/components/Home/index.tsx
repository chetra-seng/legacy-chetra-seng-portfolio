import React, { useEffect, useState } from "react";
import "./index.scss";
import LogoTitle from "../../assets/images/logo-s.png";
import { Link } from "react-router-dom";
import AnimatedLetter from "../AnimatedLetter";

const Home = () => {
  const name = "eng Chetra";
  const job = "web developer";
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className="letterClass">H</span>
          <span className={`${letterClass} _12`}>i</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt={"Logo"} />
          <AnimatedLetter
            letterClass={letterClass}
            strArray={name.split("")}
            idx={15}
          />
          <br />
          <AnimatedLetter
            letterClass={letterClass}
            strArray={job.split("")}
            idx={15 + name.length}
          />
        </h1>
        <h2>Full-stack Developer / University Student / Nobody</h2>
        <Link
          className="flat-button"
          to={"https://www.linkedin.com/in/chetra-s-5b4048ab/"}
        >
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
