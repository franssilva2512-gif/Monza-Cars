import { useState, type MouseEvent } from 'react';
import { Heart, Gauge, Calendar, ArrowRight, Sparkles, Maximize2 } from 'lucide-react';
import { Vehicle } from '../types/vehicle';
import { BrandLogo } from './BrandLogo';
import { ImageLightboxModal } from './ImageLightboxModal';

interface FeaturedVehiclesProps {
  vehicles: Vehicle[];
  onOpenDetail: (vehicle: Vehicle) => void;
  onResetFilters: () => void;
  selectedCondition: string;
  onSelectCondition: (cond: string) => void;
}

export const FeaturedVehicles = ({
  vehicles,
  onOpenDetail,
  onResetFilters,
  selectedCondition,
  onSelectCondition,
}: FeaturedVehiclesProps) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'year-desc' | 'km-asc'>('featured');
  const [lightboxVehicle, setLightboxVehicle] = useState<Vehicle | null>(null);

  const toggleFavorite = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  // Format currency: ARS ($ 35.000.000) or USD ($ 13.000 USD / USD 13.000)
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

  // Format mileage: 15.000 km
  const formatMileage = (km: number) => {
    return `${new Intl.NumberFormat('es-AR').format(km)} km`;
  };

  // Helper to normalize price for sorting
  const getComparablePrice = (v: Vehicle) => (v.currency === 'USD' ? v.price * 1250 : v.price);

  // Sort vehicles
  const sortedVehicles = [...vehicles].sort((a, b) => {
    if (sortBy === 'price-asc') return getComparablePrice(a) - getComparablePrice(b);
    if (sortBy === 'price-desc') return getComparablePrice(b) - getComparablePrice(a);
    if (sortBy === 'year-desc') return b.year - a.year;
    if (sortBy === 'km-asc') return a.mileage - b.mileage;
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  return (
    <section id="vehiculos" className="py-16 sm:py-24 bg-[#161616] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title & Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] text-[#E4E0D8] text-xs font-bold uppercase tracking-wider mb-2 border border-[#686868]/40">
              <Sparkles className="w-3.5 h-3.5 text-[#E4E0D8]" />
              Stock Disponible y Actualizado
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E4E0D8] tracking-tight font-display">
              Vehículos Destacados
            </h2>
            <p className="text-[#A6A39E] text-base sm:text-lg mt-2 max-w-xl">
              Descubrí nuestras unidades seleccionadas con precio de contado transparente y entrega inmediata.
            </p>
          </div>

          {/* Controls: Sort dropdown */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Sort Dropdown */}
            <div className="relative">
              <select
                id="vehicle-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#303030] border border-[#686868]/40 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-semibold text-[#E4E0D8] focus:outline-none focus:ring-1 focus:ring-[#E4E0D8] cursor-pointer"
              >
                <option value="featured" className="bg-[#161616] text-[#E4E0D8]">Destacados</option>
                <option value="price-asc" className="bg-[#161616] text-[#E4E0D8]">Menor precio</option>
                <option value="price-desc" className="bg-[#161616] text-[#E4E0D8]">Mayor precio</option>
                <option value="year-desc" className="bg-[#161616] text-[#E4E0D8]">Año más nuevo</option>
                <option value="km-asc" className="bg-[#161616] text-[#E4E0D8]">Menor kilometraje</option>
              </select>
            </div>
          </div>
        </div>

        {/* Empty state */}
        {sortedVehicles.length === 0 ? (
          <div className="bg-[#303030] rounded-2xl border border-dashed border-[#686868]/40 p-12 text-center my-8 max-w-2xl mx-auto">
            <p className="text-[#E4E0D8] text-lg mb-2 font-bold">
              No encontramos vehículos que coincidan exactamente con tus filtros.
            </p>
            <p className="text-[#A6A39E] text-sm mb-6">
              Probá restablecer los filtros para ver todo nuestro inventario disponible.
            </p>
            <button
              onClick={onResetFilters}
              className="px-6 py-2.5 rounded-xl bg-[#E4E0D8] hover:bg-white text-[#161616] text-sm font-bold transition-colors cursor-pointer shadow-sm"
            >
              Ver todos los vehículos
            </button>
          </div>
        ) : (
          /* Vehicles Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedVehicles.map((vehicle) => {
              const isFav = favorites.includes(vehicle.id);

              return (
                <div
                  key={vehicle.id}
                  id={`vehicle-card-${vehicle.id}`}
                  className="group bg-[#303030] rounded-2xl border border-[#686868]/40 hover:border-[#A6A39E] overflow-hidden shadow-lg shadow-black/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    {/* Image Container with Badges */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#161616]">
                      <img
                        src={vehicle.images[0]}
                        alt={`${vehicle.brand} ${vehicle.model}`}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out opacity-90 group-hover:opacity-100"
                        loading="lazy"
                      />

                      {/* Condition badge */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                        <span className="text-[11px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-md shadow-sm bg-[#161616] text-[#E4E0D8] border border-[#686868]/40">
                          {vehicle.condition}
                        </span>
                        {vehicle.featured && (
                          <span className="bg-[#E4E0D8] text-[#161616] text-[11px] font-extrabold px-2 py-1 rounded-md shadow-sm">
                            Destacado
                          </span>
                        )}
                      </div>

                      {/* Favorite Button */}
                      <button
                        onClick={(e) => toggleFavorite(vehicle.id, e)}
                        className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all duration-200 z-10 cursor-pointer ${
                          isFav
                            ? 'bg-[#E4E0D8] text-[#161616]'
                            : 'bg-[#161616]/80 hover:bg-[#161616] text-[#E4E0D8]'
                        }`}
                        aria-label="Guardar como favorito"
                      >
                        <Heart className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
                      </button>

                      {/* Body Type pill bottom right */}
                      <div className="absolute bottom-2.5 right-3 bg-[#161616]/85 backdrop-blur-sm text-[#E4E0D8] text-[11px] font-semibold px-2 py-0.5 rounded border border-[#686868]/40">
                        {vehicle.bodyType}
                      </div>

                      {/* Quick Enlarge / Zoom button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxVehicle(vehicle);
                        }}
                        className="absolute bottom-2.5 left-3 px-2.5 py-1 rounded-lg bg-black/80 hover:bg-black text-[#E4E0D8] border border-[#686868]/50 backdrop-blur-md transition-all cursor-pointer flex items-center gap-1.5 text-[11px] font-semibold opacity-90 group-hover:opacity-100 shadow-md hover:scale-105 active:scale-95 z-10"
                        title="Agrandar fotos en pantalla completa"
                        aria-label={`Agrandar fotos de ${vehicle.brand} ${vehicle.model}`}
                      >
                        <Maximize2 className="w-3 h-3 text-[#E4E0D8]" />
                        <span>Agrandar fotos</span>
                      </button>
                    </div>

                    {/* Card Body */}
                    <div className="p-5">
                      {/* Brand & Model */}
                      <div className="mb-2">
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="w-5 h-5 rounded-md bg-white flex items-center justify-center p-0.5 shadow-xs border border-white/80 shrink-0">
                            <BrandLogo
                              brandId={vehicle.brand}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <span className="text-xs font-extrabold uppercase tracking-wider text-[#A6A39E]">
                            {vehicle.brand}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-[#E4E0D8] tracking-tight leading-snug group-hover:text-white transition-colors line-clamp-1">
                          {vehicle.model}
                        </h3>
                        <p className="text-xs text-[#A6A39E] line-clamp-1">
                          {vehicle.version}
                        </p>
                      </div>

                      {/* Specs Row: Year & Mileage */}
                      <div className="flex items-center gap-3 py-3 border-y border-[#686868]/30 text-xs text-[#A6A39E] mb-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#A6A39E]" />
                          <span>{vehicle.year}</span>
                        </div>
                        <span className="text-[#686868]">•</span>
                        <div className="flex items-center gap-1.5">
                          <Gauge className="w-3.5 h-3.5 text-[#A6A39E]" />
                          <span>{formatMileage(vehicle.mileage)}</span>
                        </div>
                        <span className="text-[#686868]">•</span>
                        <span className="truncate">{vehicle.fuel}</span>
                      </div>

                      {/* Price (Precio de contado) */}
                      <div className="pt-2 border-t border-[#686868]/30">
                        <span className="text-[11px] uppercase tracking-wider font-bold text-[#A6A39E] block">
                          Precio de contado
                        </span>
                        <span className="text-2xl font-black text-[#E4E0D8] tracking-tight font-display">
                          {formatPrice(vehicle.price, vehicle.currency)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Botón "Ver vehículo" */}
                  <div className="px-5 pb-5 pt-0">
                    <button
                      id={`view-vehicle-btn-${vehicle.id}`}
                      onClick={() => onOpenDetail(vehicle)}
                      className="w-full py-3 rounded-xl bg-[#161616] hover:bg-[#E4E0D8] text-[#E4E0D8] hover:text-[#161616] text-sm font-bold tracking-wide transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm border border-[#686868]/40 hover:border-[#E4E0D8] active:scale-98"
                    >
                      <span>Ver vehículo</span>
                      <ArrowRight className="w-4 h-4 text-inherit group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal from Featured Vehicles Card */}
      {lightboxVehicle && (
        <ImageLightboxModal
          isOpen={Boolean(lightboxVehicle)}
          images={lightboxVehicle.images}
          initialIndex={0}
          vehicleTitle={`${lightboxVehicle.brand} ${lightboxVehicle.model} ${lightboxVehicle.version}`}
          onClose={() => setLightboxVehicle(null)}
        />
      )}
    </section>
  );
};
