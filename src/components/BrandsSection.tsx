import React from 'react';
import { OFFICIAL_BRANDS } from '../data/vehicles';
import { getBrandLogo } from './BrandLogos';
import { ArrowUpRight } from 'lucide-react';

interface BrandsSectionProps {
  selectedBrand: string;
  onSelectBrand: (brandName: string) => void;
}

export const BrandsSection: React.FC<BrandsSectionProps> = ({
  selectedBrand,
  onSelectBrand,
}) => {
  return (
    <section id="marcas" className="py-16 sm:py-20 bg-neutral-950 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header exact requirements */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-red-500 uppercase mb-2">
            Encontrá tu próximo auto
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Todas las marcas
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            Somos concesionario oficial de las automotrices más prestigiosas del mundo. Seleccioná una marca para ver los modelos disponibles.
          </p>
        </div>

        {/* 12 Interactive Brand Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {OFFICIAL_BRANDS.map((brand) => {
            const isSelected = selectedBrand.toLowerCase() === brand.name.toLowerCase();

            return (
              <button
                key={brand.id}
                onClick={() => onSelectBrand(brand.name)}
                className={`group relative flex flex-col items-center justify-center p-5 rounded-2xl border transition-all duration-300 text-center cursor-pointer ${
                  isSelected
                    ? 'bg-neutral-900 border-red-500 ring-2 ring-red-500/30 shadow-xl shadow-red-950/40 -translate-y-1'
                    : 'bg-neutral-900/60 hover:bg-neutral-900 border-neutral-800 hover:border-neutral-700 hover:shadow-lg hover:shadow-black/50 hover:-translate-y-1'
                }`}
                id={`brand-card-${brand.id}`}
              >
                {/* Visual indicator corner */}
                <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-red-400 transition-colors" />
                </div>

                {/* Vector Brand Logo Container */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 ${
                    isSelected
                      ? 'text-red-500 bg-red-950/30'
                      : 'text-neutral-300 group-hover:text-white bg-neutral-800/50'
                  }`}
                >
                  {getBrandLogo(brand.name, 'w-8 h-8')}
                </div>

                {/* Brand Name */}
                <span className="font-bold text-sm text-neutral-100 group-hover:text-white transition-colors">
                  {brand.name}
                </span>

                {/* Vehicle count */}
                <span className="text-[11px] text-neutral-400 mt-1">
                  {brand.vehicleCount} vehículos
                </span>

                {/* Active indicator dot */}
                {isSelected && (
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
