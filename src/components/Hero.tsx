import React from 'react';
import { ArrowRight, Shield, Award, Sparkles, ChevronDown } from 'lucide-react';

interface HeroProps {
  onBuyClick: () => void;
  onSellClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBuyClick, onSellClick }) => {
  return (
    <section id="inicio" className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0D0D0D]">
      {/* High-res luxury automotive background image */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2400&q=85"
          alt="Vehículo de alta gama CAR ONE"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-subtle-zoom"
          loading="eager"
        />
        {/* Layered dark gradients for maximum legibility and sober aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/90 to-[#0D0D0D]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-[#0D0D0D]/80" />
        {/* Subtle bronze ambient glow accent */}
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#5A4636]/30 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Subtle badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#211A16]/90 border border-[#5A4636]/60 text-xs font-semibold text-[#D6C2A3] backdrop-blur-md mb-6 shadow-lg shadow-[#0D0D0D]/60">
            <span className="w-2 h-2 rounded-full bg-[#D6C2A3] animate-pulse" />
            <span className="text-[#D6C2A3] font-bold uppercase tracking-wider text-[11px]">Concesionaria Oficial</span>
            <span className="text-[#5A4636]">|</span>
            <span className="text-[#F5F0E6]">Más de 20 años de trayectoria</span>
          </div>

          {/* Exact required title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5F0E6] tracking-tight leading-[1.15] mb-6 drop-shadow-sm">
            Todo lo que te mueve <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F0E6] via-[#D6C2A3] to-[#D6C2A3]">
              en un solo lugar
            </span>
          </h1>

          {/* Exact required subtitle */}
          <p className="text-lg sm:text-xl text-[#D6C2A3]/90 font-normal leading-relaxed max-w-2xl mb-10">
            Encontrá tu próximo vehículo entre las mejores marcas y modelos.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
            <button
              onClick={onBuyClick}
              className="inline-flex items-center justify-center gap-3 bg-[#5A4636] hover:bg-[#D6C2A3] text-[#F5F0E6] hover:text-[#0D0D0D] font-semibold text-base px-8 py-4 rounded-xl shadow-xl shadow-[#0D0D0D]/60 border border-[#D6C2A3]/40 transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#D6C2A3]"
              id="hero-btn-comprar"
            >
              <span>Comprar un auto</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onSellClick}
              className="inline-flex items-center justify-center gap-3 bg-[#211A16]/90 hover:bg-[#211A16] text-[#F5F0E6] font-semibold text-base px-8 py-4 rounded-xl border border-[#5A4636]/60 backdrop-blur-md shadow-lg transition-all hover:border-[#D6C2A3]/50 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#D6C2A3]"
              id="hero-btn-vender"
            >
              <span>Vender mi auto</span>
            </button>
          </div>

          {/* Key Trust Highlights */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#5A4636]/40 max-w-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#211A16]/90 border border-[#5A4636]/50 flex items-center justify-center text-[#D6C2A3] flex-shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#F5F0E6] leading-tight">Peritaje 150 pts</div>
                <div className="text-xs text-[#D6C2A3]/70">Garantía certificada</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#211A16]/90 border border-[#5A4636]/50 flex items-center justify-center text-[#D6C2A3] flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#F5F0E6] leading-tight">12 Marcas</div>
                <div className="text-xs text-[#D6C2A3]/70">Representación oficial</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#211A16]/90 border border-[#5A4636]/50 flex items-center justify-center text-[#D6C2A3] flex-shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#F5F0E6] leading-tight">Financiación</div>
                <div className="text-xs text-[#D6C2A3]/70">Cuotas fijas en ARS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Down arrow indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-[#D6C2A3]/60 hover:text-[#D6C2A3] transition-colors animate-bounce cursor-pointer">
        <button onClick={onBuyClick} aria-label="Ir a catálogo de vehículos">
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};
