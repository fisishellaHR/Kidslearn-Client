import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import materialslearn from "../../../../public/Landing-Views/LearningMaterials/Materi-LearningMaterial.png";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MaterialsContent() {
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("email");
    setEmail(email);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi input
    if (suggestion.trim() === "") {
      setError("Saran tidak boleh kosong.");
      return;
    }

    try {
      const response = await axios.post(
        // "http://127.0.0.1:3000/api/auth/addsuggestion",
        "http://127.0.0.1:3000/api/auth/addsuggestion",
        {
          email: email,
          suggestion: suggestion,
        }
      );
      alert("Suggestion submitted successfully");
      console.log(response);
      setSuggestion("");
      setError("");
    } catch (error) {
      console.log(error);
      alert("Terjadi kesalahan saat mengirim saran.");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  return (
    <>
      <motion.div
        className="container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col">
          <motion.img
            src={materialslearn}
            alt=""
            className="my-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div className="mb-16">
            <h1 className="text-[52px] font-bowlby text-black text-center">
              Apa Sih{" "}
              <span className="text-primary font-bowlby">Website Statis</span>{" "}
              Itu?
            </h1>
            <h2 className="text-center font-poppins text-[28px]">
              Website statis adalah jenis website yang kontennya ditampilkan
              kepada pengguna tanpa adanya interaksi atau manipulasi langsung
              dari pengguna. Konten pada website statis biasanya telah
              ditentukan sebelumnya dan disimpan dalam berkas HTML. Setiap kali
              pengguna mengunjungi halaman web statis, mereka melihat konten
              yang sama tanpa perubahan yang dinamis.
            </h2>
          </motion.div>
          <div className="flex flex-col gap-y-3 mb-16">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <Link
                  to={"/materihtml"}
                  className="flex justify-between items-center bg-primary px-5 py-2 rounded-3xl gap-x-3"
                >
                  <h1 className="font-bowlby text-[40px]">HTML</h1>
                  <IoIosArrowForward
                    style={{ width: "60px", height: "28px" }}
                  />
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <Link
                  to={"/matericss"}
                  className="flex justify-between items-center bg-primary px-5 py-2 rounded-3xl gap-x-3"
                >
                  <h1 className="font-bowlby text-[40px]">CSS</h1>
                  <IoIosArrowForward
                    style={{ width: "60px", height: "28px" }}
                  />
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
            >
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <Link
                  to={"/"}
                  className="flex justify-between items-center bg-primary px-5 py-2 rounded-3xl gap-x-3"
                >
                  <h1 className="font-bowlby text-[40px]">SUMBER</h1>
                  <IoIosArrowForward
                    style={{ width: "60px", height: "28px" }}
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="container mx-auto p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold mb-6">Form Kesan dan Pesan</h1>
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="suggestion"
              >
                Saran:
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="suggestion"
                name="suggestion"
                rows="4"
                maxLength={250}
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
              ></textarea>
              {error && <p className="text-red-500 text-xs italic">{error}</p>}
            </div>

            <div className="flex items-center justify-between">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Kirim
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </>
  );
}
