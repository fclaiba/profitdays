/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Hero() {
  // Función para hacer scroll al final de la página
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#011627] min-h-screen text-white relative overflow-hidden">
      {/* Star-like dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-30"
            style={{
              width: "2px",
              height: "2px",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 pt-8 relative z-10">
        {/* Logo and Name */}
        <div className="absolute top-8 left-8 flex items-center space-x-2">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/img/logoPD.png" alt="Logo" />
            <AvatarFallback>R+</AvatarFallback>
          </Avatar>
          <span className="text-xl font-bold text-[#26C6DA]">Profit's Day</span>
        </div>

        {/* Feature announcement */}
        <div className="flex justify-center mb-12 mt-20">
          <div className="bg-[#26C6DA]/10 text-[#26C6DA] rounded-full py-2 px-4 text-sm flex items-center space-x-2">
            <span className="bg-[#26C6DA] text-black text-xs font-bold px-2 py-1 rounded-full">
              Toma ventaja
            </span>
            <span>Aprovecha los últimos cupos disponibles →</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-12 leading-tight">
          Descubre tu potencial como analista financiero.
          <br />
        </h1>

        {/* Button */}
        <div className="flex justify-center mb-16">
          <Button
            className="bg-[#26C6DA] hover:bg-[#26C6DA]/90 text-black font-semibold py-2 px-6 rounded-full text-lg"
            onClick={scrollToBottom} // Llama a la función scrollToBottom al hacer clic
          >
            ¡No te pierdas el final!
          </Button>
        </div>
      </div>

      {/* Teal accent lines */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
        <div className="absolute bottom-0 right-0 w-full h-full border-t-4 border-r-4 border-[#26C6DA] rounded-tl-full opacity-20 transform translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-3/4 h-3/4 border-t-4 border-r-4 border-[#26C6DA] rounded-tl-full opacity-40 transform translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 border-t-4 border-r-4 border-[#26C6DA] rounded-tl-full opacity-60 transform translate-x-1/4 translate-y-1/4"></div>
      </div>
    </div>
  );
}
