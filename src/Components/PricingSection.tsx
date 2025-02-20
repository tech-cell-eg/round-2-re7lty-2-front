import React from "react";
import PricingCard from "./PricingCard";
import { plans } from "./data";


const PricingSection: React.FC = () => {
  return (
    <div dir="rtl" id="pricing" className="text-start py-12">
      {/* Title Section */}
      <h2 className="text-gray-400 text-md md:text-2xl ms-15">لا تقلق حول التكلفة</h2>
      <h1 className=" text-2xl md:text-5xl font-bold text-gray-900 mt-2 ms-15 ">خطط تناسب ميزانيتك</h1>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-16">
        {plans.map((plan) => (
          <PricingCard key={plan.id} {...plan} isHighlighted={plan.id === 2} />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
