import React from 'react';
import { X, Trash2, Eye, KeyRound, Heart, ArrowRight } from 'lucide-react';
import { Vehicle } from '../types';
import { formatPriceARS, formatKM } from '../data/vehicles';
import { getBrandLogo } from './BrandLogos';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: Vehicle[];
  onRemoveFavorite: (id: string) => void;
  onClearAll: () => void;
  onSelectVehicle: (vehicle: Vehicle) => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  favorites,
  onRemoveFavorite,
  onClearAll,
  onSelectVehicle,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div
        className="relative w-full max-w-md bg-neutral-900 border-l border-neutral-800 p-6 flex flex-col justify-between h-full shadow-2xl z-10 animate-in slide-in-from-right duration-300"
        id="favorites-drawer"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-red-950/60 text-red-500 border border-red-800/40">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg leading-tight">Mis Vehículos Guardados</h3>
                <p className="text-xs text-neutral-400">{favorites.length} seleccionados</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="mt-6 space-y-4 max-h-[65vh] overflow-y-auto pr-1">
            {favorites.length === 0 ? (
              <div className="text-center py-12 space-y-3">
                <Heart className="w-12 h-12 text-neutral-700 mx-auto stroke-1" />
                <p className="text-sm font-medium text-neutral-300">
                  No tenés vehículos guardados
                </p>
                <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                  Hacé clic en el ícono de corazón de cualquier tarjeta del catálogo para comparar tus favoritos aquí.
                </p>
              </div>
            ) : (
              favorites.map((v) => (
                <div
                  key={v.id}
                  className="bg-neutral-950 border border-neutral-800 rounded-2xl p-3 flex gap-3 items-center group hover:border-neutral-700 transition-colors"
                >
                  <img
                    src={v.images[0]}
                    alt={v.model}
                    className="w-20 h-16 object-cover rounded-xl border border-neutral-800 flex-shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                      <span>{getBrandLogo(v.brand, 'w-3.5 h-3.5')}</span>
                      <span className="font-bold uppercase tracking-wider">{v.brand}</span>
                      <span>·</span>
                      <span>{v.year}</span>
                    </div>

                    <h4 className="font-bold text-white text-sm truncate">{v.model}</h4>
                    <div className="text-xs font-extrabold text-red-400 mt-0.5">
                      {formatPriceARS(v.price)}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <button
                      onClick={() => {
                        onClose();
                        onSelectVehicle(v);
                      }}
                      className="p-2 rounded-lg bg-neutral-800 hover:bg-red-600 text-neutral-300 hover:text-white transition-colors"
                      title="Ver detalle"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onRemoveFavorite(v.id)}
                      className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-red-400 transition-colors"
                      title="Eliminar de favoritos"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Footer */}
        {favorites.length > 0 && (
          <div className="pt-4 border-t border-neutral-800 flex items-center justify-between gap-3">
            <button
              onClick={onClearAll}
              className="text-xs text-neutral-400 hover:text-red-400 font-medium py-2 px-3 rounded-lg hover:bg-neutral-800 transition-colors"
            >
              Vaciar favoritos
            </button>
            <button
              onClick={onClose}
              className="py-2.5 px-5 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-xl transition-all"
            >
              Continuar navegando
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
