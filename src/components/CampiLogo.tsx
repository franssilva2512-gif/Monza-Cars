import { useState } from 'react';

interface CampiLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const CampiLogo = ({ className = '', size = 'md', showText = true }: CampiLogoProps) => {
  const [imgError, setImgError] = useState(false);

  const sizeMap = {
    sm: {
      box: 'w-9 h-9 rounded-lg',
      campi: 'text-lg',
      motors: 'text-[9px] tracking-[0.2em]',
      sub: 'text-[8px]',
    },
    md: {
      box: 'w-11 h-11 rounded-xl',
      campi: 'text-2xl',
      motors: 'text-xs tracking-[0.25em]',
      sub: 'text-[9px]',
    },
    lg: {
      box: 'w-14 h-14 rounded-2xl',
      campi: 'text-3xl',
      motors: 'text-sm tracking-[0.28em]',
      sub: 'text-[10px]',
    },
  };

  const s = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* 3D Emblem Container with Gold Accent Border */}
      <div
        className={`relative ${s.box} overflow-hidden shadow-lg border border-[#C5A059]/40 bg-black shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:border-[#DFB560]`}
      >
        <img
          src={imgError ? '/assets/campi-motors-logo.svg' : '/assets/campi-motors-logo.jpg'}
          alt="Campi Motors"
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
      </div>

      {/* Typography Lockup matching the logo's serif & gold styling */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5">
            <span
              className={`font-serif font-black ${s.campi} tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E8E8E8] to-[#B0B3B8] drop-shadow-xs`}
            >
              CAMPI
            </span>
            <span
              className={`font-sans font-extrabold ${s.motors} text-transparent bg-clip-text bg-gradient-to-r from-[#FBE6A2] via-[#DFB560] to-[#C59B42] uppercase drop-shadow-xs`}
            >
              MOTORS
            </span>
          </div>
          <span className={`${s.sub} tracking-[0.22em] text-[#A6A39E] font-bold uppercase -mt-0.5`}>
            Concesionaria Oficial
          </span>
        </div>
      )}
    </div>
  );
};
