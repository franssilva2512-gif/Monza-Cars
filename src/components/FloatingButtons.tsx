import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageSquare, X } from 'lucide-react';

export const FloatingButtons: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      'Hola CAR ONE! Estoy navegando en la web oficial y me gustaría hacer una consulta con un asesor comercial.'
    );
    window.open(`https://wa.me/5491112345678?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* "Volver arriba" button that appears with scroll */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-3 rounded-full bg-neutral-900/95 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer animate-in fade-in slide-in-from-bottom-3"
          aria-label="Volver arriba"
          title="Volver arriba"
          id="btn-volver-arriba"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp Button with Tooltip */}
      <div className="relative pointer-events-auto flex items-center">
        {/* Interactive Tooltip */}
        {showTooltip && (
          <div className="absolute right-16 bg-neutral-900/95 border border-neutral-700/80 text-white text-xs px-3.5 py-2 rounded-xl shadow-2xl backdrop-blur-md whitespace-nowrap flex items-center gap-2 animate-in fade-in slide-in-from-right-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>¿Buscás asesoramiento? <strong>¡Escribinos!</strong></span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-neutral-400 hover:text-white ml-1 p-0.5"
              aria-label="Cerrar ayuda"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <button
          onClick={handleWhatsAppClick}
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white shadow-2xl shadow-emerald-950/60 border-2 border-emerald-400/50 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer group"
          aria-label="Contactar por WhatsApp"
          id="floating-whatsapp-btn"
        >
          <MessageSquare className="w-7 h-7 fill-current drop-shadow group-hover:rotate-6 transition-transform" />
          <span className="sr-only">Contactar por WhatsApp</span>
        </button>
      </div>
    </div>
  );
};
