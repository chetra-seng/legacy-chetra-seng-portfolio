import { faCss3, faGit, faHtml5, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetter from "../AnimatedLetter";
import "./index.scss";

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
          reprehenderit. Nulla modi alias ullam dolorum molestias totam pariatur
          repudiandae quidem et ab odit consequuntur, incidunt debitis similique
          est perspiciatis commodi.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
          incidunt provident nulla reprehenderit sint. Beatae temporibus tempora
          doloremque qui molestias sunt sed, eligendi distinctio voluptates
          voluptatem culpa recusandae iure. Quam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          dignissimos iste quae commodi molestias illum aliquid, praesentium
          odio ex ad perspiciatis iusto unde. Veritatis quos eius, numquam
          aliquid doloremque non.
        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faGit} color="#f34f29" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#e34c26" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#264de4" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJs} color="#F0DB4F" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faReact} color= "#61DBFB"/>
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faNodeJs} color="#3C873A" />
          </div>
        </div>
      </div>
    </div>
    <Loader type={'ball-scale-multiple'} active/>
    </>
  );
};

export default About;
