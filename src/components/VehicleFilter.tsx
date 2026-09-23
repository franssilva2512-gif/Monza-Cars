import { useMemo, type FormEvent } from 'react';
import { Search, RotateCcw, Filter } from 'lucide-react';
import { VehicleFilterState } from '../types/vehicle';
import { BRANDS_DATA } from '../data/brands';
import { MOCK_VEHICLES } from '../data/mockVehicles';

interface VehicleFilterProps {
  filters: VehicleFilterState;
  onFilterChange: (newFilters: VehicleFilterState) => void;
  onResetFilters: () => void;
  resultsCount: number;
}

export const VehicleFilter = ({
  filters,
  onFilterChange,
  onResetFilters,
  resultsCount,
}: VehicleFilterProps) => {
  // Extract unique models for the currently selected brand (or all models)
  const availableModels = useMemo(() => {
    let list = MOCK_VEHICLES;
    if (filters.brand) {
      list = list.filter((v) => v.brand.toLowerCase() === filters.brand.toLowerCase());
    }
    const set = new Set(list.map((v) => v.model));
    return Array.from(set).sort();
  }, [filters.brand]);

  // Extract available years
  const availableYears = useMemo(() => {
    const years = Array.from(new Set(MOCK_VEHICLES.map((v) => v.year))).sort((a, b) => b - a);
    return years;
  }, []);

  const handleChange = (field: keyof VehicleFilterState, value: string) => {
    // If brand changes and current model isn't in that brand, reset model
    if (field === 'brand' && value) {
      const modelsForNewBrand = MOCK_VEHICLES.filter(
        (v) => v.brand.toLowerCase() === value.toLowerCase()
      ).map((v) => v.model);
      if (filters.model && !modelsForNewBrand.includes(filters.model)) {
        onFilterChange({ ...filters, [field]: value, model: '' });
        return;
      }
    }
    onFilterChange({ ...filters, [field]: value });
  };

  const handleQuickTab = (type: string) => {
    onFilterChange({ ...filters, vehicleType: type });
  };

  const isFilterActive =
    Boolean(filters.brand) ||
    Boolean(filters.model) ||
    Boolean(filters.year) ||
    Boolean(filters.minPrice) ||
    Boolean(filters.maxPrice) ||
    Boolean(filters.vehicleType) ||
    Boolean(filters.searchQuery);

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    const catalogElement = document.getElementById('vehiculos');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div className="bg-[#303030] rounded-2xl shadow-2xl shadow-black/60 border border-[#686868]/40 p-5 sm:p-6 lg:p-7 backdrop-blur-sm">
        {/* Header Tabs: Quick categories */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#686868]/30 mb-6">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#E4E0D8]" />
            <span className="text-sm font-bold uppercase tracking-wider text-[#E4E0D8]">
              Buscador Inteligente
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {[
              { label: 'Todos', value: '' },
              { label: 'Sedán', value: 'Sedán' },
              { label: 'Hatchback', value: 'Hatchback' },
              { label: 'Utilitario', value: 'Utilitario' },
              { label: 'Clásico', value: 'Clásico' },
            ].map((tab) => {
              const active = filters.vehicleType === tab.value;
              return (
                <button
                  key={tab.label}
                  type="button"
                  onClick={() => handleQuickTab(tab.value)}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-full transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-[#E4E0D8] text-[#161616] shadow-sm'
                      : 'bg-[#161616] text-[#A6A39E] hover:bg-[#303030] hover:text-[#E4E0D8] hover:text-white border border-[#686868]/30'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filters Form */}
        <form onSubmit={handleSearchSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-5">
            {/* Marca */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="filter-marca" className="text-xs font-bold text-[#A6A39E]">
                Marca
              </label>
              <select
                id="filter-marca"
                value={filters.brand}
                onChange={(e) => handleChange('brand', e.target.value)}
                className="w-full bg-[#161616] border border-[#686868]/40 hover:border-[#A6A39E]/50 rounded-xl px-3 py-2.5 text-sm text-[#E4E0D8] focus:outline-none focus:ring-1 focus:ring-[#E4E0D8] transition-all cursor-pointer"
              >
                <option value="" className="bg-[#161616] text-[#E4E0D8]">Todas las marcas</option>
                {BRANDS_DATA.map((b) => {
                  const unitCount = MOCK_VEHICLES.filter(
                    (v) =>
                      v.brand.toLowerCase() === b.name.toLowerCase() ||
                      (b.id === 'mercedes-benz' && v.brand.toLowerCase().includes('mercedes'))
                  ).length;
                  return (
                    <option
                      key={b.id}
                      value={b.name}
                      disabled={unitCount === 0}
                      className={unitCount === 0 ? "bg-[#161616] text-[#686868]" : "bg-[#161616] text-[#E4E0D8]"}
                    >
                      {b.name} ({unitCount === 1 ? '1 unidad' : `${unitCount} unidades`})
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Modelo */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="filter-modelo" className="text-xs font-bold text-[#A6A39E]">
                Modelo
              </label>
              <select
                id="filter-modelo"
                value={filters.model}
                onChange={(e) => handleChange('model', e.target.value)}
                className="w-full bg-[#161616] border border-[#686868]/40 hover:border-[#A6A39E]/50 rounded-xl px-3 py-2.5 text-sm text-[#E4E0D8] focus:outline-none focus:ring-1 focus:ring-[#E4E0D8] transition-all cursor-pointer"
              >
                <option value="" className="bg-[#161616] text-[#E4E0D8]">Todos los modelos</option>
                {availableModels.map((m) => (
                  <option key={m} value={m} className="bg-[#161616] text-[#E4E0D8]">
                    {m}
                  </option>
                ))}
              </select>
            </div>

            {/* Año */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="filter-anio" className="text-xs font-bold text-[#A6A39E]">
                Año
              </label>
              <select
                id="filter-anio"
                value={filters.year}
                onChange={(e) => handleChange('year', e.target.value)}
                className="w-full bg-[#161616] border border-[#686868]/40 hover:border-[#A6A39E]/50 rounded-xl px-3 py-2.5 text-sm text-[#E4E0D8] focus:outline-none focus:ring-1 focus:ring-[#E4E0D8] transition-all cursor-pointer"
              >
                <option value="" className="bg-[#161616] text-[#E4E0D8]">Cualquier año</option>
                {availableYears.map((yr) => (
                  <option key={yr} value={yr.toString()} className="bg-[#161616] text-[#E4E0D8]">
                    {yr}
                  </option>
                ))}
              </select>
            </div>

            {/* Precio Desde */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="filter-precio-desde" className="text-xs font-bold text-[#A6A39E]">
                Precio desde
              </label>
              <select
                id="filter-precio-desde"
                value={filters.minPrice}
                onChange={(e) => handleChange('minPrice', e.target.value)}
                className="w-full bg-[#161616] border border-[#686868]/40 hover:border-[#A6A39E]/50 rounded-xl px-3 py-2.5 text-sm text-[#E4E0D8] focus:outline-none focus:ring-1 focus:ring-[#E4E0D8] transition-all cursor-pointer"
              >
                <option value="" className="bg-[#161616] text-[#E4E0D8]">Sin mínimo</option>
                <option value="20000000" className="bg-[#161616] text-[#E4E0D8]">$20.000.000</option>
                <option value="30000000" className="bg-[#161616] text-[#E4E0D8]">$30.000.000</option>
                <option value="40000000" className="bg-[#161616] text-[#E4E0D8]">$40.000.000</option>
                <option value="50000000" className="bg-[#161616] text-[#E4E0D8]">$50.000.000</option>
                <option value="60000000" className="bg-[#161616] text-[#E4E0D8]">$60.000.000</option>
              </select>
            </div>

            {/* Precio Hasta */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="filter-precio-hasta" className="text-xs font-bold text-[#A6A39E]">
                Precio hasta
              </label>
              <select
                id="filter-precio-hasta"
                value={filters.maxPrice}
                onChange={(e) => handleChange('maxPrice', e.target.value)}
                className="w-full bg-[#161616] border border-[#686868]/40 hover:border-[#A6A39E]/50 rounded-xl px-3 py-2.5 text-sm text-[#E4E0D8] focus:outline-none focus:ring-1 focus:ring-[#E4E0D8] transition-all cursor-pointer"
              >
                <option value="" className="bg-[#161616] text-[#E4E0D8]">Sin límite</option>
                <option value="30000000" className="bg-[#161616] text-[#E4E0D8]">$30.000.000</option>
                <option value="40000000" className="bg-[#161616] text-[#E4E0D8]">$40.000.000</option>
                <option value="50000000" className="bg-[#161616] text-[#E4E0D8]">$50.000.000</option>
                <option value="70000000" className="bg-[#161616] text-[#E4E0D8]">$70.000.000</option>
                <option value="90000000" className="bg-[#161616] text-[#E4E0D8]">$90.000.000</option>
              </select>
            </div>

            {/* Tipo de vehículo */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="filter-tipo" className="text-xs font-bold text-[#A6A39E]">
                Tipo de vehículo
              </label>
              <select
                id="filter-tipo"
                value={filters.vehicleType}
                onChange={(e) => handleChange('vehicleType', e.target.value)}
                className="w-full bg-[#161616] border border-[#686868]/40 hover:border-[#A6A39E]/50 rounded-xl px-3 py-2.5 text-sm text-[#E4E0D8] focus:outline-none focus:ring-1 focus:ring-[#E4E0D8] transition-all cursor-pointer"
              >
                <option value="" className="bg-[#161616] text-[#E4E0D8]">Todos los tipos</option>
                <option value="Sedán" className="bg-[#161616] text-[#E4E0D8]">Sedán</option>
                <option value="Hatchback" className="bg-[#161616] text-[#E4E0D8]">Hatchback</option>
                <option value="Utilitario" className="bg-[#161616] text-[#E4E0D8]">Utilitario / Van</option>
                <option value="Clásico" className="bg-[#161616] text-[#E4E0D8]">Clásico</option>
                <option value="SUV" className="bg-[#161616] text-[#E4E0D8]">SUV</option>
                <option value="Pick-up" className="bg-[#161616] text-[#E4E0D8]">Pick-up</option>
              </select>
            </div>
          </div>

          {/* Bottom Action Bar: Search button + Reset filters + Live Counter */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#686868]/30">
            <div className="flex items-center gap-2 text-sm text-[#A6A39E]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#E4E0D8]"></span>
              <span>
                <strong className="text-[#E4E0D8] font-bold">{resultsCount}</strong> vehículos coinciden con tu búsqueda
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {isFilterActive && (
                <button
                  type="button"
                  id="reset-filters-button"
                  onClick={onResetFilters}
                  className="px-4 py-2.5 rounded-xl border border-[#686868]/40 hover:bg-[#161616] text-[#E4E0D8] text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Limpiar</span>
                </button>
              )}

              {/* Botón principal especificado: "Buscar vehículos" */}
              <button
                type="submit"
                id="search-vehicles-button"
                className="px-6 py-2.5 rounded-xl bg-[#E4E0D8] hover:bg-white text-[#161616] text-sm font-bold tracking-wide transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto active:scale-98"
              >
                <Search className="w-4 h-4 text-[#161616]" />
                <span>Buscar vehículos</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
