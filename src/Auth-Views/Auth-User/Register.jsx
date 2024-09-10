import { Link, useNavigate } from "react-router-dom";
import authuserimage from "../../../public/Auth-Views/Auth-User/Image-AuthUser.png";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!username) newErrors.username = "Username tidak boleh kosong";
    if (!email) newErrors.email = "Email tidak boleh kosong";
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email tidak valid";
    if (!password) newErrors.password = "Password tidak boleh kosong";
    if (password.length < 6) newErrors.password = "Password minimal 6 karakter";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});

    try {
      const response = await axios.post(
        "https://kidslearn-client.vercel.app/api/auth/register",
        {
          username,
          email,
          password,
        }
      );

      if (response.data.status) {
        alert("Registrasi berhasil!");
        navigate("/login");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("An error occurred during registration");
      }
      console.error("Registration error:", error);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7 flex flex-col items-center md:items-start">
            <h1 className="font-bowlby text-6xl md:text-8xl text-primary mb-4 mx-auto">
              KidsLearn
            </h1>
            <img
              src={authuserimage}
              alt="Illustration"
              className="max-w-full"
            />
          </div>

          <div className="col-span-12 md:col-span-5 flex flex-col items-center md:items-start">
            <Link to={"/login"} className="self-start mb-4">
              <FaArrowLeft className="text-4xl" />
            </Link>
            <h2 className="font-semibold text-2xl md:text-3xl mb-4">
              Daftar Akun
            </h2>
            <form
              className="sign-up-form flex flex-col gap-y-4 w-full"
              onSubmit={handleSubmit}
            >
              <label htmlFor="username">
                <p className="text-base font-bold">Username</p>
              </label>
              <input
                type="text"
                placeholder="Username"
                className="w-full border border-[#000000] p-4 rounded-[10px]"
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && (
                <p className="text-red-500">{errors.username}</p>
              )}
              <label htmlFor="email">
                <p className="text-base font-bold">Email</p>
              </label>
              <input
                type="email"
                placeholder="Email"
                autoComplete="off"
                className="w-full border border-[#000000] p-4 rounded-[10px]"
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
              <label htmlFor="password">
                <p className="text-base font-bold">Password</p>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-[#000000] p-4 rounded-[10px]"
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
              <button
                type="submit"
                className="py-4 bg-primary text-white rounded-[10px] w-full"
              >
                Daftar
              </button>
              <div className="text-center">
                <p className="text-base">
                  Sudah Punya Akun?{" "}
                  <Link
                    to={"/login"}
                    className="text-base font-bold text-primary"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
