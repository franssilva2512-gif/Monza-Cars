interface BrandLogoProps {
  brandId: string;
  className?: string;
  color?: string;
}

export const BrandLogo = ({ brandId, className = 'w-10 h-10' }: BrandLogoProps) => {
  const id = brandId
    ? brandId.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim()
    : '';

  switch (id) {
    case 'toyota':
      return (
        <svg
          viewBox="0 0 100 70"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo Toyota"
        >
          {/* Outer Ellipse */}
          <ellipse
            cx="50"
            cy="35"
            rx="46"
            ry="31"
            stroke="currentColor"
            strokeWidth="6"
            className="transition-colors"
          />
          {/* Inner Horizontal Ellipse */}
          <ellipse
            cx="50"
            cy="26"
            rx="30"
            ry="12"
            stroke="currentColor"
            strokeWidth="5"
            className="transition-colors"
          />
          {/* Inner Vertical Ellipse */}
          <ellipse
            cx="50"
            cy="37"
            rx="14"
            ry="25"
            stroke="currentColor"
            strokeWidth="5"
            className="transition-colors"
          />
        </svg>
      );

    case 'volkswagen':
      return (
        <svg
          viewBox="0 0 100 100"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo Volkswagen"
        >
          {/* Outer Ring */}
          <circle
            cx="50"
            cy="50"
            r="44"
            stroke="currentColor"
            strokeWidth="5"
          />
          <circle
            cx="50"
            cy="50"
            r="38"
            stroke="currentColor"
            strokeWidth="2"
            strokeOpacity="0.4"
          />
          {/* V letter */}
          <path
            d="M 28 26 L 43 54 M 72 26 L 57 54"
            stroke="currentColor"
            strokeWidth="5.5"
            strokeLinecap="round"
          />
          {/* W letter */}
          <path
            d="M 22 46 L 36 78 L 50 56 L 64 78 L 78 46"
            stroke="currentColor"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'ford':
      return (
        <svg
          viewBox="0 0 110 65"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo Ford"
        >
          {/* Ford Blue Oval Outer Border */}
          <ellipse
            cx="55"
            cy="32.5"
            rx="51"
            ry="28"
            fill="#102B4E"
            stroke="currentColor"
            strokeWidth="3.5"
          />
          <ellipse
            cx="55"
            cy="32.5"
            rx="46"
            ry="24"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />
          {/* Ford Script Stylized Path */}
          <path
            d="M 32 37 C 32 25 36 19 43 19 C 47 19 49 22 47 26 C 45 30 40 31 37 31 C 36 36 34 43 32 46 C 30 48 27 48 26 46 C 25 44 26 42 28 41 C 30 40 31 38 32 37 Z M 48 34 C 47 38 49 41 53 41 C 57 41 61 36 62 31 C 61 30 58 30 55 31 C 51 32 49 32 48 34 Z M 64 33 C 65 31 68 29 71 29 C 74 29 73 32 71 35 C 69 38 68 41 67 44 M 76 21 L 76 43 C 76 44 78 44 80 43 C 83 40 85 36 86 31 C 86 28 84 27 82 27 C 78 27 76 30 76 34"
            fill="#ffffff"
          />
        </svg>
      );

    case 'chevrolet':
      return (
        <svg
          viewBox="0 0 100 50"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo Chevrolet"
        >
          {/* Chevrolet Bowtie Emblem */}
          <path
            d="M 6 18 L 34 18 L 38 5 L 62 5 L 66 18 L 94 18 L 94 32 L 66 32 L 62 45 L 38 45 L 34 32 L 6 32 Z"
            fill="#CD9834"
            stroke="#9A6F1C"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* Inner metallic highlight bevel */}
          <path
            d="M 12 22 L 36 22 L 40 10 L 60 10 L 64 22 L 88 22 L 88 28 L 64 28 L 60 40 L 40 40 L 36 28 L 12 28 Z"
            fill="#F3C863"
            opacity="0.85"
          />
        </svg>
      );

    case 'fiat':
      return (
        <svg
          viewBox="0 0 100 55"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo FIAT"
        >
          {/* Modern FIAT badge background */}
          <rect
            x="4"
            y="4"
            width="92"
            height="47"
            rx="12"
            fill="#9B1B30"
            stroke="currentColor"
            strokeWidth="2"
          />
          {/* F */}
          <path
            d="M 20 16 L 33 16 M 20 27 L 30 27 M 20 16 L 20 39"
            stroke="#ffffff"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* I */}
          <path
            d="M 41 16 L 41 39"
            stroke="#ffffff"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          {/* A (Fiat style, no crossbar or sharp peak) */}
          <path
            d="M 49 39 L 57 16 L 65 39"
            stroke="#ffffff"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* T */}
          <path
            d="M 72 16 L 86 16 M 79 16 L 79 39"
            stroke="#ffffff"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'peugeot':
      return (
        <svg
          viewBox="0 0 80 95"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo Peugeot"
        >
          {/* Modern Peugeot Crest Shield */}
          <path
            d="M 40 4 L 74 14 L 70 65 C 68 78 55 88 40 92 C 25 88 12 78 10 65 L 6 14 Z"
            fill="#1A1A1A"
            stroke="currentColor"
            strokeWidth="3.5"
          />
          {/* Lion Roaring Head Silhouette */}
          <path
            d="M 40 22 C 45 22 50 24 53 28 C 55 26 58 27 58 30 C 58 32 56 34 54 35 C 57 37 59 40 59 44 C 55 43 53 45 52 48 C 50 49 48 50 47 53 C 49 55 53 56 55 56 C 53 60 48 64 42 66 C 36 67 31 65 27 60 C 25 57 26 53 28 50 C 30 47 30 44 29 42 C 27 40 24 37 25 33 C 27 28 33 22 40 22 Z"
            fill="#ffffff"
          />
          {/* Lion Eye & Teeth details */}
          <circle cx="48" cy="33" r="1.5" fill="#1A1A1A" />
          <path d="M 44 46 L 48 48 L 43 51" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'renault':
      return (
        <svg
          viewBox="0 0 70 90"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo Renault"
        >
          {/* Renault Diamond (Lozenge) Outer */}
          <path
            d="M 35 4 L 66 45 L 35 86 L 4 45 Z"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinejoin="miter"
            className="transition-colors"
          />
          {/* Inner cutout diamond */}
          <path
            d="M 35 26 L 50 45 L 35 64 L 20 45 Z"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinejoin="miter"
            className="transition-colors"
          />
        </svg>
      );

    case 'jeep':
      return (
        <svg
          viewBox="0 0 110 50"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo Jeep"
        >
          {/* Background Badge */}
          <rect
            x="2"
            y="4"
            width="106"
            height="42"
            rx="10"
            fill="#3B4434"
            stroke="currentColor"
            strokeWidth="2"
          />
          {/* 7-Slot Grille & Headlights */}
          {/* Left Headlight */}
          <circle cx="16" cy="25" r="7" fill="#ffffff" opacity="0.9" />
          {/* 7 Vertical Grille Slots */}
          {[28, 35, 42, 49, 56, 63, 70].map((x) => (
            <rect
              key={x}
              x={x}
              y="17"
              width="4.5"
              height="16"
              rx="2.2"
              fill="#ffffff"
            />
          ))}
          {/* Right Headlight */}
          <circle cx="82" cy="25" r="7" fill="#ffffff" opacity="0.9" />
          <path
            d="M 94 20 L 98 25 L 94 30"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'nissan':
      return (
        <svg
          viewBox="0 0 90 90"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo Nissan"
        >
          {/* Nissan Ring */}
          <circle
            cx="45"
            cy="45"
            r="38"
            stroke="currentColor"
            strokeWidth="6"
          />
          {/* Central Bar Banner */}
          <rect
            x="4"
            y="36"
            width="82"
            height="18"
            rx="2"
            fill="#C71444"
            stroke="currentColor"
            strokeWidth="2"
          />
          {/* NISSAN Letters */}
          <text
            x="45"
            y="49"
            fill="#ffffff"
            fontSize="11"
            fontWeight="900"
            letterSpacing="2.5"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
          >
            NISSAN
          </text>
        </svg>
      );

    case 'citroen':
      return (
        <svg
          viewBox="0 0 80 80"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo Citroën"
        >
          {/* Top Chevron */}
          <path
            d="M 12 34 L 40 12 L 68 34 L 58 42 L 40 27 L 22 42 Z"
            fill="#A40000"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Bottom Chevron */}
          <path
            d="M 12 60 L 40 38 L 68 60 L 58 68 L 40 53 L 22 68 Z"
            fill="#A40000"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'ram':
      return (
        <svg
          viewBox="0 0 90 85"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo RAM"
        >
          {/* RAM Shield Badge */}
          <path
            d="M 45 4 L 84 16 L 78 64 C 74 74 58 81 45 83 C 32 81 16 74 12 64 L 6 16 Z"
            fill="#C41230"
            stroke="currentColor"
            strokeWidth="3"
          />
          {/* Big Horn Ram Head */}
          {/* Left Horn */}
          <path
            d="M 45 35 C 37 25 24 23 20 30 C 16 37 24 43 28 42 C 32 41 33 37 31 35 C 29 33 25 35 25 37"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Right Horn */}
          <path
            d="M 45 35 C 53 25 66 23 70 30 C 74 37 66 43 62 42 C 58 41 57 37 59 35 C 61 33 65 35 65 37"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Ram Snout / Forehead */}
          <path
            d="M 45 28 L 51 45 L 45 56 L 39 45 Z"
            fill="#ffffff"
          />
          <path
            d="M 42 58 L 45 63 L 48 58 Z"
            fill="#ffffff"
          />
        </svg>
      );

    case 'mitsubishi':
      return (
        <svg
          viewBox="0 0 90 80"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo Mitsubishi"
        >
          {/* Top Diamond */}
          <polygon
            points="45,4 58,26 45,48 32,26"
            fill="#E60012"
          />
          {/* Bottom Left Diamond */}
          <polygon
            points="23,48 45,48 32,70 10,70"
            fill="#E60012"
          />
          {/* Bottom Right Diamond */}
          <polygon
            points="67,48 45,48 58,70 80,70"
            fill="#E60012"
          />
        </svg>
      );

    default:
      return (
        <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white font-black flex items-center justify-center text-sm">
          {brandId.substring(0, 2).toUpperCase()}
        </div>
      );
  }
};
