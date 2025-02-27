import React from "react";
import hero from "../assets/hero.jpg"
import arrow from "../assets/arrow.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Hero: React.FC = () => {
  return (
    <section id="hero"
      className="h-[700px] xl:h-screen w-full flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Content */}
      <div className=" text-white p-4 text-center mt-20 md:mt-20 md:p-6  ">
        <h1 className=" text-5xl leading-[55px] md:text-5xl font-bold mb-6 md:mb-6">
          سافر معنا إلى العالم
        </h1>
        <p className=" text-2xl leading-[35px] md:leading-[35px] md:text-2xl mb-6 font-semibold 	">
          نوفر لك أفضل الرحلات التي تحتاجها لجميع البلدان <br />
          وخدمات مخصصة لك ولعائلتك
        </p>

        {/*  Button */}
        <div className="flex justify-center mb-10 md:mb-[100px]">
          <div className=" flex justify-center gap-2 w-full mt-3 p-2 bg-[#fdc700] text-black text-lg  font-semibold rounded-xl hover:bg-[#f0b100] active:bg-[#f0b100] transition cursor-pointer md:px-6 md:mt-6 md:w-[200px]">
            <div className=" flex justify-center items-center bg-white p-2 rounded-full w-[30px] h-[30px]" ><FontAwesomeIcon className="text-xl" icon={faAngleLeft} /></div>
            احجز الآن

          </div>
        </div>
        {/* Scroll down */}
        <div className="relative mt-20">
          <span className="text-xl font-semibold  cursor-pointer">تابع للأسفل</span>
          <img className="absolute max-sm:left-[-15px] max-sm:bottom-[-87px] sm:left-[25px] bottom-[-87px] md:left-[30px] md:bottom-[-45px] md:w-[132] md:h-[164] " src={arrow} alt="" />
        </div>

      </div>
      <div className="relative w-[32px] h-[53px] md:w-[36px] md:h-[60px] bg-white rounded-2xl mb-2">
        <span className=" absolute top-2 left-1/2 transform -translate-x-1/2 w-[2px] h-[10px] md:w-[4px] md:h-[12px] bg-black rounded-3xl block"></span>
      </div>

    </section>
  );
};

export default Hero;
