import { useState, useEffect } from 'react';
import {
  X,
  MessageCircle,
  Calculator,
  Check,
  Shield,
  Gauge,
  Calendar,
  Fuel,
  Settings,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  PhoneCall,
  CheckCircle2,
} from 'lucide-react';
import { Vehicle } from '../types/vehicle';
import { BrandLogo } from './BrandLogo';

interface VehicleDetailModalProps {
  vehicle: Vehicle;
  onClose: () => void;
  onRequestFinancing: (vehicle: Vehicle) => void;
  onReserveVehicle: (vehicle: Vehicle) => void;
}

export const VehicleDetailModal = ({
  vehicle,
  onClose,
  onRequestFinancing,
  onReserveVehicle,
}: VehicleDetailModalProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'safety' | 'comfort' | 'multimedia'>('safety');

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    setActiveImageIndex(0);
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [vehicle]);

  const formatPrice = (price: number, currency?: 'ARS' | 'USD') => {
    if (currency === 'USD') {
      return `USD ${new Intl.NumberFormat('es-AR').format(price)}`;
    }
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatMileage = (km: number) => {
    if (km === 0) return '0 km (Nuevo a estrenar)';
    return `${new Intl.NumberFormat('es-AR').format(km)} km`;
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `¡Hola! Estoy interesado en el vehículo: ${vehicle.brand} ${vehicle.model} ${vehicle.version} (${vehicle.year}) con precio ${formatPrice(vehicle.price, vehicle.currency)}. ¿Podrían brindarme más información y disponibilidad para coordinar una visita? Muchas gracias.`
    );
    window.open(`https://wa.me/5491155922000?text=${message}`, '_blank');
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % vehicle.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length);
  };

  return (
    <div
      id="vehicle-detail-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#161616]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative bg-[#303030] w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden my-auto border border-[#686868]/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header with Close Button */}
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-[#161616]/90 hover:bg-[#161616] text-[#E4E0D8] backdrop-blur-md transition-all shadow-md cursor-pointer border border-[#686868]/40"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[90vh] overflow-y-auto">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 bg-[#161616] flex flex-col justify-between p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-[#686868]/30">
            {/* Main Image Display */}
            <div className="relative aspect-[16/10] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-black shadow-inner group border border-[#686868]/40">
              <img
                src={vehicle.images[activeImageIndex]}
                alt={`${vehicle.brand} ${vehicle.model} - Imagen ${activeImageIndex + 1}`}
                className="w-full h-full object-cover object-center transition-all duration-300"
              />

              {/* Navigation arrows if multiple images */}
              {vehicle.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-black/90 text-[#E4E0D8] backdrop-blur-md transition-all cursor-pointer"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-black/90 text-[#E4E0D8] backdrop-blur-md transition-all cursor-pointer"
                    aria-label="Siguiente imagen"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Image counter pill */}
              <div className="absolute bottom-3 right-3 bg-[#161616]/80 backdrop-blur-md text-[#E4E0D8] text-xs px-2.5 py-1 rounded-full font-medium border border-[#686868]/40">
                {activeImageIndex + 1} / {vehicle.images.length}
              </div>

              {/* Badge */}
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="bg-[#161616] text-[#E4E0D8] border border-[#686868]/40 text-xs font-bold px-3 py-1 rounded-md shadow-md uppercase tracking-wider">
                  {vehicle.condition}
                </span>
                <span className="bg-[#161616]/80 text-[#A6A39E] text-xs font-medium px-2.5 py-1 rounded-md backdrop-blur-sm border border-[#686868]/40">
                  {vehicle.bodyType}
                </span>
              </div>
            </div>

            {/* Thumbnail selector */}
            {vehicle.images.length > 1 && (
              <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-1">
                {vehicle.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-[#E4E0D8] ring-2 ring-[#E4E0D8]/30 scale-102'
                        : 'border-[#686868]/40 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Miniatura" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Warranty reminder badge */}
            <div className="mt-4 p-3.5 rounded-xl bg-[#161616] border border-[#686868]/40 text-[#A6A39E] text-xs flex items-center gap-2.5">
              <Shield className="w-4 h-4 text-[#E4E0D8] shrink-0" />
              <span className="text-[#E4E0D8]/90">{vehicle.warranty}</span>
            </div>
          </div>

          {/* Right Column: Vehicle Information & 3 Action Buttons */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#303030] text-[#E4E0D8]">
            <div>
              {/* Brand & Model Title */}
              <div className="mb-4">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-white p-1 flex items-center justify-center shadow-xs border border-white/80 shrink-0">
                    <BrandLogo
                      brandId={vehicle.brand}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#A6A39E]">
                    {vehicle.brand}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#E4E0D8] tracking-tight leading-tight font-display">
                  {vehicle.model}
                </h2>
                <p className="text-sm font-medium text-[#A6A39E] mt-1">{vehicle.version}</p>
              </div>

              {/* Price Display */}
              <div className="p-4 rounded-2xl bg-[#161616] border border-[#686868]/40 mb-6">
                <span className="text-xs font-bold text-[#A6A39E] uppercase tracking-wider block">
                  Precio de contado
                </span>
                <div className="text-3xl font-black text-[#E4E0D8] font-display mt-0.5">
                  {formatPrice(vehicle.price, vehicle.currency)}
                </div>
                <div className="mt-2 pt-2 border-t border-[#686868]/30 flex items-center justify-between text-xs text-[#A6A39E]">
                  <span>Financiación:</span>
                  <span className="font-semibold text-[#E4E0D8]">{vehicle.financingType}</span>
                </div>
              </div>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#161616] border border-[#686868]/40 text-xs">
                  <Calendar className="w-4 h-4 text-[#E4E0D8] shrink-0" />
                  <div>
                    <span className="text-[#A6A39E] block text-[10px]">Año</span>
                    <span className="font-bold text-[#E4E0D8]">{vehicle.year}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#161616] border border-[#686868]/40 text-xs">
                  <Gauge className="w-4 h-4 text-[#E4E0D8] shrink-0" />
                  <div>
                    <span className="text-[#A6A39E] block text-[10px]">Kilometraje</span>
                    <span className="font-bold text-[#E4E0D8]">{formatMileage(vehicle.mileage)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#161616] border border-[#686868]/40 text-xs">
                  <Fuel className="w-4 h-4 text-[#E4E0D8] shrink-0" />
                  <div>
                    <span className="text-[#A6A39E] block text-[10px]">Combustible</span>
                    <span className="font-bold text-[#E4E0D8]">{vehicle.fuel}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#161616] border border-[#686868]/40 text-xs">
                  <Settings className="w-4 h-4 text-[#E4E0D8] shrink-0" />
                  <div>
                    <span className="text-[#A6A39E] block text-[10px]">Transmisión</span>
                    <span className="font-bold text-[#E4E0D8]">{vehicle.transmission}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-[#E4E0D8] uppercase tracking-wider mb-2">
                  Descripción
                </h4>
                <p className="text-xs sm:text-sm text-[#A6A39E] leading-relaxed">
                  {vehicle.description}
                </p>
              </div>

              {/* Tabs for Features: Seguridad, Confort, Multimedia */}
              <div className="mb-6">
                <div className="flex border-b border-[#686868]/30 mb-3 text-xs font-semibold">
                  <button
                    onClick={() => setActiveTab('safety')}
                    className={`pb-2 px-1 mr-4 transition-colors cursor-pointer ${
                      activeTab === 'safety'
                        ? 'border-b-2 border-[#E4E0D8] text-[#E4E0D8] font-bold'
                        : 'text-[#A6A39E] hover:text-[#E4E0D8]'
                    }`}
                  >
                    Seguridad
                  </button>
                  <button
                    onClick={() => setActiveTab('comfort')}
                    className={`pb-2 px-1 mr-4 transition-colors cursor-pointer ${
                      activeTab === 'comfort'
                        ? 'border-b-2 border-[#E4E0D8] text-[#E4E0D8] font-bold'
                        : 'text-[#A6A39E] hover:text-[#E4E0D8]'
                    }`}
                  >
                    Confort
                  </button>
                  <button
                    onClick={() => setActiveTab('multimedia')}
                    className={`pb-2 px-1 transition-colors cursor-pointer ${
                      activeTab === 'multimedia'
                        ? 'border-b-2 border-[#E4E0D8] text-[#E4E0D8] font-bold'
                        : 'text-[#A6A39E] hover:text-[#E4E0D8]'
                    }`}
                  >
                    Multimedia
                  </button>
                </div>

                <ul className="space-y-1.5 text-xs text-[#E4E0D8]/90">
                  {vehicle.features[activeTab].map((feat: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E4E0D8] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3 Action Buttons */}
            <div className="space-y-2.5 pt-4 border-t border-[#686868]/30">
              {/* Button 3: "Quiero este vehículo" */}
              <button
                id="btn-want-vehicle"
                onClick={() => onReserveVehicle(vehicle)}
                className="w-full py-3.5 px-4 rounded-xl bg-[#E4E0D8] hover:bg-white text-[#161616] font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <Sparkles className="w-4 h-4 text-[#161616]" />
                <span>Quiero este vehículo</span>
              </button>

              <div className="grid grid-cols-2 gap-2.5">
                {/* Button 1: "Consultar por WhatsApp" */}
                <button
                  id="btn-whatsapp-detail"
                  onClick={handleWhatsAppClick}
                  className="py-3 px-3 rounded-xl bg-[#161616] hover:bg-[#686868]/30 text-[#E4E0D8] border border-[#686868]/40 font-semibold text-xs sm:text-sm tracking-wide transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 shrink-0 text-[#E4E0D8]" />
                  <span className="truncate">WhatsApp</span>
                </button>

                {/* Button 2: "Solicitar financiación" */}
                <button
                  id="btn-financing-detail"
                  onClick={() => onRequestFinancing(vehicle)}
                  className="py-3 px-3 rounded-xl bg-[#161616] hover:bg-[#686868]/30 text-[#E4E0D8] font-semibold text-xs sm:text-sm tracking-wide transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm border border-[#686868]/40"
                >
                  <Calculator className="w-4 h-4 shrink-0 text-[#E4E0D8]" />
                  <span className="truncate">Financiación</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
