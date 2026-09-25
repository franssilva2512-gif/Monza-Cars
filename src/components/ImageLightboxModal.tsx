import { useEffect, useState, useCallback } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize2
} from 'lucide-react';

interface ImageLightboxModalProps {
  isOpen: boolean;
  images: string[];
  initialIndex?: number;
  vehicleTitle?: string;
  onClose: () => void;
}

export const ImageLightboxModal = ({
  isOpen,
  images,
  initialIndex = 0,
  vehicleTitle,
  onClose,
}: ImageLightboxModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Sync initial index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setZoomLevel(1);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setZoomLevel(1);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setZoomLevel(1);
  }, [images.length]);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 1));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === '+' || e.key === '=') {
        handleZoomIn();
      } else if (e.key === '-') {
        handleZoomOut();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setTouchStartX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || zoomLevel > 1) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStartX(null);
  };

  if (!isOpen || images.length === 0) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visualizador de imágenes ampliado"
      className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-xl select-none animate-in fade-in duration-200"
    >
      {/* Top Bar with Vehicle Title, Counter & Action Controls */}
      <header className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-black/60 border-b border-[#686868]/30 z-20">
        <div className="flex items-center gap-3 min-w-0">
          <div className="p-2 rounded-xl bg-[#303030]/80 border border-[#686868]/40 text-[#E4E0D8]">
            <Maximize2 className="w-4 h-4 text-[#E4E0D8]" />
          </div>
          <div className="min-w-0">
            <h2 className="text-sm sm:text-base font-bold text-[#E4E0D8] truncate">
              {vehicleTitle || 'Galería de fotos'}
            </h2>
            <p className="text-xs text-[#A6A39E]">
              Foto {currentIndex + 1} de {images.length}
            </p>
          </div>
        </div>

        {/* Center / Right Zoom Controls & Close */}
        <div className="flex items-center gap-2">
          {/* Zoom In */}
          <button
            onClick={handleZoomIn}
            disabled={zoomLevel >= 3}
            title="Acercar (+)"
            className="p-2 sm:p-2.5 rounded-xl bg-[#303030] hover:bg-[#686868]/40 text-[#E4E0D8] transition-colors border border-[#686868]/40 disabled:opacity-40 cursor-pointer"
            aria-label="Acercar imagen"
          >
            <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Zoom Out */}
          <button
            onClick={handleZoomOut}
            disabled={zoomLevel <= 1}
            title="Alejar (-)"
            className="p-2 sm:p-2.5 rounded-xl bg-[#303030] hover:bg-[#686868]/40 text-[#E4E0D8] transition-colors border border-[#686868]/40 disabled:opacity-40 cursor-pointer"
            aria-label="Alejar imagen"
          >
            <ZoomOut className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Reset Zoom */}
          {zoomLevel > 1 && (
            <button
              onClick={handleResetZoom}
              title="Restablecer tamaño"
              className="p-2 sm:p-2.5 rounded-xl bg-[#303030] hover:bg-[#686868]/40 text-[#E4E0D8] transition-colors border border-[#686868]/40 cursor-pointer flex items-center gap-1 text-xs"
              aria-label="Restablecer zoom"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="hidden sm:inline">100%</span>
            </button>
          )}

          {/* Close button */}
          <button
            onClick={onClose}
            title="Cerrar (Esc)"
            className="p-2 sm:p-2.5 rounded-xl bg-[#303030] hover:bg-[#686868] text-[#E4E0D8] transition-colors border border-[#686868]/60 cursor-pointer ml-2"
            aria-label="Cerrar modal de imagen"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </header>

      {/* Main Image Stage */}
      <div
        className="relative flex-1 flex items-center justify-center overflow-hidden p-2 sm:p-6"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={(e) => {
          if (e.target === e.currentTarget && zoomLevel === 1) {
            onClose();
          }
        }}
      >
        {/* Navigation Arrow Previous */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 rounded-2xl bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-[#686868]/40 transition-all cursor-pointer shadow-2xl hover:scale-105 active:scale-95"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        )}

        {/* Current Image */}
        <div
          className="relative max-w-full max-h-full flex items-center justify-center transition-transform duration-200 ease-out"
          style={{
            transform: `scale(${zoomLevel})`,
            cursor: zoomLevel > 1 ? 'grab' : 'zoom-in',
          }}
          onClick={(e) => {
            e.stopPropagation();
            if (zoomLevel === 1) {
              setZoomLevel(1.8);
            } else {
              setZoomLevel(1);
            }
          }}
        >
          <img
            src={images[currentIndex]}
            alt={`${vehicleTitle || 'Vehículo'} - Foto ${currentIndex + 1}`}
            className="max-h-[75vh] sm:max-h-[80vh] w-auto max-w-full object-contain rounded-xl shadow-2xl transition-opacity duration-300"
            draggable={false}
          />
        </div>

        {/* Navigation Arrow Next */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 rounded-2xl bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-[#686868]/40 transition-all cursor-pointer shadow-2xl hover:scale-105 active:scale-95"
            aria-label="Siguiente foto"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        )}
      </div>

      {/* Bottom Thumbnail Strip */}
      {images.length > 1 && (
        <footer className="bg-black/80 border-t border-[#686868]/30 px-4 py-3 z-20">
          <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto max-w-5xl mx-auto py-1 scrollbar-thin scrollbar-thumb-[#686868]">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setZoomLevel(1);
                }}
                className={`relative shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                  currentIndex === idx
                    ? 'border-[#E4E0D8] ring-2 ring-[#E4E0D8]/40 scale-105 opacity-100'
                    : 'border-[#686868]/40 opacity-50 hover:opacity-100'
                }`}
                aria-label={`Ir a foto ${idx + 1}`}
              >
                <img
                  src={img}
                  alt={`Miniatura ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </footer>
      )}
    </div>
  );
};
