import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, ChevronRight, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onSelectConditionFilter?: (condition: 'all' | 'Usado') => void;
  onOpenWhatsApp: () => void;
}

export const Header = ({ onSelectConditionFilter, onOpenWhatsApp }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConditionClick = (condition: 'Usado') => {
    setMobileMenuOpen(false);
    if (onSelectConditionFilter) {
      onSelectConditionFilter(condition);
    }
    const element = document.getElementById('vehiculos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro bar for high-end automotive trust */}
      <div className="bg-[#161616] text-[#A6A39E] text-xs hidden md:block border-b border-[#686868]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#E4E0D8]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E4E0D8]" />
              Concesionaria Oficial Multimarca #1 en Argentina
            </span>
            <span className="text-[#686868]">•</span>
            <span className="text-[#A6A39E]">Entrega inmediata &amp; Financiación a tasa preferencial</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="tel:+5491155922000"
              className="flex items-center gap-1.5 text-[#E4E0D8] hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#A6A39E]" />
              +54 911 5592-2000
            </a>
            <button
              onClick={onOpenWhatsApp}
              className="flex items-center gap-1 text-[#E4E0D8] hover:text-white transition-colors font-medium cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp Oficial
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        id="main-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#161616]/95 backdrop-blur-md shadow-xl shadow-black/50 py-3 border-b border-[#686868]/30'
            : 'bg-[#161616] py-4.5 border-b border-[#686868]/30'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Campi Motors Oficial */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('inicio');
            }}
            className="flex items-center gap-2.5 group cursor-pointer"
            id="header-logo-link"
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#686868]/40 bg-black flex items-center justify-center shadow-sm group-hover:border-[#E4E0D8] transition-colors duration-300 shrink-0">
              <img
                src="/assets/campi-motors-logo.jpg"
                alt="Logo Campi Motors"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl tracking-tighter text-[#E4E0D8] leading-none flex items-center gap-1.5">
                CAMPI <span className="text-[#E4E0D8] font-black">MOTORS</span>
              </span>
              <span className="text-[10px] tracking-widest text-[#A6A39E] font-bold uppercase">
                Concesionaria Oficial
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              onClick={() => handleNavClick('inicio')}
              className="px-3 py-2 text-sm font-semibold text-[#E4E0D8]/90 hover:text-[#E4E0D8] hover:bg-[#686868]/20 transition-colors rounded-lg cursor-pointer"
            >
              Inicio
            </button>
            <button
              onClick={() => handleNavClick('vehiculos')}
              className="px-3 py-2 text-sm font-semibold text-[#E4E0D8]/90 hover:text-[#E4E0D8] hover:bg-[#686868]/20 transition-colors rounded-lg cursor-pointer"
            >
              Comprar
            </button>
            <button
              onClick={() => handleNavClick('vender')}
              className="px-3 py-2 text-sm font-semibold text-[#E4E0D8]/90 hover:text-[#E4E0D8] hover:bg-[#686868]/20 transition-colors rounded-lg cursor-pointer"
            >
              Vender
            </button>
            <button
              onClick={() => handleConditionClick('Usado')}
              className="px-3 py-2 text-sm font-semibold text-[#E4E0D8]/90 hover:text-[#E4E0D8] hover:bg-[#686868]/20 transition-colors rounded-lg cursor-pointer"
            >
              Usados Seleccionados
            </button>
            <button
              onClick={() => handleNavClick('servicios')}
              className="px-3 py-2 text-sm font-semibold text-[#E4E0D8]/90 hover:text-[#E4E0D8] hover:bg-[#686868]/20 transition-colors rounded-lg cursor-pointer"
            >
              Servicios
            </button>
            <button
              onClick={() => handleNavClick('contacto')}
              className="px-3 py-2 text-sm font-semibold text-[#E4E0D8]/90 hover:text-[#E4E0D8] hover:bg-[#686868]/20 transition-colors rounded-lg cursor-pointer"
            >
              Contacto
            </button>
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-cta-button"
              onClick={() => handleNavClick('vehiculos')}
              className="px-5 py-2.5 rounded-xl bg-[#E4E0D8] hover:bg-[#E4E0D8] text-[#161616] text-sm font-bold tracking-wide transition-all duration-200 shadow-md flex items-center gap-2 cursor-pointer active:scale-98"
            >
              <span>Ver vehículos</span>
              <ChevronRight className="w-4 h-4 text-[#161616]" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 text-[#E4E0D8] hover:bg-[#303030] rounded-lg transition-colors cursor-pointer"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu-dropdown"
            className="lg:hidden fixed inset-x-0 top-[65px] bg-[#161616] border-b border-[#686868]/40 shadow-2xl px-6 py-6 transition-all duration-300 max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-2 pb-6 border-b border-[#686868]/40">
              <button
                onClick={() => handleNavClick('inicio')}
                className="text-left py-3 px-3 rounded-lg text-base font-semibold text-[#E4E0D8] hover:bg-[#303030]"
              >
                Inicio
              </button>
              <button
                onClick={() => handleNavClick('vehiculos')}
                className="text-left py-3 px-3 rounded-lg text-base font-semibold text-[#E4E0D8] hover:bg-[#303030]"
              >
                Comprar
              </button>
              <button
                onClick={() => handleNavClick('vender')}
                className="text-left py-3 px-3 rounded-lg text-base font-semibold text-[#E4E0D8] hover:bg-[#303030]"
              >
                Vender
              </button>
              <button
                onClick={() => handleConditionClick('Usado')}
                className="text-left py-3 px-3 rounded-lg text-base font-semibold text-[#E4E0D8] hover:bg-[#303030] flex items-center justify-between"
              >
                <span>Usados Seleccionados</span>
                <span className="text-xs bg-[#686868] text-[#E4E0D8] px-2 py-0.5 rounded font-bold">Garantizados</span>
              </button>
              <button
                onClick={() => handleNavClick('servicios')}
                className="text-left py-3 px-3 rounded-lg text-base font-semibold text-[#E4E0D8] hover:bg-[#303030]"
              >
                Servicios
              </button>
              <button
                onClick={() => handleNavClick('contacto')}
                className="text-left py-3 px-3 rounded-lg text-base font-semibold text-[#E4E0D8] hover:bg-[#303030]"
              >
                Contacto
              </button>
            </div>

            <div className="pt-5 flex flex-col gap-3">
              <button
                onClick={() => handleNavClick('vehiculos')}
                className="w-full py-3.5 bg-[#E4E0D8] hover:bg-white text-[#161616] rounded-xl font-bold text-center transition-colors shadow-md"
              >
                Ver todos los vehículos
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsApp();
                }}
                className="w-full py-3 bg-[#161616] text-[#E4E0D8] border border-[#686868]/40 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#303030] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Consultar por WhatsApp
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
