"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";

export function WebinarViewer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.contentWindow?.postMessage('{"method":"play"}', "*");
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.event === "ended") {
        setIsEnded(true);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="bg-[#011627] text-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-[#26C6DA] text-center">
          ¡DISFRUTA de tu 1ER CLASE totalmente GRATUITA!
        </h1>
        <p className="text-xl mb-12 text-center">
          Mira esta clase e introdúcete a qué estarás aprendiendo con nosotros
          para volverte un gran profesional de las inversiones bursátiles en el
          mercado internacional de cambio de divisas.
        </p>

        <div className="relative aspect-video mb-12">
          <iframe
            ref={videoRef}
            src="https://player.vimeo.com/video/76979871?api=1&background=1&mute=0"
            className="w-full h-full rounded-lg shadow-lg"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>

          {!isPlaying && (
            <Button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#26C6DA] text-[#011627] hover:bg-[#26C6DA]/80"
              onClick={handlePlay}
            >
              <Play className="mr-2 h-6 w-6" /> Reproducir
            </Button>
          )}

          {isEnded && (
            <div className="absolute inset-0 bg-[#011627]/80 backdrop-blur-sm flex items-center justify-center rounded-lg">
              <Button
                onClick={() => (window.location.href = "/pagos")}
                className="bg-[#26C6DA] text-[#011627] hover:bg-[#26C6DA]/80"
              >
                <ExternalLink className="mr-2 h-6 w-6" /> Ir a Pagos
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
