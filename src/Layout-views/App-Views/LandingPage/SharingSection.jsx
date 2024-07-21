import fotosatu from "../../../../public/Landing-Views/SharingContent/fotosatu-Sharing.png";
import fotodua from "../../../../public/Landing-Views/SharingContent/Fotodua-sharing.png";
import { motion } from "framer-motion";

export default function SharingSection() {
  return (
    <>
      <div className="container mx-auto px-4 mt-[65px]">
        <h1 className="font-bowlby text-[32px] sm:text-[40px] md:text-[52px] text-center mb-8">
          Apa Saja Yang Dipelajari?
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-[65px] ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center bg-[#FFDBDC] rounded-3xl px-6 py-6 h-auto sm:h-[426px] w-full md:w-1/2"
          >
            <img
              src={fotosatu}
              alt="Foto Satu"
              className="w-full h-auto max-h-64 object-fill"
            />
            <h3 className="font-poppins text-[18px] sm:text-[20px] md:text-[24px] text-primary text-center mt-5">
              Quiz: Fitur quiz dirancang untuk membantu anak-anak menguji
              pemahaman mereka tentang materi yang telah dipelajari.
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center bg-[#FFDBDC] rounded-3xl px-6 py-6 h-auto sm:h-[426px] w-full md:w-1/2"
          >
            <img
              src={fotodua}
              alt="Foto Dua"
              className="w-full h-auto max-h-64 object-fill"
            />
            <h3 className="font-poppins text-[18px] sm:text-[20px] md:text-[24px] text-primary text-center mt-5">
              Materi menyediakan konten pembelajaran yang lengkap dan
              terstruktur, mulai dari dasar-dasar HTML dan CSS hingga teknik
              lebih lanjut dalam pembuatan website statis.
            </h3>
          </motion.div>
        </div>
      </div>
    </>
  );
}
