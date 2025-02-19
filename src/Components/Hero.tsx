import React from "react";
import hero from "../assets/hero.jpg"
import arrow from "../assets/arrow.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Hero: React.FC = () => {
  return (
    <section
      className="h-screen w-full flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Content */}
      <div className=" text-white p-6">
        <h1 className="text-4xl sm:text-6xl font-bold">
          سافر معنا إلى العالم
        </h1>
        <p className="mt-4 text-lg sm:text-xl">
          نوفر لك أفضل الرحلات التي تحتاجها لجميع البلدان <br />
          وخدمات مخصصة لك ولعائلتك
        </p>

        {/*  Button */}
        <div className="flex justify-center mb-[100px]">
          <div className=" flex justify-center gap-2 mt-6 px-6 py-3 bg-yellow-400 text-black text-lg w-[200px] font-semibold rounded-xl hover:bg-yellow-500 active:bg-yellow-500 transition cursor-pointer">
            <div className=" flex justify-center items-center bg-white p-2 rounded-full w-[30px] h-[30px]" ><FontAwesomeIcon className="text-xl" icon={faAngleLeft} /></div>
            احجز الآن

          </div>
        </div>
        {/* Scroll down */}
        <div className="relative">
        <span className="text-xl font-semibold mt-[50px] cursor-pointer">تابع للأسفل</span>
        <img className="absolute md:left-[50px] bottom-[-20px] sm:left-[-10px] bottom-[-45px]" src={arrow} alt="" />
        </div>
        
      </div>
      <div className="relative w-[36px] h-[60px] bg-white rounded-2xl">
        <span className="absolute top-2 left-1/2 transform -translate-x-1/2 w-[4px] h-[12px] bg-black rounded-3xl block"></span>
      </div>

    </section>
  );
};

export default Hero;
