import { Link, useNavigate, useParams } from "react-router-dom";
import authuserimage from "../../../public/Auth-Views/Auth-User/Image-AuthUser.png";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

export default function ResetPasswordAdmin() {
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { token } = useParams();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (password.length < 6) {
      newErrors.password = "Password minimal 6 karakter";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    try {
      const response = await axios.post(
        "https://kidslearn-client.vercel.app/api/admin/reset-passwordadmin",
        {
          password,
          token,
        }
      );
      console.log(response);
      alert("Password berhasil diubah!");
      setTimeout(() => {
        navigate("/loginadmin");
      }, 2000);
    } catch (error) {
      console.error(error);
      alert("Gagal mengubah password");
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen py-8">
      <div className="container mx-auto">
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
            <Link to={"/loginadmin"} className="self-start mb-4">
              <FaArrowLeft className="text-4xl" />
            </Link>
            <h2 className="font-semibold text-2xl md:text-3xl mb-4">
              New Password{" "}
              <span className="text-primary font-bowlby "> Admin</span>
            </h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-y-4 w-full"
            >
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
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
              <button
                type="submit"
                className="w-full bg-primary py-4 px-6 rounded-[10px] text-white text-xl font-semibold"
              >
                Ubah Password
              </button>
              <div className="text-center">
                <p className="text-base">
                  Ingat password?{" "}
                  <Link
                    to="/loginadmin"
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
