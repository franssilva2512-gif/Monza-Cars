import React, { useState } from 'react';
import {
  X,
  Heart,
  ChevronLeft,
  ChevronRight,
  Shield,
  Sliders,
  Radio,
  CheckCircle2,
  Calendar,
  Gauge,
  Fuel,
  Settings,
  Car,
  Zap,
  MessageSquare,
  Calculator,
  KeyRound,
  Sparkles,
} from 'lucide-react';
import { Vehicle } from '../types';
import { formatPriceARS, formatKM } from '../data/vehicles';
import { getBrandLogo } from './BrandLogos';

interface VehicleModalProps {
  vehicle: Vehicle;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onOpenFinancing: (vehicle: Vehicle) => void;
  onOpenReservation: (vehicle: Vehicle) => void;
}

export const VehicleModal: React.FC<VehicleModalProps> = ({
  vehicle,
  onClose,
  isFavorite,
  onToggleFavorite,
  onOpenFinancing,
  onOpenReservation,
}) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'seguridad' | 'confort' | 'multimedia'>('seguridad');

  const prevPhoto = () => {
    setActivePhotoIndex((prev) => (prev === 0 ? vehicle.images.length - 1 : prev - 1));
  };

  const nextPhoto = () => {
    setActivePhotoIndex((prev) => (prev === vehicle.images.length - 1 ? 0 : prev + 1));
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hola CAR ONE! Estoy interesado en el siguiente vehículo publicado en la web:\n` +
      `*${vehicle.brand} ${vehicle.model} ${vehicle.version}*\n` +
      `Año: ${vehicle.year} | ${formatKM(vehicle.mileage)}\n` +
      `Precio: ${formatPriceARS(vehicle.price)}\n` +
      `¿Podrían brindarme mayor información sobre disponibilidad y formas de pago? Muchas gracias!`
    );
    window.open(`https://wa.me/5491112345678?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        className="relative w-full max-w-5xl bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl shadow-black overflow-hidden flex flex-col max-h-[92vh] z-10 animate-in fade-in zoom-in-95 duration-200"
        id="vehicle-detail-modal"
      >
        {/* Sticky Header with Title & Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-900/95 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-neutral-800 text-red-500">
              {getBrandLogo(vehicle.brand, 'w-6 h-6')}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                  {vehicle.brand}
                </span>
                <span className="text-neutral-600">·</span>
                <span className="text-xs font-medium text-red-400">
                  {vehicle.condition}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
                {vehicle.model} <span className="font-normal text-neutral-400 text-lg">{vehicle.version}</span>
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleFavorite(vehicle.id)}
              className={`p-2.5 rounded-full border transition-colors cursor-pointer ${
                isFavorite
                  ? 'bg-red-600 text-white border-red-500'
                  : 'bg-neutral-800 text-neutral-300 hover:text-white border-neutral-700'
              }`}
              title={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Cerrar modal"
              id="btn-close-vehicle-modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto p-6 space-y-8">
          {/* Gallery with Main Viewer & Thumbnail navigation */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800 shadow-inner group">
              <img
                src={vehicle.images[activePhotoIndex]}
                alt={`${vehicle.brand} ${vehicle.model} - foto ${activePhotoIndex + 1}`}
                className="w-full h-full object-cover object-center transition-all duration-300"
              />

              {/* Prev/Next arrows */}
              {vehicle.images.length > 1 && (
                <>
                  <button
                    onClick={prevPhoto}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-900 text-white backdrop-blur-sm border border-neutral-700/80 transition-all cursor-pointer opacity-90 hover:scale-110"
                    aria-label="Foto anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-900 text-white backdrop-blur-sm border border-neutral-700/80 transition-all cursor-pointer opacity-90 hover:scale-110"
                    aria-label="Siguiente foto"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Photo counter badge */}
              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-md bg-neutral-950/80 backdrop-blur-sm text-xs font-semibold text-neutral-300 border border-neutral-800">
                Foto {activePhotoIndex + 1} de {vehicle.images.length}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            {vehicle.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {vehicle.images.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIndex(idx)}
                    className={`relative w-24 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer ${
                      activePhotoIndex === idx
                        ? 'border-red-500 scale-105 shadow-md shadow-red-950/50'
                        : 'border-neutral-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`Miniatura ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Pricing Banner and Immediate Financing badge */}
          <div className="bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 p-5 rounded-2xl border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-medium text-neutral-400">Precio Contado Efectivo</span>
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {formatPriceARS(vehicle.price)}
              </div>
              <p className="text-xs text-neutral-400 mt-1">
                Incluye peritaje técnico certificado y verificación policial al día.
              </p>
            </div>

            <div className="bg-red-950/40 border border-red-800/40 px-4 py-3 rounded-xl sm:text-right">
              <span className="text-xs text-red-300 font-semibold block">Financiación Exclusiva CAR ONE</span>
              <span className="text-xl font-black text-white">
                Cuota desde {formatPriceARS(vehicle.installmentPrice)}
              </span>
              <span className="text-[11px] text-neutral-400 block mt-0.5">
                Hasta 60 cuotas fijas en pesos
              </span>
            </div>
          </div>

          {/* Ficha Técnica Completa (Motor, Potencia, Transmisión, Combustible, Tracción, etc.) */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Settings className="w-5 h-5 text-red-500" />
              <span>Ficha Técnica Completa</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              <div className="bg-neutral-950/80 p-4 rounded-xl border border-neutral-800/80">
                <span className="text-xs text-neutral-400 block mb-1">Motor</span>
                <span className="font-bold text-neutral-100 text-sm">{vehicle.engine}</span>
              </div>

              <div className="bg-neutral-950/80 p-4 rounded-xl border border-neutral-800/80">
                <span className="text-xs text-neutral-400 block mb-1">Potencia / Torque</span>
                <span className="font-bold text-neutral-100 text-sm">{vehicle.power}</span>
              </div>

              <div className="bg-neutral-950/80 p-4 rounded-xl border border-neutral-800/80">
                <span className="text-xs text-neutral-400 block mb-1">Transmisión</span>
                <span className="font-bold text-neutral-100 text-sm">{vehicle.transmission}</span>
              </div>

              <div className="bg-neutral-950/80 p-4 rounded-xl border border-neutral-800/80">
                <span className="text-xs text-neutral-400 block mb-1">Combustible</span>
                <span className="font-bold text-neutral-100 text-sm">{vehicle.fuel}</span>
              </div>

              <div className="bg-neutral-950/80 p-4 rounded-xl border border-neutral-800/80">
                <span className="text-xs text-neutral-400 block mb-1">Tracción</span>
                <span className="font-bold text-neutral-100 text-sm">{vehicle.traction}</span>
              </div>

              <div className="bg-neutral-950/80 p-4 rounded-xl border border-neutral-800/80">
                <span className="text-xs text-neutral-400 block mb-1">Año de Fabricación</span>
                <span className="font-bold text-neutral-100 text-sm">{vehicle.year}</span>
              </div>

              <div className="bg-neutral-950/80 p-4 rounded-xl border border-neutral-800/80">
                <span className="text-xs text-neutral-400 block mb-1">Kilometraje Certificado</span>
                <span className="font-bold text-neutral-100 text-sm">{formatKM(vehicle.mileage)}</span>
              </div>

              <div className="bg-neutral-950/80 p-4 rounded-xl border border-neutral-800/80">
                <span className="text-xs text-neutral-400 block mb-1">Carrocería</span>
                <span className="font-bold text-neutral-100 text-sm">{vehicle.bodyType}</span>
              </div>

              <div className="bg-neutral-950/80 p-4 rounded-xl border border-neutral-800/80">
                <span className="text-xs text-neutral-400 block mb-1">Puertas</span>
                <span className="font-bold text-neutral-100 text-sm">{vehicle.doors} puertas</span>
              </div>

              <div className="bg-neutral-950/80 p-4 rounded-xl border border-neutral-800/80">
                <span className="text-xs text-neutral-400 block mb-1">Color de Carrocería</span>
                <span className="font-bold text-neutral-100 text-sm">{vehicle.color}</span>
              </div>
            </div>
          </div>

          {/* Pestañas con Equipamiento: Seguridad, Confort, Multimedia */}
          <div>
            <div className="flex border-b border-neutral-800 mb-5">
              <button
                onClick={() => setActiveTab('seguridad')}
                className={`pb-3 px-4 text-sm font-bold transition-colors cursor-pointer border-b-2 flex items-center gap-2 ${
                  activeTab === 'seguridad'
                    ? 'border-red-500 text-white'
                    : 'border-transparent text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <Shield className="w-4 h-4 text-red-500" />
                <span>Seguridad ({vehicle.features.safety.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('confort')}
                className={`pb-3 px-4 text-sm font-bold transition-colors cursor-pointer border-b-2 flex items-center gap-2 ${
                  activeTab === 'confort'
                    ? 'border-red-500 text-white'
                    : 'border-transparent text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <Sliders className="w-4 h-4 text-red-500" />
                <span>Confort ({vehicle.features.comfort.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('multimedia')}
                className={`pb-3 px-4 text-sm font-bold transition-colors cursor-pointer border-b-2 flex items-center gap-2 ${
                  activeTab === 'multimedia'
                    ? 'border-red-500 text-white'
                    : 'border-transparent text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <Radio className="w-4 h-4 text-red-500" />
                <span>Multimedia & Conectividad ({vehicle.features.multimedia.length})</span>
              </button>
            </div>

            {/* Equipment tabs content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-neutral-950/60 p-5 rounded-2xl border border-neutral-800">
              {(activeTab === 'seguridad'
                ? vehicle.features.safety
                : activeTab === 'confort'
                ? vehicle.features.comfort
                : vehicle.features.multimedia
              ).map((item: string, idx: number) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with the 3 Required Action Buttons:
            a) "Consultar por WhatsApp"
            b) "Solicitar financiación"
            c) "Quiero este vehículo"
        */}
        <div className="p-4 sm:p-6 bg-neutral-950 border-t border-neutral-800 sticky bottom-0 z-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Button A: Consultar por WhatsApp */}
            <button
              onClick={handleWhatsAppInquiry}
              className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm py-3.5 px-4 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-950/40 cursor-pointer"
              id="modal-btn-whatsapp"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Consultar por WhatsApp</span>
            </button>

            {/* Button B: Solicitar financiación */}
            <button
              onClick={() => onOpenFinancing(vehicle)}
              className="inline-flex items-center justify-center gap-2.5 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-sm py-3.5 px-4 rounded-xl border border-neutral-700 hover:border-neutral-600 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg cursor-pointer"
              id="modal-btn-financiacion"
            >
              <Calculator className="w-4 h-4 text-red-400" />
              <span>Solicitar financiación</span>
            </button>

            {/* Button C: Quiero este vehículo */}
            <button
              onClick={() => onOpenReservation(vehicle)}
              className="inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-500 text-white font-bold text-sm py-3.5 px-4 rounded-xl shadow-xl shadow-red-950/60 border border-red-500/40 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              id="modal-btn-reservar"
            >
              <KeyRound className="w-4 h-4" />
              <span>Quiero este vehículo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
