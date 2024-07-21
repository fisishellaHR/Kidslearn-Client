import emailfoot from "../../../public/shared-components/Email-footer.png";
import instafoot from "../../../public/shared-components/Insta-footer.png";
import whatsaapfoot from "../../../public/shared-components/Whatsapp-footer.png";
import xfoot from "../../../public/shared-components/X-footer.png";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-primary h-[127px] text-center flex justify-center items-center">
        <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl text-white">
          Lapak Ads
        </h1>
      </div>

      <div className="container mx-auto mt-12 md:mt-20 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
          <h1 className="font-bowlby text-2xl sm:text-3xl md:text-4xl text-primary">
            KidsLearn
          </h1>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <img
            src={emailfoot}
            className="w-12 h-12 md:w-16 md:h-16"
            alt="Email Icon"
          />
          <img
            src={instafoot}
            className="w-12 h-12 md:w-16 md:h-16"
            alt="Instagram Icon"
          />
          <img src={xfoot} className="w-12 h-12 md:w-16 md:h-16" alt="X Icon" />
          <img
            src={whatsaapfoot}
            className="w-12 h-12 md:w-16 md:h-16"
            alt="WhatsApp Icon"
          />
        </div>
      </div>

      <div className=" mx-auto mt-12 container">
        <hr className="bg-primary h-1" />
      </div>

      <div className="text-center mt-6 mb-4">
        <p className="font-poppins text-sm sm:text-lg text-primary">
          KidsLearn-2024
        </p>
      </div>
    </>
  );
};

export default Footer;
