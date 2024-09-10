import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ButtonQuiz from "../../../Components/shared-components/ButtonQuiz";
import cardquiz from "../../../../public/Landing-Views/Quiz/ImageCardSatu-Quiz.png";
import quizheading from "../../../../public/Landing-Views/Quiz/ImageHeading-Quiz.png";

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

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        // Fetch data untuk HTML
        const htmlResponse = await fetch(
          "http://localhost:3001/api/questions/html"
        );
        const htmlData = await htmlResponse.json();

        // Fetch data untuk CSS
        const cssResponse = await fetch(
          "https://kidslearn-server.vercel.app/api/questions/css"
        );
        const cssData = await cssResponse.json();

        // Gabungkan data HTML dan CSS
        setQuizzes([...htmlData, ...cssData]);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };

    fetchQuizzes();
  }, []);

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
          <motion.div variants={itemVariants}>
            <ButtonQuiz to="/quizsatu/66def456c85bab5bc2d9da24">
              Mulai Quiz
            </ButtonQuiz>
          </motion.div>
        </motion.div>

        {/* Konten Statis untuk CSS */}
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
          <motion.div variants={itemVariants}>
            <ButtonQuiz to="/quizdua">Mulai Quiz</ButtonQuiz>
          </motion.div>
        </motion.div>

        {/* Mapping Data Kuis untuk Tombol Dinamis */}
        {quizzes.map((quiz) => (
          <motion.div
            key={quiz._id}
            className="flex gap-4"
            variants={itemVariants}
          >
            {quiz.subject === "HTML" && (
              <ButtonQuiz to={`/quiz/${quiz._id}`}>Mulai Quiz HTML</ButtonQuiz>
            )}
            {quiz.subject === "CSS" && (
              <ButtonQuiz to={`/quiz/${quiz._id}`}>Mulai Quiz CSS</ButtonQuiz>
            )}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
