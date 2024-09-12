"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "¿Qué es el trading?",
    answer:
      "El trading es la compra y venta de activos financieros, como acciones, divisas, materias primas o criptomonedas, con el objetivo de obtener beneficios a corto o largo plazo. Los traders buscan aprovechar las fluctuaciones de precios en los mercados financieros para generar ganancias.",
  },
  {
    question: "¿Cómo puedo empezar a trading?",
    answer:
      "Para empezar a trading, puedes seguir estos pasos: 1) Edúcate sobre los mercados financieros y las estrategias de trading. 2) Elige un broker confiable y abre una cuenta de trading. 3) Practica con una cuenta demo antes de invertir dinero real. 4) Desarrolla un plan de trading y una estrategia. 5) Comienza con pequeñas inversiones y gestiona tu riesgo cuidadosamente.",
  },
  {
    question: "¿Qué es el apalancamiento en el trading?",
    answer:
      "El apalancamiento en el trading es una técnica que permite a los traders controlar una posición más grande de lo que su capital les permitiría normalmente. Esto se hace pidiendo prestado dinero al broker. Por ejemplo, un apalancamiento de 1:100 significa que por cada $1 que tienes, puedes controlar $100 en el mercado. Aunque el apalancamiento puede aumentar las ganancias potenciales, también aumenta significativamente el riesgo de pérdidas.",
  },
  {
    question: "¿Cómo puedo gestionar el riesgo en el trading?",
    answer:
      "Para gestionar el riesgo en el trading, puedes: 1) Utilizar órdenes de stop-loss para limitar las pérdidas potenciales. 2) Diversificar tu cartera para no depender de un solo activo. 3) No invertir más de lo que puedes permitirte perder. 4) Utilizar un tamaño de posición adecuado, generalmente no más del 1-2% de tu capital por operación. 5) Educar continuamente sobre gestión de riesgos y psicología del trading.",
  },
  {
    question: "¿Qué es el análisis técnico en el trading?",
    answer:
      "El análisis técnico es un método utilizado en el trading para predecir movimientos futuros de precios basándose en patrones históricos de precios y volumen. Los traders técnicos utilizan gráficos, indicadores y otras herramientas para identificar tendencias y puntos de entrada y salida en el mercado. Este enfoque se basa en la idea de que los patrones históricos tienden a repetirse y que el precio refleja toda la información relevante del mercado.",
  },
];

// Definir una interfaz para los props de FAQItem
interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-[#26C6DA]/20 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-[#26C6DA]">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#26C6DA] transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="pb-4 text-white/80">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#011627] text-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#26C6DA]">
          Preguntas Frecuentes
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              {...item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
