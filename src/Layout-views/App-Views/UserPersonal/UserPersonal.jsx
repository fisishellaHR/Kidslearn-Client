import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";

const UserPersonal = () => {
  const navigate = useNavigate();

  // const { userId } = useParams();
  const { username } = useParams();
  const [newNama, SetNewNama] = useState("");

  const [user, setUser] = useState({});
  const [email, setEmail] = useState({});

  useEffect(() => {
    if (username) {
      fetchUser();
    }
  }, [username]);

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        // `https://kidslearn-server.vercel.app/api/auth/getUserByUsername?username=${username}`,
        `https://kidslearn-server.vercel.app/api/auth/getUserByUsername?username=${username}`
      );
      setUser(response.data);
      setEmail(response.data.email);
      SetNewNama(response.data.username);
      console.log(response.data);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        // `https://kidslearn-server.vercel.app/api/auth/updateUser`,
        `https://kidslearn-server.vercel.app/api/auth/updateUser`,
        {
          id: user._id,
          username: newNama,
        }
      );
      localStorage.setItem("username", newNama);
      fetchUser();
      alert("username telah di ubah");
      navigate("/homepageafter");
    } catch (error) {
      alert("Username Tidak Berubah");
    }
  };
  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      await axios.get(
        "https://kidslearn-server.vercel.app/api/auth/userpersonal"
      );
      alert("Berhasil Logout!");
      localStorage.removeItem("username");
      localStorage.removeItem("email");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      alert("Terjadi kesalahan saat logout");
      console.error(error);
    }
  };

  return (
    <section className="container mx-auto py-8">
      <div className="flex justify-between items-center">
        <Link
          to={"/homepageafter"}
          className="flex justify-start items-center mb-12 gap-x-6"
        >
          <FaArrowLeft className="text-4xl" />
          <h1 className="font-poppins">Back To HomePage</h1>
        </Link>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-primary hover:bg-secondary"
          onClick={handleLogout}
        >
          Logout
        </motion.button>
      </div>
      <div className="mx-auto bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Edit Personal
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              disabled
              name="email"
              value={email}
              className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={newNama}
              onChange={(e) => SetNewNama(e.target.value)}
              name="username"
              className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-primary hover:bg-primary-dark"
            type="submit"
          >
            Simpan Perubahan
          </motion.button>
        </form>
        <br />
      </div>
      <div className="text-center font-bowlby mt-10 text-3xl ">
        <h1>Hasil Nilai Quiz</h1>
      </div>
      <div className="container p-5 mt-10 grid grid-cols-4 justify-items-center gap-x-3 border-4 border-black rounded-lg">
        <div className="bg-primary w-full text-center rounded-lg py-8 shadow-lg">
          <h1 className="px-2 font-bowlby mb-2">{user.quiz}</h1>
          <div className="px-2 py-2 rounded-full border-4 border-black font w-16 mx-auto mb-2">
            <p className="font-bold">Score</p>
            <p>{user.score}</p>{" "}
          </div>
          <div className="flex justify-center">
            <p className="px-2 font-poppins">Percobaan</p>
            <p>{user.experiment}</p>{" "}
          </div>
        </div>
        {/* ))} */}
      </div>
    </section>
  );
};

export default UserPersonal;
