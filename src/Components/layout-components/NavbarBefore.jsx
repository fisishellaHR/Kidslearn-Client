import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../../navbar.css";

const NavbarBefore = () => {
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
          <Link to="/">
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
              to="/aboutus"
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
              to="/ourgoals"
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
              to="/login"
              className="hover:text-primary font-bowlby bg-white hover:bg-black px-4 py-2 rounded-full text-black transition duration-300"
            >
              Login
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
              to="/aboutus"
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
              to="/ourgoals"
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
              to="/login"
              className="block text-primary bg-black py-2 px-4 rounded-full transition duration-300 mt-2"
            >
              Login
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarBefore;
