import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const CarOneLogo: React.FC<LogoProps> = ({ className = 'h-9', size }) => (
  <div className={`flex items-center gap-2.5 font-bold tracking-tight select-none ${className}`}>
    {/* Isotipo automotor en rojo CAR ONE: estilizado velocímetro / alerón aerodinámico */}
    <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-red-600 to-red-700 shadow-md shadow-red-950/50 text-white flex-shrink-0">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-white drop-shadow"
      >
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" fill="white" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="17" r="2" fill="white" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 17h10" stroke="#dc2626" strokeWidth="2" />
      </svg>
      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-400 rounded-full animate-ping opacity-75" />
      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-neutral-900" />
    </div>
    <div className="flex flex-col leading-none">
      <div className="flex items-center text-xl tracking-wider font-extrabold text-white">
        CAR<span className="text-red-500 ml-1">ONE</span>
      </div>
      <span className="text-[9px] tracking-widest text-neutral-400 uppercase font-medium">
        Argentina · Oficial
      </span>
    </div>
  </div>
);

// 1. Chevrolet
export const ChevroletLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 40" fill="currentColor" className={className}>
    {/* Chevrolet Golden/Silver Bowtie */}
    <polygon points="15,6 38,6 38,0 62,0 62,6 85,6 80,34 62,34 62,40 38,40 38,34 10,34" />
    <polygon points="18,9 39,9 39,3 61,3 61,9 82,9 78,31 61,31 61,37 39,37 39,31 14,31" opacity="0.3" fill="#ffffff" />
  </svg>
);

// 2. Fiat
export const FiatLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 45" fill="currentColor" className={className}>
    <rect x="2" y="4" width="96" height="37" rx="6" fill="none" stroke="currentColor" strokeWidth="4" />
    {/* Modern FIAT geometric letters */}
    <path d="M16 12h18v4H22v6h10v4H22v8h-6V12z" />
    <path d="M40 12h6v22h-6V12z" />
    <path d="M52 34l8-22h7l8 22h-6l-2-6h-7l-2 6h-6zm10-10h5l-2.5-7.5-2.5 7.5z" />
    <path d="M74 16v-4h18v4h-6v18h-6V16h-6z" />
  </svg>
);

// 3. Volkswagen
export const VolkswagenLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={className}>
    <circle cx="50" cy="50" r="45" strokeWidth="5" />
    <circle cx="50" cy="50" r="39" strokeWidth="2.5" opacity="0.6" />
    {/* V and W */}
    <path d="M28 26l14 36h4l7-18 7 18h4l14-36h-6l-10 26-6-16h-6l-6 16-10-26h-6z" fill="currentColor" stroke="none" />
    <path d="M37 65l9 22h4l4-10 4 10h4l9-22h-6l-5 13-4-10h-4l-4 10-5-13h-6z" fill="currentColor" stroke="none" />
  </svg>
);

// 4. Peugeot
export const PeugeotLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 80 100" fill="currentColor" className={className}>
    {/* Peugeot Shield & Lion Profile */}
    <path d="M40 4L10 16v42c0 24 30 38 30 38s30-14 30-38V16L40 4z" fill="none" stroke="currentColor" strokeWidth="4" />
    <path d="M30 28h20v5H30z" />
    <path d="M48 38c-3-2-8-2-12 1-5 4-6 10-4 16 1 4 4 7 8 8 2 1 5 1 7-1l-3 5c-3 1-8 0-11-2-5-4-7-11-5-18 2-7 8-12 15-13 4 0 7 1 9 3l-4 3z" />
    <path d="M44 48l8 22h-6l-5-14-3 14h-5l11-22z" />
  </svg>
);

// 5. Renault
export const RenaultLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 70 100" fill="none" stroke="currentColor" strokeWidth="6" className={className}>
    {/* Renault Diamond Rhombus */}
    <polygon points="35,6 64,50 35,94 6,50" />
    <polygon points="35,22 51,50 35,78 19,50" strokeWidth="4" />
  </svg>
);

// 6. Toyota
export const ToyotaLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 70" fill="none" stroke="currentColor" strokeWidth="4.5" className={className}>
    {/* Outer ellipse */}
    <ellipse cx="50" cy="35" rx="45" ry="30" />
    {/* Vertical inner ellipse */}
    <ellipse cx="50" cy="35" rx="14" ry="24" strokeWidth="4" />
    {/* Horizontal inner upper ellipse */}
    <ellipse cx="50" cy="24" rx="28" ry="12" strokeWidth="4" />
  </svg>
);

// 7. Ford
export const FordLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 48" fill="none" stroke="currentColor" className={className}>
    <ellipse cx="50" cy="24" rx="46" ry="20" strokeWidth="3" />
    <ellipse cx="50" cy="24" rx="42" ry="17" strokeWidth="1.5" opacity="0.6" />
    {/* Stylized Ford cursive text */}
    <text
      x="50"
      y="30"
      textAnchor="middle"
      fill="currentColor"
      stroke="none"
      fontSize="22"
      fontFamily="serif"
      fontStyle="italic"
      fontWeight="bold"
      letterSpacing="-0.5px"
    >
      Ford
    </text>
  </svg>
);

// 8. Jeep
export const JeepLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 90 40" fill="currentColor" className={className}>
    {/* Classic bold geometric Jeep lettering */}
    <path d="M12 8h8v16c0 4-2.5 6-7 6s-7-2-7-6h7c0 1 .5 1.5 1.5 1.5s1.5-.5 1.5-1.5V8z" />
    <circle cx="16" cy="3" r="3" />
    <path d="M26 14h14v3H32v3h7v3h-7v4h8v3H26V14z" />
    <path d="M44 14h14v3H50v3h7v3h-7v4h8v3H44V14z" />
    <path d="M62 14h13c4 0 7 2 7 6s-3 6-7 6h-7v8h-6V14zm6 9h7c1.5 0 2.5-.8 2.5-2s-1-2-2.5-2h-7v4z" />
  </svg>
);

// 9. Nissan
export const NissanLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="4" className={className}>
    <circle cx="50" cy="40" r="34" />
    <rect x="8" y="32" width="84" height="16" rx="2" fill="#171717" stroke="currentColor" strokeWidth="3.5" />
    <text
      x="50"
      y="43.5"
      textAnchor="middle"
      fill="currentColor"
      stroke="none"
      fontSize="11"
      fontWeight="900"
      letterSpacing="3px"
    >
      NISSAN
    </text>
  </svg>
);

// 10. Citroën
export const CitroenLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 80 80" fill="currentColor" className={className}>
    {/* Double Chevron */}
    <path d="M40 8L66 32h-12L40 18 26 32H14L40 8z" />
    <path d="M40 34L66 58h-12L40 44 26 58H14L40 34z" />
  </svg>
);

// 11. RAM
export const RamLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 90" fill="currentColor" className={className}>
    {/* RAM shield badge & stylized horns */}
    <path d="M50 4L14 18v34c0 24 36 34 36 34s36-10 36-34V18L50 4zm0 8l28 12v28c0 18-28 26-28 26s-28-8-28-26V24l28-12z" fill="none" stroke="currentColor" strokeWidth="3" />
    <path d="M26 36c4-6 12-8 18-4l6 8 6-8c6-4 14-2 18 4 2 3 3 7 1 10-3 5-9 6-14 3l-11 12-11-12c-5 3-11 2-14-3-2-3-1-7 1-10z" />
    <text x="50" y="74" textAnchor="middle" fontSize="11" fontWeight="900" letterSpacing="2px">RAM</text>
  </svg>
);

// 12. Mitsubishi
export const MitsubishiLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 90" fill="#dc2626" className={className}>
    {/* Three Red Diamonds */}
    {/* Top diamond */}
    <polygon points="50,6 64,30 50,54 36,30" />
    {/* Bottom right diamond */}
    <polygon points="65,33 93,33 79,57 51,57" />
    {/* Bottom left diamond */}
    <polygon points="35,33 7,33 21,57 49,57" />
  </svg>
);

export const getBrandLogo = (brandName: string, className = 'w-5 h-5') => {
  const normalized = brandName.trim().toLowerCase();
  switch (normalized) {
    case 'chevrolet':
      return <ChevroletLogo className={className} />;
    case 'fiat':
      return <FiatLogo className={className} />;
    case 'volkswagen':
      return <VolkswagenLogo className={className} />;
    case 'peugeot':
      return <PeugeotLogo className={className} />;
    case 'renault':
      return <RenaultLogo className={className} />;
    case 'toyota':
      return <ToyotaLogo className={className} />;
    case 'ford':
      return <FordLogo className={className} />;
    case 'jeep':
      return <JeepLogo className={className} />;
    case 'nissan':
      return <NissanLogo className={className} />;
    case 'citroën':
    case 'citroen':
      return <CitroenLogo className={className} />;
    case 'ram':
      return <RamLogo className={className} />;
    case 'mitsubishi':
      return <MitsubishiLogo className={className} />;
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v12M6 12h12" />
        </svg>
      );
  }
};
