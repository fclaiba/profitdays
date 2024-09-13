/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Component() {
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showWebinarButton, setShowWebinarButton] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (formSubmitted) {
      const timer = setTimeout(() => setButtonDisabled(false), 3000);
      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, [formSubmitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleFormSubmitted = () => {
    if (!buttonDisabled) {
      window.location.href = "/webinar";
    }
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

      <div className="w-full max-w-4xl mx-auto p-6 space-y-8 relative z-10">
        <h2 className="text-4xl font-bold text-center text-[#26C6DA]">
          APRENDE TRADING como UN EXPERTO en tan sólo 6 MESES
        </h2>
        <p className="text-center text-gray-300 text-lg font-extrabold">
          Mira este video e involúcrate con profesionales de alto nivel para
          lograr volverte uno de ellos y dominar a la perfección las inversiones
          bursátiles en el mercado global de intercambio de divisas.
        </p>

        <div className="aspect-video w-full">
          <video
            className="w-full h-full object-cover rounded-lg"
            controls
            poster="/placeholder.svg?height=400&width=600"
          >
            <source src="/img/video/invitation.mp4" type="video/mp4" />
            Tu navegador no soporta el tag de video.
          </video>
        </div>

        {!showForm && !showWebinarButton && (
          <Button
            className="w-full bg-[#26C6DA] hover:bg-[#26C6DA]/90 text-black font-semibold py-2 px-6 rounded-full text-lg"
            onClick={() => setShowForm(true)}
          >
            Llenar Formulario
          </Button>
        )}

        {showForm && (
          <div className="space-y-4">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/5Q2n33uflZRffbzEhEZJ"
              style={{
                width: "100%",
                height: "514px",
                border: "none",
                borderRadius: "3px",
              }}
              id="inline-5Q2n33uflZRffbzEhEZJ"
              title="Formulario principal"
            ></iframe>
            <Button
              type="submit"
              className="w-full bg-[#26C6DA] hover:bg-[#26C6DA]/90 text-black font-semibold py-2 px-6 rounded-full text-lg"
              onClick={handleSubmit}
            >
              Enviar Formulario
            </Button>
            {formSubmitted && (
              <Button
                className={`w-full bg-[#26C6DA] hover:bg-[#26C6DA]/90 text-black font-semibold py-2 px-6 rounded-full text-lg ${
                  buttonDisabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => (window.location.href = "/webinar")}
                disabled={buttonDisabled}
              >
                ¡Distruta tu Webinar!
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
