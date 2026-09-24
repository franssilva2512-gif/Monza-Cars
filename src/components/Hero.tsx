import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onBuyClick: () => void;
  onSellClick: () => void;
}

export const Hero = ({ onBuyClick, onSellClick }: HeroProps) => {
  return (
    <section id="inicio" className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#161616]">
      {/* Background Image of a modern luxury automobile */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=2200&q=85"
          alt="Automóvil moderno en salón de exposición"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out opacity-60"
        />
        {/* Multi-layered dark gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#161616] via-[#161616]/85 to-[#161616]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-[#161616]/70" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Subtle premium badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#303030]/90 backdrop-blur-md border border-[#686868]/40 text-[#E4E0D8] text-xs sm:text-sm font-medium mb-6 animate-fade-in shadow-xl">
            <img
              src="/assets/campi-motors-logo.jpg"
              alt="Campi Motors"
              className="w-5 h-5 rounded-full object-cover border border-[#C5A059]/60 shrink-0"
            />
            <span className="tracking-wide">Líder Oficial Multimarca en Argentina</span>
            <span className="text-[#686868]">|</span>
            <span className="text-[#A6A39E] font-normal">Modelos 2024 &amp; Usados Certificados</span>
          </div>

          {/* Main Title - User exact specification: "Todo lo que te mueve en un solo lugar" */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#E4E0D8] tracking-tight leading-[1.08] mb-6 drop-shadow-sm font-display">
            Todo lo que te mueve <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E4E0D8] via-[#E4E0D8] to-[#A6A39E]">
              en un solo lugar
            </span>
          </h1>

          {/* Secondary Text - User exact specification: "Encontrá tu próximo vehículo entre las mejores marcas y modelos." */}
          <p className="text-lg sm:text-xl lg:text-2xl text-[#E4E0D8] font-normal max-w-2xl mb-10 leading-relaxed">
            Encontrá tu próximo vehículo entre las mejores marcas y modelos.
          </p>

          {/* Action Buttons - User exact specification: "Comprar un auto", "Vender mi auto" */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-12">
            <button
              id="hero-buy-button"
              onClick={onBuyClick}
              className="px-8 py-4 rounded-xl bg-[#E4E0D8] hover:bg-[#E4E0D8] text-[#161616] font-extrabold text-base tracking-wide transition-all duration-200 shadow-xl flex items-center justify-center gap-3 cursor-pointer group active:scale-98"
            >
              <span>Comprar un auto</span>
              <ArrowRight className="w-5 h-5 text-[#161616] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-sell-button"
              onClick={onSellClick}
              className="px-8 py-4 rounded-xl bg-[#303030] hover:bg-[#686868]/40 text-[#E4E0D8] font-bold text-base tracking-wide border border-[#686868]/40 backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98 shadow-md"
            >
              <span>Vender mi auto</span>
            </button>
          </div>

          {/* Trust badges */}
          <div className="pt-6 border-t border-[#686868]/30 flex flex-wrap items-center gap-6 text-[#A6A39E] text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E4E0D8] shrink-0" />
              <span className="text-[#E4E0D8]/85">Financiación a tasa preferencial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#E4E0D8] shrink-0" />
              <span className="text-[#E4E0D8]/85">Entrega inmediata asegurada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
