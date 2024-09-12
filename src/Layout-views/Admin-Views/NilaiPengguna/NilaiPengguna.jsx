import axios from "axios";
import { useEffect, useState } from "react";

const NilaiPengguna = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(
          "https://kidslearn-server.vercel.app/api/user/getUsers"
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
            <tr key={user.userId}>
              <td className="px-6 py-4 whitespace-nowrap text-base text-white border-r border-primary">
                {user.userName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-base text-white">
                <ul>
                  {user.historyAnswer.map((answerItem, index) => (
                    <li key={index} className="flex">
                      <p className="px-2">
                        Percobaan Ke {answerItem.experiment}
                      </p>
                      {user.title} : {answerItem.answer}
                    </li>
                  ))}
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
