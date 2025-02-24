import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import TripCard, { TripCardProps } from "./TripCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

function SampleNextArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} next-arrow`}
            style={{
                ...style,
                background: "#fcc601",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                position: "absolute",
                right: "2px",
                zIndex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} prev-arrow`}
            style={{
                ...style,
                background: "#fcc601",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                position: "absolute",
                left: "0px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1,
            }}
            onClick={onClick}
        />
    );
}

const TripSection: React.FC = () => {
    const [trips, setTrips] = useState<TripCardProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

useEffect(() => {
    const fetchTrips = async () => {
        try {
            const response = await axios.get("https://re7lty-2.digital-vision-solutions.com/api/trips");
            const transformedTrips = response.data.data.data.map((trip: TripCardProps) => ({
                id: trip.id,
                name: trip.name,
                coast: trip.coast || 0,
                image:  trip.image,
                number_of_days: trip.number_of_days || 1,
            }));
            setTrips(transformedTrips);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) {
            setError("حدث خطأ أثناء جلب البيانات.");
        } finally {
            setLoading(false);
        }
    };

    fetchTrips();
}, []);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        rtl: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 2, infinite: true, dots: true } },
            { breakpoint: 800, settings: { slidesToShow: 2, slidesToScroll: 1, initialSlide: 2 } },
            { breakpoint: 500, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    };

    return (
        <section  className="mt-6" id="trips">
            {/* Title Section */}
            <div dir="rtl" className="ms-2 md:ms-15 mt-5 ">
            <h6 className=" mb-2 text-md md:text-2xl text-gray-400">قم بزيارة العالم</h6>
            <h1 className=" text-2xl md:text-5xl font-semibold">الرحلات التي نقدمها</h1>
            </div>
            {/* Cards Container */}
            <div  className="relative max-w-screen-xl mx-auto my-5">
                {loading ? (
                    <p className="text-center text-gray-500">جارٍ تحميل الرحلات...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                    <Slider {...settings} >
                        {trips.map((trip) => (
                            <TripCard key={trip.id} {...trip}  />
                        ))}
                    </Slider>
                )}
            </div>
        </section>
    );
}

export default TripSection;
