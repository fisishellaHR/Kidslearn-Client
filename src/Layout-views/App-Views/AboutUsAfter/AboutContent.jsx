import headingabout from "../../../../public/Landing-Views/AboutUs/Heading-AboutUs.png";
import imageabout from "../../../../public/Landing-Views/AboutUs/ImageContent-AboutUs.png";
import { motion } from "framer-motion";

export default function AboutContentAfter() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <>
      <motion.div
        className="container flex flex-col gap-y-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div className="my-16" variants={fadeInUp}>
          <img src={headingabout} alt="" />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <img src={imageabout} alt="" className="mx-auto" />
        </motion.div>
        <motion.div className="text-center" variants={fadeInUp}>
          <h1 className=" font-bowlby text-[64px]">KidsLearn</h1>
        </motion.div>
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <p className="text-2xl font-poppins px-10 ">
            Selamat datang di KidsLearn, platform e-learning yang dirancang
            khusus untuk membantu anak-anak sekolah dasar dalam memanfaatkan
            teknologi sebagai alat pembelajaran. Kami memahami bahwa pengenalan
            teknologi sejak dini sangat penting dalam era digital ini. Oleh
            karena itu, KidsLearn hadir dengan program yang menyenangkan dan
            interaktif untuk mengajarkan anak-anak cara membuat website statis.
            Melalui metode yang ramah anak dan mudah diikuti, kami berkomitmen
            untuk membangun fondasi keterampilan teknologi yang kuat bagi
            generasi muda. Di KidsLearn, kami percaya bahwa setiap anak memiliki
            potensi untuk menjadi kreator di dunia digital. Program kami tidak
            hanya fokus pada aspek teknis, tetapi juga mendorong kreativitas dan
            pemecahan masalah. Dengan panduan langkah demi langkah, proyek
            menarik, dan dukungan dari tim pengajar berpengalaman, kami
            bertujuan untuk membuat pembelajaran teknologi menjadi pengalaman
            yang menyenangkan dan memotivasi. Bergabunglah dengan kami di
            KidsLearn dan mulailah petualangan belajar yang akan membuka pintu
            menuju masa depan yang penuh inovasi dan peluang!
          </p>
        </motion.div>
      </motion.div>
    </>
  );
}
