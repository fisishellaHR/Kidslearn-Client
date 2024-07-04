import headingabout from "../../../assets/Landing-Views/AboutUs/Heading-AboutUs.png";
import imageabout from "../../../assets/Landing-Views/AboutUs/ImageContent-AboutUs.png";

export default function AboutContent() {
  return (
    <>
      <div className="container flex flex-col gap-y-16">
        <div className="my-16">
          <img src={headingabout} alt="" />
        </div>
        <div>
          <img src={imageabout} alt="" className="mx-auto" />
        </div>
        <div className="text-center">
          <h1 className=" font-bowlby text-[64px]">KidsLearn</h1>
        </div>
        <div className="text-center mb-16">
          <p className="text-2xl font-poppins px-10 ">
            Selamat datang di KidsLearn, platform e-learning yang dirancang
            khusus untuk membantu anak-anak sekolah dasar dalam memanfaatkan
            teknologi sebagai alat pembelajaran. Kami memahami bahwa pengenalan
            teknologi sejak dini sangat penting dalam era digital ini. Oleh
            karena itu, KidsLearn hadir dengan program yang menyenangkan dan
            interaktif untuk mengajarkan anak-anak cara membuat website statis.
            Melalui metode yang ramah anak dan mudah diikuti, kami berkomitmen
            untuk membangun fondasi keterampilan teknologi yang kuat bagi
            generasi muda. Di KidsLearn, kami percaya bahwa setiap anak memiliki
            potensi untuk menjadi kreator di dunia digital. Program kami tidak
            hanya fokus pada aspek teknis, tetapi juga mendorong kreativitas dan
            pemecahan masalah. Dengan panduan langkah demi langkah, proyek
            menarik, dan dukungan dari tim pengajar berpengalaman, kami
            bertujuan untuk membuat pembelajaran teknologi menjadi pengalaman
            yang menyenangkan dan memotivasi. Bergabunglah dengan kami di
            KidsLearn dan mulailah petualangan belajar yang akan membuka pintu
            menuju masa depan yang penuh inovasi dan peluang!
          </p>
        </div>
      </div>
    </>
  );
}
