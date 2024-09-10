import { Link, useNavigate } from "react-router-dom";
import authuserimage from "../../../public/Auth-Views/Auth-User/Image-AuthUser.png";
import { FaArrowLeft } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios
      .post(
        "https://kidslearn-client.vercel.app//api/auth/forgot-password",
        data
      )
      .then((response) => {
        if (response.data.status) {
          alert("Check your email to reset your password link");
          window.open("https://mail.google.com/", "_blank");
          setTimeout(() => {
            navigate("/login");
          }, 5000);
        } else {
          alert(response.data.message || "Error sending email");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Terjadi kesalahan, coba lagi nanti");
      });
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
            <Link to={"/login"} className="self-start mb-4">
              <FaArrowLeft className="text-4xl" />
            </Link>
            <h2 className="font-semibold text-2xl md:text-3xl mb-4">
              Lupa Password
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-y-4 w-full"
            >
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-[#000000] p-4 rounded-[10px] text-lg"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">Email tidak valid</span>
              )}
              <button
                type="submit"
                className="w-full bg-primary py-4 px-6 rounded-[10px] text-white text-xl font-semibold"
              >
                Send Email
              </button>
              <div className="text-center">
                <p className="text-base">
                  Ingat password?{" "}
                  <Link
                    to="/login"
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
