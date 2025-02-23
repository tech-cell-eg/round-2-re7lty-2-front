// import { services } from "./data";
import Services, { ServicesProps } from "./Services";
import cyrlyArrow2 from "../assets/cyrlyArrow2.png"
import { useEffect, useState } from "react";
import axios from "axios";
const ServicesSection: React.FC = () => {
    
    const [services, setservices] = useState<ServicesProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

useEffect(() => {
    const fetchTrips = async () => {
        try {
            const response = await axios.get("https://re7lty-2.digital-vision-solutions.com/api/showservices");
            const transformedservices = response.data.data.map((service: ServicesProps) => ({
                id: service.id,
                image: service.image,
                service_name: service.service_name,
                description: service.description,
            }));
            setservices(transformedservices);
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
        <section id="services" className="mt-24 mb-5">
            {/* Title Section */}
            <div className="text-center my-12">
                <h2 className="font-semibold text-gray-500 mb-1 text-md md:text-2xl">تمتع في رحلتك</h2>
                <h1 className="font-bold  text-2xl md:text-5xl">مجموعة من خدماتنا</h1>
            </div>
            {/* Cards Container */}
<div  className="relative max-w-screen-xl mx-auto my-5">
                {loading ? (
                    <p className="text-center text-gray-500">جارٍ تحميل الرحلات...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                    <div dir="rtl" className="relative flex max-md:flex-col max-md:gap-8 md:flex-row justify-around items-center px-4 py-10 mx-12 rounded-3xl bg-[#F1EFFD]">
                {services.map((service: ServicesProps, index) => (
                    <Services key={index} image={service.image} service_name={service.service_name} description={service.description}  />
                ))}
                <img src={cyrlyArrow2} alt="" className="w-[51px] h-[107px] absolute top-0 left-1/2 transform translate-x-[-120px]" />
            </div> 
                )}
            </div>
        </section>

    )
}

export default ServicesSection