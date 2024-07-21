import { motion } from "framer-motion";
import axios from "axios";
import NavbarAfter from "../../../Components/layout-components/NavbarAfter";
import HeroSection from "../LandingPage/HeroSection";
import Footer from "../../../Components/layout-components/Footer";
import SharingSectionAfter from "./SharingSectionAfter";
import MainContentAfter from "./MainContentAfter";
export default function HomePageAfter() {
  axios.defaults.withCredentials = true;
  return (
    <div>
      <NavbarAfter />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <HeroSection />
      </motion.div>
      <MainContentAfter />
      <SharingSectionAfter />
      <Footer />
    </div>
  );
}
