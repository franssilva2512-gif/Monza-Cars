export type VehicleCondition = 'Usado';
export type BodyType = 'Sedán' | 'SUV' | 'Pick-up' | 'Hatchback' | 'Utilitario' | 'Clásico';

export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  version: string;
  year: number;
  mileage: number; // in km
  price: number;
  currency?: 'ARS' | 'USD';
  condition: VehicleCondition;
  bodyType: BodyType;
  financingType: string;
  allowsFinancing?: boolean;
  allowsTradeIn?: boolean;
  fuel: 'Nafta' | 'Diésel' | 'Híbrido' | 'Eléctrico';
  transmission: 'Manual' | 'Automática';
  engine: string;
  color: string;
  featured?: boolean;
  images: string[];
  description: string;
  features: {
    safety: string[];
    comfort: string[];
    multimedia: string[];
  };
  warranty: string;
  doors: number;
}

export interface VehicleFilterState {
  brand: string;
  model: string;
  year: string;
  minPrice: string;
  maxPrice: string;
  vehicleType: string; // condition or bodyType
  searchQuery?: string;
}

export interface SellCarFormData {
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
