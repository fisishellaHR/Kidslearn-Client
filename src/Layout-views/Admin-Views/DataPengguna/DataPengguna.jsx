/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaUsersViewfinder } from "react-icons/fa6";
import Modal from "react-modal";
import "../../../Modal.css";

const DataPengguna = () => {
  const [users, setUsers] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  axios.defaults.withCredentials = true;

  const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(
        // `https://kidslearn-client.vercel.app/api/auth/deleteUser/${userId}`
        `https://kidslearn-client.vercel.app/api/auth/deleteUser/${userId}`
      );
      console.log("User deleted:", response.data.message);
      setTimeout(() => {
        getUsers();
      }, 2000);
    } catch (error) {
      if (error.code === "ERR_NETWORK") {
        console.error("Kesalahan jaringan terjadi:", error.message);
      } else {
        console.error("Terjadi kesalahan:", error.message);
      }
    }
  };

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://kidslearn-client.vercel.app/api/auth/getUsers"
      );
      setUsers(response.data);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  const openModal = (user) => {
    setSelectedUser(user);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setModalIsOpen(false);
  };

  return (
    <div className="overflow-auto bg-primary shadow-md rounded-lg p-6">
      <table className="min-w-full divide-y divide-primary">
        <thead className="bg-white">
          <tr>
            <th className="px-6 py-3 text-left text-lg font-extrabold text-primary uppercase tracking-wider border-r border-primary">
              Username
            </th>

            <th className="text-center py-3 text-left text-lg font-extrabold text-primary uppercase border-r border-primary">
              Detail User
            </th>
            <th className="text-center py-3 text-left text-lg font-extrabold text-primary uppercase">
              Delete
            </th>
          </tr>
        </thead>
        <tbody className="bg-secondary divide-y divide-primary">
          {users.map((user) => {
            return (
              <tr key={user.userId}>
                <td className="px-6 py-4 whitespace-nowrap text-base text-white border-r border-primary">
                  {user.userName}
                </td>

                <td className="px-1 py-2 whitespace-nowrap text-base text-white border-r border-primary text-center">
                  <button
                    className="text-yellow-500 hover:text-yellow-700"
                    onClick={() => openModal(user)}
                  >
                    <FaUsersViewfinder />
                  </button>
                </td>
                <td className="px-1 py-2 whitespace-nowrap text-base text-white text-center">
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrashAlt onClick={() => deleteUser(user._id)} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="User Details"
        className="modal"
        overlayClassName="modal-overlay"
      >
        {selectedUser && (
          <div>
            <h2 className="text-xl font-bold">Detail User</h2>
            <p>
              <strong>ID:</strong> {selectedUser.userId}
            </p>
            <p>
              <strong>Username:</strong> {selectedUser.userName}
            </p>
            <p>
              <strong>Email:</strong> {selectedUser.userEmail}
            </p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              onClick={closeModal}
            >
              Tutup
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default DataPengguna;
