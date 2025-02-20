import React from "react";

interface TestimonialProps {
  name: string;
  image: string;
  rating: number;
  feedback: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, image, rating, feedback }) => {
  return (
    <div className="bg-[#F3F1FE] p-6 rounded-xl text-right max-sm:w-[200px] w-[300px] md:w-[250px] lg:w-[320px] flex flex-col h-full justify-between mx-auto">
      {/* Stars */}
      <div className="flex justify-end">
        {Array.from({ length: rating }).map((_, index) => (
          <span key={index} className="text-yellow-400 text-xl">★</span>
        ))}
      </div>
      {/* User Info */}
      <div className="flex items-center space-x-3 mt-2 justify-end">
        <span className="text-lg font-semibold">{name}</span>
        <img src={image} alt={name} className="w-10 h-10 rounded-full border" />
      </div>
      {/* Feedback */}
      <p className="text-gray-700 mt-3 leading-loose flex-grow">{feedback}</p>
    </div>
  );
};

export default TestimonialCard;
