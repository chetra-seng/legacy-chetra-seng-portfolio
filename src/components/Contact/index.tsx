import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetter from "../AnimatedLetter";
import "./index.scss";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import { motion, MotionProps } from "framer-motion";

const Contact = () => {
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
      <motion.div
        className="h-screen flex flex-col justify-center"
        {...pageDelay}
      >
        <div className="max-lg:flex-col max-w-5 self-center about-page flex flex-row justify-between items-center">
          <div className="w-[50%] flex flex-col gap-10">
            <h1 className="text-blue-400 text-5xl m-0 font-coolvetica font-medium before:content-['<h1>'] before:font-la-belle-aurore before:text-blue-400 before:absolute before:-mt-[2.5rem] before:left-1 before:opacity-60 before:text-lg after:content-['</h1>'] after:font-la-belle-aurore after:text-blue-400 after:text-lg after:absolute after:mt-6 after:ml-6 after:opacity-60 animate-fadeInBackWards">
              <AnimatedLetter
                letterClass={letterClass}
                strArray={"Contact Me".split("")}
                idx={15}
              />
            </h1>
            <motion.div
              className="text-sm text-blue-100 font-sans-serif font-light flex flex-col gap-3"
              initial={{ opacity: 0, scaleX: 0.5 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <p>
                Leave a message if you're interested in helping me achieve my
                dream. If you leave near by, come and have a cup of coffee
                together ☕️ Talking in person is much more preferable 😉
              </p>
              <p>
                In case you still prefer to contact me via phone or social
                media, I'll leave my contacts here
                <ul className="list-inside font-semibold p-5 flex flex-col gap-3 items-start">
                  <motion.li
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                  >
                    <motion.a
                      href="https://github.com/chetra-seng"
                      className="flex flex-row items-center gap-2 hover:text-blue-400"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FiGithub size={18} />
                      GitHub: Chetra Seng
                    </motion.a>
                  </motion.li>
                  <motion.li
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 2.5 }}
                  >
                    <motion.a
                      href="https://www.linkedin.com/in/chetra-s-5b4048ab/"
                      className="flex flex-row items-center gap-2 hover:text-blue-400"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FiLinkedin size={18} />
                      LinkedIn: Chetra Seng
                    </motion.a>
                  </motion.li>
                  <motion.li
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 3 }}
                  >
                    <motion.a
                      href="https://web.facebook.com/chetraseng11"
                      className="flex flex-row items-center gap-2 hover:text-blue-400"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FiFacebook size={18} />
                      Facebook: Chetra Seng
                    </motion.a>
                  </motion.li>
                </ul>
              </p>
            </motion.div>
          </div>
          <div className="bg-[#256D85] w-[45%] h-[20rem]">
            <MapContainer center={[11.555287, 104.915993]} zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[11.555287, 104.915993]}>
                <Popup>
                  I live here, come over for a cup of coffee near by.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </motion.div>
      <Loader type={"ball-scale-multiple"} active />
    </div>
  );
};

export default Contact;
