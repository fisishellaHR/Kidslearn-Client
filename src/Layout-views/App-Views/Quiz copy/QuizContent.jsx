import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ButtonQuiz from "../../../Components/shared-components/ButtonQuiz";
import cardquiz from "../../../../public/Landing-Views/Quiz/ImageCardSatu-Quiz.png";
import quizheading from "../../../../public/Landing-Views/Quiz/ImageHeading-Quiz.png";
import { useParams } from "react-router-dom"; // Import useParams

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function QuizContentAfter() {
  const [quizzes, setQuizzes] = useState([]);
  // const { quizId } = useParams(); // Ambil quizId dari URL

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        // Fetch data untuk HTML
        const htmlResponse = await fetch(
          `http://127.0.0.1:3000/api/questions/html/one/quiz`
        );
        const htmlData = await htmlResponse.json();
        // setQuizzes(htmlData);
        // Fetch data untuk CSS
        const cssResponse = await fetch(
          `http://127.0.0.1:3000/api/questions/css/one/quiz`
        );
        const cssData = await cssResponse.json();
        // setQuizzes(cssData);
        // Gabungkan data HTML dan CSS
        // const allData = [htmlData, cssData]
        // setQuizzes(allData);
        setQuizzes((prevQuizzes) => [...prevQuizzes, htmlData, cssData]);
        
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
      console.log(quizzes);
    };

    fetchQuizzes();
  }, []); // Tambahkan quizId ke dalam array dependensi

  return (
    <>
      <motion.div
        className="container mx-auto px-4 mb-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="text-center my-8" variants={itemVariants}>
          <img src={quizheading} alt="Quiz Heading" className="mx-auto" />
        </motion.div>

        {/* Konten Statis untuk HTML */}

        <motion.div
          className="bg-primary rounded-3xl flex flex-col items-center justify-center gap-12 py-12 mb-8"
          variants={itemVariants}
        >
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-x-20 text-white w-full lg:w-3/4"
            variants={itemVariants}
          >
            <img
              src={cardquiz}
              alt="Card Quiz"
              className="max-w-xs w-full md:w-1/3"
            />
            <div className="border-b-2 border-white text-center md:text-left w-full md:w-2/3">
              <h1 className="font-bowlby text-[40px] md:text-[80px]">
                Main Quiz
              </h1>
              <h2 className="font-bowlby text-[32px] md:text-[48px]">HTML</h2>
            </div>
          </motion.div>
          <motion.p
            className="text-center font-poppins text-2xl px-4 w-full md:w-2/3 lg:w-[813px]"
            variants={itemVariants}
          >
            Hai Sobat Kids! Yuk coba mainkan quiz ini supaya meningkatkan
            pengetahuan dasar kamu nih, HTML lebih lanjut!
          </motion.p>
          {quizzes.map((quiz) => (
            <motion.div variants={itemVariants} key={quizzes._id}>
              {quiz.title.includes("HTML") && (
                <ButtonQuiz to={`/quizsatu/${quiz._id}`}>Mulai Quiz</ButtonQuiz>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Konten Statis untuk CSS */}
        {quizzes.some((quiz) => quiz.title.includes("CSS")) && (
          <motion.div
            className="bg-primary rounded-3xl flex flex-col items-center justify-center gap-12 py-12"
            variants={itemVariants}
          >
            <motion.div
              className="flex flex-col md:flex-row items-center justify-between gap-x-20 text-white w-full lg:w-3/4"
              variants={itemVariants}
            >
              <img
                src={cardquiz}
                alt="Card Quiz"
                className="max-w-xs w-full md:w-1/3"
              />
              <div className="border-b-2 border-white text-center md:text-left w-full md:w-2/3">
                <h1 className="font-bowlby text-[40px] md:text-[80px]">
                  Main Quiz
                </h1>
                <h2 className="font-bowlby text-[32px] md:text-[48px]">CSS</h2>
              </div>
            </motion.div>
            <motion.p
              className="text-center font-poppins text-2xl px-4 w-full md:w-2/3 lg:w-[813px]"
              variants={itemVariants}
            >
              Hai Sobat Kids! Yuk coba mainkan quiz ini supaya meningkatkan
              pengetahuan dasar kamu nih, CSS lebih lanjut!
            </motion.p>
            {quizzes.map((quiz) => (
              <motion.div variants={itemVariants} key={quizzes._id}>
                {quiz.title.includes("CSS") && (
                  <ButtonQuiz to={`/quizdua/${quiz._id}`}>
                    Mulai Quiz
                  </ButtonQuiz>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Mapping Data Kuis untuk Tombol Dinamis */}
        {/* {quizzes.map((quiz) => (
          <motion.div
            key={quiz._id}
            className="flex gap-4"
            variants={itemVariants}
          > */}
        {/* Tombol berdasarkan title */}
        {/* {quiz.title.includes("HTML") && (
              <ButtonQuiz to={`/quiz/${quiz._id}`}>{quiz.title}</ButtonQuiz>
            )}
            {quiz.title.includes("CSS") && (
              <ButtonQuiz to={`/quiz/${quiz._id}`}>{quiz.title}</ButtonQuiz>
            )}
          </motion.div>
        ))} */}
      </motion.div>
    </>
  );
}
