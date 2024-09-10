/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { FaUsersViewfinder } from "react-icons/fa6";
import Modal from "react-modal";
import "../../../Modal.css";

const ViewModule = () => {
  const [modulesHTML, setModulesHTML] = useState([]);
  const [modulesCSS, setModulesCSS] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedModules, setSelectedModules] = useState(null);
  const [judul, setJudul] = useState("");
  const [link, setLink] = useState("");
  const [desc, setDesc] = useState("");
  const [rute, setRute] = useState("");

  useEffect(() => {
    getModulesHTML();
    getModulesCSS();
  }, []);

  // Mengatur konfigurasi axios untuk menggunakan kredensial
  axios.defaults.withCredentials = true;

  const deleteModulesHTML = async (id) => {
    try {
      const response = await axios.delete(
        `https://kidslearn-client.vercel.app/api/module/deleteModules/${id}`
      );
      alert("Data Berhasil Terhapus");
      console.log(response.data);
      getModulesHTML();
    } catch (error) {
      if (error.code === "ERR_NETWORK") {
        console.error("Kesalahan jaringan terjadi:", error.message);
      } else {
        console.error("Terjadi kesalahan:", error.message);
      }
      alert(error);
    }
  };
  const deleteModulesCSS = async (id) => {
    try {
      const response = await axios.delete(
        `https://kidslearn-client.vercel.app/api/moduledua/deleteModules/${id}`
      );
      alert("Data Berhasil Terhapus");
      console.log(response.data);
      getModulesCSS();
    } catch (error) {
      if (error.code === "ERR_NETWORK") {
        console.error("Kesalahan jaringan terjadi:", error.message);
      } else {
        console.error("Terjadi kesalahan:", error.message);
      }
      alert(error);
    }
  };

  const getModulesHTML = async () => {
    try {
      const response = await axios.get(
        "https://kidslearn-client.vercel.app/api/module/getModules"
      );
      console.log(response.data);
      setModulesHTML(response.data);
    } catch (error) {
      if (error.code === "ERR_NETWORK") {
        console.error("Kesalahan jaringan terjadi:", error.message);
      } else {
        console.error("Terjadi kesalahan:", error.message);
      }
    }
  };
  const getModulesCSS = async () => {
    try {
      const response = await axios.get(
        "https://kidslearn-client.vercel.app/api/moduledua/getModules"
      );
      console.log(response.data);
      setModulesCSS(response.data);
    } catch (error) {
      if (error.code === "ERR_NETWORK") {
        console.error("Kesalahan jaringan terjadi:", error.message);
      } else {
        console.error("Terjadi kesalahan:", error.message);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `https://kidslearn-client.vercel.app/api/${rute}/updateModule`,
        {
          id: selectedModules._id,
          judul,
          link,
          desc,
        }
      );
      alert("Data Berhasil Terupdate");
      getModulesHTML();
      getModulesCSS();
      setModalIsOpen(false);
    } catch (error) {
      alert(error);
    }
  };
  const openModal = (modules, tipe) => {
    setSelectedModules(modules);
    setRute(tipe);
    setJudul(modules.judul);
    setLink(modules.link);
    setDesc(modules.desc);
    setModalIsOpen(true);
    console.log(tipe);
  };

  const closeModal = () => {
    setSelectedModules(null);
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="overflow-auto bg-primary shadow-md rounded-lg p-6 mb-10">
        <table className="min-w-full divide-y divide-primary">
          <thead className="bg-white">
            <tr>
              <th className="px-6 py-3 text-left text-lg font-extrabold text-primary uppercase tracking-wider border-r border-primary">
                Module Name (HTML)
              </th>
              <th className="text-center py-3 text-left text-lg font-extrabold text-primary uppercase border-r border-primary">
                Detail Module
              </th>
              <th className="text-center py-3 text-left text-lg font-extrabold text-primary uppercase">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="bg-secondary divide-y divide-primary">
            {modulesHTML.map((module) => (
              <tr key={module._id}>
                <td className="px-6 py-4 whitespace-nowrap text-base text-white border-r border-primary">
                  {" "}
                  {module.judul}
                </td>

                <td className="px-1 py-2 whitespace-nowrap text-base text-white border-r border-primary text-center">
                  <button className="text-yellow-500 hover:text-yellow-700">
                    <FaUsersViewfinder
                      onClick={() => openModal(module, "module")}
                    />
                  </button>
                </td>
                <td className="px-1 py-2 whitespace-nowrap text-base text-white text-center">
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrashAlt onClick={() => deleteModulesHTML(module._id)} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="overflow-auto bg-primary shadow-md rounded-lg p-6">
        <table className="min-w-full divide-y divide-primary">
          <thead className="bg-white">
            <tr>
              <th className="px-6 py-3 text-left text-lg font-extrabold text-primary uppercase tracking-wider border-r border-primary">
                Module Name (CSS)
              </th>
              <th className="text-center py-3 text-left text-lg font-extrabold text-primary uppercase border-r border-primary">
                Detail Module
              </th>
              <th className="text-center py-3 text-left text-lg font-extrabold text-primary uppercase">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="bg-secondary divide-y divide-primary">
            {modulesCSS.map((module) => (
              <tr key={module._id}>
                <td className="px-6 py-4 whitespace-nowrap text-base text-white border-r border-primary">
                  {" "}
                  {module.judul}
                </td>

                <td className="px-1 py-2 whitespace-nowrap text-base text-white border-r border-primary text-center">
                  <button className="text-yellow-500 hover:text-yellow-700">
                    <FaUsersViewfinder
                      onClick={() => openModal(module, "moduledua")}
                    />
                  </button>
                </td>
                <td className="px-1 py-2 whitespace-nowrap text-base text-white text-center">
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrashAlt onClick={() => deleteModulesCSS(module._id)} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="User Details"
          className="modal"
          overlayClassName="modal-overlay"
        >
          {selectedModules && (
            <div>
              <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-4">
                  <label
                    htmlFor="moduleId"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Judul
                  </label>
                  <input
                    type="text"
                    name="moduleId"
                    id="moduleId"
                    className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    defaultValue={selectedModules.judul}
                    onChange={(e) => setJudul(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="moduleJudul"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Link
                  </label>
                  <input
                    type="text"
                    name="moduleJudul"
                    id="moduleJudul"
                    className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    defaultValue={selectedModules.link}
                    onChange={(e) => setLink(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="moduleLink"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Deskripsi
                  </label>
                  <input
                    type="text"
                    name="moduleLink"
                    id="moduleLink"
                    className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    defaultValue={selectedModules.desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </div>
                <button className="flex justify-between items-center gap-x-7">
                  <p>Update</p> <FaEdit />
                </button>
              </form>

              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                onClick={closeModal}
              >
                Tutup
              </button>
            </div>
          )}
        </Modal>
      </div>
    </>
  );
};

export default ViewModule;
