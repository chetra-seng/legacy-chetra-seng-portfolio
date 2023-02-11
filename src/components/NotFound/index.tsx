import { useEffect, useState } from "react";
import AnimatedLetter from "../AnimatedLetter";

const NotFound = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <div className="h-full w-full flex justify-center self-center">
      <div className="h-full md:h-screen flex flex-col justify-center">
        <div className="flex flex-col-reverse md:flex-row max-w-7xl self-center justify-between items-center gap-10 md:gap-20">
          <h1 className="text-white text-3xl md:text-5xl m-0 font-coolvetica font-medium before:content-['<h1>'] before:font-la-belle-aurore before:text-blue-400 before:absolute before:-mt-[2.5rem] before:opacity-60 before:text-lg after:content-['</h1>'] after:font-la-belle-aurore after:text-blue-400 after:text-lg after:absolute after:mt-6 after:ml-6 after:opacity-60 animate-fadeInBackWards">
            <AnimatedLetter
              letterClass={letterClass}
              strArray={"404 Not Found".split("")}
              idx={16}
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
