import React from 'react';
import { CarOneLogo } from './BrandLogos';
import {
  Instagram,
  Facebook,
  Youtube,
  MessageSquare,
  MapPin,
  Phone,
  Mail,
  ShieldAlert,
  ArrowUpRight,
} from 'lucide-react';
import { OFFICIAL_BRANDS } from '../data/vehicles';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectBrand: (brandName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectBrand }) => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800/80">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-5">
            <CarOneLogo />
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Concesionaria automotriz líder en Argentina. Comercializamos vehículos 0 KM oficiales y usados premium certificados con garantía mecánica escrita, financiación preferencial en cuotas fijas y servicio técnico oficial.
            </p>

            {/* Social Media Links: Instagram, Facebook, YouTube, WhatsApp */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram CAR ONE"
                className="w-10 h-10 rounded-xl bg-neutral-900 hover:bg-red-600 hover:text-white border border-neutral-800 flex items-center justify-center transition-colors cursor-pointer text-neutral-300"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook CAR ONE"
                className="w-10 h-10 rounded-xl bg-neutral-900 hover:bg-red-600 hover:text-white border border-neutral-800 flex items-center justify-center transition-colors cursor-pointer text-neutral-300"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube CAR ONE"
                className="w-10 h-10 rounded-xl bg-neutral-900 hover:bg-red-600 hover:text-white border border-neutral-800 flex items-center justify-center transition-colors cursor-pointer text-neutral-300"
              >
                <Youtube className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/5491112345678"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Oficial CAR ONE"
                className="w-10 h-10 rounded-xl bg-neutral-900 hover:bg-emerald-600 hover:text-white border border-neutral-800 flex items-center justify-center transition-colors cursor-pointer text-neutral-300"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navegación Rápida */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('inicio')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalogo')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Comprar un Auto
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('vender')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Vender mi Auto
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('servicios')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Servicios y Taller
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('nosotros')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Por qué elegirnos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contacto')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sucursales y Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Marcas Oficiales */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">
              Marcas Oficiales
            </h4>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
              {OFFICIAL_BRANDS.slice(0, 8).map((b) => (
                <button
                  key={b.id}
                  onClick={() => onSelectBrand(b.name)}
                  className="text-left hover:text-white transition-colors truncate cursor-pointer text-xs"
                >
                  {b.name}
                </button>
              ))}
            </div>
          </div>

          {/* Column 4: Contacto Inmediato */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">
              Atención al Cliente
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Av. Principal 1234, CABA, Argentina</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                <a href="tel:+541112345678" className="hover:text-white">
                  +54 11 1234-5678
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                <a href="mailto:contacto@carone.com.ar" className="hover:text-white">
                  contacto@carone.com.ar
                </a>
              </div>
              <div className="pt-2 text-[11px] text-neutral-500">
                Atención telefónica: Lun a Vie 9 a 19 hs | Sáb 9 a 17 hs
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          {/* Exact required copyright text */}
          <div>
            © 2026 CAR ONE. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-400 transition-colors cursor-pointer">
              Términos y Condiciones
            </span>
            <span>·</span>
            <span className="hover:text-neutral-400 transition-colors cursor-pointer">
              Políticas de Privacidad
            </span>
            <span>·</span>
            <span className="hover:text-neutral-400 transition-colors cursor-pointer">
              Defensa de las y los Consumidores
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
