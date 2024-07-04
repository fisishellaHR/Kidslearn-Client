import { Link } from "react-router-dom";
import materialslearn from "../../../assets/Landing-Views/LearningMaterials/Materi-LearningMaterial.png";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
export default function MaterialsContent() {
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika pengiriman data kesan dan pesan
    console.log("Email:", email);
    console.log("Saran:", suggestion);
  };
  return (
    <>
      <div className="container">
        <div className="flex flex-col ">
          <img src={materialslearn} alt="" className="my-16" />
          <div className="mb-16">
            <h1 className="text-[52px] font-bowlby text-black text-center">
              Apa Sih{" "}
              <span className="text-primary font-bowlby ">Website Statis</span>{" "}
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
          </div>
          <div className="flex flex-col gap-y-3 mb-16">
            <Link
              to={"/materihtml"}
              className="flex justify-between items-center bg-primary px-5 py-2 rounded-3xl gap-x-3"
            >
              <h1 className="font-bowlby text-[40px]">HTML</h1>
              <IoIosArrowForward style={{ width: "60px", height: "28px" }} />
            </Link>
            <Link
              to={"/matericss"}
              className="flex justify-between items-center bg-primary px-5 py-2 rounded-3xl gap-x-3"
            >
              <h1 className="font-bowlby text-[40px]">CSS</h1>
              <IoIosArrowForward style={{ width: "60px", height: "28px" }} />
            </Link>
            <Link
              to={"/"}
              className="flex justify-between items-center bg-primary px-5 py-2 rounded-3xl gap-x-3"
            >
              <h1 className="font-bowlby text-[40px]">SUMBER</h1>
              <IoIosArrowForward style={{ width: "60px", height: "28px" }} />
            </Link>
          </div>
        </div>
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-6">Form Kesan dan Pesan</h1>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
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
                rows="4"
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-primary hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
