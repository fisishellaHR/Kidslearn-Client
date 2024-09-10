import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import headinghtml from "../../../../public/Landing-Views/HTMLPage/Heading-PageHTML.png";
import axios from "axios";

// const dataHtml = [
//   {
//     id: 1,
//     title: "HTML PENDAHULUAN",
//     src: "https://www.youtube.com/embed/2ehEWo4kaNA?controls=1",
//     desc: "HTML (HyperText Markup Language) adalah bahasa standar yang digunakan untuk membuat dan menyusun halaman web. HTML memungkinkan pengembang untuk membangun struktur dasar dari sebuah website dengan menggunakan berbagai elemen dan tag yang mengatur konten dan tata letak halaman.",
//   },
//   {
//     id: 2,
//     title: "STRUKTUR DASAR HTML",
//     src: "https://www.youtube.com/embed/2ehEWo4kaNA?controls=1",
//     desc: "Deskripsi untuk Struktur Dasar HTML",
//   },
//   {
//     id: 3,
//     title: "TAG DAN ELEMENT HTML",
//     src: "https://www.youtube.com/embed/2ehEWo4kaNA?controls=1",
//     desc: "Deskripsi untuk Tag dan Element HTML",
//   },
//   {
//     id: 4,
//     title: "ATRIBUT HTML",
//     src: "https://www.youtube.com/embed/2ehEWo4kaNA?controls=1",
//     desc: "Deskripsi untuk Atribut HTML",
//   },
//   {
//     id: 5,
//     title: "MEMBUAT KONTEN YANG TERSTRUKTUR",
//     src: "https://www.youtube.com/embed/2ehEWo4kaNA?controls=1",
//     desc: "Deskripsi untuk Membuat Konten yang Terstruktur",
//   },
//   {
//     id: 6,
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

const HtmlContent = () => {
  const [modulesHTML, setModulesHTML] = useState([]);
  const getModulesHTML = async () => {
    try {
      const response = await axios.get(
        "https://kidslearn-client.vercel.app/api/module/getModules"
      );
      console.log(response.data);
      setModulesHTML(response.data);
    } catch (error) {
      if (error.code === "ERR_NETWORK") {
        console.error("Kesalahan jaringan terjadi:", error.message);
      } else {
        console.error("Terjadi kesalahan:", error.message);
      }
    }
  };
  useEffect(() => {
    getModulesHTML();
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
          src={headinghtml}
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
            Apa Sih <span className="text-primary font-bowlby">HTML</span> itu?
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center font-poppins text-[28px]"
          >
            HTML (HyperText Markup Language) adalah bahasa standar yang
            digunakan untuk membuat dan menyusun halaman web. HTML memungkinkan
            pengembang untuk membangun struktur dasar dari sebuah website dengan
            menggunakan berbagai elemen dan tag yang mengatur konten dan tata
            letak halaman.
          </motion.h2>
        </div>
        <div className="flex flex-col gap-y-3 mb-16">
          {modulesHTML.map((item) => (
            <div key={item._id} className="flex flex-col">
              <div
                className="flex justify-between items-center bg-primary px-5 py-2 rounded-3xl gap-x-3 cursor-pointer"
                onClick={() => handleToggleDropdown(item._id)}
              >
                <h1 className="font-bowlby text-[40px]">{item.judul}</h1>
                <motion.div
                  variants={arrowVariants}
                  initial="collapsed"
                  animate={
                    openDropdownId === item.id ? "expanded" : "collapsed"
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
                        className="absolute top-0 left-0 w-full h-full rounded-3xl border-8 border-white transition-transform duration-500 ease-in-out transform group-hover:-translate-y-2"
                      ></motion.iframe>
                    </div>
                    <div className="bg-white text-primary font-poppins text-2xl text-justify py-3 my-7 rounded-lg px-3">
                      <h2>{item.judul}</h2>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ) : (
                  <div className="px-5 py-2 bg-primary rounded-3xl mt-3">
                    <div className="bg-white text-primary font-poppins text-2xl text-justify py-3 my-7 rounded-lg px-3">
                      <h2>{item.desc}</h2>
                      <p>Content untuk item ini.</p>
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
};

export default HtmlContent;
