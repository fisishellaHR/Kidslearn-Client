import Footer from "../../../Components/layout-components/Footer";
import NavbarBefore from "../../../Components/layout-components/NavbarBefore";
import HeroSection from "./HeroSection";
import MainContent from "./MainContent";
import SharingSection from "./SharingSection";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div>
      <NavbarBefore />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <HeroSection />
      </motion.div>

      <MainContent />
      <SharingSection />
      <Footer />
    </div>
  );
}
