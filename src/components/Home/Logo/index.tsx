import gsap from "gsap-trial";
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import { useEffect, useRef } from "react";
import Showcase from "../../../assets/images/showcase.png";
import "./index.scss";
import Blob from "../../../assets/images/blob.svg";

const Logo = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const solidRef = useRef<HTMLImageElement>(null);
  const blobRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(blobRef.current, {
        opacity: 0,
        duration: 4
      });
    gsap.fromTo(
      solidRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        delay: 2,
        duration: 1,
      }
    );
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img src={Blob} alt="Coding" className="blob-container" ref={blobRef}/>
      <img src={Showcase} alt="Chetra seng" className="solid-logo" ref={solidRef} />
    </div>
  );
};

export default Logo;
