import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import headinghtml from "../../../assets/Landing-Views/HTMLPage/Heading-PageHTML.png";

const dataHtml = [
  {
    id: 1,
    title: "HTML PENDAHULUAN",
    src: "https://www.youtube.com/embed/2ehEWo4kaNA?controls=1",
    desc: "HTML (HyperText Markup Language) adalah bahasa standar yang digunakan untuk membuat dan menyusun halaman web. HTML memungkinkan pengembang untuk membangun struktur dasar dari sebuah website dengan menggunakan berbagai elemen dan tag yang mengatur konten dan tata letak halaman.",
  },
  {
    id: 2,
    title: "STRUKTUR DASAR HTML",
    src: "https://www.youtube.com/embed/2ehEWo4kaNA?controls=1",
    desc: "Deskripsi untuk Struktur Dasar HTML",
  },
  {
    id: 3,
    title: "TAG DAN ELEMENT HTML",
    src: "https://www.youtube.com/embed/2ehEWo4kaNA?controls=1",
    desc: "Deskripsi untuk Tag dan Element HTML",
  },
  {
    id: 4,
    title: "ATRIBUT HTML",
    src: "https://www.youtube.com/embed/2ehEWo4kaNA?controls=1",
    desc: "Deskripsi untuk Atribut HTML",
  },
  {
    id: 5,
    title: "MEMBUAT KONTEN YANG TERSTRUKTUR",
    src: "https://www.youtube.com/embed/2ehEWo4kaNA?controls=1",
    desc: "Deskripsi untuk Membuat Konten yang Terstruktur",
  },
  {
    id: 6,
    title: "SILABUS",
    desc: "Link GD",
  },
];

export default function HtmlContent() {
  const [openDropdownId, setOpenDropdownId] = useState(null);

  const handleToggleDropdown = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  return (
    <div className="container">
      <div className="flex flex-col">
        <img src={headinghtml} alt="" className="my-16" />
        <div className="mb-16">
          <h1 className="text-[52px] font-bowlby text-black text-center">
            Apa Sih <span className="text-primary font-bowlby">HTML</span> itu?
          </h1>
          <h2 className="text-center font-poppins text-[28px]">
            HTML (HyperText Markup Language) adalah bahasa standar yang
            digunakan untuk membuat dan menyusun halaman web. HTML memungkinkan
            pengembang untuk membangun struktur dasar dari sebuah website dengan
            menggunakan berbagai elemen dan tag yang mengatur konten dan tata
            letak halaman.
          </h2>
        </div>
        <div className="flex flex-col gap-y-3 mb-16">
          {dataHtml.map((item) => (
            <div key={item.id} className="flex flex-col">
              <div
                className="flex justify-between items-center bg-primary px-5 py-2 rounded-3xl gap-x-3 cursor-pointer"
                onClick={() => handleToggleDropdown(item.id)}
              >
                <h1 className="font-bowlby text-[40px]">{item.title}</h1>
                <IoIosArrowForward style={{ width: "60px", height: "28px" }} />
              </div>
              {openDropdownId === item.id &&
                (item.src ? (
                  <div className="px-5 py-2 bg-primary rounded-3xl mt-3">
                    <div className="relative w-full overflow-hidden pb-[56.25%] h-[550px] group">
                      <iframe
                        src={item.src}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full rounded-3xl border-8 border-white transition-transform duration-500 ease-in-out transform group-hover:-translate-y-2"
                      ></iframe>
                    </div>
                    <div className="bg-white text-primary font-poppins text-2xl text-justify py-3 my-7 rounded-lg px-3">
                      <h2>{item.desc}</h2>
                      <p>Konsep Dasar HTML:</p>
                      <ul className="text-primary font-poppins text-xl text-justify list-disc pl-5">
                        <li>
                          Tag: Elemen dasar dalam HTML yang mendefinisikan
                          struktur halaman web.
                        </li>
                        <li>
                          Atribut: Informasi tambahan yang dapat ditambahkan ke
                          dalam tag untuk mengatur atau menyesuaikan elemen.
                        </li>
                        <li>
                          Konten: Informasi yang ingin ditampilkan di halaman
                          web, seperti teks, gambar, atau media lainnya.
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="px-5 py-2 bg-primary rounded-3xl mt-3">
                    <div className="bg-white text-primary font-poppins text-2xl text-justify py-3 my-7 rounded-lg px-3">
                      <h2>{item.desc}</h2>
                      <p>Content untuk item ini.</p>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
