/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const testimonials = [
  {
    name: "@ronny_samaniego",
    avatar: "/img/cases/1.jpeg",
    quote:
      "Estoy muy contento por todo el acompañamiento, puedes conectar con la informacion y las personas correctas a tal punto que me destaque y soy parte de la organizacion de la academia.",
  },
  {
    name: "@neycerrobalino",
    avatar: "/img/cases/3.jpeg",
    quote:
      "Siempre lo segui a Sebastian Saltos, siempre quise mentorearme con el a tal punto de que me bote de mi trabajo en busca de mis sueños me fui de mi ciudad a la ciudad donde el radica me tomo varias horas de viaje, pero valio la pena, ahora sigo mi profesion el tenis en Australia y soy rentable en trading.",
  },
  {
    name: "@igomezulloa",
    avatar: "/img/cases/5.jpeg",
    quote:
      "Siempre confie en las habilidades del ceo a tal punto de que me arrisgue y no me arrepiento me llevo una buena experiencia, soy de la primera promocion de intensivo presenciales y el ganador por destacarme, y sigo en este mundo que me termino gustando.",
  },
  {
    name: "@jsanungafx_ec",
    avatar: "/img/cases/4.jpeg",
    quote:
      "La verdad siempre me gusto hacer algo diferente, estudiar algo a nivel digital, me recomendaron mucho la acadmeia y a su ceo yo ya sabia algo de trading pero no me arrepiento de esta inversion que hice, ya que el trading es otra de mis ingresos",
  },
  {
    name: "@angeloguillen_ag",
    avatar: "/img/cases/2.jpeg",
    quote:
      "He estado en algunas empresas de negocios digitales, me gusta el networmarketing, Sebastian fue profesor en su momento de una, y me gusto mucho el mindset que tiene y la forma de ver las cosas en este negocio del trading lo respeto, lo sigo y lo admiro.",
  },
];

const screenshots = [
  "/img/testimonials/1.jpg",
  "/img/testimonials/2.jpg",
  "/img/testimonials/3.jpg",
  "/img/testimonials/4.jpg",
  "/img/testimonials/5.jpg",
  "/img/testimonials/6.jpg",
  "/img/testimonials/7.jpg",
  "/img/testimonials/8.jpg",
  "/img/testimonials/9.jpg",
  "/img/testimonials/10.jpg",
  "/img/testimonials/11.jpg",
  "/img/testimonials/12.jpg",
  "/img/testimonials/13.jpg",
];

export function TestimonialsAndScreenshots() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [screenshotIndex, setScreenshotIndex] = useState(0);
  const [expandedScreenshot, setExpandedScreenshot] = useState<string | null>(
    null
  );

  const nextTestimonial = () =>
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setTestimonialIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  const nextScreenshot = () =>
    setScreenshotIndex((prev) => (prev + 3) % screenshots.length);
  const prevScreenshot = () =>
    setScreenshotIndex(
      (prev) => (prev - 3 + screenshots.length) % screenshots.length
    );

  return (
    <div className="bg-[#011627] text-white py-16">
      <div className="container mx-auto px-4">
        {/* Testimonials Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#26C6DA]">
            Lo que nuestros alumnos dicen
          </h2>
          <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
            Descubre cómo Profit's Day profesionaliza traders por todo el mundo.
          </p>
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-[#26C6DA]/10 rounded-lg p-8 text-center">
              <Avatar className="w-20 h-20 mx-auto mb-4">
                <AvatarImage
                  src={testimonials[testimonialIndex].avatar}
                  alt={testimonials[testimonialIndex].name}
                />
                <AvatarFallback>
                  {testimonials[testimonialIndex].name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <p className="text-lg mb-4">
                "{testimonials[testimonialIndex].quote}"
              </p>
              <p className="font-semibold">
                {testimonials[testimonialIndex].name}
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </section>

        {/* Screenshots Section */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-4 text-[#26C6DA]">
            Ve a Profit's Day en acción
          </h2>
          <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
            Realiza un recorrido visual por nuestras poderosas características
            diseñadas para mejorar tu experiencia de trabajo remoto.
          </p>
          <div className="relative max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-4">
              {screenshots
                .slice(screenshotIndex, screenshotIndex + 3)
                .map((screenshot, index) => (
                  <img
                    key={index}
                    src={screenshot}
                    alt={`Screenshot ${screenshotIndex + index + 1}`}
                    className="w-full h-32 object-cover rounded-lg cursor-pointer transition-transform hover:scale-105"
                    onClick={() => setExpandedScreenshot(screenshot)}
                  />
                ))}
            </div>
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12"
              onClick={prevScreenshot}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12"
              onClick={nextScreenshot}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
        </section>
      </div>

      {/* Expanded Screenshot Modal */}
      {expandedScreenshot && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={() => setExpandedScreenshot(null)}
          >
            <img
              src={expandedScreenshot}
              alt="Expanded Screenshot"
              className="max-w-full max-h-full object-contain"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white"
              onClick={(e) => {
                e.stopPropagation();
                setExpandedScreenshot(null);
              }}
            >
              <X className="h-8 w-8" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
