import React, { useState } from 'react';
import { X, Calculator, CheckCircle2, ShieldCheck, ArrowRight, DollarSign } from 'lucide-react';
import { Vehicle } from '../types';
import { formatPriceARS } from '../data/vehicles';

interface FinancingModalProps {
  vehicle: Vehicle;
  onClose: () => void;
}

export const FinancingModal: React.FC<FinancingModalProps> = ({ vehicle, onClose }) => {
  const [anticipoPercent, setAnticipoPercent] = useState<number>(30); // 30% default
  const [plazoMeses, setPlazoMeses] = useState<number>(36); // 36 months default
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    nombre: '',
    dni: '',
    telefono: '',
    email: '',
    ingresoMensual: '',
  });

  // Financial calculations (TNA ~ 58% annual fixed for automotive credit)
  const anticipoMonto = Math.round((vehicle.price * anticipoPercent) / 100);
  const montoAFinanciar = vehicle.price - anticipoMonto;
  const tasaMensual = 0.58 / 12; // ~4.83% monthly
  // French amortization formula: Cuota = P * [ i / (1 - (1+i)^-n) ]
  const cuotaEstimada = Math.round(
    montoAFinanciar * (tasaMensual / (1 - Math.pow(1 + tasaMensual, -plazoMeses)))
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} />

      <div
        className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200"
        id="financing-modal"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-900/95">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-red-950/60 text-red-500 border border-red-800/40">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white leading-tight">
                Simulador de Financiación Oficial
              </h3>
              <p className="text-xs text-neutral-400">
                {vehicle.brand} {vehicle.model} ({vehicle.year}) · {formatPriceARS(vehicle.price)}
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

        {/* Content */}
        {!isSubmitted ? (
          <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Live calculation preview card */}
            <div className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 p-5 rounded-2xl border border-neutral-800 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-neutral-800 pb-3">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Cuota fija mensual estimada ({plazoMeses} meses)
                </span>
                <span className="text-3xl font-black text-red-400 tracking-tight">
                  {formatPriceARS(cuotaEstimada)} <span className="text-xs font-normal text-neutral-400">/ mes</span>
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <span className="text-neutral-500 block">Anticipo ({anticipoPercent}%)</span>
                  <span className="font-bold text-neutral-200 text-sm">{formatPriceARS(anticipoMonto)}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">Monto a financiar</span>
                  <span className="font-bold text-neutral-200 text-sm">{formatPriceARS(montoAFinanciar)}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">Tasa Fija (TNA)</span>
                  <span className="font-bold text-emerald-400 text-sm">58.0% en Pesos</span>
                </div>
              </div>
            </div>

            {/* Slider 1: Anticipo % */}
            <div className="space-y-2 bg-neutral-950/60 p-4 rounded-xl border border-neutral-800">
              <div className="flex items-center justify-between text-sm">
                <label className="font-semibold text-neutral-300">
                  Porcentaje de Anticipo
                </label>
                <span className="font-extrabold text-red-400 bg-red-950/60 px-2.5 py-0.5 rounded-lg border border-red-800/40">
                  {anticipoPercent}% ({formatPriceARS(anticipoMonto)})
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="70"
                step="5"
                value={anticipoPercent}
                onChange={(e) => setAnticipoPercent(Number(e.target.value))}
                className="w-full accent-red-600 cursor-pointer h-2 bg-neutral-800 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 font-medium">
                <span>Mínimo 20%</span>
                <span>50%</span>
                <span>Máximo 70%</span>
              </div>
            </div>

            {/* Plazo en cuotas fijas (12 a 60 meses) */}
            <div className="space-y-2 bg-neutral-950/60 p-4 rounded-xl border border-neutral-800">
              <label className="font-semibold text-neutral-300 text-sm block">
                Plazo en Cuotas Fijas
              </label>
              <div className="grid grid-cols-5 gap-2">
                {[12, 24, 36, 48, 60].map((meses) => (
                  <button
                    key={meses}
                    type="button"
                    onClick={() => setPlazoMeses(meses)}
                    className={`py-2 px-1 text-center rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      plazoMeses === meses
                        ? 'bg-red-600 text-white shadow-md shadow-red-950/60 border border-red-500'
                        : 'bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-700/60'
                    }`}
                  >
                    {meses}m
                  </button>
                ))}
              </div>
            </div>

            {/* Pre-approval form */}
            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="flex items-center gap-2 text-sm font-bold text-neutral-200">
                <ShieldCheck className="w-4 h-4 text-red-500" />
                <span>Formulario de Pre-Aprobación Inmediata</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs text-neutral-400 font-medium">Nombre y Apellido *</label>
                  <input
                    required
                    type="text"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    placeholder="Ej. Juan Pérez"
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-neutral-400 font-medium">DNI / CUIL *</label>
                  <input
                    required
                    type="text"
                    value={formData.dni}
                    onChange={(e) => setFormData({ ...formData, dni: e.target.value })}
                    placeholder="Ej. 34.567.890"
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-neutral-400 font-medium">Teléfono WhatsApp *</label>
                  <input
                    required
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    placeholder="Ej. +54 11 4455-6677"
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-neutral-400 font-medium">Email *</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="juan@ejemplo.com"
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2 space-y-1">
                  <label className="text-xs text-neutral-400 font-medium">Ingresos Netos Demostrables Mensuales</label>
                  <input
                    type="text"
                    value={formData.ingresoMensual}
                    onChange={(e) => setFormData({ ...formData, ingresoMensual: e.target.value })}
                    placeholder="Ej. $ 1.800.000 (Sueldo / Monotributo / Autónomo)"
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl shadow-lg shadow-red-950/60 border border-red-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  id="btn-submit-financiacion"
                >
                  <span>Solicitar Pre-Aprobación Crediticia</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-neutral-500 text-center mt-2">
                  La simulación no constituye oferta vinculante. Sujeto a aprobación crediticia del banco emisor.
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h4 className="text-2xl font-bold text-white mb-2">
                ¡Solicitud de Financiación Recibida!
              </h4>
              <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                Muchas gracias, <strong className="text-white">{formData.nombre}</strong>. Hemos registrado tu simulación para el{' '}
                <strong className="text-red-400">{vehicle.brand} {vehicle.model}</strong> por{' '}
                <strong className="text-white">{plazoMeses} cuotas</strong> de aproximadamente{' '}
                <strong className="text-white">{formatPriceARS(cuotaEstimada)}</strong>.
              </p>
            </div>

            <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 text-left max-w-md mx-auto space-y-1 text-xs">
              <div className="text-neutral-400">
                Código de gestión financiera: <strong className="text-white font-mono">FIN-{Math.floor(100000 + Math.random() * 900000)}</strong>
              </div>
              <div className="text-neutral-400">
                Contacto telefónico registrado: <strong className="text-white">{formData.telefono}</strong>
              </div>
              <div className="text-emerald-400 pt-1">
                ✓ Un asesor financiero de CAR ONE se comunicará por WhatsApp dentro de las próximas 2 horas hábiles.
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-xl transition-colors cursor-pointer"
            >
              Cerrar simulador
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
