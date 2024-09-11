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
        console.log("Fetched users data:", response.data); // Debugging
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
            <tr key={user.userId}>
              <td className="px-6 py-4 whitespace-nowrap text-base text-white border-r border-primary">
                {user.userName || "Unknown User"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-base text-white">
                <ul>
                  {Array.isArray(user.quiz) ? (
                    user.quiz.map((quizItem, index) => (
                      <li key={index} className="flex">
                        <p className="px-2">
                          Percobaan Ke {quizItem?.experiment || "N/A"}
                        </p>
                        | {quizItem?.title || "No Title"} :{" "}
                        {quizItem?.score ?? "N/A"}
                      </li>
                    ))
                  ) : (
                    <li>Tidak ada data kuis untuk pengguna ini</li>
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
