import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserPersonal = () => {
  return (
    <section className="container mx-auto py-8 ">
      <div className="flex justify-between items-center">
        <Link
          to={"/homepageafter"}
          className="flex justify-start items-center mb-12 gap-x-6"
        >
          <FaArrowLeft className="text-4xl" />
          <h1 className="font-poppins ">Back To HomePage</h1>
        </Link>
        <Link className="flex justify-start items-center mb-12  text-white bg-primary hover:bg-secondary rounded-xl   hover:text-white py-2 px-2">
          Logout
        </Link>
      </div>
      <div className=" mx-auto bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Edit Personal
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold">
              Nama
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold">
              Email
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark"
          >
            Simpan Perubahan
          </button>
        </form>
      </div>
    </section>
  );
};

export default UserPersonal;
