import React, { useEffect, useState } from "react";
import "./index.scss";
import C from "../../assets/images/C.png";
import { Link } from "react-router-dom";
import AnimatedLetter from "../AnimatedLetter";
import Logo from "./Logo";
import Loader from "react-loaders";

const Home: React.FC = () => {
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
      <div className="max-lg:flex-col container home-page flex flex-row justify-around items-center w-screen">
        <div className="w-[50%] self-center">
          <h1 className="text-blue-100 text-5xl m-0 font-coolvetica font-medium before:content-['<h1>'] before:font-la-belle-aurore before:text-blue-400 before:absolute before:-mt-[2.5rem] before:left-1 before:opacity-60 before:text-lg after:content-['</h1>'] after:font-la-belle-aurore after:text-blue-400 after:text-lg after:absolute after:mt-6 after:ml-6 after:opacity-60 animate-fadeInBackWards">
            <span className={`${letterClass} _11`}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'</span>
            <span className={`${letterClass} _15`}>m</span>
            <img
              className="inline-block ml-4 mr-1 mb-3 animate-rotateIn animation-delay-1400"
              src={C}
              alt={"Logo"}
            />
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
          <h2 className="text-gray-200 mt-4 font-normal font-sans-serif text-xs tracking-widest animate-fadeInBackWards">
            Full-stack Developer / Smart Contract Developer / University Student
          </h2>
          <Link className="flat-button" to={"/contact"}>
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
