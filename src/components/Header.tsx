import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Car, ChevronRight, Heart } from 'lucide-react';
import { CarOneLogo } from './BrandLogos';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  onFilterQuick: (category: 'all' | '0km' | 'used') => void;
  favoritesCount: number;
  onOpenFavorites: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  onFilterQuick,
  favoritesCount,
  onOpenFavorites,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileDrawerOpen(false);
    onNavigate(sectionId);
  };

  return (
    <>
      <header
        id="main-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#5A4636]/40 shadow-xl shadow-[#0D0D0D]/70 py-3'
            : 'bg-gradient-to-b from-[#0D0D0D]/95 via-[#0D0D0D]/80 to-transparent backdrop-blur-sm border-b border-[#5A4636]/20 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('inicio');
              }}
              className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6C2A3] rounded-lg"
              id="header-logo"
            >
              <CarOneLogo />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-[#D6C2A3]/80" id="desktop-nav">
              <button
                onClick={() => handleNavClick('inicio')}
                className="px-3 py-1.5 rounded-md hover:text-[#F5F0E6] hover:bg-[#211A16] transition-colors"
                id="nav-inicio"
              >
                Inicio
              </button>
              <button
                onClick={() => {
                  onFilterQuick('all');
                  handleNavClick('catalogo');
                }}
                className="px-3 py-1.5 rounded-md hover:text-[#F5F0E6] hover:bg-[#211A16] transition-colors"
                id="nav-comprar"
              >
                Comprar
              </button>
              <button
                onClick={() => handleNavClick('vender')}
                className="px-3 py-1.5 rounded-md hover:text-[#F5F0E6] hover:bg-[#211A16] transition-colors"
                id="nav-vender"
              >
                Vender
              </button>
              <button
                onClick={() => {
                  onFilterQuick('0km');
                  handleNavClick('catalogo');
                }}
                className="px-3 py-1.5 rounded-md text-[#D6C2A3] hover:text-[#F5F0E6] hover:bg-[#5A4636]/30 transition-colors font-semibold flex items-center gap-1"
                id="nav-0km"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6C2A3] animate-pulse"></span>
                0 KM
              </button>
              <button
                onClick={() => {
                  onFilterQuick('used');
                  handleNavClick('catalogo');
                }}
                className="px-3 py-1.5 rounded-md hover:text-[#F5F0E6] hover:bg-[#211A16] transition-colors"
                id="nav-usados"
              >
                Usados
              </button>
              <button
                onClick={() => handleNavClick('servicios')}
                className="px-3 py-1.5 rounded-md hover:text-[#F5F0E6] hover:bg-[#211A16] transition-colors"
                id="nav-servicios"
              >
                Servicios
              </button>
              <button
                onClick={() => handleNavClick('nosotros')}
                className="px-3 py-1.5 rounded-md hover:text-[#F5F0E6] hover:bg-[#211A16] transition-colors"
                id="nav-nosotros"
              >
                Nosotros
              </button>
              <button
                onClick={() => handleNavClick('contacto')}
                className="px-3 py-1.5 rounded-md hover:text-[#F5F0E6] hover:bg-[#211A16] transition-colors"
                id="nav-contacto"
              >
                Contacto
              </button>
            </nav>

            {/* Actions: Favorites & "Ver vehículos" CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenFavorites}
                className="relative p-2 text-[#D6C2A3] hover:text-[#F5F0E6] bg-[#211A16] hover:bg-[#5A4636]/50 border border-[#5A4636]/50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#D6C2A3]"
                title="Ver favoritos guardados"
                id="header-btn-favorites"
              >
                <Heart className="w-5 h-5 text-[#D6C2A3]" />
                {favoritesCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#5A4636] text-[#F5F0E6] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg border border-[#0D0D0D] animate-pulse">
                    {favoritesCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => handleNavClick('catalogo')}
                className="inline-flex items-center gap-2 bg-[#5A4636] hover:bg-[#D6C2A3] text-[#F5F0E6] hover:text-[#0D0D0D] font-semibold text-sm px-4 py-2.5 rounded-lg shadow-lg shadow-[#0D0D0D]/50 border border-[#D6C2A3]/30 transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#D6C2A3]"
                id="header-btn-ver-vehiculos"
              >
                <Car className="w-4 h-4" />
                <span>Ver vehículos</span>
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenFavorites}
                className="relative p-2 text-[#D6C2A3] bg-[#211A16] border border-[#5A4636]/50 rounded-lg"
                id="mobile-btn-favorites"
              >
                <Heart className="w-5 h-5 text-[#D6C2A3]" />
                {favoritesCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#5A4636] text-[#F5F0E6] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {favoritesCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileDrawerOpen(true)}
                className="p-2 text-[#D6C2A3] hover:text-[#F5F0E6] bg-[#211A16] border border-[#5A4636]/50 rounded-lg focus:outline-none"
                aria-label="Abrir menú"
                id="mobile-drawer-toggle"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-[#0D0D0D]/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileDrawerOpen(false)}
          />

          {/* Drawer Content */}
          <div
            className="relative ml-auto w-full max-w-xs bg-[#211A16] border-l border-[#5A4636]/50 p-6 flex flex-col justify-between h-full shadow-2xl overflow-y-auto"
            id="mobile-drawer"
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#5A4636]/40">
                <CarOneLogo />
                <button
                  onClick={() => setMobileDrawerOpen(false)}
                  className="p-2 text-[#D6C2A3]/70 hover:text-[#F5F0E6] rounded-lg hover:bg-[#5A4636]/40"
                  aria-label="Cerrar menú"
                  id="mobile-drawer-close"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="mt-6 flex flex-col gap-1">
                <button
                  onClick={() => handleNavClick('inicio')}
                  className="flex items-center justify-between py-3 px-3 rounded-lg text-left text-[#F5F0E6] hover:bg-[#5A4636]/40 font-medium"
                >
                  <span>Inicio</span>
                  <ChevronRight className="w-4 h-4 text-[#D6C2A3]/50" />
                </button>

                <button
                  onClick={() => {
                    onFilterQuick('all');
                    handleNavClick('catalogo');
                  }}
                  className="flex items-center justify-between py-3 px-3 rounded-lg text-left text-[#F5F0E6] hover:bg-[#5A4636]/40 font-medium"
                >
                  <span>Comprar un auto</span>
                  <ChevronRight className="w-4 h-4 text-[#D6C2A3]/50" />
                </button>

                <button
                  onClick={() => handleNavClick('vender')}
                  className="flex items-center justify-between py-3 px-3 rounded-lg text-left text-[#F5F0E6] hover:bg-[#5A4636]/40 font-medium"
                >
                  <span>Vender mi auto</span>
                  <ChevronRight className="w-4 h-4 text-[#D6C2A3]/50" />
                </button>

                <button
                  onClick={() => {
                    onFilterQuick('0km');
                    handleNavClick('catalogo');
                  }}
                  className="flex items-center justify-between py-3 px-3 rounded-lg text-left text-[#D6C2A3] hover:bg-[#5A4636]/30 font-semibold"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D6C2A3]"></span>
                    0 KM Oficiales
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#D6C2A3]" />
                </button>

                <button
                  onClick={() => {
                    onFilterQuick('used');
                    handleNavClick('catalogo');
                  }}
                  className="flex items-center justify-between py-3 px-3 rounded-lg text-left text-[#F5F0E6] hover:bg-[#5A4636]/40 font-medium"
                >
                  <span>Usados Seleccionados</span>
                  <ChevronRight className="w-4 h-4 text-[#D6C2A3]/50" />
                </button>

                <button
                  onClick={() => handleNavClick('servicios')}
                  className="flex items-center justify-between py-3 px-3 rounded-lg text-left text-[#F5F0E6] hover:bg-[#5A4636]/40 font-medium"
                >
                  <span>Servicios</span>
                  <ChevronRight className="w-4 h-4 text-[#D6C2A3]/50" />
                </button>

                <button
                  onClick={() => handleNavClick('nosotros')}
                  className="flex items-center justify-between py-3 px-3 rounded-lg text-left text-[#F5F0E6] hover:bg-[#5A4636]/40 font-medium"
                >
                  <span>Por qué elegirnos</span>
                  <ChevronRight className="w-4 h-4 text-[#D6C2A3]/50" />
                </button>

                <button
                  onClick={() => handleNavClick('contacto')}
                  className="flex items-center justify-between py-3 px-3 rounded-lg text-left text-[#F5F0E6] hover:bg-[#5A4636]/40 font-medium"
                >
                  <span>Ubicación y Contacto</span>
                  <ChevronRight className="w-4 h-4 text-[#D6C2A3]/50" />
                </button>
              </nav>
            </div>

            {/* Direct Quick Contact in Drawer */}
            <div className="pt-6 border-t border-[#5A4636]/40 flex flex-col gap-3">
              <button
                onClick={() => handleNavClick('catalogo')}
                className="w-full py-3 bg-[#5A4636] hover:bg-[#D6C2A3] hover:text-[#0D0D0D] text-[#F5F0E6] font-semibold rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-[#0D0D0D]/50 transition-colors"
              >
                <Car className="w-5 h-5" />
                <span>Ver vehículos</span>
              </button>

              <a
                href="https://wa.me/5491112345678?text=Hola%20CAR%20ONE%2C%20quisiera%20recibir%20información%20sobre%20los%20vehículos%20disponibles"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-[#5A4636]/80 hover:bg-[#5A4636] text-[#F5F0E6] font-semibold rounded-lg flex items-center justify-center gap-2 text-sm transition-colors border border-[#D6C2A3]/30"
                id="mobile-drawer-whatsapp"
              >
                <MessageSquare className="w-4 h-4 text-[#D6C2A3]" />
                <span>WhatsApp Asesor</span>
              </a>

              <a
                href="tel:+541112345678"
                className="w-full py-2.5 bg-[#0D0D0D] hover:bg-[#211A16] text-[#D6C2A3] font-medium rounded-lg flex items-center justify-center gap-2 text-sm transition-colors border border-[#5A4636]/40"
                id="mobile-drawer-call"
              >
                <Phone className="w-4 h-4 text-[#D6C2A3]/70" />
                <span>+54 11 1234-5678</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
