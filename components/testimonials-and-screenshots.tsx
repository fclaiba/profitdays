/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client'

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const testimonials = [
  {
    name: "@ronny_samaniego",
    avatar: "/img/cases/1.jpeg",
    quote: "Estoy muy contento por todo el acompañamiento, puedo conectar con la información y las personas correctas a tal punto que me destaco y soy parte de la organización de la academia.",
  },
  {
    name: "@neycerrobalino",
    avatar: "/img/cases/3.jpeg",
    quote: "Siempre lo seguí a Sebastián Saltos, siempre quise ser mentorizado por él a tal punto que me despedí de mi trabajo en busca de mis sueños, me fui de mi ciudad a la ciudad donde él radica, me tomó varias horas de viaje, pero valió la pena, ahora sigo mi profesión el tenis en Australia y soy rentable en trading.",
  },
  {
    name: "@igomezulloa",
    avatar: "/img/cases/5.jpeg",
    quote: "Siempre confié en las habilidades del CEO a tal punto que me arriesgué y no me arrepiento, me llevé una buena experiencia, soy de la primera promoción de intensivo presencial y el ganador por destacarme, y sigo en este mundo que me terminó gustando.",
  },
  {
    name: "@jsanungafx_ec",
    avatar: "/img/cases/4.jpeg",
    quote: "La verdad siempre me gustó hacer algo diferente, estudiar algo a nivel digital, me recomendaron mucho la academia y a su CEO, yo ya sabía algo de trading pero no me arrepiento de esta inversión que hice, ya que el trading es otra de mis ingresos.",
  },
  {
    name: "@angeloguillen_ag",
    avatar: "/img/cases/2.jpeg",
    quote: "He estado en algunas empresas de negocios digitales, me gusta el networmarketing, Sebastián fue profesor en su momento de una, y me gustó mucho el mindset que tiene y la forma de ver las cosas en este negocio del trading, lo respeto, lo sigo y lo admiro.",
  },
]

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
]

export default function TestimonialsAndScreenshots() {
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [expandedScreenshot, setExpandedScreenshot] = useState<string | null>(null)
  const screenshotsRef = useRef<HTMLDivElement>(null)

  const nextTestimonial = () => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)
  const prevTestimonial = () => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const scrollScreenshot = (direction: 'left' | 'right') => {
    if (screenshotsRef.current) {
      const scrollAmount = direction === 'left' ? -screenshotsRef.current.offsetWidth : screenshotsRef.current.offsetWidth
      screenshotsRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="bg-[#011627] text-white py-8 md:py-16">
      <div className="container mx-auto px-4">
        {/* Testimonials Section */}
        <section className="mb-12 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-[#26C6DA]">
            Lo que nuestros alumnos dicen
          </h2>
          <p className="text-lg md:text-xl text-center mb-8 md:mb-12 max-w-2xl mx-auto">
            Descubre cómo Profit's Day profesionaliza traders por todo el mundo.
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#001219] rounded-lg p-6 md:p-8 text-center mb-6">
              <Avatar className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6">
                <AvatarImage
                  src={testimonials[testimonialIndex].avatar}
                  alt={testimonials[testimonialIndex].name}
                />
                <AvatarFallback>
                  {testimonials[testimonialIndex].name.charAt(1)}
                </AvatarFallback>
              </Avatar>
              <p className="text-base md:text-lg mb-6 italic">
                "{testimonials[testimonialIndex].quote}"
              </p>
              <p className="font-semibold text-[#26C6DA]">
                {testimonials[testimonialIndex].name}
              </p>
            </div>
            <div className="flex justify-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent border-[#26C6DA] text-[#26C6DA] hover:bg-[#26C6DA] hover:text-white transition-colors"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous testimonial</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent border-[#26C6DA] text-[#26C6DA] hover:bg-[#26C6DA] hover:text-white transition-colors"
                onClick={nextTestimonial}
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next testimonial</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#26C6DA]">
            Ve a Profit's Day en acción
          </h2>
          <p className="text-lg md:text-xl text-center mb-8 md:mb-12 max-w-2xl mx-auto">
            Realiza un recorrido visual por nuestras poderosas características
            diseñadas para mejorar tu experiencia de trabajo remoto.
          </p>
          <div className="relative max-w-4xl mx-auto">
            <div ref={screenshotsRef} className="overflow-x-hidden">
              <div className="flex space-x-4 pb-4">
                {screenshots.map((screenshot, index) => (
                  <div key={index} className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64">
                    <div className="w-full h-full relative">
                      <img
                        src={screenshot}
                        alt={`Screenshot ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg cursor-pointer transition-transform hover:scale-105"
                        onClick={() => setExpandedScreenshot(screenshot)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-6 space-x-4">
              <Button
                variant="secondary"
                size="sm"
                className="flex items-center"
                onClick={() => scrollScreenshot('left')}
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                <span className="sr-only sm:not-sr-only">Anterior</span>
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="flex items-center"
                onClick={() => scrollScreenshot('right')}
              >
                <span className="sr-only sm:not-sr-only">Siguiente</span>
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Expanded Screenshot Modal */}
      {expandedScreenshot && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setExpandedScreenshot(null)}
        >
          <div className="relative w-full h-full max-w-4xl max-h-[90vh] flex items-center justify-center">
            <img
              src={expandedScreenshot}
              alt="Expanded Screenshot"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setExpandedScreenshot(null)
              }}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close expanded screenshot</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}