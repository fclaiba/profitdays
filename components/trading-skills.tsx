"use client";

import { BookOpen, LineChart, BarChart, ChevronDown } from "lucide-react";

const tradingSkills = [
  {
    icon: BookOpen,
    title: "Clases de formación teórica",
    cta: "Aprende los fundamentos",
  },
  {
    icon: LineChart,
    title: "Estructuramiento de plan de inversión riguroso",
    cta: "Desarrolla tu estrategia",
  },
  {
    icon: BarChart,
    title: "Clases de formación práctica",
    cta: "Practica tus habilidades",
  },
];

interface SkillCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  cta: string;
}

const SkillCard = ({ icon: Icon, title, cta }: SkillCardProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="bg-[#011627] border border-[#26C6DA]/20 rounded-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#26C6DA]/10 w-full h-[120px] sm:h-[150px] md:h-[180px] flex items-center mb-2 sm:mb-4">
        <div className="flex items-center space-x-3">
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#26C6DA] flex-shrink-0" />
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[#26C6DA] line-clamp-2">
            {title}
          </h3>
        </div>
      </div>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#26C6DA] font-medium text-center w-full">
        {cta}
      </p>
    </div>
  );
};

export function TradingSkillsImprovement() {
  return (
    <section className="bg-[#011627] text-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="inline-block bg-[#FF4136] text-white font-bold py-1 px-3 sm:py-2 sm:px-4 text-sm sm:text-base md:text-lg rounded-full">
            ¡Empieza ya!
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-[#26C6DA]">
          Mejora tus habilidades de trading
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-12 sm:mb-16 md:mb-20">
          {tradingSkills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>

        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <span className="inline-block bg-[#26C6DA] text-[#011627] font-bold py-1 px-3 sm:py-2 sm:px-4 text-sm sm:text-base md:text-lg rounded-full">
            ¡No te lo pierdas!
          </span>
        </div>

        <div className="flex justify-center">
          <ChevronDown className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-[#FF4136] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
