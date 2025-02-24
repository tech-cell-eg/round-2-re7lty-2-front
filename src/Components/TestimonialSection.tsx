import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import TestimonialCard, {TestimonialProps}  from "./TestimonialCard";
import cirlyArrow from "../assets/cirlyArrow.png"
import axios from "axios";
interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}


function PrevArrow({ className, style, onClick }: ArrowProps) {
  return (
    <div
      className={`${className} prev-arrow   shadow-lg`}
      style={{
        ...style,
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border:"solid 2px white",
        backgroundColor:"#6C50F5",
        position: "absolute",
        left: "50%",
        transform: "translateX(-125%)",
        top: "295px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} className="text-white" />
    </div>
  );
}

function NextArrow({ className, style, onClick }: ArrowProps) {
  return (
    <div
      className={`${className} next-arrow shadow-lg`}
      style={{
        ...style,
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border:"solid 2px white",
        backgroundColor:"#6C50F5",
        position: "absolute",
        left: "50%",
        transform: "translateX(10px)",
        top: "295px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
        
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronRight} className="text-white" />
    </div>
  );
}


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
  const [testimonials, settestimonial] = useState<TestimonialProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const baseImage="https://re7lty-2.digital-vision-solutions.com/";
useEffect(() => {
  const fetchTrips = async () => {
      try {
          const response = await axios.get("https://re7lty-2.digital-vision-solutions.com/api/testimonials");
          const transformedtestimonial = response.data.data.data.map((testimonial: TestimonialProps) => ({
              id: testimonial.id,
              name:testimonial.name,
              image: baseImage+testimonial.image,
              rating: testimonial.rating,
              content: testimonial.content,
          }));
          settestimonial(transformedtestimonial);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
          setError("حدث خطأ أثناء جلب البيانات.");
      } finally {
          setLoading(false);
      }
  };

  fetchTrips();
}, []);
  return (
    <section id="testimonials" className="text-center py-5">
      {/* Title */}
      <h3 className="text-gray-500 text-md md:text-2xl font-semibold">قالوا عنا</h3>
      <h2 className=" text-2xl md:text-5xl font-bold mt-2">آراء مجموعة من عملائنا</h2>

      {/* Slick Slider */}
      <div  className="relative max-w-screen-xl mx-auto my-5">
                {loading ? (
                    <p className="text-center text-gray-500">جارٍ تحميل الرحلات...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                  <Slider {...settings} className="flex gap-4">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="flex h-full">
                      <TestimonialCard {...testimonial} />
                    </div>
                  ))}
                </Slider>
                )}
                <img src={cirlyArrow} alt="cirlyArrow" className="absolute hidden md:left-[140px] lg:left-[245px] 2xl:left-[400px]  top-[-34px] w-[85px] h-[41px]" />

            </div>
    </section>
  );
};

export default Testimonials;
