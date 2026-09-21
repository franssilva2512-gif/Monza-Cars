import { ArrowUpRight } from 'lucide-react';
import { BRANDS_DATA, BrandInfo } from '../data/brands';
import { BrandLogo } from './BrandLogo';

interface BrandsSectionProps {
  onSelectBrand: (brandName: string) => void;
  selectedBrand?: string;
}

export const BrandsSection = ({ onSelectBrand, selectedBrand }: BrandsSectionProps) => {
  return (
    <section id="marcas" className="py-16 sm:py-20 bg-[#161616] border-y border-[#686868]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          {/* Subtítulo exacto según especificación: "Encontrá tu próximo auto" */}
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#A6A39E] mb-2 inline-block">
            Encontrá tu próximo auto
          </span>

          {/* Título exacto según especificación: "Todas las marcas" */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E4E0D8] tracking-tight font-display mb-4">
            Todas las marcas
          </h2>
          <p className="text-[#A6A39E] text-base sm:text-lg">
            Somos concesionario oficial y multimarca líder. Garantía de fábrica y servicio de postventa integral.
          </p>
        </div>

        {/* Brands Grid - 12 brands */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {BRANDS_DATA.map((brand: BrandInfo) => {
            const isSelected = selectedBrand?.toLowerCase() === brand.name.toLowerCase();

            return (
              <button
                key={brand.id}
                id={`brand-card-${brand.id}`}
                onClick={() => onSelectBrand(brand.name)}
                className={`group relative p-5 rounded-2xl bg-[#303030] border transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[140px] cursor-pointer ${
                  isSelected
                    ? 'border-[#E4E0D8] ring-2 ring-[#E4E0D8]/30 shadow-xl scale-[1.02] bg-[#303030]'
                    : 'border-[#686868]/40 hover:border-[#A6A39E] hover:bg-[#303030]/80 hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {/* Arrow indicator on hover */}
                <div className="absolute top-3 right-3 text-[#A6A39E] group-hover:text-[#E4E0D8] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Brand Logo representation */}
                <div className="w-14 h-14 rounded-2xl bg-[#161616] group-hover:bg-[#303030] border border-[#686868]/40 flex items-center justify-center p-2.5 transition-all duration-300 mb-2 shadow-xs group-hover:scale-105">
                  <BrandLogo
                    brandId={brand.id}
                    className="w-full h-full object-contain text-[#E4E0D8] group-hover:text-white transition-colors"
                  />
                </div>

                {/* Brand Name */}
                <div className="w-full">
                  <h3 className="font-bold text-[#E4E0D8] text-base tracking-tight group-hover:text-white transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-[11px] text-[#A6A39E] mt-0.5">
                    {brand.popularModel}
                  </p>
                </div>

                {/* Units badge */}
                <div className="mt-2">
                  <span className="inline-block text-[10px] font-bold text-[#A6A39E] bg-[#161616] group-hover:bg-[#E4E0D8] group-hover:text-[#161616] px-2 py-0.5 rounded-full transition-colors border border-[#686868]/30">
                    {brand.availableCount} unidades
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
