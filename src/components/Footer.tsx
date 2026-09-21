import { Car, Instagram, Facebook, Youtube, MessageCircle, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavClick: (id: string) => void;
  onFilterClick: (cond: '0 KM' | 'Usado') => void;
  onOpenWhatsApp: () => void;
}

export const Footer = ({ onNavClick, onFilterClick, onOpenWhatsApp }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#161616] text-[#E4E0D8] border-t border-[#686868]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-[#686868]/30">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#303030] border border-[#686868]/40 flex items-center justify-center text-[#E4E0D8] shadow-md">
                <Car className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-2xl tracking-tighter text-[#E4E0D8]">
                CAR <span className="text-[#E4E0D8]">ONE</span>
              </span>
            </div>

            <p className="text-[#A6A39E] text-sm max-w-sm mb-6 leading-relaxed">
              La red líder multimarca de comercialización de automotores 0 KM y usados certificados en Argentina. Calidad, garantía y financiación en un solo lugar.
            </p>

            {/* Redes sociales especificadas en prompt: Instagram, Facebook, YouTube, WhatsApp */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de CAR ONE"
                className="w-10 h-10 rounded-xl bg-[#303030] hover:bg-[#686868]/40 text-[#A6A39E] hover:text-[#E4E0D8] border border-[#686868]/40 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de CAR ONE"
                className="w-10 h-10 rounded-xl bg-[#303030] hover:bg-[#686868]/40 text-[#A6A39E] hover:text-[#E4E0D8] border border-[#686868]/40 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube de CAR ONE"
                className="w-10 h-10 rounded-xl bg-[#303030] hover:bg-[#686868]/40 text-[#A6A39E] hover:text-[#E4E0D8] border border-[#686868]/40 flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenWhatsApp}
                aria-label="WhatsApp de CAR ONE"
                className="w-10 h-10 rounded-xl bg-[#303030] hover:bg-[#686868]/40 text-[#A6A39E] hover:text-[#E4E0D8] border border-[#686868]/40 flex items-center justify-center transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Column 2: Navegación Principal (Comprar, Vender, 0 KM, Usados) */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#E4E0D8] mb-4">
              Vehículos
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A6A39E]">
              <li>
                <button
                  onClick={() => onNavClick('vehiculos')}
                  className="hover:text-[#E4E0D8] transition-colors cursor-pointer"
                >
                  Comprar
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('vender')}
                  className="hover:text-[#E4E0D8] transition-colors cursor-pointer"
                >
                  Vender
                </button>
              </li>
              <li>
                <button
                  onClick={() => onFilterClick('0 KM')}
                  className="hover:text-[#E4E0D8] transition-colors cursor-pointer"
                >
                  0 KM
                </button>
              </li>
              <li>
                <button
                  onClick={() => onFilterClick('Usado')}
                  className="hover:text-[#E4E0D8] transition-colors cursor-pointer"
                >
                  Usados
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Empresa y Servicios (Servicios, Nosotros, Contacto) */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#E4E0D8] mb-4">
              Institucional
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A6A39E]">
              <li>
                <button
                  onClick={() => onNavClick('servicios')}
                  className="hover:text-[#E4E0D8] transition-colors cursor-pointer"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('nosotros')}
                  className="hover:text-[#E4E0D8] transition-colors cursor-pointer"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('contacto')}
                  className="hover:text-[#E4E0D8] transition-colors cursor-pointer"
                >
                  Contacto
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('marcas')}
                  className="hover:text-[#E4E0D8] transition-colors cursor-pointer"
                >
                  Marcas oficiales
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contacto directo */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#E4E0D8] mb-4">
              Atención al Cliente
            </h4>
            <ul className="space-y-3 text-xs text-[#A6A39E]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E4E0D8] shrink-0 mt-0.5" />
                <span className="text-[#E4E0D8]/80">Av. Principal 1234, Buenos Aires</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E4E0D8] shrink-0" />
                <a href="tel:+541112345678" className="text-[#E4E0D8]/80 hover:text-white transition-colors">
                  +54 11 1234-5678
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E4E0D8] shrink-0" />
                <a href="mailto:contacto@carone.com.ar" className="text-[#E4E0D8]/80 hover:text-white transition-colors">
                  contacto@carone.com.ar
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with exact specified copyright text */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A6A39E]">
          {/* Exact specification: "© 2026 CAR ONE. Todos los derechos reservados." */}
          <p>© 2026 CAR ONE. Todos los derechos reservados.</p>

          <div className="flex items-center gap-6">
            <a href="#contacto" className="hover:text-[#E4E0D8] transition-colors">
              Términos y Condiciones
            </a>
            <a href="#contacto" className="hover:text-[#E4E0D8] transition-colors">
              Políticas de Privacidad
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#A6A39E] hover:text-[#E4E0D8] transition-colors cursor-pointer"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
