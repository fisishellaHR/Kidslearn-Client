import ourheading from "../../../assets/Landing-Views/OurGoals/Heading-OurGols.png";
import imageourcontent from "../../../assets/Landing-Views/OurGoals/ImageContent-OurGoals.png";
import { motion } from "framer-motion";

export default function OurGoalsContentAfter() {
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
          <img src={ourheading} alt="" />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <img src={imageourcontent} alt="" className="mx-auto" />
        </motion.div>
        <motion.div className="text-center" variants={fadeInUp}>
          <h1 className=" font-bowlby text-[64px]">KidsLearn</h1>
        </motion.div>
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <p className="text-2xl font-poppins px-10 ">
            KidsLearn hadir dengan tujuan untuk memberdayakan anak-anak sekolah
            dasar dengan keterampilan teknologi yang relevan dan bermanfaat
            dalam dunia digital saat ini. Kami bertujuan untuk mengenalkan
            teknologi kepada anak-anak sejak dini melalui program yang
            interaktif dan menyenangkan, sehingga mereka dapat memahami dan
            menguasai dasar-dasar pembuatan website statis. Dengan metode
            pembelajaran yang mudah diikuti, kami berkomitmen untuk membangun
            fondasi keterampilan teknologi yang kokoh dan relevan bagi generasi
            muda. Selain itu, kami bertujuan untuk mengembangkan potensi kreatif
            dan kemampuan pemecahan masalah anak-anak. Program kami dirancang
            untuk tidak hanya mengajarkan aspek teknis, tetapi juga untuk
            mendorong kreativitas dan inovasi. Dengan memberikan panduan langkah
            demi langkah, proyek yang menarik, dan dukungan dari tim pengajar
            yang berpengalaman, kami berharap dapat membuat proses belajar
            teknologi menjadi pengalaman yang menyenangkan dan memotivasi. Kami
            percaya bahwa melalui KidsLearn, anak-anak akan siap menghadapi masa
            depan yang penuh dengan peluang dan inovasi.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
}
