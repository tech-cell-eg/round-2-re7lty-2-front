import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface PricingCardProps {
    id?:number,
    price: number;
    title: string;
    description: string;
    features: string[];
    isHighlighted?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
    price,
    title,
    description,
    features,
    isHighlighted = false,
}) => {
    return (
        <div
            className={`p-6 rounded-lg shadow-[12px_12px_0_rgba(0,0,0,1)]
 border m-10 w-80
      transition-all duration-300 text-right
      ${isHighlighted ? "bg-[#46368B] text-white lg:-mt-15 scale-105" : "bg-yellow-100 text-black"}`}
        >
            {/* Price */}
            <h3 className="text-2xl font-bold">${price} / شخص</h3>
            <p className="text-lg font-semibold mt-2">{title}</p>

            {/* Description */}
            <p className={`text-sm pb-2 border-b pt-3 ${isHighlighted ? "border-white":"border-[#4C4C4C]"}`}>{description}</p>

            {/* Features List */}
            <ul className="mt-4 space-y-2">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center ">
                        <div  className="w-5 h-5 rounded-full bg-white flex justify-center items-center  me-2">
                        <FontAwesomeIcon className="text-black text-sm" icon={faCheck} />
                        </div>
                        <li  className="flex items-center gap-2 justify-center">
                            {feature}
                        </li>
                    </div>


                ))}
            </ul>

            {/* Button */}
            <button
                className={`mt-6 px-4 py-2 rounded-xl flex items-center gap-2 mx-auto justify-center w-full 
        ${isHighlighted ? "border border-white text-white hover:bg-gray-200 hover:text-black" : "border border-[#191919] text-black hover:bg-[#46368B]  hover:text-white"}`}
            >
                احجز الآن
            </button>
        </div>
    );
};

export default PricingCard;
