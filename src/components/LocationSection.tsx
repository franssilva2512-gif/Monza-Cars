import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  Compass,
  Building2,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<'central' | 'norte' | 'oeste'>('central');

  const branches = {
    central: {
      name: 'Casa Central Buenos Aires',
      address: 'Av. Principal 1234, Buenos Aires, Argentina',
      phone: '+54 11 1234-5678',
      email: 'contacto@carone.com.ar',
      hoursWeekday: 'Lunes a Viernes de 09:00 a 19:00 hs',
      hoursSaturday: 'Sábados de 09:00 a 17:00 hs',
      coordinates: '34°36\'12"S 58°22\'54"W',
      metro: 'A 400m de Estación Congreso de Tucumán (Línea D)',
      features: ['Showroom 0 KM', 'Playón Usados Seleccionados', 'Centro de Servicios y Taller', 'Atención Financiera'],
    },
    norte: {
      name: 'Sucursal Norte Tortuguitas',
      address: 'Panamericana Ramal Pilar Km 38.5, Buenos Aires',
      phone: '+54 11 1234-5679',
      email: 'norte@carone.com.ar',
      hoursWeekday: 'Lunes a Viernes de 09:00 a 19:00 hs',
      hoursSaturday: 'Sábados de 09:00 a 17:00 hs',
      coordinates: '34°28\'15"S 58°42\'10"W',
      metro: 'Acceso directo sobre Colectora Panamericana',
      features: ['Showroom Pick-ups & SUVs 4x4', 'Taller Oficial Multimarca', 'Pista de Test Drive'],
    },
    oeste: {
      name: 'Sucursal Oeste Castelar',
      address: 'Autopista del Oeste Km 26, Buenos Aires',
      phone: '+54 11 1234-5680',
      email: 'oeste@carone.com.ar',
      hoursWeekday: 'Lunes a Viernes de 09:00 a 19:00 hs',
      hoursSaturday: 'Sábados de 09:00 a 17:00 hs',
      coordinates: '34°39\'02"S 58°38\'44"W',
      metro: 'Bajada Santa Rosa frente al centro comercial',
      features: ['Tasaciones en el acto', 'Showroom 0 KM', 'Venta de Repuestos'],
    },
  };

  const current = branches[selectedBranch];

  return (
    <section id="contacto" className="py-20 bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Exact Title "Encontranos" */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-red-500 uppercase mb-2">
            Visitanos en Nuestras Sedes
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Encontranos
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Vení a conocer nuestro predio automotor integral, realizá una prueba de manejo y disfrutá de un café mientras te asesoramos.
          </p>
        </div>

        {/* Branch Selector Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-inner">
            <button
              onClick={() => setSelectedBranch('central')}
              className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedBranch === 'central'
                  ? 'bg-red-600 text-white shadow-md shadow-red-950/60'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Casa Central (Bs. As.)
            </button>
            <button
              onClick={() => setSelectedBranch('norte')}
              className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedBranch === 'norte'
                  ? 'bg-red-600 text-white shadow-md shadow-red-950/60'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Sede Norte
            </button>
            <button
              onClick={() => setSelectedBranch('oeste')}
              className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedBranch === 'oeste'
                  ? 'bg-red-600 text-white shadow-md shadow-red-950/60'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Sede Oeste
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact details card */}
          <div className="lg:col-span-5 bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-red-500 uppercase tracking-wider block mb-1">
                  Sede Seleccionada
                </span>
                <h3 className="text-2xl font-black text-white">{current.name}</h3>
              </div>

              {/* Exact required info */}
              <div className="space-y-4 pt-2">
                {/* Dirección */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800 text-red-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-neutral-400 block">Dirección</span>
                    <span className="text-sm font-bold text-white leading-snug block">
                      {current.address}
                    </span>
                    <span className="text-xs text-neutral-400 mt-0.5 block">
                      {current.metro}
                    </span>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800 text-red-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-neutral-400 block">Teléfono de Contacto</span>
                    <a
                      href={`tel:${current.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-bold text-white hover:text-red-400 transition-colors"
                    >
                      {current.phone}
                    </a>
                    <span className="text-xs text-neutral-400 block mt-0.5">Líneas rotativas y WhatsApp oficial</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800 text-red-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-neutral-400 block">Correo Electrónico</span>
                    <a
                      href={`mailto:${current.email}`}
                      className="text-sm font-bold text-white hover:text-red-400 transition-colors"
                    >
                      {current.email}
                    </a>
                  </div>
                </div>

                {/* Horarios de atención */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800 text-red-500 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-neutral-400 block">Horarios de Atención</span>
                    <span className="text-xs font-bold text-white block">{current.hoursWeekday}</span>
                    <span className="text-xs text-neutral-300 block">{current.hoursSaturday}</span>
                    <span className="text-[11px] text-neutral-500 block">Domingos y Feriados cerrado</span>
                  </div>
                </div>
              </div>

              {/* Branch Highlights */}
              <div className="pt-4 border-t border-neutral-800 space-y-2">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
                  Servicios en esta sucursal:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs text-neutral-300">
                  {current.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Google Maps External Direction Button */}
            <div className="pt-6 mt-6 border-t border-neutral-800">
              <a
                href="https://maps.google.com/?q=Buenos+Aires+Argentina"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-sm border border-neutral-700 transition-colors"
              >
                <Navigation className="w-4 h-4 text-red-400" />
                <span>Cómo llegar en Google Maps / Waze</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Stylized Interactive Map with Animated Marker */}
          <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden relative min-h-[420px] flex flex-col justify-between shadow-2xl">
            {/* Map Visual Simulation Canvas with Stylized Dark High-Tech Aesthetic */}
            <div className="absolute inset-0 bg-[#12161b] overflow-hidden">
              {/* Map grid lines & roads simulation */}
              <svg className="w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="map-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#262f3d" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#map-grid)" />

                {/* Primary Avenue and Expressway lines */}
                <path d="M -50 150 Q 250 180 600 120 T 1200 300" fill="none" stroke="#374151" strokeWidth="18" />
                <path d="M -50 150 Q 250 180 600 120 T 1200 300" fill="none" stroke="#4b5563" strokeWidth="10" />
                <path d="M -50 150 Q 250 180 600 120 T 1200 300" fill="none" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="8 8" />

                {/* Diagonal Avenue */}
                <path d="M 200 -50 L 500 550" fill="none" stroke="#374151" strokeWidth="12" />
                <path d="M 200 -50 L 500 550" fill="none" stroke="#e52421" strokeWidth="3" opacity="0.8" />

                {/* Secondary Cross Street */}
                <path d="M 0 350 L 900 280" fill="none" stroke="#2b3544" strokeWidth="8" />

                {/* City Blocks & Green Parks */}
                <rect x="80" y="60" width="100" height="70" rx="4" fill="#1c2430" />
                <rect x="220" y="40" width="140" height="90" rx="4" fill="#1c2430" />
                <rect x="120" y="240" width="160" height="80" rx="4" fill="#1c2430" />
                <rect x="360" y="220" width="180" height="110" rx="4" fill="#1e2a38" />
                {/* Park */}
                <rect x="420" y="70" width="120" height="90" rx="8" fill="#183126" stroke="#22543d" strokeWidth="1.5" />
                <text x="480" y="120" fill="#48bb78" fontSize="10" textAnchor="middle" fontWeight="bold">Parque Automotor</text>
              </svg>

              {/* Animated Central Dealership Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-auto">
                {/* Radial animated ping waves */}
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-24 h-24 rounded-full bg-red-600/20 animate-ping" />
                  <span className="absolute w-16 h-16 rounded-full bg-red-600/30 animate-pulse" />
                  <div className="relative z-10 w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 shadow-2xl shadow-red-950 flex items-center justify-center border-2 border-white text-white">
                    <Building2 className="w-6 h-6" />
                  </div>
                </div>

                {/* Pin Tooltip Card */}
                <div className="mt-3 bg-neutral-950/95 border border-neutral-700 rounded-xl p-3 shadow-2xl backdrop-blur-md text-center max-w-xs animate-bounce motion-reduce:animate-none">
                  <div className="flex items-center justify-center gap-1 text-[11px] font-bold text-red-500 uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    CAR ONE OFICIAL
                  </div>
                  <div className="text-xs font-extrabold text-white">{current.name}</div>
                  <div className="text-[11px] text-neutral-300 mt-0.5">{current.address}</div>
                </div>
              </div>
            </div>

            {/* Map Controls Header */}
            <div className="relative z-10 p-4 flex items-center justify-between pointer-events-none">
              <div className="pointer-events-auto bg-neutral-950/80 backdrop-blur-md border border-neutral-800 px-3 py-1.5 rounded-xl text-xs font-semibold text-neutral-300 flex items-center gap-2 shadow-lg">
                <Compass className="w-4 h-4 text-red-500 animate-spin motion-reduce:animate-none" />
                <span>Geolocalización: {current.coordinates}</span>
              </div>

              <div className="pointer-events-auto flex items-center gap-1.5 bg-neutral-950/80 backdrop-blur-md border border-neutral-800 p-1 rounded-xl">
                <button
                  onClick={() => alert(`Centrando mapa en ${current.name}`)}
                  className="px-2.5 py-1 text-xs text-neutral-300 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
                >
                  Centrar
                </button>
                <button
                  onClick={() => alert('Estacionamiento exclusivo para clientes CAR ONE con guardia y carga de vehículos eléctricos disponible en el predio.')}
                  className="px-2.5 py-1 text-xs text-red-400 font-semibold hover:text-red-300 rounded-lg hover:bg-neutral-800 transition-colors"
                >
                  Estacionamiento
                </button>
              </div>
            </div>

            {/* Map Bottom Status */}
            <div className="relative z-10 p-4 bg-gradient-to-t from-neutral-950/95 via-neutral-950/70 to-transparent">
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-white font-medium">Showroom abierto hoy de 09:00 a 19:00 hs</span>
                </div>
                <span>Estacionamiento de cortesía para clientes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
