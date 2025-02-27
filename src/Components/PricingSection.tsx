import React, { useState, useEffect } from "react";
import axios from "axios";
import PricingCard, { PricingCardProps } from "./PricingCard";

const PricingSection: React.FC = () => {
  const [plans, setPlans] = useState<PricingCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const fetchPlans = async () => {
    try {
      const response = await axios.get("https://re7lty-2.digital-vision-solutions.com/api/plans");
      const transformedPlans = response.data.data.data.map((plan: PricingCardProps) => ({
        id: plan.id,
        price: plan.price,
        type: plan.type,
        description: plan.description,
        features: plan.features,
      }));
      setPlans(transformedPlans);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("حدث خطأ أثناء جلب البيانات.");
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <div id="pricing" className="text-start py-12">
      {/* Title Section */}
      <div dir="rtl" className="ms-2 md:ms-15">
        <h2 className="text-gray-400 text-md md:text-2xl">لا تقلق حول التكلفة</h2>
        <h1 className=" text-2xl md:text-5xl font-bold text-gray-900 mt-2 ">خطط تناسب ميزانيتك</h1>
      </div>
      {/* Cards Container */}
      <div dir="rtl" className="relative max-w-screen-xl mx-auto my-5">
        {loading ? (
          <p className="text-center text-gray-500">جارٍ تحميل الرحلات...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mt-16">
            {plans.map((plan) => (
              <PricingCard key={plan.id} {...plan} isHighlighted={plan.id === 2} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingSection;
