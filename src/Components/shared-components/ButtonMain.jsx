/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ButtonMain = ({ children, to }) => {
  return (
    <div className="mt-5 mb-11">
      <Link
        to={to}
        className="bg-black px-3 py-3 rounded-2xl text-white font-poppins text-lg hover:bg-white hover:text-black transition duration-300"
      >
        {children}
      </Link>
    </div>
  );
};

export default ButtonMain;
