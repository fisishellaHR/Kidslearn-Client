import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavbarAfter = () => {
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
          <Link to="/homepageafter">
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
            to="/aboutusafter"
            className="text-white font-poppins transition duration-300 hover:text-black"
            style={{ display: "inline-block" }}
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
            to="/ourgoalsafter"
            className="text-white font-poppins transition duration-300 hover:text-black"
            style={{ display: "inline-block" }}
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
            to="/quizafter"
            className="text-white font-poppins transition duration-300 hover:text-black"
            style={{ display: "inline-block" }}
          >
            Quiz
          </Link>
        </motion.div>
        <motion.div
          whileHover="whileHover"
          whileTap="whileTap"
          variants={linkVariants}
        >
          <Link
            to="/materi"
            className="text-white font-poppins transition duration-300 hover:text-black"
            style={{ display: "inline-block" }}
          >
            Materi
          </Link>
        </motion.div>
        <h1 className="font-bowlby text-white text-xl">Hallo !!!!</h1>
        <motion.div
          whileHover="whileHover"
          whileTap="whileTap"
          variants={linkVariants}
        >
          <Link
            to={"/userpersonal"}
            className="flex items-center bg-white hover:bg-black hover:text-white text-primary font-poppins py-2 px-3 rounded-md transition duration-300"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
              fontWeight: "bold",
              letterSpacing: "1px",
              lineHeight: "1.2",
              fontFamily: "Poppins, sans-serif",
              textAlign: "center",
              display: "inline-block",
            }}
          >
            <span className="text-xl font-poppins">Hegi</span>
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};

export default NavbarAfter;
