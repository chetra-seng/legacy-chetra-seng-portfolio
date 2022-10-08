import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetter from "../AnimatedLetter";
import "./index.scss";
import ReactIcon from "../../assets/images/react.png";
import SpringIcon from "../../assets/images/spring.png";
import NextIcon from "../../assets/images/nextjs.png";
import FlaskIcon from "../../assets/images/flask.png";
import SolidityIcon from "../../assets/images/solidity.png";
import GitIcon from "../../assets/images/git.png";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetter
              letterClass={letterClass}
              strArray={"About Me".split("")}
              idx={15}
            />
          </h1>
          <p>
            Currently a full-stack developer at Techo Startup Center, and a
            fourth year university student at Royal University of Phnom Penh. A
            seeker who strives for opportunities to work and participate in
            innovative projects using the latest technologies available.
          </p>
          <p>
            Experienced working with different languages such as Python, Java,
            Javascript, Typescript and Solidity. Have used front-end and backend
            framework such as Spring, Flask, React and NextJs. Able to work with
            Docker, setup CI/CD pipeline with Jenkins, despite not being an
            expert.
          </p>
          <p>
            Dream of becoming a software engineer by building up skills,
            following the best practice and design patterns. Interested in new
            concepts and technologies as well as actively looking for
            opportunities to colaborate in opensource projects.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img src={SpringIcon} alt="Spring Logo" />
            </div>
            <div className="face2">
              <img src={ReactIcon} alt="Flask Logo" />
            </div>
            <div className="face3">
              <img src={SolidityIcon} alt="Solidity Logo" />
            </div>
            <div className="face4">
              <img src={NextIcon} alt={"NextJS Logo"} />
            </div>
            <div className="face5">
              <img src={FlaskIcon} alt={"React Logo"} />
            </div>
            <div className="face6">
              <img src={GitIcon} alt="Git Logo" />
            </div>
          </div>
        </div>
      </div>
      <Loader type={"ball-scale-multiple"} active />
    </>
  );
};

export default About;
