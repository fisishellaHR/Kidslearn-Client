import Footer from "../../../Components/layout-components/Footer";
import NavbarBefore from "../../../Components/layout-components/NavbarBefore";
import HeroSection from "./HeroSection";
import MainContent from "./MainContent";
import SharingSection from "./SharingSection";
import { motion } from "framer-motion";

export default function HomePageBefore() {
  return (
    <div>
      <NavbarBefore />
      <motion.div
        initial={{ opacity: 0, x: -50 }} // Start 50px to the left and with 0 opacity
        whileInView={{ opacity: 1, x: 0 }} // Move to the original position and full opacity
        transition={{ duration: 0.9 }}
        viewport={{ once: true }} // Ensure the animation happens only once
      >
        <HeroSection />
      </motion.div>

      <MainContent />
      <SharingSection />
      <Footer />
    </div>
  );
}
