"use client";

import { BookOpen, LineChart, BarChart } from "lucide-react";

const tradingSkills = [
  {
    icon: BookOpen,
    title: "Clases de formación teórica",
    description:
      "Aprende los conceptos fundamentales del trading y cómo aplicarlos en el mercado",
  },
  {
    icon: LineChart,
    title: "Estructuramiento de plan de inversión riguroso",
    description:
      "Desarrolla un plan de inversión sólido y estructurado para alcanzar tus objetivos",
  },
  {
    icon: BarChart,
    title: "Clases de formación práctica",
    description:
      "Practica tus habilidades de trading en un entorno simulado y mejora tus resultados",
  },
];

// Definir una interfaz para los props de SkillCard
interface SkillCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const SkillCard = ({ icon: Icon, title, description }: SkillCardProps) => {
  return (
    <div className="bg-[#011627] border border-[#26C6DA]/20 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#26C6DA]/10">
      <div className="flex items-center space-x-3 mb-4">
        <Icon className="w-8 h-8 text-[#26C6DA]" />
        <h3 className="text-xl font-semibold text-[#26C6DA]">{title}</h3>
      </div>
      <p className="text-white/80 leading-relaxed">{description}</p>
    </div>
  );
};

export function TradingSkillsImprovement() {
  return (
    <section className="bg-[#011627] text-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#26C6DA]">
          Mejora tus habilidades de trading
        </h2>
        <p className="text-xl text-center text-white/80 mb-16 max-w-3xl mx-auto">
          Aprende a trading de manera efectiva
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tradingSkills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
