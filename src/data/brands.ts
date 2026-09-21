export interface BrandInfo {
  id: string;
  name: string;
  country: string;
  availableCount: number;
  popularModel: string;
  accentColor: string;
}

export const BRANDS_DATA: BrandInfo[] = [
  { id: 'toyota', name: 'Toyota', country: 'Japón', availableCount: 14, popularModel: 'Corolla / Hilux', accentColor: '#EB0A1E' },
  { id: 'volkswagen', name: 'Volkswagen', country: 'Alemania', availableCount: 18, popularModel: 'Taos / Amarok', accentColor: '#001E50' },
  { id: 'ford', name: 'Ford', country: 'EE.UU.', availableCount: 11, popularModel: 'Ranger / Territory', accentColor: '#102B4E' },
  { id: 'chevrolet', name: 'Chevrolet', country: 'EE.UU.', availableCount: 9, popularModel: 'Tracker / Onix', accentColor: '#CD9834' },
  { id: 'fiat', name: 'Fiat', country: 'Italia', availableCount: 15, popularModel: 'Cronos / Pulse', accentColor: '#9B1B30' },
  { id: 'peugeot', name: 'Peugeot', country: 'Francia', availableCount: 10, popularModel: '208 / 2008', accentColor: '#242424' },
  { id: 'renault', name: 'Renault', country: 'Francia', availableCount: 12, popularModel: 'Kardian / Duster', accentColor: '#FFCC00' },
  { id: 'jeep', name: 'Jeep', country: 'EE.UU.', availableCount: 8, popularModel: 'Compass / Renegade', accentColor: '#49523C' },
  { id: 'nissan', name: 'Nissan', country: 'Japón', availableCount: 7, popularModel: 'Frontier / Kicks', accentColor: '#C71444' },
  { id: 'citroen', name: 'Citroën', country: 'Francia', availableCount: 6, popularModel: 'C3 / C4 Cactus', accentColor: '#A40000' },
  { id: 'ram', name: 'RAM', country: 'EE.UU.', availableCount: 5, popularModel: '1500 / Rampage', accentColor: '#C41230' },
  { id: 'mitsubishi', name: 'Mitsubishi', country: 'Japón', availableCount: 4, popularModel: 'L200 / Outlander', accentColor: '#E60012' },
];
