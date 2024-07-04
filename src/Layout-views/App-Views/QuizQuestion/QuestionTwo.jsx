import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const questions = [
  {
    id: 1,
    question: "“Apa kepanjangan dari CSS?”",
    explanation:
      "Bentuk lengkap dari CSS adalah Cascading Style Sheets. Cascading Style Sheets adalah bahasa style sheet yang digunakan untuk mendeskripsikan presentasi dokumen yang ditulis dalam bahasa markup seperti HTML. CSS adalah teknologi landasan World Wide Web, bersama dengan HTML dan JavaScript.",
    options: [
      { text: "Cascade Style Sheet", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Color Style Sheet", correct: false },
    ],
  },
  {
    id: 2,
    question: "Apa yang di maksud dengan selector pada CSS",
    explanation:
      " CSS selector adalah bagian pertama dari sebuah aturan CSS. Ini bisa berupa elemen HTML atau pola elemen serta istilah lain yang memberi tahu browser elemen HTML mana yang harus dipilih untuk menerapkan nilai properti CSS di dalam aturan tersebut.",
    options: [
      {
        text: " CSS selector adalah sekumpulan properti yang akan diterapkan pada elemen HTML",
        correct: false,
      },
      { text: " CSS selector adalah nama file CSS.", correct: false },
      {
        text: "CSS selector adalah bagian pertama dari sebuah aturan CSS. Ini bisa berupa elemen HTML atau pola elemen.",
        correct: true,
      },
    ],
  },
  {
    id: 3,
    question:
      "Dalam sebuah file CSS, terdapat sebuah aturan CSS untuk tag paragraf dengan apa yang dapat disebut sebagai p ? ",
    explanation:
      "Dalam sebuah aturan CSS, elemen HTML yang kita tulis CSS-nya dikenal sebagai CSS Selector",
    options: [
      { text: "Selector", correct: true },
      { text: " Attribute", correct: false },
      { text: "Tag", correct: false },
    ],
  },
  {
    id: 4,
    question:
      "Untuk membuat teks menjadi miring, properti CSS apa yang digunakan?",
    explanation:
      "Properti font-style digunakan untuk menentukan gaya font, yaitu untuk membuat teks menjadi miring. Untuk membuat teks miring, nilai italic digunakan.",
    options: [
      { text: "font-family", correct: false },
      { text: "font-style", correct: true },
      { text: "font", correct: false },
    ],
  },
  {
    id: 5,
    question: "Apa saja nilai valid dari properti font-style?",
    explanation:
      "Atribut yang digunakan untuk menentukan URL gambar pada HTML adalah atribut src. Atribut ini digunakan dalam elemen <img> untuk menentukan sumber atau URL gambar yang akan ditampilkan di halaman web. Berikut adalah penjelasan lebih lanjut mengenai atribut src ",
    options: [
      {
        text: " italic, bold, bolder",
        correct: false,
      },
      { text: "normal, bold, italic", correct: false },
      {
        text: "inherit, italic, normal, oblique",
        correct: true,
      },
    ],
  },
];

const QuestionTwo = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [showResult, setShowResult] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 1) {
          clearInterval(timer);
          handleTimeOut();
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [currentQuestion]);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 20);
      setCorrectAnswer(true);
    } else {
      setCorrectAnswer(false);
    }
    setTimeout(() => {
      setCorrectAnswer(null);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        setTimeLeft(60);
      } else {
        setShowResult(true);
      }
    }, 3000);
  };

  const handleTimeOut = () => {
    setCorrectAnswer(false);
    setTimeout(() => {
      setCorrectAnswer(null);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        setTimeLeft(30);
      } else {
        setShowResult(true);
      }
    }, 3000);
  };

  if (showResult) {
    return (
      <div className="bg-primary flex justify-center items-center min-h-screen  ">
        <div className="result text-center mt-8">
          <h1 className="text-4xl font-bold mb-4">
            {score >= 50 ? "KEREN!!!🔥" : "GAPAPA COBA LAGI !!! 🔥"}
          </h1>
          <p className="text-xl mb-4">
            {score >= 50
              ? "Selamat, kamu sudah menyelesaikan quiznya dengan baik!"
              : "Yah, score kamu masih kurang nih. Mau coba main lagi?"}
          </p>
          <p className="text-xl mb-8">Score: {score}</p>
          <div className="flex justify-center flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=" text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              <Link
                to="/quizafter"
                id="quiz-page"
                className="bg-white text-black font-semibold px-4 py-2 rounded-lg mb-2 mx-2 hover:bg-black hover:text-white transition duration-300  "
              >
                Back To Quiz-Page
              </Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=" text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              <Link
                to="/homepageafter"
                id="home-page"
                className="text-white font-semibold bg-secondary rounded-lg px-4 py-2 mb-2 mx-2 hover:bg-black hover:text-white transition duration-300"
              >
                Back To <i>KidsLearn</i>
              </Link>
            </motion.button>
          </div>
        </div>
      </div>
    );
  }

  const current = questions[currentQuestion];

  return (
    <div className=" flex justify-center items-center min-h-screen bg-cover bg-no-repeat bg-primary w-full h-full">
      {correctAnswer === null ? (
        <div className="question flex flex-col items-center text-center p-8  rounded-2xl bg-white shadow-lg  max-w-4xl">
          <p className="text-xl font-bold mb-16">{current.question}</p>
          <div className="jawab flex flex-col items-center">
            {current.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option.correct)}
                className="bg-primary text-white font-semibold px-8 py-2 rounded-full my-2 hover:bg-hover w-full"
              >
                {String.fromCharCode(65 + index)}. {option.text}
              </button>
            ))}
            <div className="panjang w-full my-4">
              <div
                className="panjang-dalam bg-secondary h-2 rounded-full"
                style={{
                  width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                }}
              ></div>
              <p className="text-gray-500 text-sm mt-1">
                {currentQuestion + 1}/5
              </p>
            </div>
            <p className="waktu text-xl font-bold">
              Waktu : <span>{timeLeft}</span> detik
            </p>
          </div>
        </div>
      ) : (
        <div className="jawaban flex flex-col items-center text-center p-8 bg-white shadow-lg rounded-lg max-w-xl">
          <h2 className="text-2xl font-bold mb-20">
            {correctAnswer ? "YEAY, KAMU BENAR" : "YAH, KAMU SALAH NIH..."}
          </h2>
          <div className="penjelasan flex flex-col items-start text-left">
            <h3 className="text-xl font-bold mb-2">Penjelasan :</h3>
            <p>{current.explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionTwo;
