import imageabout from "../../../assets/Landing-Views/AboutUs/ImageContent-AboutUs.png";

export default function ContentKidsLearn() {
  return (
    <>
      <div className="container flex flex-col gap-y-6">
        <div>
          <img src={imageabout} alt="" className="w-96 mx-auto" />
        </div>
        <div className="text-center">
          <h1 className=" font-bowlby text-[32px]">KidsLearn</h1>
        </div>
        <div className="text-center ">
          <p className="text-2xl font-poppins px-10 ">
            Selamat datang Admin KidsLearn, platform e-learning yang dirancang
            khusus untuk membantu anak-anak sekolah dasar dalam memanfaatkan
            teknologi sebagai alat pembelajaran. Kami memahami bahwa pengenalan
            teknologi sejak dini sangat penting dalam era digital ini.
          </p>
        </div>
      </div>
    </>
  );
}
