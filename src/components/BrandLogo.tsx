import { useState } from 'react';

interface BrandLogoProps {
  brandId: string;
  className?: string;
  color?: string;
}

const BRAND_IMAGE_MAP: Record<string, string> = {
  ford: '/assets/brands/ford.png',
  dodge: '/assets/brands/dodge.svg',
  chevrolet: '/assets/brands/chevrolet.png',
  bmw: '/assets/brands/bmw.png',
  'mercedes-benz': '/assets/brands/mercedes-benz.png',
  mercedes: '/assets/brands/mercedes-benz.png',
  audi: '/assets/brands/audi.png',
  volkswagen: '/assets/brands/volkswagen.png',
  vw: '/assets/brands/volkswagen.png',
  peugeot: '/assets/brands/peugeot.png',
  toyota: '/assets/brands/toyota.png',
  fiat: '/assets/brands/fiat.png',
  renault: '/assets/brands/renault.png',
  jeep: '/assets/brands/jeep.png',
  nissan: '/assets/brands/nissan.png',
  ram: '/assets/brands/ram.png',
};

export const BrandLogo = ({ brandId, className = 'w-10 h-10' }: BrandLogoProps) => {
  const [hasError, setHasError] = useState(false);

  const normalized = (brandId || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();

  let brandKey = normalized;
  if (normalized.includes('mercedes')) brandKey = 'mercedes-benz';
  else if (normalized.includes('chevr')) brandKey = 'chevrolet';
  else if (normalized.includes('dodg')) brandKey = 'dodge';
  else if (normalized.includes('volks') || normalized === 'vw') brandKey = 'volkswagen';
  else if (normalized.includes('peug')) brandKey = 'peugeot';
  else if (normalized.includes('ford')) brandKey = 'ford';

  const imageSrc = BRAND_IMAGE_MAP[brandKey] || `/assets/brands/${brandKey}.png`;

  if (!hasError) {
    return (
      <img
        src={imageSrc}
        alt={`Logo ${brandId}`}
        className={`${className} object-contain transition-transform duration-300 drop-shadow-sm`}
        loading="lazy"
        onError={() => setHasError(true)}
      />
    );
  }

  // Graceful fallback if image fails
  return (
    <span className={`${className} inline-flex items-center justify-center font-black text-xs text-[#E4E0D8]`}>
      {brandId.slice(0, 3).toUpperCase()}
    </span>
  );
};
