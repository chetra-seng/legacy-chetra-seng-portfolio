import React, { useEffect, useState } from "react";
import C from "../../assets/images/C.png";
import { Link } from "react-router-dom";
import AnimatedLetter from "../AnimatedLetter";
import Logo from "./Logo";
import Loader from "react-loaders";
import { motion, MotionProps } from "framer-motion";

const Home: React.FC = () => {
  const name = "hetra Seng,";
  const job = "developer";
  const [letterClass, setLetterClass] = useState("text-animate");

  const pageDelay: MotionProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, delay: 1 },
  };

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <div className="w-screen flex justify-center">
      <div className="h-screen flex flex-col justify-center">
        <motion.div
          className="max-lg:flex-col max-w-7xl self-center home-page flex flex-row justify-between items-center gap-20"
          {...pageDelay}
        >
          <div className="w-[50%] self-center flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <h1 className="text-blue-100 text-5xl m-0 font-coolvetica font-medium before:content-['<h1>'] before:font-la-belle-aurore before:text-blue-400 before:absolute before:-mt-[2.5rem] before:left-1 before:opacity-60 before:text-lg after:content-['</h1>'] after:font-la-belle-aurore after:text-blue-400 after:text-lg after:absolute after:mt-6 after:ml-6 after:opacity-60">
                <span className={`${letterClass} _11`}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'</span>
                <span className={`${letterClass} _15`}>m</span>
                <motion.img
                  initial={{ rotate: 180, opacity: 0.2 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 1.2 }}
                  className="inline-block ml-4 mr-1 mb-3"
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
              <motion.h2
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 2 }}
                className="text-gray-200 font-normal font-sans-serif text-xs tracking-widest"
              >
                Full-stack Developer / Smart Contract Developer / University
                Student
              </motion.h2>
            </div>
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 2.3 }}
            >
              <Link
                className="text-[#47B5FF] text-base font-normal space-x-1 py-3 px-5 no-underline border-[1px] border-solid border-[#47B5FF] hover:bg-[#47B5FF] hover:text-[#333] w-44 text-center"
                // className="flat-button"
                to={"/contact"}
              >
                CONTACT ME
              </Link>
            </motion.div>
          </div>
          <Logo />
        </motion.div>
      </div>
      <Loader type={"ball-scale-multiple"} active />
    </div>
  );
};

export default Home;
