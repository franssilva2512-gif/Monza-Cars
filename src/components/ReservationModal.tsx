import React, { useState } from 'react';
import { X, KeyRound, CheckCircle2, ShieldAlert, Car, MapPin, Building2 } from 'lucide-react';
import { Vehicle } from '../types';
import { formatPriceARS } from '../data/vehicles';

interface ReservationModalProps {
  vehicle: Vehicle;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ vehicle, onClose }) => {
  const [isReserved, setIsReserved] = useState(false);
  const [reservationCode, setReservationCode] = useState('');
  const [formData, setFormData] = useState({
    nombre: '',
    dni: '',
    telefono: '',
    email: '',
    sucursal: 'Av. Principal 1234, Buenos Aires (Casa Central)',
    metodo: 'seña_online',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `RES-${vehicle.brand.slice(0, 3).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setReservationCode(code);
    setIsReserved(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} />

      <div
        className="relative w-full max-w-xl bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200"
        id="reservation-modal"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-900/95">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-red-600 text-white shadow-md shadow-red-950/50">
              <KeyRound className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white leading-tight">
                Reserva Provisoria de Unidad
              </h3>
              <p className="text-xs text-neutral-400">
                Congelá el precio y bloqueá la unidad por 48 horas hábiles
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {!isReserved ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
            {/* Vehicle Summary Card */}
            <div className="flex items-center gap-4 bg-neutral-950 p-3.5 rounded-2xl border border-neutral-800">
              <img
                src={vehicle.images[0]}
                alt={vehicle.model}
                className="w-20 h-14 object-cover rounded-xl border border-neutral-800"
              />
              <div className="flex-1 min-w-0">
                <span className="text-[11px] font-bold text-red-500 uppercase tracking-wider">
                  {vehicle.brand}
                </span>
                <h4 className="font-bold text-white text-sm truncate">
                  {vehicle.model} {vehicle.version}
                </h4>
                <div className="text-xs text-neutral-400">
                  Año {vehicle.year} · {formatPriceARS(vehicle.price)}
                </div>
              </div>
            </div>

            {/* Buyer Details */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-neutral-300 uppercase tracking-wider block">
                Datos del Comprador
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs text-neutral-400">Nombre completo *</label>
                  <input
                    required
                    type="text"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    placeholder="Juan Carlos Pérez"
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-neutral-400">DNI o CUIT *</label>
                  <input
                    required
                    type="text"
                    value={formData.dni}
                    onChange={(e) => setFormData({ ...formData, dni: e.target.value })}
                    placeholder="34.123.456"
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-neutral-400">Teléfono Celular *</label>
                  <input
                    required
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    placeholder="+54 11 5566-7788"
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-neutral-400">Correo Electrónico *</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="juan@correo.com"
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Sucursal de entrega preferida */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block">
                Sucursal de entrega / inspección
              </label>
              <select
                value={formData.sucursal}
                onChange={(e) => setFormData({ ...formData, sucursal: e.target.value })}
                className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-500 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none cursor-pointer"
              >
                <option value="Av. Principal 1234, Buenos Aires (Casa Central)">
                  Av. Principal 1234, Buenos Aires (Casa Central)
                </option>
                <option value="Sucursal Norte - Panamericana Km 38, Tortuguitas">
                  Sucursal Norte - Panamericana Km 38, Tortuguitas
                </option>
                <option value="Sucursal Oeste - Autopista del Oeste Km 26, Castelar">
                  Sucursal Oeste - Autopista del Oeste Km 26, Castelar
                </option>
                <option value="Sucursal Pilar - Colectora Este Km 51">
                  Sucursal Pilar - Colectora Este Km 51
                </option>
              </select>
            </div>

            {/* Modalidad de Reserva Provisoria */}
            <div className="space-y-2 bg-neutral-950/70 p-4 rounded-xl border border-neutral-800">
              <span className="text-xs font-bold text-neutral-300 uppercase tracking-wider block">
                Modalidad de Bloqueo
              </span>

              <label className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-neutral-900 transition-colors cursor-pointer">
                <input
                  type="radio"
                  name="metodo"
                  checked={formData.metodo === 'seña_online'}
                  onChange={() => setFormData({ ...formData, metodo: 'seña_online' })}
                  className="mt-1 accent-red-600 cursor-pointer"
                />
                <div className="text-xs">
                  <span className="font-bold text-white block">Seña mínima con transferencia / tarjeta ($ 100.000 ARS)</span>
                  <span className="text-neutral-400">100% reembolsable si decidís no avanzar tras la prueba de manejo.</span>
                </div>
              </label>

              <label className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-neutral-900 transition-colors cursor-pointer">
                <input
                  type="radio"
                  name="metodo"
                  checked={formData.metodo === 'visita_presencial'}
                  onChange={() => setFormData({ ...formData, metodo: 'visita_presencial' })}
                  className="mt-1 accent-red-600 cursor-pointer"
                />
                <div className="text-xs">
                  <span className="font-bold text-white block">Prioridad de visita y prueba en sucursal (Sin cargo)</span>
                  <span className="text-neutral-400">Te asignamos un asesor exclusivo para coordinar la inspección hoy mismo.</span>
                </div>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl shadow-xl shadow-red-950/60 border border-red-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
              id="btn-confirmar-reserva"
            >
              <KeyRound className="w-4 h-4" />
              <span>Confirmar Reserva de Unidad</span>
            </button>
          </form>
        ) : (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-red-600/15 border border-red-500/40 text-red-500 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-1">
                Unidad Bloqueada con Éxito
              </span>
              <h4 className="text-2xl font-black text-white mb-2">
                ¡Felicitaciones, {formData.nombre}!
              </h4>
              <p className="text-sm text-neutral-300 max-w-md mx-auto">
                Tu reserva provisoria para el{' '}
                <strong className="text-white">{vehicle.brand} {vehicle.model}</strong> ha quedado asentada en nuestro sistema central.
              </p>
            </div>

            <div className="bg-neutral-950 p-5 rounded-2xl border border-neutral-800 text-left max-w-md mx-auto space-y-2 text-xs">
              <div className="flex justify-between items-center border-b border-neutral-800 pb-2">
                <span className="text-neutral-400">Código de Reserva:</span>
                <span className="font-mono text-sm font-bold text-red-400 bg-red-950/40 px-2 py-0.5 rounded border border-red-800/40">
                  {reservationCode}
                </span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>Sucursal designada:</span>
                <span className="font-semibold text-white truncate max-w-[220px]">{formData.sucursal}</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>Plazo de validez:</span>
                <span className="font-semibold text-emerald-400">48 Horas Hábiles</span>
              </div>
              <p className="text-neutral-400 pt-2 border-t border-neutral-800 leading-relaxed">
                Te enviamos la constancia de reserva a <strong className="text-white">{formData.email}</strong>. Tu ejecutivo de cuenta te llamará a la brevedad.
              </p>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-xl transition-colors cursor-pointer"
            >
              Finalizar y Volver al Catálogo
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
