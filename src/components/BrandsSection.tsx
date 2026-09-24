import { ArrowUpRight, Lock } from 'lucide-react';
import { BRANDS_DATA, BrandInfo } from '../data/brands';
import { BrandLogo } from './BrandLogo';
import { MOCK_VEHICLES } from '../data/mockVehicles';
import { Vehicle } from '../types/vehicle';

interface BrandsSectionProps {
  onSelectBrand: (brandName: string) => void;
  selectedBrand?: string;
  vehicles?: Vehicle[];
}

export const BrandsSection = ({
  onSelectBrand,
  selectedBrand,
  vehicles = MOCK_VEHICLES,
}: BrandsSectionProps) => {
  // Helper to dynamically calculate real units per brand
  const getBrandUnitCount = (brandName: string, brandId: string): number => {
    return vehicles.filter((v) => {
      const vBrand = v.brand.toLowerCase().trim();
      const bName = brandName.toLowerCase().trim();
      const bId = brandId.toLowerCase().trim();
      return (
        vBrand === bName ||
        vBrand.includes(bName) ||
        bName.includes(vBrand) ||
        (bId === 'mercedes-benz' && vBrand.includes('mercedes'))
      );
    }).length;
  };

  const formatUnitsText = (count: number): string => {
    if (count === 1) return '1 unidad';
    return `${count} unidades`;
  };

  return (
    <section id="marcas" className="py-16 sm:py-20 bg-[#161616] border-y border-[#686868]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#A6A39E] mb-2 inline-block">
            Encontrá tu próximo auto
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E4E0D8] tracking-tight font-display mb-4">
            Todas las marcas
          </h2>
          <p className="text-[#A6A39E] text-base sm:text-lg">
            Consultá nuestro stock disponible y recibí atención personalizada para encontrar tu próximo auto.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {BRANDS_DATA.map((brand: BrandInfo) => {
            const count = getBrandUnitCount(brand.name, brand.id);
            const hasUnits = count > 0;
            const isSelected = selectedBrand?.toLowerCase() === brand.name.toLowerCase();

            return (
              <button
                key={brand.id}
                id={`brand-card-${brand.id}`}
                disabled={!hasUnits}
                aria-disabled={!hasUnits}
                onClick={() => {
                  if (hasUnits) {
                    onSelectBrand(brand.name);
                  }
                }}
                title={
                  hasUnits
                    ? `Ver stock de ${brand.name} (${formatUnitsText(count)})`
                    : `Actualmente sin unidades disponibles de ${brand.name}`
                }
                className={`group relative p-5 rounded-2xl border transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[140px] select-none ${
                  !hasUnits
                    ? 'opacity-40 grayscale bg-[#1c1c1c] border-[#686868]/20 cursor-not-allowed'
                    : isSelected
                    ? 'border-[#E4E0D8] ring-2 ring-[#E4E0D8]/30 shadow-xl scale-[1.02] bg-[#303030] cursor-pointer'
                    : 'border-[#686868]/40 bg-[#303030] hover:border-[#A6A39E] hover:bg-[#303030]/80 hover:shadow-xl hover:-translate-y-1 cursor-pointer'
                }`}
              >
                {/* Arrow or Lock indicator */}
                <div className="absolute top-3 right-3 transition-colors">
                  {hasUnits ? (
                    <ArrowUpRight className="w-4 h-4 text-[#A6A39E] group-hover:text-[#E4E0D8]" />
                  ) : (
                    <Lock className="w-3.5 h-3.5 text-[#686868]" />
                  )}
                </div>

                {/* Brand Logo representation */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center p-2.5 transition-all duration-300 mb-2.5 shadow-md ${
                    hasUnits
                      ? 'bg-white border border-white/90 group-hover:scale-105 group-hover:shadow-xl group-hover:border-white'
                      : 'bg-[#EAEAEA]/30 border border-[#686868]/20'
                  }`}
                >
                  <BrandLogo
                    brandId={brand.id}
                    className={`w-full h-full object-contain ${
                      hasUnits
                        ? 'opacity-100 group-hover:brightness-105'
                        : 'opacity-30 grayscale'
                    }`}
                  />
                </div>

                {/* Brand Name */}
                <div className="w-full">
                  <h3
                    className={`font-bold text-base tracking-tight transition-colors ${
                      hasUnits
                        ? 'text-[#E4E0D8] group-hover:text-white'
                        : 'text-[#858585]'
                    }`}
                  >
                    {brand.name}
                  </h3>
                  <p className="text-[11px] text-[#A6A39E] mt-0.5">
                    {hasUnits ? brand.popularModel : 'Sin unidades'}
                  </p>
                </div>

                {/* Units badge */}
                <div className="mt-2">
                  <span
                    className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full transition-colors border ${
                      hasUnits
                        ? 'text-[#E4E0D8] bg-[#161616] group-hover:bg-[#E4E0D8] group-hover:text-[#161616] border-[#686868]/30'
                        : 'text-[#686868] bg-[#161616]/40 border-[#686868]/20'
                    }`}
                  >
                    {formatUnitsText(count)}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-10 text-center">
          <p className="text-xs sm:text-sm text-[#A6A39E]">
            ¿Buscás una versión o color específico?{' '}
            <a href="#contacto" className="text-[#E4E0D8] font-bold underline hover:text-white">
              Contactá a nuestro equipo de asesores comerciales
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
