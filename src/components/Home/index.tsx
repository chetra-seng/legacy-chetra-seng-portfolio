import React, { useEffect, useState } from "react";
import "./index.scss";
import C from "../../assets/images/C.png";
import { Link } from "react-router-dom";
import AnimatedLetter from "../AnimatedLetter";
import Logo from "./Logo";
import Loader from "react-loaders";

const Home = () => {
  const name = "hetra Seng,";
  const job = "developer";
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _11`}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'</span>
            <span className={`${letterClass} _15`}>m</span>
            <img src={C} alt={"Logo"} />
            <AnimatedLetter
              letterClass={letterClass}
              strArray={name.split("")}
              idx={16}
            />
            <br />
            <AnimatedLetter
              letterClass={letterClass}
              strArray={job.split("")}
              idx={16 + name.length}
            />
          </h1>
          <h2>Full-stack Developer / Smart Contract Developer / University Student</h2>
          <Link
            className="flat-button"
            to={"https://www.linkedin.com/in/chetra-s-5b4048ab/"}
          >
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type={"ball-scale-multiple"} active />
    </>
  );
};

export default Home;
