import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import headinghcss from "../../../../public/Landing-Views/CSSPage/Heading-PageCSS.png";
import axios from "axios";

// const dataCss = [
//   {
//     id: 1,
//     title: "CSS PENDAHULUAN",
//     src: "https://www.youtube.com/embed/2ehEWo4kaNA?controls=1",
//     desc: "CSS (Cascading Style Sheets) adalah bahasa desain yang digunakan untuk menentukan tampilan dan format halaman web yang dibuat dengan HTML. CSS memungkinkan pengembang web untuk memisahkan konten dari presentasi, memberikan fleksibilitas dan kontrol lebih besar dalam menentukan bagaimana elemen-elemen HTML ditampilkan.",
//   },
//   {
//     id: 2,
//     title: "SELEKTOR",
//     src: "https://www.youtube.com/embed/2ehEWo4kaNA?controls=1",
//     desc: "Deskripsi untuk Selektor",
//   },
//   {
//     id: 3,
//     title: "PROPERTI DASAR",
//     src: "https://www.youtube.com/embed/2ehEWo4kaNA?controls=1",
//     desc: "Deskripsi untuk Properti Dasar",
//   },
//   {
//     id: 4,
//     title: "BOX MODEL",
//     src: "https://www.youtube.com/embed/2ehEWo4kaNA?controls=1",
//     desc: "Deskripsi untuk Box Model",
//   },
//   {
//     id: 5,
//     title: "LAYOUT PENEMPATAN",
//     src: "https://www.youtube.com/embed/2ehEWo4kaNA?controls=1",
//     desc: "Deskripsi untuk Layout Penempatan",
//   },
//   {
//     id: 6,
//     title: "Pseudo-elemen dan Pseudo-klas",
//     src: "https://www.youtube.com/embed/2ehEWo4kaNA?controls=1",
//     desc: "Deskripsi untuk Pseudo-elemen dan Pseudo-klas",
//   },
//   {
//     id: 7,
//     title: "Responsif Web Design",
//     src: "https://www.youtube.com/embed/2ehEWo4kaNA?controls=1",
//     desc: "Deskripsi untuk Responsif Web Design",
//   },
//   {
//     id: 8,
//     title: "SILABUS",
//     desc: "Link GD",
//   },
// ];

const itemVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.5 } },
};

const arrowVariants = {
  collapsed: { rotate: 0 },
  expanded: { rotate: 90 },
};

export default function CssContent() {
  const [modulesCSS, setModulesCSS] = useState([]);
  const getModulesCSS = async () => {
    try {
      const response = await axios.get(
        // "https://kidslearn-server.vercel.app/api/moduledua/getModules"
        "https://kidslearn-server.vercel.app/api/moduledua/getModules"
      );
      console.log(response.data);
      setModulesCSS(response.data);
    } catch (error) {
      if (error.code === "ERR_NETWORK") {
        console.error("Kesalahan jaringan terjadi:", error.message);
      } else {
        console.error("Terjadi kesalahan:", error.message);
      }
    }
  };
  useEffect(() => {
    getModulesCSS();
  }, []);
  const [openDropdownId, setOpenDropdownId] = useState(null);

  const handleToggleDropdown = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  return (
    <div className="container">
      <div className="flex flex-col">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src={headinghcss}
          alt=""
          className="my-16"
        />
        <div className="mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[52px] font-bowlby text-black text-center"
          >
            Apa Sih <span className="text-primary font-bowlby">CSS</span> itu?
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center font-poppins text-[28px]"
          >
            CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk
            mendesain dan mengatur tampilan halaman web. Saat mempelajari CSS
            untuk membuat website statis, beberapa konsep dan teknik utama yang
            akan dipelajari meliputi:
          </motion.h2>
        </div>
        <div className="flex flex-col gap-y-3 mb-16">
          {modulesCSS.map((item) => (
            <div key={item.id} className="flex flex-col">
              <div
                className="flex justify-between items-center bg-primary px-5 py-2 rounded-3xl gap-x-3 cursor-pointer"
                onClick={() => handleToggleDropdown(item._id)}
              >
                <h1 className="font-bowlby text-[40px]">{item.judul}</h1>
                <motion.div
                  variants={arrowVariants}
                  initial="collapsed"
                  animate={
                    openDropdownId === item._id ? "expanded" : "collapsed"
                  }
                  style={{ originY: 0.55 }}
                >
                  <IoIosArrowForward
                    style={{ width: "60px", height: "28px" }}
                  />
                </motion.div>
              </div>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={openDropdownId === item._id ? "visible" : "hidden"}
                className="overflow-hidden"
              >
                {item.link ? (
                  <div className="px-5 py-2 bg-primary rounded-3xl mt-3">
                    <div className="relative w-full overflow-hidden pb-[56.25%] h-[550px] group">
                      <motion.iframe
                        src={item.link}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="absolute top-4 bottom-8 left-0 w-full h-full rounded-3xl border-8 border-white transition-transform duration-500 ease-in-out transform group-hover:-translate-y-2"
                      ></motion.iframe>
                    </div>
                    <div className="bg-white text-primary font-poppins text-2xl text-justify py-3 my-7 rounded-lg px-3">
                      <h2>{item.desc}</h2>
                    </div>
                  </div>
                ) : (
                  <div className="px-5 py-2 bg-primary rounded-3xl mt-3">
                    <div className="bg-white text-primary font-poppins text-2xl text-justify py-3 my-7 rounded-lg px-3">
                      <h2>{item.judul}</h2>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
