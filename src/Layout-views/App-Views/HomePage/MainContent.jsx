import contentsatu from "../../../assets/Landing-Views/MainContent/ContentSatu-MainContent.png";
import contentdua from "../../../assets/Landing-Views/MainContent/ContentDua-MainContent.png";
import ButtonMain from "../../../Components/shared-components/ButtonMain";
import { motion } from "framer-motion";
const MainContent = () => {
  return (
    <>
      <div className="container mt-[200px] flex flex-col gap-y-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start 50px below and with 0 opacity
          whileInView={{ opacity: 1, y: -2 }} // Move to the original position and full opacity
          transition={{ duration: 0.9 }}
          viewport={{ once: true }} // Ensure the animation happens only once
        >
          <div className="flex flex-col justify-center items-center gap-y-16 bg-primary h-auto rounded-3xl">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-bowlby text-[42px] text-center mt-5">
                Apa sih KidsLearn itu?
              </h1>
              <img src={contentsatu} alt="" className=" mt-10" />
              <h2 className="font-poppins text-[28px] text-center mt-6 px-10">
                KidsLearn, platform e-learning yang dirancang khusus untuk
                membantu anak-anak sekolah dasar dalam memanfaatkan teknologi
                sebagai alat pembelajaran. Kami memahami bahwa pengenalan
                teknologi sejak dini sangat penting dalam era digital ini.
              </h2>
            </div>
            <ButtonMain to={"/aboutuss"}>Baca selengkapnya</ButtonMain>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start 50px below and with 0 opacity
          whileInView={{ opacity: 1, y: -2 }} // Move to the original position and full opacity
          transition={{ duration: 0.9 }}
          viewport={{ once: true }} // Ensure the animation happens only once
        >
          <div className="flex flex-col justify-center items-center gap-y-16 bg-primary h-auto rounded-3xl">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-bowlby text-[42px] text-center mt-5">
                Tujuan KidsLearn
              </h1>
              <img src={contentdua} alt="" className=" mt-10" />
              <h2 className="font-poppins text-[28px] text-center mt-6 px-10">
                KidsLearn hadir dengan tujuan untuk memberdayakan anak-anak
                sekolah dasar dengan keterampilan teknologi yang relevan dan
                bermanfaat dalam dunia digital saat ini.
              </h2>
            </div>
            <ButtonMain to={"/ourgoals"}>Baca selengkapnya</ButtonMain>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default MainContent;
