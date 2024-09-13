"use client";

import Image from "next/image";
import { Youtube, Instagram, Send } from "lucide-react";

const socialIcons = [
  { Icon: Send, href: "https://t.me/profitdaysfx", label: "Telegram" },
  {
    Icon: Instagram,
    href: "https://instagram.com/sirfonx",
    label: "Instagram",
  },
  {
    Icon: Youtube,
    href: "https://www.youtube.com/@profitdaysacademy1",
    label: "YouTube",
  },
];

export function CEOPresentation() {
  return (
    <section className="bg-[#011627] text-white py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-6 text-[#26C6DA]">
              Sebastián Saltos
            </h2>
            <div className="relative w-full aspect-square max-w-md mb-6">
              <Image
                src="/img/ceo.png"
                alt="SS, CEO"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="flex justify-center space-x-6">
              {socialIcons.map(({ Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#26C6DA] hover:text-white transition-colors duration-300"
                  aria-label={`Visita el perfil de ${label} del CEO`}
                >
                  <Icon size={28} />
                </a>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-[#26C6DA]">
              Nuestro CEO
            </h3>
            <p className="text-white/80 mb-6">
              El Señor Saltos es un líder visionario con más de 3 años de
              experiencia en el mundo de las finanzas y la tecnología. Ha
              liderado múltiples empresas exitosas en el sector fintech,
              llevándolas desde su inicio hasta convertirlas en líderes del
              mercado. Su pasión por la educación financiera y el trading lo ha
              llevado a fundar nuestra academia, con el objetivo de empoderar a
              nuevos inversores con conocimientos y herramientas de vanguardia.
            </p>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/m-ppDPuEseo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
