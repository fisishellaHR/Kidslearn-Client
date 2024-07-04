import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavbarBefore = () => {
  const linkVariants = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };
  return (
    <nav className="px-4 sm:px-6 md:px-8 w-full bg-primary flex justify-between items-center h-[80px] sticky top-0 z-50">
      <div>
        <motion.div
          whileHover="whileHover"
          whileTap="whileTap"
          variants={linkVariants}
        >
          <Link to="/homepagebefore">
            <h1 className="font-bowlby text-2xl sm:text-3xl md:text-4xl text-white hover:text-black">
              KidsLearn
            </h1>
          </Link>
        </motion.div>
      </div>
      <div className="hidden md:flex gap-x-4 justify-center items-center">
        <motion.div
          whileHover="whileHover"
          whileTap="whileTap"
          variants={linkVariants}
        >
          <Link
            to="/aboutus"
            className="text-white hover:text-black font-poppins transition duration-300"
          >
            Tentang Kami
          </Link>
        </motion.div>
        <motion.div
          whileHover="whileHover"
          whileTap="whileTap"
          variants={linkVariants}
        >
          <Link
            to="/ourgoals"
            className="text-white hover:text-black font-poppins transition duration-300"
          >
            Tujuan
          </Link>
        </motion.div>
        <motion.div
          whileHover="whileHover"
          whileTap="whileTap"
          variants={linkVariants}
        >
          <Link
            to="/login"
            className=" hover:text-primary font-bowlby bg-white hover:bg-black px-4 py-2 rounded-full text-black transition duration-300"
          >
            Login
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};

export default NavbarBefore;
