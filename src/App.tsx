/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SearchFilters } from './components/SearchFilters';
import { BrandsSection } from './components/BrandsSection';
import { VehicleCard } from './components/VehicleCard';
import { VehicleModal } from './components/VehicleModal';
import { FinancingModal } from './components/FinancingModal';
import { ReservationModal } from './components/ReservationModal';
import { SellCarSection } from './components/SellCarSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { VEHICLES_DATA, OFFICIAL_BRANDS } from './data/vehicles';
import { FilterState, Vehicle } from './types';
import { SlidersHorizontal, Sparkles, AlertCircle, ArrowUpDown } from 'lucide-react';

export default function App() {
  // Filters state
  const [filters, setFilters] = useState<FilterState>({
    quickCategory: 'all',
    brand: '',
    model: '',
    yearMin: '',
    priceMin: '',
    priceMax: '',
    bodyType: '',
    sortBy: 'featured',
  });

  // Favorites state (persisted locally)
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('carone_favorites');
      return saved ? JSON.parse(saved) : ['toyota-corolla-2024'];
    } catch {
      return ['toyota-corolla-2024'];
    }
  });

  const [favoritesDrawerOpen, setFavoritesDrawerOpen] = useState(false);

  // Modals state
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [financingVehicle, setFinancingVehicle] = useState<Vehicle | null>(null);
  const [reservationVehicle, setReservationVehicle] = useState<Vehicle | null>(null);

  // Sync favorites to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('carone_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.warn('Storage error', e);
    }
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const clearAllFavorites = () => {
    setFavorites([]);
  };

  // Smooth navigation helper
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle brand selection from Brands section
  const handleSelectBrand = (brandName: string) => {
    if (filters.brand.toLowerCase() === brandName.toLowerCase()) {
      setFilters((prev) => ({ ...prev, brand: '', model: '' }));
    } else {
      setFilters((prev) => ({
        ...prev,
        brand: brandName,
        model: '',
      }));
    }
    scrollToSection('catalogo');
  };

  // Quick category filter handler from header or hero
  const handleQuickFilter = (category: 'all' | '0km' | 'used') => {
    setFilters((prev) => ({
      ...prev,
      quickCategory: category,
      brand: '',
      model: '',
    }));
  };

  // Filter change helper
  const updateFilters = (newFilters: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const resetFilters = () => {
    setFilters({
      quickCategory: 'all',
      brand: '',
      model: '',
      yearMin: '',
      priceMin: '',
      priceMax: '',
      bodyType: '',
      sortBy: 'featured',
    });
  };

  // Models available dynamically based on selected brand
  const availableModels = useMemo(() => {
    if (filters.brand) {
      const b = OFFICIAL_BRANDS.find(
        (brand) => brand.name.toLowerCase() === filters.brand.toLowerCase()
      );
      if (b) return b.models;
    }
    // If no brand selected, aggregate unique models from dataset
    const unique = Array.from(new Set(VEHICLES_DATA.map((v) => v.model)));
    return unique.sort();
  }, [filters.brand]);

  // Filtered & Sorted vehicles list
  const filteredVehicles = useMemo(() => {
    return VEHICLES_DATA.filter((v) => {
      // Quick Category
      if (filters.quickCategory === '0km' && v.condition !== '0 KM') return false;
      if (filters.quickCategory === 'used' && v.condition !== 'Usado') return false;
      if (filters.quickCategory === 'suv' && v.bodyType !== 'SUV') return false;
      if (filters.quickCategory === 'pickup' && v.bodyType !== 'Pick-up') return false;

      // Brand
      if (filters.brand && v.brand.toLowerCase() !== filters.brand.toLowerCase()) {
        return false;
      }

      // Model
      if (filters.model && !v.model.toLowerCase().includes(filters.model.toLowerCase())) {
        return false;
      }

      // Year Min
      if (filters.yearMin && v.year < filters.yearMin) {
        return false;
      }

      // Price Max
      if (filters.priceMax && v.price > filters.priceMax) {
        return false;
      }

      // Price Min
      if (filters.priceMin && v.price < filters.priceMin) {
        return false;
      }

      // Body Type
      if (filters.bodyType && v.bodyType !== filters.bodyType) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      if (filters.sortBy === 'year-desc') return b.year - a.year;
      if (filters.sortBy === 'km-asc') return a.mileage - b.mileage;
      // Default: featured first
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [filters]);

  // Favorite vehicles objects
  const favoriteVehicles = useMemo(() => {
    return VEHICLES_DATA.filter((v) => favorites.includes(v.id));
  }, [favorites]);

  // Service action router
  const handleServiceAction = (serviceId: string) => {
    if (serviceId === '0km') {
      handleQuickFilter('0km');
      scrollToSection('catalogo');
    } else if (serviceId === 'usados') {
      handleQuickFilter('used');
      scrollToSection('catalogo');
    } else if (serviceId === 'financiacion') {
      // Open financing simulation for featured Corolla or first vehicle
      const vehicleToFinance = filteredVehicles[0] || VEHICLES_DATA[0];
      setFinancingVehicle(vehicleToFinance);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-red-600 selection:text-white">
      {/* 1. Header Sticky */}
      <Header
        onNavigate={scrollToSection}
        onFilterQuick={handleQuickFilter}
        favoritesCount={favorites.length}
        onOpenFavorites={() => setFavoritesDrawerOpen(true)}
      />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero
          onBuyClick={() => scrollToSection('catalogo')}
          onSellClick={() => scrollToSection('vender')}
        />

        {/* 3 & 5. Catálogo de Vehículos & Buscador y Filtros Dinámicos */}
        <section id="catalogo" className="py-16 sm:py-20 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {/* Catalog Section Heading */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <p className="text-xs sm:text-sm font-bold tracking-widest text-red-500 uppercase mb-1">
                  Catálogo Oficial Seleccionado
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Vehículos Disponibles
                </h2>
                <p className="text-sm text-neutral-400 mt-1">
                  Unidades 0 KM con entrega inmediata y Usados certificados con peritaje integral.
                </p>
              </div>

              {/* Sorting selector */}
              <div className="flex items-center gap-2 self-start md:self-auto">
                <span className="text-xs text-neutral-400 flex items-center gap-1 font-medium">
                  <ArrowUpDown className="w-3.5 h-3.5" />
                  Ordenar por:
                </span>
                <select
                  value={filters.sortBy}
                  onChange={(e) => updateFilters({ sortBy: e.target.value as FilterState['sortBy'] })}
                  className="bg-neutral-900 border border-neutral-800 text-xs text-neutral-200 font-semibold rounded-xl px-3 py-2 focus:outline-none focus:border-red-500 cursor-pointer"
                  id="catalog-sort"
                >
                  <option value="featured">Destacados primero</option>
                  <option value="price-asc">Menor precio</option>
                  <option value="price-desc">Mayor precio</option>
                  <option value="year-desc">Más recientes (Año)</option>
                  <option value="km-asc">Menor kilometraje</option>
                </select>
              </div>
            </div>

            {/* 3. Buscador y Filtros Dinámicos Component */}
            <SearchFilters
              filters={filters}
              onFilterChange={updateFilters}
              onResetFilters={resetFilters}
              totalAvailable={filteredVehicles.length}
              availableModels={availableModels}
              onSearchSubmit={() => scrollToSection('catalogo-grid')}
            />

            {/* Filtered Results Status / Active Tag Badges */}
            {(filters.brand || filters.bodyType || filters.quickCategory !== 'all') && (
              <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400 pt-1">
                <span>Filtros activos:</span>
                {filters.quickCategory !== 'all' && (
                  <span className="bg-neutral-800 text-neutral-200 px-3 py-1 rounded-lg border border-neutral-700 flex items-center gap-1">
                    Categoría: {filters.quickCategory.toUpperCase()}
                  </span>
                )}
                {filters.brand && (
                  <span className="bg-red-950/60 text-red-300 px-3 py-1 rounded-lg border border-red-800/60 flex items-center gap-1 font-semibold">
                    Marca: {filters.brand}
                  </span>
                )}
                {filters.model && (
                  <span className="bg-neutral-800 text-neutral-200 px-3 py-1 rounded-lg border border-neutral-700 flex items-center gap-1">
                    Modelo: {filters.model}
                  </span>
                )}
                {filters.bodyType && (
                  <span className="bg-neutral-800 text-neutral-200 px-3 py-1 rounded-lg border border-neutral-700 flex items-center gap-1">
                    Tipo: {filters.bodyType}
                  </span>
                )}
                <button
                  onClick={resetFilters}
                  className="text-red-400 hover:text-red-300 underline underline-offset-2 ml-2 cursor-pointer font-medium"
                >
                  Restablecer todos
                </button>
              </div>
            )}

            {/* 5. Catálogo de Vehículos Destacados Grid */}
            <div id="catalogo-grid" className="scroll-mt-24">
              {filteredVehicles.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredVehicles.map((vehicle) => (
                    <VehicleCard
                      key={vehicle.id}
                      vehicle={vehicle}
                      isFavorite={favorites.includes(vehicle.id)}
                      onToggleFavorite={toggleFavorite}
                      onSelectVehicle={(v) => setSelectedVehicle(v)}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-12 text-center max-w-lg mx-auto space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-red-950/40 text-red-500 border border-red-800/40 flex items-center justify-center mx-auto">
                    <AlertCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    No encontramos vehículos con esos filtros
                  </h3>
                  <p className="text-sm text-neutral-400">
                    Probá cambiando el rango de precio, año o seleccioná "Todas las marcas" para ver el inventario completo.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold text-sm rounded-xl transition-colors cursor-pointer"
                  >
                    Restablecer filtros
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 4. Sección de Marcas Oficiales con Logos Vectoriales */}
        <BrandsSection
          selectedBrand={filters.brand}
          onSelectBrand={handleSelectBrand}
        />

        {/* 7. Sección "Vender mi auto" */}
        <SellCarSection />

        {/* 8. Sección de Servicios (8 servicios) */}
        <ServicesSection onSelectServiceAction={handleServiceAction} />

        {/* 9. Sección "Por qué elegirnos" */}
        <WhyChooseUsSection />

        {/* 10. Ubicación y Contacto ("Encontranos") */}
        <LocationSection />
      </main>

      {/* 11. Footer y Elementos Flotantes */}
      <Footer
        onNavigate={scrollToSection}
        onSelectBrand={handleSelectBrand}
      />

      <FloatingButtons />

      {/* Favorites Drawer */}
      <FavoritesDrawer
        isOpen={favoritesDrawerOpen}
        onClose={() => setFavoritesDrawerOpen(false)}
        favorites={favoriteVehicles}
        onRemoveFavorite={toggleFavorite}
        onClearAll={clearAllFavorites}
        onSelectVehicle={(v) => setSelectedVehicle(v)}
      />

      {/* 6. Modal de Detalle de Vehículo Completo */}
      {selectedVehicle && (
        <VehicleModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
          isFavorite={favorites.includes(selectedVehicle.id)}
          onToggleFavorite={toggleFavorite}
          onOpenFinancing={(v) => {
            setSelectedVehicle(null);
            setFinancingVehicle(v);
          }}
          onOpenReservation={(v) => {
            setSelectedVehicle(null);
            setReservationVehicle(v);
          }}
        />
      )}

      {/* Modal Financiación Interactivo */}
      {financingVehicle && (
        <FinancingModal
          vehicle={financingVehicle}
          onClose={() => setFinancingVehicle(null)}
        />
      )}

      {/* Modal Reserva Provisoria Interactivo */}
      {reservationVehicle && (
        <ReservationModal
          vehicle={reservationVehicle}
          onClose={() => setReservationVehicle(null)}
        />
      )}
    </div>
  );
}
