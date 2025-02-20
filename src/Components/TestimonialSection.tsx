import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import TestimonialCard from "./TestimonialCard";
import cirlyArrow from "../assets/cirlyArrow.png"
import {testimonials} from "./data"

interface ArrowProps extends React.HTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}
// Custom Previous Arrow
const PrevArrow = (props: ArrowProps) => (
  <button
    {...props}
    className="bg-[#6C50F5] absolute left-1/2 transform -translate-x-10  bottom-[-70px] bottom-[-70px] me-3 z-1 text-white w-8 h-8 flex items-center justify-center rounded-full border border-2 border-white shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
  >
    <FontAwesomeIcon icon={faChevronLeft} />
  </button>
);

// Custom Next Arrow
const NextArrow = (props: ArrowProps) => (
  <button
    {...props}
    className="bg-[#6C50F5] absolute left-1/2 transform translate-x-4 bottom-[-70px] ms-3 z-10 text-white w-8 h-8 flex items-center justify-center rounded-full border border-2 border-white shadow-[0_4px_10px_rgba(0,0,0,0.5)]"

  >
    <FontAwesomeIcon icon={faChevronRight} />
  </button>
);

const Testimonials: React.FC = () => {
  // Slider Settings
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    rtl: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 2, infinite: true, dots: true } },
      { breakpoint: 800, settings: { slidesToShow: 2, slidesToScroll: 1, initialSlide: 2 } },
      { breakpoint: 400, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="text-center py-5">
      {/* Title */}
      <h3 className="text-gray-500 text-2xl font-semibold">قالوا عنا</h3>
      <h2 className="text-5xl font-bold mt-2">آراء مجموعة من عملائنا</h2>

      {/* Slick Slider */}
      <div className="mt-[60px] px-4 relative mx-auto">
      <Slider {...settings} className="flex gap-4">
  {testimonials.map((testimonial, index) => (
    <div key={index} className="flex h-full">
      <TestimonialCard {...testimonial} />
    </div>
  ))}
</Slider>

        <img src={cirlyArrow} alt="cirlyArrow" className="absolute left-[245px]  top-[-34px] w-[85px] h-[41px]" />

      </div>
    </div>
  );
};

export default Testimonials;
