import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const QuizListCSS = () => {
  const { quizId } = useParams();
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [results, setResults] = useState({});
  const userEmail = localStorage.getItem("email");

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await fetch(
          `https://kidslearn-server.vercel.app/api/questions/css/${quizId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setQuizzes(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
        setError("Failed to fetch quizzes");
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, [quizId]);

  const handleAnswerChange = (quizId, questionIndex, answer) => {
    setUserAnswers((prevAnswers) => {
      const updatedAnswers = {
        ...prevAnswers,
        [quizId]: {
          ...(prevAnswers[quizId] || {}),
          [questionIndex]: answer,
        },
      };

      // Debugging untuk melihat apakah jawaban sudah tersimpan
      console.log("Updated userAnswers:", updatedAnswers);

      return updatedAnswers;
    });
  };

  const handleSubmit = async (quizId) => {
    try {
      const answersForQuiz = userAnswers[quizId] || {};

      // Format jawaban sebagai array
      const formattedAnswers = Object.entries(answersForQuiz).map(
        ([questionIndex, answer]) => ({
          questionIndex: parseInt(questionIndex),
          answer,
        })
      );

      const response = await fetch(
        `https://kidslearn-server.vercel.app/api/questions/css/${quizId}/submit`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userEmail,
            quizId: quizId,
            userAnswers: formattedAnswers,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit answers");
      }

      const result = await response.json();
      setResults((prevResults) => ({
        ...prevResults,
        [quizId]: result,
      }));
    } catch (error) {
      console.error("Error submitting answers:", error);
      setError("Failed to submit answers");
    }
  };

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-no-repeat bg-primary w-full h-full p-6">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">All Quizzes</h1>
        <form>
          <div key={quizzes._id} className="mb-6">
            <h2 className="text-xl font-semibold mb-4">{quizzes.title}</h2>
            <p className="text-gray-600 mb-4">
              Pass Grade: {quizzes.passGrade}
            </p>
            {quizzes.questions.map((question, index) => (
              <div
                key={index}
                className="mb-4 p-4 border border-gray-200 rounded-lg"
              >
                <p className="text-lg font-semibold mb-2">
                  {question.question}
                </p>
                <div className="space-y-2 mb-4">
                  {question.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="flex items-center">
                      <input
                        type="radio"
                        name={`quiz-${quizzes._id}-question-${index}`}
                        value={option}
                        className="form-radio text-blue-500"
                        onChange={() =>
                          handleAnswerChange(quizzes._id, index, option)
                        }
                      />
                      <label className="ml-2">{option}</label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {results[quizzes._id] && (
              <div className="mt-6 p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Results</h3>
                <p className="text-gray-700">{results[quizzes._id].message}</p>
                <p className="text-gray-700">
                  Score: {results[quizzes._id].score.toFixed(2)}%
                </p>
              </div>
            )}
            <button
              type="button"
              className="bg-blue-500 text-white py-2 px-4 rounded"
              onClick={() => handleSubmit(quizzes._id)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuizListCSS;
