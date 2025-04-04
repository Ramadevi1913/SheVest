import React from 'react';
import { FaChartLine, FaPiggyBank, FaUsers } from 'react-icons/fa';

const features = [
  {
    icon: <FaChartLine size={50} className="text-[#2F3E2E]" />,
    title: "Personalized Investments",
    description: "Optimize your financial portfolio: strategic loan management paired with tailored investment growth.",
  },
  {
    icon: <FaPiggyBank size={50} className="text-[#2F3E2E]" />,
    title: "Smart Savings",
    description: "Strategically save and manage your loans. Build a stronger financial future with integrated solutions.",
  },
  {
    icon: <FaUsers size={50} className="text-[#2F3E2E]" />,
    title: "Group Savings Plans",
    description: "Amplify your financial potential: Join group savings schemes, leverage collective investments, and access flexible loan options.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-[#F5F7F2]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#2F3E2E] mb-12">
          Our Services
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center bg-white p-8 rounded-3xl shadow-lg border border-[#C2D1BD] 
                         transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="bg-[#E1EDE0] p-4 rounded-full mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-[#2F3E2E] mb-3">{feature.title}</h3>
              <p className="text-[#4A5A49] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
