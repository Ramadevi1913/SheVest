import React from "react";
import about from "../../assets/img2.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1D2B36] to-[#2F3E2E] text-white mb-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6 text-[#D9E3DA]">Why Choose Us?</h2>
          <p className="text-lg leading-relaxed text-[#C2D1BD]">
            This is more than just finances; it's about building a foundation for your dreams. We believe in empowering women to take control of their financial narratives, fostering a supportive community where aspirations are nurtured and realized. It's about owning your future, defining your own path, and knowing that every financial step you take is an investment in your personal legacy. Join us, and discover the confidence that comes with financial well-being, where your potential is not just recognized, but celebrated.
          </p>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2">
          <img
            src={about}
            alt="About Us"
            className="w-full rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
