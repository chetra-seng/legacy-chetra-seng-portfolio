import Showcase from "../../../assets/images/showcase.png";
import "./index.scss";
import Blob from "../../../assets/images/blob.svg";

const Logo = () => {
  return (
    <div className="w-[50%] flex justify-center">
      <div
        className="z-0 w-80 h-80 flex flex-col animate-fadeIn"
        style={{ backgroundImage: `url(${Blob})` }}
      >
        <img
          src={Showcase}
          alt="Profile"
          className="w-[55%] mx-auto self-center my-auto"
        />
      </div>
    </div>
  );
};

export default Logo;
