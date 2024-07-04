/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function ButtonQuiz({ children, to }) {
  return (
    <div className="mt-5 mb-11">
      <Link
        to={to}
        className="bg-black px-3 py-3 rounded-2xl text-white font-poppins text-lg hover:bg-white hover:text-black"
      >
        {children}
      </Link>
    </div>
  );
}
