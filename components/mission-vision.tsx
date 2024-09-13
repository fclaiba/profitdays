"use client";

import { Target, Eye } from "lucide-react";

const missionVisionData = [
  {
    icon: Target,
    title: "Misión",
    description:
      "Nuestra misión es brindar educación de calidad en inversiones, para que nuestros estudiantes tomen decisiones financieras sólidas y rentables. Accesible, actualizada y personalizada.",
  },
  {
    icon: Eye,
    title: "Visión",
    description:
      "Nuestra visión es capacitar a inversores profesionales, combinando conocimientos técnicos y psicológicos con herramientas innovadoras y un enfoque práctico. Para que alcancen el éxito en los mercados financieros con confianza.",
  },
];

// Definir una interfaz para los props de MissionVisionCard
interface MissionVisionCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const MissionVisionCard = ({
  icon: Icon,
  title,
  description,
}: MissionVisionCardProps) => {
  return (
    <div className="bg-[#011627] border border-[#26C6DA]/20 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#26C6DA]/10 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(50%-1rem)]">
      <div className="flex items-center space-x-3 mb-4">
        <Icon className="w-8 h-8 text-[#26C6DA] flex-shrink-0" />
        <h3 className="text-2xl font-semibold text-[#26C6DA]">{title}</h3>
      </div>
      <p className="text-white/80 leading-relaxed">{description}</p>
    </div>
  );
};

export function MissionVision() {
  return (
    <section className="bg-[#011627] text-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#26C6DA]">
          Nuestra misión y visión
        </h2>
        <p className="text-xl text-center text-white/80 mb-16 max-w-3xl mx-auto font-extrabold">
          Conoce nuestros objetivos y valores
        </p>
        <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
          {missionVisionData.map((item, index) => (
            <MissionVisionCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
