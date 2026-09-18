import React, { useState } from 'react';
import { CheckCircle2, Shield, DollarSign, Clock, FileCheck, ArrowRight, Sparkles } from 'lucide-react';
import { SellFormData } from '../types';
import { OFFICIAL_BRANDS } from '../data/vehicles';

export const SellCarSection: React.FC = () => {
  const [formData, setFormData] = useState<SellFormData>({
    nombre: '',
    telefono: '',
    email: '',
    marca: '',
    modelo: '',
    anio: '',
    kilometraje: '',
    precioPretendido: '',
    comentarios: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [quoteCode, setQuoteCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `TAS-${Math.floor(100000 + Math.random() * 900000)}`;
    setQuoteCode(code);
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      nombre: '',
      telefono: '',
      email: '',
      marca: '',
      modelo: '',
      anio: '',
      kilometraje: '',
      precioPretendido: '',
      comentarios: '',
    });
    setSubmitted(false);
  };

  return (
    <section id="vender" className="py-20 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-80 h-80 bg-neutral-800/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy, Value propositions and benefits */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/50 text-red-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Cotización Oficial Inmediata</span>
            </div>

            {/* Exact required title & subtitle */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              ¿Querés vender tu auto?
            </h2>

            <p className="text-lg text-neutral-300 leading-relaxed">
              Te ayudamos a vender tu vehículo de manera rápida y segura.
            </p>

            <p className="text-sm text-neutral-400 leading-relaxed">
              En CAR ONE compramos tu usado al mejor valor del mercado o lo tomamos en parte de pago por un 0 KM o un usado de nuestro catálogo con llave contra llave sin quedarte a pie.
            </p>

            {/* Value Pillars */}
            <div className="space-y-4 pt-4 border-t border-neutral-800">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-red-500 flex-shrink-0">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Pago Inmediato y Seguro</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Transferencia bancaria al instante una vez verificada la documentación.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-red-500 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Tasación en 24 Horas</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Nuestros peritos realizan la valuación técnica con precios de la guía oficial de la DNRPA.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-red-500 flex-shrink-0">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Gestoría Notarial Incluida</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Nos encargamos del 100% de los trámites: 08 digital, verificación y libre deuda.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Form */}
          <div className="lg:col-span-7">
            <div className="bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5" id="form-vender-auto">
                  <div className="border-b border-neutral-800 pb-4">
                    <h3 className="text-xl font-bold text-white">Completá los datos de tu vehículo</h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Te enviaremos una estimación de precio y coordinaremos una inspección sin costo.
                    </p>
                  </div>

                  {/* Personal info */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-neutral-300">Nombre completo *</label>
                      <input
                        required
                        type="text"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        placeholder="Ej. Lucas Rossi"
                        className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-500 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-neutral-300">Teléfono celular *</label>
                      <input
                        required
                        type="tel"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        placeholder="+54 11 9988-7766"
                        className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-500 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-neutral-300">Email *</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="lucas@correo.com"
                        className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-500 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Vehicle details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-neutral-300">Marca *</label>
                      <select
                        required
                        value={formData.marca}
                        onChange={(e) => setFormData({ ...formData, marca: e.target.value })}
                        className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-500 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none cursor-pointer"
                      >
                        <option value="">Seleccioná la marca</option>
                        {OFFICIAL_BRANDS.map((b) => (
                          <option key={b.id} value={b.name}>
                            {b.name}
                          </option>
                        ))}
                        <option value="Otra">Otra marca</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-neutral-300">Modelo y Versión *</label>
                      <input
                        required
                        type="text"
                        value={formData.modelo}
                        onChange={(e) => setFormData({ ...formData, modelo: e.target.value })}
                        placeholder="Ej. Cruze LTZ 1.4T"
                        className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-500 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-neutral-300">Año *</label>
                      <input
                        required
                        type="number"
                        min="2000"
                        max="2026"
                        value={formData.anio}
                        onChange={(e) => setFormData({ ...formData, anio: e.target.value })}
                        placeholder="Ej. 2021"
                        className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-500 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-neutral-300">Kilometraje *</label>
                      <input
                        required
                        type="number"
                        value={formData.kilometraje}
                        onChange={(e) => setFormData({ ...formData, kilometraje: e.target.value })}
                        placeholder="Ej. 45000"
                        className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-500 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-neutral-300">Precio pretendido (ARS)</label>
                      <input
                        type="text"
                        value={formData.precioPretendido}
                        onChange={(e) => setFormData({ ...formData, precioPretendido: e.target.value })}
                        placeholder="Ej. $ 28.000.000"
                        className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-500 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-neutral-300">Comentarios adicionales</label>
                    <textarea
                      rows={3}
                      value={formData.comentarios}
                      onChange={(e) => setFormData({ ...formData, comentarios: e.target.value })}
                      placeholder="Contanos sobre el estado general del auto, services oficiales realizados, cubiertas, si sos titular directo..."
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-500 rounded-xl p-3.5 text-sm text-white focus:outline-none resize-none"
                    />
                  </div>

                  {/* Exact required button text: "Quiero vender mi auto" */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-red-600 hover:bg-red-500 text-white font-bold text-base rounded-xl shadow-xl shadow-red-950/60 border border-red-500/40 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                    id="btn-quiero-vender-mi-auto"
                  >
                    <span>Quiero vender mi auto</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-xs text-neutral-500 text-center">
                    Tus datos están protegidos bajo confidencialidad comercial CAR ONE.
                  </p>
                </form>
              ) : (
                <div className="text-center py-6 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-red-600/15 border border-red-500/30 text-red-500 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-1">
                      Tasación en curso
                    </span>
                    <h4 className="text-2xl font-black text-white mb-2">
                      ¡Recibimos tu solicitud, {formData.nombre}!
                    </h4>
                    <p className="text-sm text-neutral-300 max-w-lg mx-auto">
                      Un especialista del departamento de compras de CAR ONE analizará los datos de tu{' '}
                      <strong className="text-white">{formData.marca} {formData.modelo} ({formData.anio})</strong>{' '}
                      y se comunicará con vos para ofrecerte la mejor cotización.
                    </p>
                  </div>

                  <div className="bg-neutral-950 p-5 rounded-2xl border border-neutral-800 text-left max-w-md mx-auto space-y-2 text-xs">
                    <div className="flex justify-between items-center border-b border-neutral-800 pb-2">
                      <span className="text-neutral-400">Número de Tasación:</span>
                      <span className="font-mono text-sm font-bold text-red-400">{quoteCode}</span>
                    </div>
                    <div className="flex justify-between text-neutral-300">
                      <span>Teléfono de contacto:</span>
                      <span className="font-semibold text-white">{formData.telefono}</span>
                    </div>
                    <div className="flex justify-between text-neutral-300">
                      <span>Kilometraje ingresado:</span>
                      <span className="font-semibold text-white">{formData.kilometraje} km</span>
                    </div>
                    <div className="text-emerald-400 pt-1">
                      ✓ Te contactaremos vía WhatsApp para solicitarte 4 fotos y enviarte la tasación preliminar.
                    </div>
                  </div>

                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-sm font-semibold rounded-xl transition-colors cursor-pointer"
                  >
                    Cargar otro vehículo
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
