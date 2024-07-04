import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const questions = [
  {
    id: 1,
    question: "“Kepanjangan dari HTML adalah”",
    image: "../asset/quiz-pubertas-nomor1.png",
    explanation: "HTML adalah singkatan dari Hypertext Markup Language.",
    options: [
      { text: "Hyperlink Mobile Language", correct: false },
      { text: "HyperText Markup Language", correct: true },
      { text: "Hyper This Mobile Lose", correct: false },
    ],
  },
  {
    id: 2,
    question: "Elemen HTML digambarkan oleh tag, ditulis menggunakan tanda",
    image: "../asset/quiz-pubertas-nomor2.png",
    explanation:
      "Tag adalah sebauh penanda awalan dan akhiran dari sebuah elemen di HTML. Tag dibuat dengan kurung siku ( <...> ), lalu di dalamnya berisi nama tag dan kadang juga ditambahkan dengan atribut. Contoh: <p> , <a> , <body> , <head> , dan sebagainya. Tag selalu ditulis berpasangan.",
    options: [
      { text: " Kurung sudut", correct: false },
      { text: " Kurung Kurawal", correct: false },
      { text: "Kurung siku", correct: true },
    ],
  },
  {
    id: 3,
    question:
      "Informasi atau perintah tambahan yang berada dalam elemen HTML disebut ?",
    image: "../asset/quiz-pubertas-nomor3.png",
    explanation:
      "Dengan kata sederhana, atribut HTML adalah apa yang memodifikasi elemen HTML. Biasanya berupa kata-kata unik yang disisipkan di dalam tag pembuka.",
    options: [
      { text: "atribut", correct: true },
      { text: " Elemen", correct: false },
      { text: "Tag", correct: false },
    ],
  },
  {
    id: 4,
    question:
      "Tag HTML yang memiliki peran penting untuk menunjukkan bagian isi halaman web adalah?",
    image: "../asset/quiz-pubertas-nomor4.png",
    explanation:
      "Body tag adalah tubuh dari HTML, yang berfungsi untuk menentukan bagaimana isi suatu dokumen yang akan ditampilkan pada web browser.",
    options: [
      { text: "Head", correct: false },
      { text: "Body", correct: true },
      { text: "Row", correct: false },
    ],
  },
  {
    id: 5,
    question:
      "Salah satu atribut yang digunakan untuk menentukan URL gambar pada html adalah?",
    image: "../asset/quiz-pubertas-nomor5.png",
    explanation:
      "Atribut yang digunakan untuk menentukan URL gambar pada HTML adalah atribut src. Atribut ini digunakan dalam elemen <img> untuk menentukan sumber atau URL gambar yang akan ditampilkan di halaman web. Berikut adalah penjelasan lebih lanjut mengenai atribut src ",
    options: [
      {
        text: " alt",
        correct: false,
      },
      { text: "img", correct: false },
      {
        text: "src",
        correct: true,
      },
    ],
  },
];

const QuestionOne = () => {
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
            <Link
              to="/quiz"
              id="quiz-page"
              className="bg-white text-black font-semibold px-4 py-2 rounded-lg mb-2 mx-2 hover:bg-black hover:text-white transition duration-300  "
            >
              Back To Quiz-Page
            </Link>
            <Link
              to="/homepage"
              id="home-page"
              className="text-white font-semibold bg-secondary rounded-lg px-4 py-2 mb-2 mx-2 hover:bg-black hover:text-white transition duration-300"
            >
              Back To <i>KidsLearn</i>
            </Link>
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

export default QuestionOne;
