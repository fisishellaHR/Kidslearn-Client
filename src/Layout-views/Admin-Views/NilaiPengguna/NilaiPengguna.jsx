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

        // Mengelompokkan data berdasarkan userId
        const groupedUsers = response.data.reduce((acc, userRecord) => {
          const {
            userId,
            userName,
            userEmail,
            title,
            passGrade,
            historyAnswer,
            experiment,
            score,
          } = userRecord;

          if (!acc[userId]) {
            acc[userId] = {
              userId,
              userName,
              userEmail,
              quizzes: [],
            };
          }

          acc[userId].quizzes.push({
            title: title || "No Title",
            passGrade: passGrade || "No PassGrade",
            historyAnswer: historyAnswer.map((quizItem) => ({
              questionId: quizItem.questionId,
              answer: quizItem.answer,
            })),
            experiment,
            score,
          });

          return acc;
        }, {});

        // Mengubah object menjadi array
        const result = Object.values(groupedUsers);
        setUsers(result);
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
            <th className="px-6 py-3 text-left text-lg font-extrabold text-primary uppercase tracking-wider border-r border-primary">
              Email
            </th>
            <th className="px-6 py-3 text-left text-lg font-extrabold text-primary uppercase tracking-wider">
              Nilai
            </th>
          </tr>
        </thead>
        <tbody className="bg-secondary divide-y divide-primary">
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.userId}>
                <td className="px-6 py-4 whitespace-nowrap text-base text-white border-r border-primary">
                  {user.userName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-white border-r border-primary">
                  {user.userEmail}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-white">
                  <ul>
                    {user.quizzes.length > 0 ? (
                      user.quizzes.map((quiz, index) => (
                        <li key={index} className="flex">
                          <p className="px-2">
                            {quiz.title
                              ? `${quiz.title} Percobaan ke ${quiz.experiment} : ${quiz.score}`
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
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center text-white">
                Tidak ada data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default NilaiPengguna;
