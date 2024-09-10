import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import authuserimage from "../../../public/Auth-Views/Auth-User/Image-AuthUser.png";
import { FaArrowLeft } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email tidak boleh kosong";
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email tidak valid";
    if (!password) newErrors.password = "Password tidak boleh kosong";
    return newErrors;
  };
  axios.defaults.withCredentials = true;
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
        // "https://kidslearn-client.vercel.app/api/auth/login",
        "https://kidslearn-client.vercel.app/api/auth/login",
        {
          email: email,
          password: password,
        }
      );

      if (response.data.status) {
        const username = jwtDecode(response.data.token);
        localStorage.setItem("username", username.username);
        localStorage.setItem("userId", username._id); // --> new row for improvement
        localStorage.setItem("email", response.data.email);
        console.log(response);
        alert("Berhasil Login!");
        navigate("/homepageafter");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("An error occurred while logging in");
      }
      console.error("Login error:", error);
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
            <Link to={"/"} className="self-start mb-4">
              <FaArrowLeft className="text-4xl" />
            </Link>
            <h2 className="font-semibold text-2xl md:text-3xl mb-4">
              Masuk Akun
            </h2>
            <form
              className="flex flex-col gap-y-4 w-full"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="Email"
                autoComplete="off"
                className="w-full border border-[#000000] p-4 rounded-[10px] text-lg"
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
              <input
                type="password"
                placeholder="Password"
                autoComplete="off"
                className="w-full border border-[#000000] p-4 rounded-[10px] text-lg"
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
              <button
                type="submit"
                className="py-4 bg-primary text-white rounded-[10px] w-full text-xl font-semibold"
              >
                Masuk
              </button>
              <div className="flex justify-between items-center mt-2">
                <Link to={"/register"} className="text-lg text-primary">
                  Daftar Akun
                </Link>
                <Link to={"/forgotpassword"} className="text-lg text-primary">
                  Lupa Password ?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
