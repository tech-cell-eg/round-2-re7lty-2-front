import {services }from "./data";
import Services, { ServicesProps } from "./Services";

const ServicesSection: React.FC=()=> {
  return (
    <section id="services" className="mt-24 mb-5">
        <div className="text-center my-12">
        <h2 className="font-semibold text-gray-500 mb-1 text-md md:text-2xl">تمتع في رحلتك</h2>
        <h1 className="font-bold  text-2xl md:text-5xl">مجموعة من خدماتنا</h1>
        </div>
    <div dir="rtl" className="flex max-md:flex-col max-md:gap-8 md:flex-row  justify-around items-center p-4 mx-12 rounded-3xl bg-[#F1EFFD]">
        {services.map((service:ServicesProps,index)=>(
            <Services key={index} img={service.img} service={service.service} desc1={service.desc1} desc2={service.desc2} />
))}
    </div>
    </section>
  
)}

export default ServicesSection