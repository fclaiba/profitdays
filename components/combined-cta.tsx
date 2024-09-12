/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export function CombinedCta() {
  const [isEnded, setIsEnded] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const router = useRouter();

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnded = () => {
      setIsEnded(true);
      setShowForm(true);
    };

    if (video) {
      video.addEventListener("ended", handleVideoEnded);
    }

    return () => {
      if (video) {
        video.removeEventListener("ended", handleVideoEnded);
      }
    };
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleButtonClick = () => {
    router.push('/webinar');
  };

  const handleFormSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Aquí iría la lógica para manejar el envío del formulario
    handleButtonClick(); // Redirige al webinar después de enviar el formulario
  };

  return (
    <div className="bg-[#011627] text-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-[#26C6DA] text-center">
          APRENDE TRADING como UN EXPERTO en tan sólo 6 MESES
        </h1>
        <p className="text-xl mb-12 text-center">
          Mira este video e involúcrate con profesionales de alto nivel para
          lograr volverte uno de ellos y dominar a la perfección las inversiones
          bursátiles en el mercado global de intercambio de divisas.
        </p>

        <div className="relative aspect-video mb-12">
          <iframe
            ref={videoRef}
            src="https://player.vimeo.com/video/1003213698?api=1&title=0&byline=0&portrait=0"
            className="w-full h-full rounded-lg shadow-lg"
            allow="fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>

          {isEnded && (
            <>
              <Image
                src="/img/blur.png"
                alt="Blurred background"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                width={1280}
                height={720}
              />
              <div className="absolute inset-0 bg-[#011627]/80 backdrop-blur-sm flex flex-col items-center justify-center rounded-lg">
                <Button
                  onClick={handleOpen}
                  className="bg-[#26C6DA] text-[#011627] hover:bg-[#26C6DA]/80 text-lg py-3 px-6"
                >
                  Suscribirse
                </Button>
              </div>
            </>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-[#011627] mb-4 text-center">
              ¡Gánate el Webinar!
            </h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full p-3 border border-gray-300 rounded-md text-[#011627]"
                required
              />
              <input
                type="text"
                placeholder="Apellido"
                className="w-full p-3 border border-gray-300 rounded-md text-[#011627]"
                required
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full p-3 border border-gray-300 rounded-md text-[#011627]"
                required
              />
              <input
                type="tel"
                placeholder="Número de teléfono"
                className="w-full p-3 border border-gray-300 rounded-md text-[#011627]"
                required
              />
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" required />
                  <span className="text-[#011627] text-sm">Estoy interesado en formarme en trading</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" required />
                  <span className="text-[#011627] text-sm">Acepto términos y condiciones</span>
                </label>
              </div>
              <Button
                type="submit"
                className="w-full bg-[#26C6DA] text-[#011627] hover:bg-[#26C6DA]/80"
              >
                Ver Webinar Gratuito
              </Button>
            </form>
            <Button
              onClick={handleClose}
              className="mt-4 w-full bg-gray-200 text-[#011627] hover:bg-gray-300"
            >
              Cerrar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
