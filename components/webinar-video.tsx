"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function WebinarVideo() {
  const [showPaymentButton, setShowPaymentButton] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPaymentButton(true);
    }, 2100000); // 30 minutes in milliseconds

    return () => clearTimeout(timer);
  }, []);

  const handlePaymentClick = () => {
    router.push("/pago");
  };

  return (
    <div className="bg-[#011627] text-white min-h-screen flex items-center justify-center relative overflow-hidden">
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

      {/* Teal accent lines */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
        <div className="absolute bottom-0 right-0 w-full h-full border-t-4 border-r-4 border-[#26C6DA] rounded-tl-full opacity-20 transform translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-3/4 h-3/4 border-t-4 border-r-4 border-[#26C6DA] rounded-tl-full opacity-40 transform translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 border-t-4 border-r-4 border-[#26C6DA] rounded-tl-full opacity-60 transform translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="w-full max-w-4xl mx-auto p-6 space-y-6 relative z-10">
        <h2 className="text-4xl font-bold text-center text-[#26C6DA]">
          ¡DISFRUTA de tu 1ER CLASE totalmente GRATUITA!
        </h2>
        <p className="text-center text-gray-300 text-lg">
          Mira esta clase e introdúcete a qué estarás aprendiendo con nosotros
          para volverte un gran profesional de las inversiones bursátiles en el
          mercado internacional de cambio de divisas
        </p>

        <div className="aspect-video w-full">
          <iframe
            src="https://player.vimeo.com/video/993817570?h=b08ef5376c&autoplay=1&loop=0&title=0&byline=0&portrait=0"
            className="w-full h-full object-cover rounded-lg"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>

        <p className="text-center text-[#26C6DA] text-sm font-medium mb-2">
          ¡Toma tus descuentos exclusivos sólo por hoy!
        </p>

        <Button
          className="w-full bg-[#26C6DA] hover:bg-[#26C6DA]/90 text-black font-semibold py-2 px-6 rounded-full text-lg"
          onClick={handlePaymentClick}
          disabled={!showPaymentButton}
        >
          {showPaymentButton
            ? "¡Disfruta los descuentos!"
            : "¡Disfruta los descuentos!"}
        </Button>
      </div>
    </div>
  );
}
