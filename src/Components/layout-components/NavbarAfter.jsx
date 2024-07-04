import { Link } from "react-router-dom";

const NavbarAfter = () => {
  return (
    <nav className="px-4 sm:px-6 md:px-8 w-full bg-primary flex justify-between items-center h-[80px] sticky top-0 z-50">
      <div>
        <Link to="/homepageafter">
          <h1 className="font-bowlby text-2xl sm:text-3xl md:text-4xl text-white">
            KidsLearn
          </h1>
        </Link>
      </div>
      <div className="hidden md:flex gap-x-4 justify-center items-center">
        <Link
          to="/aboutussafter"
          className="text-white hover:text-black font-poppins transition duration-300"
        >
          Tentang Kami
        </Link>
        <Link
          to="/ourgoalsafter"
          className="text-white hover:text-black font-poppins transition duration-300"
        >
          Tujuan
        </Link>
        <Link
          to="/quiz"
          className="text-white hover:text-black font-poppins transition duration-300  "
        >
          Quiz
        </Link>
        <Link
          to="/materi"
          className="text-white hover:text-black font-poppins transition duration-300"
        >
          Materi
        </Link>
        <h1 className="font-bowlby text-white text-xl">Hallo !!!!</h1>
        <Link
          to={"/personal"}
          className="flex items-center bg-white hover:bg-black hover:text-white text-primary font-poppins py-2 px-3 rounded-md transition duration-300"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            fontWeight: "bold",
            letterSpacing: "1px",
            lineHeight: "1.2",
            fontFamily: "Poppins, sans-serif",
            textAlign: "center",
          }}
        >
          <span className="text-xl font-poppins">Hegi</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavbarAfter;
