import cewecomment from "../../../../public/Landing-Views/CommentSection/Cewe-CommentSection.png";
import cowocomment from "../../../../public/Landing-Views/CommentSection/Cowo-CommentSection.png";

export default function CommentSection() {
  return (
    <div>
      <div className="container bg-primary h-auto sm:h-[228px] mt-9">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-y-6 sm:gap-x-10 py-6">
          <div className="flex justify-center items-center bg-white rounded-3xl p-4">
            <img src={cewecomment} alt="" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold mb-2 font-poppins">
                Mari Belajar Tentang Bagaimana Caranya Membuat Website Statis
                !!!
              </h2>
              <div className="w-full mt-6">
                <hr className="bg-black h-1 w-full border-none" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center bg-white rounded-3xl p-4">
            <img src={cowocomment} alt="" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold mb-2 font-poppins">
                Selain Belajar Kalian Juga Bisa Bermain Quiz yang Menarik loh
                !!!
              </h2>
              <div className="w-full mt-6">
                <hr className="bg-black h-1 w-full border-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
