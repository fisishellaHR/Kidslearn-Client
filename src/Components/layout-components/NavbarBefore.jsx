import { Link } from "react-router-dom";

const NavbarBefore = () => {
  return (
    <nav className="px-4 sm:px-6 md:px-8 w-full bg-primary flex justify-between items-center h-[80px] sticky top-0 z-50">
      <div>
        <Link to="/homepagebefore">
          <h1 className="font-bowlby text-2xl sm:text-3xl md:text-4xl text-white">
            KidsLearn
          </h1>
        </Link>
      </div>
      <div className="hidden md:flex gap-x-4 justify-center items-center">
        <Link
          to="/aboutuss"
          className="text-white hover:text-black font-poppins transition duration-300"
        >
          Tentang Kami
        </Link>
        <Link
          to="/ourgoals"
          className="text-white hover:text-black font-poppins transition duration-300"
        >
          Tujuan
        </Link>
        <Link
          to="/quiz"
          className="text-white hover:text-black font-poppins transition duration-300"
        >
          Quiz
        </Link>
        <Link
          to="/login"
          className=" hover:text-primary font-bowlby bg-white hover:bg-black px-4 py-2 rounded-full text-black transition duration-300"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default NavbarBefore;
