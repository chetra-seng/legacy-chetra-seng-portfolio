import Showcase from "../../../assets/images/showcase.png";
import "./index.scss";
import Blob from "../../../assets/images/blob.svg";

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={Blob} alt="Coding" className="blob-container" />
      <img src={Showcase} alt="Chetra seng" className="solid-logo" />
    </div>
  );
};

export default Logo;
