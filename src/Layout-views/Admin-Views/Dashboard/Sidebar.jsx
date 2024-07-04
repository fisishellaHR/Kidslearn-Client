/* eslint-disable react/prop-types */
import {
  FiArrowLeft,
  FiAirplay,
  FiShoppingBag,
  FiClock,
  FiGift,
} from "react-icons/fi";

export default function Sidebar({ setmenu, menu, setActivePage }) {
  return (
    <aside
      className={`absolute left-0 top-0 z-[9999] flex h-screen w-72 flex-col overflow-y-hidden bg-primary duration-300 ease-linear lg:static lg:translate-x-0  ${
        menu ? "" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5 lg:justify-center lg:py-5 border-b-2 border-secondary">
        <a href="" className="flex items-center gap-2">
          <h1 className="text-xl text-white font-bowlby">KidsLearn</h1>
        </a>
        <button className="block lg:hidden">
          <FiArrowLeft onClick={setmenu} className="text-2xl text-white" />
        </button>
      </div>

      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="px-4 py-4 mt-5 lg:mt-9 lg:px-6">
          <div>
            <ul className="flex flex-col gap-0 lg:gap-2">
              <li>
                <button
                  onClick={() => setActivePage("KidsLearn")}
                  className="relative flex items-center gap-3 w-full px-4 py-4 text-white duration-300 ease-in-out rounded-lg lg:gap-4 group hover:bg-secondary"
                >
                  <FiAirplay className="text-lg lg:text-2xl" />
                  <span>KidsLearn</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage("MateriPengguna")}
                  className="relative flex items-center gap-3 w-full px-4 py-4 text-white duration-300 ease-in-out rounded-lg lg:gap-4 group hover:bg-secondary"
                >
                  <FiShoppingBag className="text-lg lg:text-2xl" />
                  <span>Materi Pengguna</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage("NilaiPengguna")}
                  className="relative flex items-center gap-3 w-full px-4 py-4 text-white duration-300 ease-in-out rounded-lg lg:gap-4 group hover:bg-secondary"
                >
                  <FiClock className="text-lg lg:text-2xl" />
                  <span>Nilai Pengguna</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage("MasukanWebsite")}
                  className="relative flex items-center gap-3 w-full px-4 py-4 text-white duration-300 ease-in-out rounded-lg lg:gap-4 group hover:bg-secondary"
                >
                  <FiGift className="text-lg lg:text-2xl" />
                  <span>Masukan Website</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
}
