export interface BrandInfo {
  id: string;
  name: string;
  country: string;
  availableCount: number;
  popularModel: string;
  accentColor: string;
}

export const BRANDS_DATA: BrandInfo[] = [
  { id: 'chevrolet', name: 'Chevrolet', country: 'EE.UU.', availableCount: 10, popularModel: 'Cruze LTZ / Tracker', accentColor: '#CD9834' },
  { id: 'bmw', name: 'BMW', country: 'Alemania', availableCount: 5, popularModel: '325i Navi / Serie 3', accentColor: '#0066B1' },
  { id: 'mercedes-benz', name: 'Mercedes-Benz', country: 'Alemania', availableCount: 6, popularModel: 'Vito / Sprinter', accentColor: '#E4E0D8' },
  { id: 'audi', name: 'Audi', country: 'Alemania', availableCount: 4, popularModel: 'A3 / A4', accentColor: '#BB0A30' },
  { id: 'toyota', name: 'Toyota', country: 'Japón', availableCount: 14, popularModel: 'Corolla / Hilux', accentColor: '#EB0A1E' },
  { id: 'volkswagen', name: 'Volkswagen', country: 'Alemania', availableCount: 18, popularModel: 'Taos / Amarok', accentColor: '#001E50' },
  { id: 'ford', name: 'Ford', country: 'EE.UU.', availableCount: 11, popularModel: 'Ranger / Territory', accentColor: '#102B4E' },
  { id: 'peugeot', name: 'Peugeot', country: 'Francia', availableCount: 10, popularModel: '208 / 2008', accentColor: '#242424' },
  { id: 'fiat', name: 'Fiat', country: 'Italia', availableCount: 15, popularModel: 'Cronos / Pulse', accentColor: '#9B1B30' },
  { id: 'renault', name: 'Renault', country: 'Francia', availableCount: 12, popularModel: 'Kardian / Duster', accentColor: '#FFCC00' },
  { id: 'jeep', name: 'Jeep', country: 'EE.UU.', availableCount: 8, popularModel: 'Compass / Renegade', accentColor: '#49523C' },
  { id: 'nissan', name: 'Nissan', country: 'Japón', availableCount: 7, popularModel: 'Frontier / Kicks', accentColor: '#C71444' },
  { id: 'ram', name: 'RAM', country: 'EE.UU.', availableCount: 5, popularModel: '1500 / Rampage', accentColor: '#C41230' },
];
