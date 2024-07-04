import ButtonQuiz from "../../../Components/shared-components/ButtonQuiz";
import cardquiz from "../../../assets/Landing-Views/Quiz/ImageCardSatu-Quiz.png";
import quizheading from "../../../assets/Landing-Views/Quiz/ImageHeading-Quiz.png";
export default function QuizContent() {
  return (
    <>
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center my-8">
          <img src={quizheading} alt="Quiz Heading" className="mx-auto" />
        </div>

        <div className="bg-primary rounded-3xl flex flex-col items-center justify-center gap-12 py-12 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-x-20 text-white w-full lg:w-3/4">
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
          </div>
          <p className="text-center font-poppins text-2xl px-4 w-full md:w-2/3 lg:w-[813px]">
            Hai Sobat Kids! Yuk coba mainkan quiz ini supaya meningkatkan
            pengetahuan dasar kamu nih, HTML lebih lanjut!
          </p>
          <ButtonQuiz to="/quissatu">Mulai Quiz</ButtonQuiz>
        </div>

        <div className="bg-primary rounded-3xl flex flex-col items-center justify-center gap-12 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-x-20 text-white w-full lg:w-3/4">
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
          </div>
          <p className="text-center font-poppins text-2xl px-4 w-full md:w-2/3 lg:w-[813px]">
            Hai Sobat Kids! Yuk coba mainkan quiz ini supaya meningkatkan
            pengetahuan dasar kamu nih, HTML lebih lanjut!
          </p>
          <ButtonQuiz to="/quisdua">Mulai Quiz</ButtonQuiz>
        </div>
      </div>
    </>
  );
}
