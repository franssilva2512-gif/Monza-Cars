import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VehicleFilter } from './components/VehicleFilter';
import { BrandsSection } from './components/BrandsSection';
import { FeaturedVehicles } from './components/FeaturedVehicles';
import { VehicleDetailModal } from './components/VehicleDetailModal';
import { SellCarSection } from './components/SellCarSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BackToTop } from './components/BackToTop';
import { FinancingSimulatorModal } from './components/FinancingSimulatorModal';
import { ReservationModal } from './components/ReservationModal';
import { MOCK_VEHICLES } from './data/mockVehicles';
import { Vehicle, VehicleFilterState } from './types/vehicle';

export default function App() {
  // Vehicle filter state
  const [filters, setFilters] = useState<VehicleFilterState>({
    brand: '',
    model: '',
    year: '',
    minPrice: '',
    maxPrice: '',
    vehicleType: '',
    searchQuery: '',
  });

  // Active modals
  const [selectedVehicleForDetail, setSelectedVehicleForDetail] = useState<Vehicle | null>(null);
  const [vehicleForFinancing, setVehicleForFinancing] = useState<Vehicle | null>(null);
  const [vehicleForReservation, setVehicleForReservation] = useState<Vehicle | null>(null);

  // Filter vehicles based on active filter state
  const filteredVehicles = useMemo(() => {
    return MOCK_VEHICLES.filter((item) => {
      // Filter by Brand
      if (filters.brand && item.brand.toLowerCase() !== filters.brand.toLowerCase()) {
        return false;
      }

      // Filter by Model
      if (filters.model && item.model.toLowerCase() !== filters.model.toLowerCase()) {
        return false;
      }

      // Filter by Year
      if (filters.year && item.year.toString() !== filters.year) {
        return false;
      }

      // Filter by Min Price
      if (filters.minPrice && item.price < parseInt(filters.minPrice, 10)) {
        return false;
      }

      // Filter by Max Price
      if (filters.maxPrice && item.price > parseInt(filters.maxPrice, 10)) {
        return false;
      }

      // Filter by Vehicle Type (Condition or BodyType)
      if (filters.vehicleType) {
        if (filters.vehicleType === '0 KM' || filters.vehicleType === 'Usado') {
          if (item.condition !== filters.vehicleType) return false;
        } else {
          // Check BodyType like SUV, Pick-up, Sedán, Hatchback
          if (item.bodyType.toLowerCase() !== filters.vehicleType.toLowerCase()) {
            return false;
          }
        }
      }

      return true;
    });
  }, [filters]);

  const handleResetFilters = () => {
    setFilters({
      brand: '',
      model: '',
      year: '',
      minPrice: '',
      maxPrice: '',
      vehicleType: '',
      searchQuery: '',
    });
  };

  const handleSelectBrand = (brandName: string) => {
    setFilters((prev) => ({
      ...prev,
      brand: prev.brand.toLowerCase() === brandName.toLowerCase() ? '' : brandName,
      model: '', // reset model on brand switch
    }));

    // Smooth scroll down to vehicle catalog
    const catalog = document.getElementById('vehiculos');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectConditionFilter = (condition: 'all' | '0 KM' | 'Usado') => {
    setFilters((prev) => ({
      ...prev,
      vehicleType: condition === 'all' ? '' : condition,
    }));
  };

  const handleHeroBuyClick = () => {
    const catalog = document.getElementById('vehiculos');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroSellClick = () => {
    const sellSection = document.getElementById('vender');
    if (sellSection) {
      sellSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenGeneralWhatsApp = () => {
    const msg = encodeURIComponent(
      '¡Hola CAR ONE! Me gustaría recibir información y asesoramiento sobre vehículos y planes disponibles.'
    );
    window.open(`https://wa.me/5491112345678?text=${msg}`, '_blank');
  };

  const handleServiceAction = (serviceTitle: string) => {
    if (serviceTitle.includes('0 KM')) {
      handleSelectConditionFilter('0 KM');
      handleNavClick('vehiculos');
    } else if (serviceTitle.includes('usados')) {
      handleSelectConditionFilter('Usado');
      handleNavClick('vehiculos');
    } else if (serviceTitle.includes('Financiación')) {
      // Open financing simulator with first available vehicle as baseline
      setVehicleForFinancing(MOCK_VEHICLES[0]);
    } else {
      // Direct to contact with pre-filled subject
      handleNavClick('contacto');
    }
  };

  return (
    <div className="min-h-screen bg-[#161616] text-[#E4E0D8] flex flex-col font-sans selection:bg-[#303030] selection:text-[#E4E0D8]">
      {/* 1. Header (Sticky with navigation and mobile drawer) */}
      <Header
        onSelectConditionFilter={handleSelectConditionFilter}
        onOpenWhatsApp={handleOpenGeneralWhatsApp}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero (Impactful visual with luxury background, dark overlay, exact texts and action buttons) */}
        <Hero
          onBuyClick={handleHeroBuyClick}
          onSellClick={handleHeroSellClick}
        />

        {/* 3. Buscador de Vehículos (JavaScript dynamic filtering) */}
        <VehicleFilter
          filters={filters}
          onFilterChange={setFilters}
          onResetFilters={handleResetFilters}
          resultsCount={filteredVehicles.length}
        />

        {/* 4. Marcas (All 12 requested brands with smooth hover animation) */}
        <BrandsSection
          onSelectBrand={handleSelectBrand}
          selectedBrand={filters.brand}
        />

        {/* 5. Vehículos Destacados (Grid of rich vehicle cards, formatted prices in ARS, financing badges) */}
        <FeaturedVehicles
          vehicles={filteredVehicles}
          onOpenDetail={(vehicle) => setSelectedVehicleForDetail(vehicle)}
          onResetFilters={handleResetFilters}
          selectedCondition={filters.vehicleType}
          onSelectCondition={(cond) => setFilters((prev) => ({ ...prev, vehicleType: cond }))}
        />

        {/* 7. Vender Mi Auto (Eye-catching section and JS validated appraisal form) */}
        <SellCarSection />

        {/* 8. Servicios (Cards for 0KM, Usados, Financiación, Planes, Taller, Repuestos, Accesorios, Seguros) */}
        <ServicesSection onServiceAction={handleServiceAction} />

        {/* 9. Por qué elegirnos (Statistics: +10.000, +15, +20, +50) */}
        <WhyChooseUs />

        {/* 10. Ubicación (Encontranos, Av. Principal 1234, Teléfono, Email, Visual Map) */}
        <LocationSection />
      </main>

      {/* 11. Footer (Dark, CAR ONE, Links, Socials, Copyright 2026) */}
      <Footer
        onNavClick={handleNavClick}
        onFilterClick={handleSelectConditionFilter}
        onOpenWhatsApp={handleOpenGeneralWhatsApp}
      />

      {/* 6. Detalle del Vehículo Modal (Gallery, Specs, Description, 3 required action buttons) */}
      {selectedVehicleForDetail && (
        <VehicleDetailModal
          vehicle={selectedVehicleForDetail}
          onClose={() => setSelectedVehicleForDetail(null)}
          onRequestFinancing={(veh) => {
            setSelectedVehicleForDetail(null);
            setVehicleForFinancing(veh);
          }}
          onReserveVehicle={(veh) => {
            setSelectedVehicleForDetail(null);
            setVehicleForReservation(veh);
          }}
        />
      )}

      {/* Financing Simulator Modal */}
      {vehicleForFinancing && (
        <FinancingSimulatorModal
          vehicle={vehicleForFinancing}
          onClose={() => setVehicleForFinancing(null)}
        />
      )}

      {/* Vehicle Reservation Modal ("Quiero este vehículo") */}
      {vehicleForReservation && (
        <ReservationModal
          vehicle={vehicleForReservation}
          onClose={() => setVehicleForReservation(null)}
        />
      )}

      {/* Floating interactive utilities */}
      <FloatingWhatsApp onClick={handleOpenGeneralWhatsApp} />
      <BackToTop />
    </div>
  );
}
