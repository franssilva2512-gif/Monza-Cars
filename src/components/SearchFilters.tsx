import React from 'react';
import { Search, RotateCcw, SlidersHorizontal, ChevronDown, Check } from 'lucide-react';
import { FilterState, BodyType } from '../types';
import { OFFICIAL_BRANDS } from '../data/vehicles';

interface SearchFiltersProps {
  filters: FilterState;
  onFilterChange: (newFilters: Partial<FilterState>) => void;
  onResetFilters: () => void;
  totalAvailable: number;
  availableModels: string[];
  onSearchSubmit: () => void;
}

const BODY_TYPES: BodyType[] = ['Sedán', 'Hatchback', 'SUV', 'Pick-up', 'Utilitario'];

const YEARS = [2024, 2023, 2022, 2021, 2020, 2019];

const PRICE_PRESETS = [
  { label: 'Cualquier precio', min: '', max: '' },
  { label: 'Hasta $ 25.000.000', min: '', max: 25000000 },
  { label: '$ 25.000.000 a $ 35.000.000', min: 25000000, max: 35000000 },
  { label: '$ 35.000.000 a $ 50.000.000', min: 35000000, max: 50000000 },
  { label: 'Más de $ 50.000.000', min: 50000000, max: '' },
];

export const SearchFilters: React.FC<SearchFiltersProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  totalAvailable,
  availableModels,
  onSearchSubmit,
}) => {
  const quickCategories = [
    { id: 'all', label: 'Todos' },
    { id: '0km', label: '0 KM' },
    { id: 'used', label: 'Usados' },
    { id: 'suv', label: 'SUVs' },
    { id: 'pickup', label: 'Pick-ups' },
  ] as const;

  const handleBrandChange = (brand: string) => {
    onFilterChange({
      brand,
      model: '', // Reset model when brand changes
    });
  };

  const handlePricePreset = (preset: typeof PRICE_PRESETS[0]) => {
    onFilterChange({
      priceMin: preset.min as number | '',
      priceMax: preset.max as number | '',
    });
  };

  const isFiltered =
    filters.brand !== '' ||
    filters.model !== '' ||
    filters.yearMin !== '' ||
    filters.priceMin !== '' ||
    filters.priceMax !== '' ||
    filters.bodyType !== '' ||
    filters.quickCategory !== 'all';

  return (
    <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-4 sm:p-6 shadow-2xl shadow-black/50 backdrop-blur-md">
      {/* Quick Category Selector */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-neutral-800">
        <div className="flex flex-wrap items-center gap-2">
          {quickCategories.map((cat) => {
            const isActive = filters.quickCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onFilterChange({ quickCategory: cat.id })}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-red-600 text-white shadow-md shadow-red-950/60 border border-red-500/50'
                    : 'bg-neutral-800/80 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-700/50'
                }`}
                id={`quick-filter-${cat.id}`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Count of available units */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-950/60 border border-neutral-800 text-xs text-neutral-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>
            <strong className="text-white font-bold text-sm">{totalAvailable}</strong>{' '}
            {totalAvailable === 1 ? 'unidad disponible' : 'unidades disponibles'}
          </span>
        </div>
      </div>

      {/* Real-time dropdown filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-5">
        {/* Marca */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Marca</label>
          <div className="relative">
            <select
              value={filters.brand}
              onChange={(e) => handleBrandChange(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-700/80 rounded-xl px-3.5 py-2.5 text-sm text-neutral-100 appearance-none focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 cursor-pointer"
              id="filter-brand"
            >
              <option value="">Todas las marcas</option>
              {OFFICIAL_BRANDS.map((b) => (
                <option key={b.id} value={b.name}>
                  {b.name}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Modelo (updates according to selected brand) */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
            Modelo {filters.brand ? `(${filters.brand})` : ''}
          </label>
          <div className="relative">
            <select
              value={filters.model}
              onChange={(e) => onFilterChange({ model: e.target.value })}
              className="w-full bg-neutral-950 border border-neutral-700/80 rounded-xl px-3.5 py-2.5 text-sm text-neutral-100 appearance-none focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 cursor-pointer"
              id="filter-model"
            >
              <option value="">Todos los modelos</option>
              {availableModels.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Año */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Año Desde</label>
          <div className="relative">
            <select
              value={filters.yearMin}
              onChange={(e) => onFilterChange({ yearMin: e.target.value ? Number(e.target.value) : '' })}
              className="w-full bg-neutral-950 border border-neutral-700/80 rounded-xl px-3.5 py-2.5 text-sm text-neutral-100 appearance-none focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 cursor-pointer"
              id="filter-year"
            >
              <option value="">Cualquier año</option>
              {YEARS.map((y) => (
                <option key={y} value={y}>
                  {y} o superior
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Tipo de vehículo */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Tipo</label>
          <div className="relative">
            <select
              value={filters.bodyType}
              onChange={(e) => onFilterChange({ bodyType: e.target.value })}
              className="w-full bg-neutral-950 border border-neutral-700/80 rounded-xl px-3.5 py-2.5 text-sm text-neutral-100 appearance-none focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 cursor-pointer"
              id="filter-body-type"
            >
              <option value="">Todos los tipos</option>
              {BODY_TYPES.map((bt) => (
                <option key={bt} value={bt}>
                  {bt}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Rango de Precio (ARS) */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Precio Máx. (ARS)</label>
          <div className="relative">
            <select
              value={filters.priceMax}
              onChange={(e) => onFilterChange({ priceMax: e.target.value ? Number(e.target.value) : '' })}
              className="w-full bg-neutral-950 border border-neutral-700/80 rounded-xl px-3.5 py-2.5 text-sm text-neutral-100 appearance-none focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 cursor-pointer"
              id="filter-price-max"
            >
              <option value="">Sin límite</option>
              <option value="25000000">Hasta $ 25.000.000</option>
              <option value="35000000">Hasta $ 35.000.000</option>
              <option value="45000000">Hasta $ 45.000.000</option>
              <option value="60000000">Hasta $ 60.000.000</option>
              <option value="80000000">Hasta $ 80.000.000</option>
            </select>
            <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Buttons: Buscar vehículos & Limpiar filtros */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 mt-5 pt-4 border-t border-neutral-800">
        {isFiltered && (
          <button
            onClick={onResetFilters}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-neutral-400 hover:text-white bg-neutral-800/60 hover:bg-neutral-800 border border-neutral-700/60 transition-colors cursor-pointer"
            id="btn-limpiar-filtros"
          >
            <RotateCcw className="w-4 h-4 text-neutral-400" />
            <span>Limpiar filtros</span>
          </button>
        )}

        <button
          onClick={onSearchSubmit}
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-red-600 hover:bg-red-500 shadow-lg shadow-red-950/40 border border-red-500/40 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
          id="btn-buscar-vehiculos"
        >
          <Search className="w-4 h-4" />
          <span>Buscar vehículos ({totalAvailable})</span>
        </button>
      </div>
    </div>
  );
};
