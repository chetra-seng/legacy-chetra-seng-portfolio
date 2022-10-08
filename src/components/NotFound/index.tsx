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
    <div className="container notfound-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetter
            letterClass={letterClass}
            strArray={"404 Not Found".split("")}
            idx={16}
          />
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
