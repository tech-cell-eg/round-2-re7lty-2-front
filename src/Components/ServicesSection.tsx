import { services } from "./data";
import Services, { ServicesProps } from "./Services";
import cyrlyArrow2 from "../assets/cyrlyArrow2.png"
const ServicesSection: React.FC = () => {
    return (

        <section id="services" className="mt-24 mb-5">
            {/* Title Section */}
            <div className="text-center my-12">
                <h2 className="font-semibold text-gray-500 mb-1 text-md md:text-2xl">تمتع في رحلتك</h2>
                <h1 className="font-bold  text-2xl md:text-5xl">مجموعة من خدماتنا</h1>
            </div>
            {/* Cards Container */}
            <div dir="rtl" className="relative flex max-md:flex-col max-md:gap-8 md:flex-row justify-around items-center px-4 py-10 mx-12 rounded-3xl bg-[#F1EFFD]">
                {services.map((service: ServicesProps, index) => (
                    <Services key={index} img={service.img} service={service.service} desc1={service.desc1} desc2={service.desc2} />
                ))}
                <img src={cyrlyArrow2} alt="" className="w-[51px] h-[107px] absolute top-0 left-1/2 transform translate-x-[-120px]" />
            </div>
        </section>

    )
}

export default ServicesSection