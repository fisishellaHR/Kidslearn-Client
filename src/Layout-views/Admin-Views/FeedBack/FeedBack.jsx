import axios from "axios";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export const FeedBack = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://kidslearn-server.vercel.app/api/auth/getAllUsers"
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="overflow-auto bg-primary shadow-md rounded-lg p-6">
      <table className="min-w-full divide-y divide-primary">
        <thead className="bg-white">
          <tr>
            <th className="px-6 py-3 text-left text-lg font-extrabold text-primary uppercase tracking-wider border-r border-primary">
              User
            </th>
            <th className="px-6 py-3 text-left text-lg font-extrabold text-primary uppercase tracking-wider">
              Masukan
            </th>
          </tr>
        </thead>
        <tbody className="bg-secondary divide-y divide-primary">
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id}>
                <td className="px-6 py-4 whitespace-nowrap text-base text-white border-r border-primary">
                  {user.username}
                </td>
                <td>
                  <ul>
                    {Array.isArray(user.suggestions) &&
                    user.suggestions.length > 0 ? (
                      user.suggestions.map((suggestion) => (
                        <li
                          key={suggestion._id}
                          className="flex justify-start whitespace-nowrap text-base text-white border-primary"
                        >
                          {suggestion.suggestion}
                        </li>
                      ))
                    ) : (
                      <li>Tidak ada masukan</li>
                    )}
                  </ul>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="text-center text-white">
                Tidak ada data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
