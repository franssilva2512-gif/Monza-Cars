import React from 'react';
import { Heart, Fuel, Gauge, Eye, Calendar, Sparkles } from 'lucide-react';
import { Vehicle } from '../types';
import { formatPriceARS, formatKM } from '../data/vehicles';
import { getBrandLogo } from './BrandLogos';

interface VehicleCardProps {
  vehicle: Vehicle;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onSelectVehicle: (vehicle: Vehicle) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({
  vehicle,
  isFavorite,
  onToggleFavorite,
  onSelectVehicle,
}) => {
  return (
    <div
      className="group bg-[#211A16] border border-[#5A4636]/40 hover:border-[#D6C2A3]/60 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0D0D0D]"
      id={`vehicle-card-${vehicle.id}`}
    >
      {/* Photo Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#0D0D0D]">
        <img
          src={vehicle.images[0]}
          alt={`${vehicle.brand} ${vehicle.model} ${vehicle.version}`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Gradient overlay on image bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#211A16] via-transparent to-black/20" />

        {/* Condition Badge (0 KM / Usado) */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-md ${
              vehicle.condition === '0 KM'
                ? 'bg-[#5A4636] text-[#F5F0E6] border border-[#D6C2A3]/40 shadow-[#0D0D0D]'
                : 'bg-[#211A16]/95 text-[#D6C2A3] border border-[#5A4636]/60 backdrop-blur-sm'
            }`}
          >
            {vehicle.condition === '0 KM' ? '0 KM' : 'Usado Certificado'}
          </span>

          {vehicle.featured && (
            <span className="bg-[#D6C2A3] text-[#0D0D0D] px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase flex items-center gap-1 shadow">
              <Sparkles className="w-3 h-3" />
              Destacado
            </span>
          )}
        </div>

        {/* Favorite Button (Heart Icon) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(vehicle.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all duration-200 cursor-pointer ${
            isFavorite
              ? 'bg-[#5A4636] text-[#D6C2A3] shadow-lg shadow-[#0D0D0D] scale-110 border border-[#D6C2A3]/50'
              : 'bg-[#211A16]/80 text-[#D6C2A3]/70 hover:text-[#F5F0E6] hover:bg-[#211A16] border border-[#5A4636]/50'
          }`}
          aria-label={isFavorite ? 'Quitar de favoritos' : 'Guardar en favoritos'}
          id={`fav-btn-${vehicle.id}`}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorite ? 'fill-current text-[#D6C2A3]' : 'text-[#D6C2A3]/70 hover:text-[#D6C2A3]'
            }`}
          />
        </button>

        {/* Bottom image overlay: Body type pill */}
        <div className="absolute bottom-3 left-3">
          <span className="text-[11px] font-medium bg-[#0D0D0D]/90 text-[#D6C2A3] px-2.5 py-1 rounded-md border border-[#5A4636]/50 backdrop-blur-sm">
            {vehicle.bodyType}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand Logo & Brand Name side-by-side */}
          <div className="flex items-center gap-2 mb-1.5 text-[#D6C2A3]/70">
            <span className="text-[#D6C2A3] group-hover:text-[#F5F0E6] transition-colors">
              {getBrandLogo(vehicle.brand, 'w-4 h-4')}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#D6C2A3]">
              {vehicle.brand}
            </span>
          </div>

          {/* Model and Version */}
          <h3 className="text-lg font-bold text-[#F5F0E6] group-hover:text-[#D6C2A3] transition-colors leading-snug line-clamp-1">
            {vehicle.model}
          </h3>
          <p className="text-xs text-[#D6C2A3]/70 line-clamp-1 mt-0.5 mb-4">
            {vehicle.version}
          </p>

          {/* Specs badges: Año, Kilometraje, Transmisión, Combustible */}
          <div className="grid grid-cols-2 gap-2 text-xs text-[#F5F0E6] bg-[#0D0D0D]/70 p-3 rounded-xl border border-[#5A4636]/40 mb-5">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-[#D6C2A3] flex-shrink-0" />
              <span>Año {vehicle.year}</span>
            </div>
            <div className="flex items-center gap-2">
              <Gauge className="w-3.5 h-3.5 text-[#D6C2A3] flex-shrink-0" />
              <span>{formatKM(vehicle.mileage)}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 flex items-center justify-center font-bold text-[10px] text-[#D6C2A3] border border-[#5A4636] rounded">
                AT
              </span>
              <span className="truncate">{vehicle.transmission}</span>
            </div>
            <div className="flex items-center gap-2">
              <Fuel className="w-3.5 h-3.5 text-[#D6C2A3] flex-shrink-0" />
              <span className="truncate">{vehicle.fuel}</span>
            </div>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="pt-3 border-t border-[#5A4636]/40">
          <div className="flex items-baseline justify-between mb-1.5">
            <span className="text-xs text-[#D6C2A3]/70 font-medium">Precio contado</span>
            <span className="text-xl font-extrabold text-[#F5F0E6] tracking-tight">
              {formatPriceARS(vehicle.price)}
            </span>
          </div>

          {/* Cuota estimada de financiación */}
          <div className="flex items-center justify-between text-xs text-[#D6C2A3] mb-4 bg-[#5A4636]/20 px-2.5 py-1.5 rounded-lg border border-[#5A4636]/40">
            <span className="text-[11px] text-[#F5F0E6]/80">Cuota estimada desde</span>
            <span className="font-bold text-[#D6C2A3] text-xs">
              {formatPriceARS(vehicle.installmentPrice)} / mes
            </span>
          </div>

          {/* Action button "Ver vehículo" */}
          <button
            onClick={() => onSelectVehicle(vehicle)}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#5A4636] hover:bg-[#D6C2A3] text-[#F5F0E6] hover:text-[#0D0D0D] font-semibold text-sm py-2.5 px-4 rounded-xl border border-[#D6C2A3]/30 transition-all duration-200 cursor-pointer shadow-sm group/btn"
            id={`btn-ver-vehiculo-${vehicle.id}`}
          >
            <Eye className="w-4 h-4 text-[#D6C2A3] group-hover/btn:text-[#0D0D0D] transition-colors" />
            <span>Ver vehículo</span>
          </button>
        </div>
      </div>
    </div>
  );
};
