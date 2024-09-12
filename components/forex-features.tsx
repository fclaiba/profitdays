"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LineChart, Code, DollarSign, Users } from "lucide-react";

const forexFeatures = [
  {
    title: "Análisis Técnico Avanzado",
    description:
      "Desarrolla tus habilidades en análisis técnico con nuestras herramientas y recursos educativos.",
    icon: LineChart,
  },
  {
    title: "Estrategias de Trading Automatizadas",
    description:
      "Crea tus propias estrategias de trading con nuestro lenguaje de programación fácil de usar.",
    icon: Code,
  },
  {
    title: "Simulación de Trading Realista",
    description:
      "Practica tus habilidades de trading en un entorno de simulación realista, sin riesgo de perder dinero.",
    icon: DollarSign,
  },
  {
    title: "Comunidad de Traders Activa",
    description:
      "Únete a nuestra comunidad de traders activa y aprende de otros traders experimentados.",
    icon: Users,
  },
];

// Definir una interfaz para los props de FeatureCard
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="bg-[#011627] border border-[#26C6DA]/20 rounded-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-[#26C6DA]/10 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1rem)]"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex items-center space-x-3 mb-4">
        <Icon className="w-6 h-6 text-[#26C6DA] flex-shrink-0" />
        <h3 className="text-xl font-semibold text-[#26C6DA]">{title}</h3>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-white/80 leading-relaxed">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function ForexFeatures() {
  return (
    <section className="bg-[#011627] text-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#26C6DA]">
          Aprende a operar en Forex de manera profesional con nuestra academia
        </h2>
        <p className="text-xl text-center text-white/80 mb-16 max-w-3xl mx-auto">
          Desarrolla tus habilidades en el mercado de divisas con nuestra guía
          paso a paso nuestra academia de Forex te ofrece estrategias,
          metodologías de entradas, plan de trading, psicotrading, gestión de
          riesgo y demás.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {forexFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
