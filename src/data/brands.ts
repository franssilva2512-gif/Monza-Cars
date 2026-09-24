export interface BrandInfo {
  id: string;
  name: string;
  country: string;
  availableCount: number;
  popularModel: string;
  accentColor: string;
}

export const BRANDS_DATA: BrandInfo[] = [
  { id: 'ford', name: 'Ford', country: 'EE.UU.', availableCount: 1, popularModel: 'Courier 1959 Clásico', accentColor: '#102B4E' },
  { id: 'chevrolet', name: 'Chevrolet', country: 'EE.UU.', availableCount: 1, popularModel: 'Cruze LTZ', accentColor: '#CD9834' },
  { id: 'bmw', name: 'BMW', country: 'Alemania', availableCount: 1, popularModel: '325i Navi', accentColor: '#0066B1' },
  { id: 'mercedes-benz', name: 'Mercedes-Benz', country: 'Alemania', availableCount: 1, popularModel: 'Vito 111 CDI', accentColor: '#E4E0D8' },
  { id: 'audi', name: 'Audi', country: 'Alemania', availableCount: 1, popularModel: 'S3 2.0 TFSI S-Tronic', accentColor: '#BB0A30' },
  { id: 'volkswagen', name: 'Volkswagen', country: 'Alemania', availableCount: 1, popularModel: 'Gol Trend', accentColor: '#001E50' },
  { id: 'peugeot', name: 'Peugeot', country: 'Francia', availableCount: 0, popularModel: 'Sin stock actual', accentColor: '#242424' },
  { id: 'toyota', name: 'Toyota', country: 'Japón', availableCount: 0, popularModel: 'Sin stock actual', accentColor: '#EB0A1E' },
  { id: 'fiat', name: 'Fiat', country: 'Italia', availableCount: 0, popularModel: 'Sin stock actual', accentColor: '#9B1B30' },
  { id: 'renault', name: 'Renault', country: 'Francia', availableCount: 0, popularModel: 'Sin stock actual', accentColor: '#FFCC00' },
  { id: 'jeep', name: 'Jeep', country: 'EE.UU.', availableCount: 0, popularModel: 'Sin stock actual', accentColor: '#49523C' },
  { id: 'nissan', name: 'Nissan', country: 'Japón', availableCount: 0, popularModel: 'Sin stock actual', accentColor: '#C71444' },
  { id: 'ram', name: 'RAM', country: 'EE.UU.', availableCount: 0, popularModel: 'Sin stock actual', accentColor: '#C41230' },
];
