import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import "../../navbar.css";

const NavbarAfter = () => {
  axios.defaults.withCredentials = true;

  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
      fetchUserId(storedUsername);
    }
  }, []);

  const fetchUserId = async (username) => {
    try {
      const response = await axios.get(
        `httpp::/127.0.0.1:3000/api/auth/getUserByUsername?username=${username}`
      );
      console.log(response.data);
    } catch (error) {
      console.error("Failed to fetch user ID:", error);
    }
  };

  const headerRef = useRef(null);
  const hamburgerRef = useRef(null);
  const navMenuRef = useRef(null);

  const linkVariants = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      if (header) {
        const fixedNav = header.offsetTop;
        if (window.pageYOffset > fixedNav) {
          header.classList.add("navbar-fixed");
        } else {
          header.classList.remove("navbar-fixed");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleHamburgerClick = () => {
      if (hamburgerRef.current && navMenuRef.current) {
        hamburgerRef.current.classList.toggle("hamburger-active");
        navMenuRef.current.classList.toggle("hidden");
      }
    };

    const hamburger = hamburgerRef.current;
    hamburger.addEventListener("click", handleHamburgerClick);

    return () => {
      hamburger.removeEventListener("click", handleHamburgerClick);
    };
  }, []);

  return (
    <nav
      ref={headerRef}
      className="px-4 sm:px-6 md:px-8 w-full bg-primary flex justify-between items-center h-[80px] sticky top-0 z-50"
    >
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
      <div className="flex items-center">
        <button
          ref={hamburgerRef}
          id="hamburger"
          name="hamburger"
          type="button"
          className="block lg:hidden"
        >
          <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
          <span className="hamburger-line transition duration-300 ease-in-out"></span>
          <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
        </button>
        <div
          ref={navMenuRef}
          className="hidden lg:flex gap-x-4 justify-center items-center"
        >
          <motion.div
            whileHover="whileHover"
            whileTap="whileTap"
            variants={linkVariants}
          >
            <Link
              to="/aboutusafter"
              className="text-white font-poppins transition duration-300 hover:text-black"
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
              to={`/userpersonal/${username}`}
              className="flex items-center bg-white hover:bg-black hover:text-white text-primary font-poppins py-2 px-3 rounded-md transition duration-300"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                fontWeight: "bold",
                letterSpacing: "1px",
                lineHeight: "1.2",
                fontFamily: "Poppins, sans-serif",
                textAlign: "center",
              }}
            >
              <span className="text-xl font-poppins">{username}</span>
            </Link>
          </motion.div>
        </div>
        <div
          ref={navMenuRef}
          className="hidden absolute top-full right-4 py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full lg:hidden"
        >
          <motion.div
            whileHover="whileHover"
            whileTap="whileTap"
            variants={linkVariants}
          >
            <Link
              to="/aboutusafter"
              className="block text-black font-poppins transition duration-300 px-4 py-2"
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
              className="block text-black font-poppins transition duration-300 px-4 py-2"
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
              className="block text-black font-poppins transition duration-300 px-4 py-2"
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
              className="block text-black font-poppins transition duration-300 px-4 py-2"
            >
              Materi
            </Link>
          </motion.div>
          <motion.div
            whileHover="whileHover"
            whileTap="whileTap"
            variants={linkVariants}
          >
            <Link
              to={`/userpersonal/${username}`}
              className="block text-primary bg-black py-2 px-4 rounded-full transition duration-300 mt-2"
            >
              {username}
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAfter;
