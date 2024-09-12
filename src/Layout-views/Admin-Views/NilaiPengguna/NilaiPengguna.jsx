import axios from "axios";
import { useEffect, useState } from "react";

const NilaiPengguna = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(
          "https://kidslearn-server.vercel.app/api/auth/getUsers"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    getUsers();
  }, []);

  return (
    <div className="overflow-auto bg-primary shadow-md rounded-lg p-6">
      <table className="min-w-full divide-y divide-primary">
        <thead className="bg-white">
          <tr>
            <th className="px-6 py-3 text-left text-lg font-extrabold text-primary uppercase tracking-wider border-r border-primary">
              User
            </th>
            <th className="px-6 py-3 text-left text-lg font-extrabold text-primary uppercase tracking-wider">
              Nilai
            </th>
          </tr>
        </thead>
        <tbody className="bg-secondary divide-y divide-primary">
          {users.map((user) => (
            <tr key={user._id}>
              <td className="px-6 py-4 whitespace-nowrap text-base text-white border-r border-primary">
                {user.username}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-base text-white">
                <ul>
                  {Array.isArray(user.historyAnswer) &&
                  user.historyAnswer.length > 0 ? (
                    user.historyAnswer.map((answerItem, index) => (
                      <li key={index} className="flex">
                        <p className="px-2">
                          {answerItem.title
                            ? `${answerItem.title} Percobaan ke ${
                                index + 1
                              } : ${answerItem.score}`
                            : "No Title"}
                        </p>
                      </li>
                    ))
                  ) : (
                    <li>Tidak ada data jawaban</li>
                  )}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NilaiPengguna;
