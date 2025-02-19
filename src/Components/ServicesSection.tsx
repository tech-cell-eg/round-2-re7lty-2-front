import {services }from "./data";
import Services, { ServicesProps } from "./Services";

const ServicesSection: React.FC=()=> {
  return (
    <div className="my-24">
        <div className="text-center my-12">
        <h2 className="font-semibold text-gray-500 mb-1">تمتع في رحلتك</h2>
        <h1 className="font-semibold text-3xl">مجموعة من خدماتنا</h1>
        </div>
    <div dir="rtl" className="flex max-md:flex-col max-md:gap-8 md:flex-row  justify-around items-center p-4 mx-12 rounded-3xl bg-[#F1EFFD]">
        {services.map((service:ServicesProps)=>(
            <Services img={service.img} service={service.service} desc1={service.desc1} desc2={service.desc2} />
))}
    </div>
    </div>
  
)}

export default ServicesSection