import Footer from "../../../Components/layout-components/Footer";
import NavbarAfter from "../../../Components/layout-components/NavbarAfter";
import HeroSection from "../HomePage/HeroSection";
import { motion } from "framer-motion";
import MainContentAfter from "./MainContentAfter";
import SharingSectionAfter from "./SharingSection";

export default function HomePageAfter() {
  return (
    <div>
      <NavbarAfter />
      <motion.div
        initial={{ opacity: 0, x: -50 }} // Start 50px to the left and with 0 opacity
        whileInView={{ opacity: 1, x: 0 }} // Move to the original position and full opacity
        transition={{ duration: 0.9 }}
        viewport={{ once: true }} // Ensure the animation happens only once
      >
        <HeroSection />
      </motion.div>
      <MainContentAfter />
      <SharingSectionAfter />
      <Footer />
    </div>
  );
}
