/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ButtonQuiz({ children, to }) {
  return (
    <div className="mt-5 mb-11">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className=" text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        <Link
          to={to}
          className="bg-black px-3 py-3 rounded-2xl text-white font-poppins text-lg hover:bg-white hover:text-black transition duration-300"
        >
          {children}
        </Link>
      </motion.button>
    </div>
  );
}
