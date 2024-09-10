import axios from "axios";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export const FeedBack = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
    console.log(users);
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://kidslearn-client.vercel.app/api/auth/getUsers"
      );
      setUsers(response.data);
      console.log(users);
    } catch (error) {
      console.log(error);
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
          {users.map((user) => (
            <tr key={user._id}>
              <td className="px-6 py-4 whitespace-nowrap text-base text-white border-r border-primary">
                {user.username}
              </td>
              <td>
                <ul>
                  {user.suggestions.map((suggestion) => (
                    <td
                      key={suggestion._id}
                      className="flex justify-start  whitespace-nowrap text-base text-white  border-primary"
                    >
                      <ol>
                        <li>{suggestion.suggestion}</li>
                      </ol>
                    </td>
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
