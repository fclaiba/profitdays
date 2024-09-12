"use client";

import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const paymentOptions = [
  {
    title: "Trading Specialist",
    description: [
      "Vuélvete un profesional en los mercados empieza tu camino.",
      "6 clases en el mes.",
      "1 zoom 1/1.",
      "Acceso a la comunidad.",
    ],
    price: "$97",
    oldPrice: "$129",
    link: "https://payp.page.link/eAWuH",
  },
  {
    title: "Operativa en Vivo NYC SESSION",
    description: [
      "Membresía Live cada semana en la sesión de NYC.",
      "8 AM utc - 5 se comienza la sesión.",
      "3 a 5% mínimo ratio semanal.",
    ],
    price: "$147",
    oldPrice: "$297",
    link: "https://payp.page.link/hrECV",
  },
  {
    title: "Intensivo 1 mes Online",
    description: [
      "8 clases en el mes.",
      "2 zoom 1/1.",
      "Operativo en vivo.",
      "Formación para personas que quieren reforzar su trading.",
    ],
    price: "$225",
    oldPrice: "$450",
    link: "https://payp.page.link/9qMtL",
  },
  {
    title: "Trading Mind Circle",
    description: [
      "Círculo de crecimiento a nivel de trading, negocios, mentalidad y hábitos.",
      "Formación presencial de todo un mes.",
      "Eventos en Ecuador y USA.",
    ],
    price: "$499",
    oldPrice: "$999",
    link: "https://payp.page.link/qnP2K",
  },
  {
    title: "Programa Trading Pro Master",
    description: [
      "Programa completo de 3 meses a 1 año.",
      "Teoría y práctica, zoom 1:1 cada 15 días.",
      "Operativa en vivo semanal con ratios mínimos de 3 a 5%.",
      "Estrategia en índices americanos, GBP, XAU.",
      "Acompañamiento por 1 año.",
    ],
    price: "$699",
    oldPrice: "$1399",
    link: "https://payp.page.link/7hp6j",
  },
];

export function AcordeonServicios() {
  const [timeLeft, setTimeLeft] = useState(7 * 60); // 7 minutos en segundos

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-[url('/img/payment2.png')] bg-cover bg-center flex items-center justify-center p-4">
      <div className="bg-[#011627] bg-opacity-80 text-white p-6 rounded-lg max-w-2xl w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#26C6DA]">
          Nuestros Servicios
        </h2>
        <div className="mb-6 text-center">
          <p className="text-lg mb-2">¡Oferta especial! Termina en:</p>
          <div className="text-3xl font-bold text-[#26C6DA]">
            {formatTime(timeLeft)}
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {paymentOptions.map((option) => (
            <AccordionItem
              key={option.title}
              value={option.title}
              className="border-b border-[#26C6DA]/20"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-xl font-semibold text-[#26C6DA]">
                  {option.title}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="mb-4 text-gray-300 list-disc list-inside">
                  {option.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-400 line-through">
                      {option.oldPrice}
                    </span>
                    <span className="text-2xl font-bold text-[#26C6DA]">
                      {option.price}
                    </span>
                  </div>
                  <Button
                    className="bg-[#26C6DA] text-[#011627] hover:bg-[#26C6DA]/80"
                    onClick={() => window.open(option.link, "_blank")}
                  >
                    Comprar
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
