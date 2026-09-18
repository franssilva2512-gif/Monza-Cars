export type VehicleCondition = '0 KM' | 'Usado';
export type BodyType = 'Sedán' | 'Hatchback' | 'SUV' | 'Pick-up' | 'Utilitario';
export type TransmissionType = 'Automática' | 'Manual';
export type FuelType = 'Nafta' | 'Híbrido' | 'Diésel' | 'Eléctrico';

export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  version: string;
  year: number;
  mileage: number; // km
  condition: VehicleCondition;
  bodyType: BodyType;
  price: number; // in ARS
  installmentPrice: number; // Cuota estimada ARS / mes
  transmission: TransmissionType;
  fuel: FuelType;
  engine: string;
  power: string; // e.g., '170 CV'
  traction: string; // e.g., 'Delantera (4x2)', 'Integral (4x4)'
  doors: number;
  color: string;
  featured?: boolean;
  images: string[];
  features: {
    safety: string[];
    comfort: string[];
    multimedia: string[];
  };
}

export interface BrandInfo {
  id: string;
  name: string;
  origin: string;
  vehicleCount: number;
  models: string[];
}

export interface FilterState {
  quickCategory: 'all' | '0km' | 'used' | 'suv' | 'pickup';
  brand: string;
  model: string;
  yearMin: number | '';
  priceMin: number | '';
  priceMax: number | '';
  bodyType: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'year-desc' | 'km-asc';
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  actionText: string;
  badge?: string;
}

export interface SellFormData {
  nombre: string;
  telefono: string;
  email: string;
  marca: string;
  modelo: string;
  anio: string;
  kilometraje: string;
  precioPretendido: string;
  comentarios: string;
}

export interface FinancingSimulation {
  vehicleId: string;
  vehicleName: string;
  vehiclePrice: number;
  anticipoPercent: number; // e.g. 30%
  anticipoMonto: number;
  montoAFinanciar: number;
  plazoMeses: number; // 12, 24, 36, 48, 60
  cuotaEstimada: number;
  tna: number; // e.g. 58%
}

export interface ReservationData {
  vehicleId: string;
  vehicleTitle: string;
  price: number;
  nombre: string;
  dni: string;
  telefono: string;
  email: string;
  sucursal: string;
  metodoReserva: 'seña_minima' | 'transferencia' | 'presencial';
}
