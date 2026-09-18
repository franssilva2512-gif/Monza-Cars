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
      className="group bg-neutral-900 border border-neutral-800 hover:border-neutral-700/90 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/70"
      id={`vehicle-card-${vehicle.id}`}
    >
      {/* Photo Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
        <img
          src={vehicle.images[0]}
          alt={`${vehicle.brand} ${vehicle.model} ${vehicle.version}`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Gradient overlay on image bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-black/20" />

        {/* Condition Badge (0 KM / Usado) */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-md ${
              vehicle.condition === '0 KM'
                ? 'bg-red-600 text-white shadow-red-950/50'
                : 'bg-neutral-800/95 text-neutral-200 border border-neutral-700/80 backdrop-blur-sm'
            }`}
          >
            {vehicle.condition === '0 KM' ? '0 KM' : 'Usado Certificado'}
          </span>

          {vehicle.featured && (
            <span className="bg-amber-500/90 text-neutral-950 px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase flex items-center gap-1 shadow">
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
              ? 'bg-red-600/90 text-white shadow-lg shadow-red-900/50 scale-110'
              : 'bg-neutral-900/80 text-neutral-300 hover:text-white hover:bg-neutral-900 border border-neutral-700/60'
          }`}
          aria-label={isFavorite ? 'Quitar de favoritos' : 'Guardar en favoritos'}
          id={`fav-btn-${vehicle.id}`}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorite ? 'fill-current text-white' : 'text-neutral-300 hover:text-red-400'
            }`}
          />
        </button>

        {/* Bottom image overlay: Body type pill */}
        <div className="absolute bottom-3 left-3">
          <span className="text-[11px] font-medium bg-neutral-900/90 text-neutral-300 px-2.5 py-1 rounded-md border border-neutral-700/60 backdrop-blur-sm">
            {vehicle.bodyType}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand Logo & Brand Name side-by-side */}
          <div className="flex items-center gap-2 mb-1.5 text-neutral-400">
            <span className="text-neutral-300 group-hover:text-red-500 transition-colors">
              {getBrandLogo(vehicle.brand, 'w-4 h-4')}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              {vehicle.brand}
            </span>
          </div>

          {/* Model and Version */}
          <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors leading-snug line-clamp-1">
            {vehicle.model}
          </h3>
          <p className="text-xs text-neutral-400 line-clamp-1 mt-0.5 mb-4">
            {vehicle.version}
          </p>

          {/* Specs badges: Año, Kilometraje, Transmisión, Combustible */}
          <div className="grid grid-cols-2 gap-2 text-xs text-neutral-300 bg-neutral-950/70 p-3 rounded-xl border border-neutral-800/80 mb-5">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />
              <span>Año {vehicle.year}</span>
            </div>
            <div className="flex items-center gap-2">
              <Gauge className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />
              <span>{formatKM(vehicle.mileage)}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 flex items-center justify-center font-bold text-[10px] text-neutral-400 border border-neutral-700 rounded">
                AT
              </span>
              <span className="truncate">{vehicle.transmission}</span>
            </div>
            <div className="flex items-center gap-2">
              <Fuel className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />
              <span className="truncate">{vehicle.fuel}</span>
            </div>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="pt-3 border-t border-neutral-800">
          <div className="flex items-baseline justify-between mb-1.5">
            <span className="text-xs text-neutral-400 font-medium">Precio contado</span>
            <span className="text-xl font-extrabold text-white tracking-tight">
              {formatPriceARS(vehicle.price)}
            </span>
          </div>

          {/* Cuota estimada de financiación */}
          <div className="flex items-center justify-between text-xs text-neutral-400 mb-4 bg-red-950/20 px-2.5 py-1.5 rounded-lg border border-red-900/30">
            <span className="text-[11px] text-neutral-300">Cuota estimada desde</span>
            <span className="font-bold text-red-400 text-xs">
              {formatPriceARS(vehicle.installmentPrice)} / mes
            </span>
          </div>

          {/* Action button "Ver vehículo" */}
          <button
            onClick={() => onSelectVehicle(vehicle)}
            className="w-full inline-flex items-center justify-center gap-2 bg-neutral-800 hover:bg-red-600 text-white font-semibold text-sm py-2.5 px-4 rounded-xl border border-neutral-700 hover:border-red-500 transition-all duration-200 cursor-pointer shadow-sm group/btn"
            id={`btn-ver-vehiculo-${vehicle.id}`}
          >
            <Eye className="w-4 h-4 text-neutral-400 group-hover/btn:text-white transition-colors" />
            <span>Ver vehículo</span>
          </button>
        </div>
      </div>
    </div>
  );
};
