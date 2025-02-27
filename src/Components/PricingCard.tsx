import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export interface PricingCardProps {
    id?: number,
    price: number;
    type: string;
    description: string;
    features: string[];
    isHighlighted?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
    price,
    type,
    description,
    features,
    isHighlighted = false,
}) => {
    return (
        <div
            className={`p-6 rounded-lg shadow-[12px_12px_0_rgba(0,0,0,1)] border m-10 w-80 transition-all duration-300 text-right hover:scale-105 active:scale-105  cursor-pointer ${isHighlighted ? "bg-[#46368B] text-white lg:-mt-15 scale-103" : "bg-[#fef9c2] text-[#191919]"}`}
        >
            {/* Price */}
            <h3 className="text-4xl font-bold inline">${price}</h3><span className="text-xl"> / للشخص </span>
            <p className="text-2xl font-bold mt-2">{type}</p>

            {/* Description */}
            <p className={`text-lg font-light pb-2 border-b pt-3 ${isHighlighted ? "border-white text-white " : "border-[#4C4C4C] text-[#191919] "}`}>{description}</p>

            {/* Features List */}
            <ul className="mt-4 space-y-2">
                {Array.isArray(features) ? (
                    features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                            <div className="w-5 h-5 rounded-full bg-white flex justify-center items-center me-2">
                                <FontAwesomeIcon className="text-black text-sm" icon={faCheck} />
                            </div>
                            <li className={`flex items-center gap-2 justify-center ${isHighlighted ? " text-white " : " text-[#191919] "}`}>{feature}</li>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">لا توجد ميزات متاحة</p>
                )}
            </ul>
            {/* Button */}
            <button
                className={`mt-6 px-4 py-2 rounded-xl flex items-center gap-2 mx-auto justify-center w-full 
        ${isHighlighted ? "border border-white text-white hover:bg-gray-200 hover:text-black active:bg-gray-200 active:text-black" : "border border-[#191919] text-black hover:bg-[#46368B]  hover:text-white active:bg-[#46368B]  active:text-white"}`}
            >
                احجز الآن
            </button>
        </div>
    );
};

export default PricingCard;
