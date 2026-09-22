import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

interface FloatingWhatsAppProps {
  onClick?: () => void;
}

export const FloatingWhatsApp = ({ onClick }: FloatingWhatsAppProps) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      const message = encodeURIComponent(
        '¡Hola! Me gustaría recibir asesoramiento sobre compra, venta o financiación de vehículos.'
      );
      window.open(`https://wa.me/5491155922000?text=${message}`, '_blank');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Interactive Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#303030] text-[#E4E0D8] px-4 py-2.5 rounded-2xl shadow-xl border border-[#686868]/40 text-xs font-medium animate-fade-in relative">
          <span className="w-2 h-2 rounded-full bg-[#E4E0D8] animate-ping"></span>
          <span>¿Tenés dudas? <strong className="text-white">Chateá con un asesor</strong></span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-[#A6A39E] hover:text-[#E4E0D8] p-0.5 ml-1 cursor-pointer"
            aria-label="Cerrar mensaje"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <button
        id="floating-whatsapp-btn"
        onClick={handleClick}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-2xl shadow-emerald-600/30 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer relative group"
        aria-label="Contactar por WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-30 pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-current relative z-10" />
      </button>
    </div>
  );
};
