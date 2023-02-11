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
import { motion, MotionProps } from "framer-motion";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const pageDelay: MotionProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, delay: 1 },
  };

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <div className="w-screen flex justify-center">
      <div className="h-screen flex flex-col justify-center">
        <motion.div
          className="max-lg:flex-col max-w-5xl self-center home-page flex flex-row justify-between items-center"
          {...pageDelay}
        >
          <div className="w-[50%] flex flex-col gap-10">
            <h1 className="text-blue-400 text-5xl m-0 font-coolvetica font-medium before:content-['<h1>'] before:font-la-belle-aurore before:text-blue-400 before:absolute before:-mt-[2.5rem] before:left-1 before:opacity-60 before:text-lg after:content-['</h1>'] after:font-la-belle-aurore after:text-blue-400 after:text-lg after:absolute after:mt-6 after:ml-6 after:opacity-60 animate-fadeInBackWards">
              <AnimatedLetter
                letterClass={letterClass}
                strArray={"About Me".split("")}
                idx={15}
              />
            </h1>
            <div className="text-sm text-blue-100 font-sans-serif font-light flex flex-col gap-3">
              <motion.p
                initial={{ opacity: 0, y: 200, scaleY: 0.5 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                Currently a full-stack developer at Techo Startup Center, and a
                fourth year university student at Royal University of Phnom
                Penh. A seeker who strives for opportunities to work and
                participate in innovative projects using the latest technologies
                available.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 200, scaleY: 0.5 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                Experienced working with different languages such as Python,
                Java, Javascript, Typescript and Solidity. Have used front-end
                and backend framework such as Spring, Flask, React and NextJs.
                Able to work with Docker, setup CI/CD pipeline with Jenkins,
                despite not being an expert.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 200, scaleY: 0.5 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                transition={{ duration: 1, delay: 1.8 }}
              >
                Dream of becoming a software engineer by building up skills,
                following the best practice and design patterns. Interested in
                new concepts and technologies as well as actively looking for
                opportunities to colaborate in opensource projects.
              </motion.p>
            </div>
          </div>
          <motion.div
            className="w-[50%] h-96 flex flex-col justify-center mb-36"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
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
          </motion.div>
        </motion.div>
      </div>
      <Loader type={"ball-scale-multiple"} active />
    </div>
  );
};

export default About;
