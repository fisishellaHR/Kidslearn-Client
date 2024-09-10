/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      await axios.get(
        // "https://kidslearn-client.vercel.app/api/admin/logoutadmin"
        "https://kidslearn-client.vercel.app/api/admin/logoutadmin"
      );
      alert("Berhasil Logout!");
      localStorage.removeItem("username");
      localStorage.removeItem("email");
      setTimeout(() => {
        navigate("/loginadmin");
      }, 2000);
    } catch (error) {
      alert("Terjadi kesalahan saat logout");
      console.error(error);
    }
  };
  axios.defaults.withCredentials = true;

  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);
  }, []);

  return (
    <header className="sticky top-0 flex w-full bg-primary z-[999] border-b-2 border-secondary">
      <div className="flex items-center justify-end flex-grow px-4 py-4 shadow md:px-6 2xl:px-11">
        <div className="flex items-center gap-3 2xsm:gap-7">
          <div className="relative">
            <div className="flex items-center gap-4">
              <span className="hidden text-right lg:block">
                <span className="block text-sm font-bold text-white">
                  Hallo Bang
                </span>
                <span className="block text-xs text-secondary font-bowlby">
                  {username}
                </span>
              </span>
              <button
                onClick={handleLogout}
                className="bg-black px-2 py-2 rounded-2xl text-white font-bold text-sm hover:bg-white hover:text-black"
              >
                LOGOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
