import { Link } from "react-router-dom";
import authuserimage from "../../assets/Auth-Views/Auth-User/Image-AuthUser.png";
import { FaArrowLeft } from "react-icons/fa";

export default function ResetPassword() {
  return (
    <section className="flex items-center justify-center min-h-screen py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Illustrasi */}
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

          {/* Form */}
          <div className="col-span-12 md:col-span-5 flex flex-col items-center md:items-start">
            <Link to={"/login"} className="self-start mb-4">
              <FaArrowLeft className="text-4xl" />
            </Link>
            <h2 className="font-semibold text-2xl md:text-3xl mb-4">
              Reset Password
            </h2>
            <form className="flex flex-col gap-y-4 w-full">
              <input
                type="email"
                placeholder="Email/nomor telepon"
                className="w-full border border-[#000000] p-4 rounded-[10px] text-lg"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-[#000000] p-4 rounded-[10px] text-lg"
              />
              <button
                type="submit"
                className="w-full bg-primary py-4 px-6 rounded-[10px] text-white text-xl font-semibold"
              >
                Submit
              </button>
              <div className="text-center">
                <p className="text-base">
                  Ingat password?{" "}
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
