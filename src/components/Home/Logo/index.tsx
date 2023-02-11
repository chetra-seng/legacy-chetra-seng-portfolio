import Showcase from "../../../assets/images/showcase.png";
import Blob from "../../../assets/images/blob.svg";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <div className="md:w-[50%] flex justify-center">
      <motion.div
        className="z-0 w-40 h-40 md:w-80 md:h-80 flex flex-col animate-fadeIn"
        style={{ backgroundImage: `url(${Blob})` }}
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.img
          src={Showcase}
          alt="Profile"
          className="w-[55%] mx-auto self-center my-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3 }}
        />
      </motion.div>
    </div>
  );
};

export default Logo;
