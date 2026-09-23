import { useState, type ChangeEvent, type FormEvent } from 'react';
import { CheckCircle, AlertCircle, Send, DollarSign, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { SellCarFormData } from '../types/vehicle';

export const SellCarSection = () => {
  const [formData, setFormData] = useState<SellCarFormData>({
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

  const [errors, setErrors] = useState<Partial<Record<keyof SellCarFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof SellCarFormData, string>> = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'Ingresá tu nombre completo';
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = 'Ingresá un número de teléfono o celular';
    } else if (formData.telefono.length < 8) {
      newErrors.telefono = 'El teléfono debe tener al menos 8 dígitos';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Ingresá tu correo electrónico';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresá un email válido (ej: nombre@correo.com)';
    }

    if (!formData.marca.trim()) {
      newErrors.marca = 'Ingresá la marca de tu vehículo';
    }

    if (!formData.modelo.trim()) {
      newErrors.modelo = 'Ingresá el modelo de tu auto';
    }

    if (!formData.anio.trim()) {
      newErrors.anio = 'Ingresá el año';
    } else {
      const yearNum = parseInt(formData.anio, 10);
      const currentYear = new Date().getFullYear();
      if (isNaN(yearNum) || yearNum < 1990 || yearNum > currentYear + 1) {
        newErrors.anio = `Año válido entre 1990 y ${currentYear + 1}`;
      }
    }

    if (!formData.kilometraje.trim()) {
      newErrors.kilometraje = 'Ingresá los kilómetros aproximados';
    }

    if (!formData.precioPretendido.trim()) {
      newErrors.precioPretendido = 'Ingresá el monto pretendido en pesos o dólares';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof SellCarFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable async submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
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
    }, 900);
  };

  return (
    <section id="vender" className="py-20 sm:py-24 bg-[#161616] text-[#E4E0D8] relative overflow-hidden border-t border-[#686868]/30">
      {/* Subtle background glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#161616]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-black/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#686868]/40 text-[#E4E0D8] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#E4E0D8]" />
              Tasación Inmediata
            </span>

            {/* Exact requested title: "¿Querés vender tu auto?" */}
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight font-display mb-4 text-[#E4E0D8]">
              ¿Querés vender tu auto?
            </h2>

            {/* Exact requested subtitle: "Te ayudamos a vender tu vehículo de manera rápida y segura." */}
            <p className="text-[#A6A39E] text-lg sm:text-xl mb-8 leading-relaxed">
              Te ayudamos a vender tu vehículo de manera rápida y segura.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#303030] border border-[#686868]/40 flex items-center justify-center shrink-0 text-[#E4E0D8]">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#E4E0D8]">Mejor cotización garantizada</h3>
                  <p className="text-sm text-[#A6A39E] mt-0.5">
                    Valoramos tu usado según estado real y cotizaciones de mercado vigentes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#303030] border border-[#686868]/40 flex items-center justify-center shrink-0 text-[#E4E0D8]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#E4E0D8]">Pago seguro en 24 horas</h3>
                  <p className="text-sm text-[#A6A39E] mt-0.5">
                    Transferencia bancaria inmediata sin vueltas ni demoras innecesarias.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#303030] border border-[#686868]/40 flex items-center justify-center shrink-0 text-[#E4E0D8]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#E4E0D8]">Gestoría integral sin cargo</h3>
                  <p className="text-sm text-[#A6A39E] mt-0.5">
                    Nosotros resolvemos los trámites de transferencia y verificación policial.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form with JavaScript Validation */}
          <div className="lg:col-span-7">
            <div className="bg-[#303030] border border-[#686868]/40 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/70 backdrop-blur-sm">
              {isSuccess ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-[#161616] text-[#E4E0D8] flex items-center justify-center mx-auto mb-4 border border-[#686868]/40">
                    <CheckCircle className="w-8 h-8 text-[#E4E0D8]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#E4E0D8] mb-2">
                    ¡Solicitud recibida con éxito!
                  </h3>
                  <p className="text-[#A6A39E] max-w-md mx-auto text-sm mb-6 leading-relaxed">
                    Un asesor especializado de <strong className="text-[#E4E0D8]">Campi Motors</strong> se comunicará con vos en las próximas horas para coordinar la inspección y cotización definitiva.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-3 rounded-xl bg-[#E4E0D8] hover:bg-white text-[#161616] font-bold text-sm transition-colors cursor-pointer shadow-md"
                  >
                    Cotizar otro vehículo
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-[#E4E0D8] font-display">
                      Completá los datos de tu vehículo
                    </h3>
                    <p className="text-xs text-[#A6A39E] mt-1">
                      Te enviaremos una propuesta formal sin ningún compromiso.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Nombre */}
                    <div>
                      <label htmlFor="sell-nombre" className="block text-xs font-bold text-[#A6A39E] mb-1.5">
                        Nombre y Apellido *
                      </label>
                      <input
                        type="text"
                        id="sell-nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Ej: Martín Rodríguez"
                        className={`w-full bg-[#161616] border rounded-xl px-3.5 py-2.5 text-sm text-[#E4E0D8] placeholder:text-[#A6A39E]/60 focus:outline-none focus:ring-1 focus:ring-[#E4E0D8] transition-all ${
                          errors.nombre ? 'border-red-400 ring-1 ring-red-400' : 'border-[#686868]/40 focus:border-[#A6A39E]'
                        }`}
                      />
                      {errors.nombre && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.nombre}
                        </p>
                      )}
                    </div>

                    {/* Teléfono */}
                    <div>
                      <label htmlFor="sell-telefono" className="block text-xs font-bold text-[#A6A39E] mb-1.5">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="sell-telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="Ej: +54 11 5555-9999"
                        className={`w-full bg-[#161616] border rounded-xl px-3.5 py-2.5 text-sm text-[#E4E0D8] placeholder:text-[#A6A39E]/60 focus:outline-none focus:ring-1 focus:ring-[#E4E0D8] transition-all ${
                          errors.telefono ? 'border-red-400 ring-1 ring-red-400' : 'border-[#686868]/40 focus:border-[#A6A39E]'
                        }`}
                      />
                      {errors.telefono && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.telefono}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="sm:col-span-2">
                      <label htmlFor="sell-email" className="block text-xs font-bold text-[#A6A39E] mb-1.5">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        id="sell-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Ej: martin@gmail.com"
                        className={`w-full bg-[#161616] border rounded-xl px-3.5 py-2.5 text-sm text-[#E4E0D8] placeholder:text-[#A6A39E]/60 focus:outline-none focus:ring-1 focus:ring-[#E4E0D8] transition-all ${
                          errors.email ? 'border-red-400 ring-1 ring-red-400' : 'border-[#686868]/40 focus:border-[#A6A39E]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Marca */}
                    <div>
                      <label htmlFor="sell-marca" className="block text-xs font-bold text-[#A6A39E] mb-1.5">
                        Marca *
                      </label>
                      <input
                        type="text"
                        id="sell-marca"
                        name="marca"
                        value={formData.marca}
                        onChange={handleChange}
                        placeholder="Ej: Volkswagen"
                        className={`w-full bg-[#161616] border rounded-xl px-3.5 py-2.5 text-sm text-[#E4E0D8] placeholder:text-[#A6A39E]/60 focus:outline-none focus:ring-1 focus:ring-[#E4E0D8] transition-all ${
                          errors.marca ? 'border-red-400 ring-1 ring-red-400' : 'border-[#686868]/40 focus:border-[#A6A39E]'
                        }`}
                      />
                      {errors.marca && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.marca}
                        </p>
                      )}
                    </div>

                    {/* Modelo */}
                    <div>
                      <label htmlFor="sell-modelo" className="block text-xs font-bold text-[#A6A39E] mb-1.5">
                        Modelo y Versión *
                      </label>
                      <input
                        type="text"
                        id="sell-modelo"
                        name="modelo"
                        value={formData.modelo}
                        onChange={handleChange}
                        placeholder="Ej: Golf 1.4 TSI Highline"
                        className={`w-full bg-[#161616] border rounded-xl px-3.5 py-2.5 text-sm text-[#E4E0D8] placeholder:text-[#A6A39E]/60 focus:outline-none focus:ring-1 focus:ring-[#E4E0D8] transition-all ${
                          errors.modelo ? 'border-red-400 ring-1 ring-red-400' : 'border-[#686868]/40 focus:border-[#A6A39E]'
                        }`}
                      />
                      {errors.modelo && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.modelo}
                        </p>
                      )}
                    </div>

                    {/* Año */}
                    <div>
                      <label htmlFor="sell-anio" className="block text-xs font-bold text-[#A6A39E] mb-1.5">
                        Año de fabricación *
                      </label>
                      <input
                        type="number"
                        id="sell-anio"
                        name="anio"
                        value={formData.anio}
                        onChange={handleChange}
                        placeholder="Ej: 2021"
                        className={`w-full bg-[#161616] border rounded-xl px-3.5 py-2.5 text-sm text-[#E4E0D8] placeholder:text-[#A6A39E]/60 focus:outline-none focus:ring-1 focus:ring-[#E4E0D8] transition-all ${
                          errors.anio ? 'border-red-400 ring-1 ring-red-400' : 'border-[#686868]/40 focus:border-[#A6A39E]'
                        }`}
                      />
                      {errors.anio && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.anio}
                        </p>
                      )}
                    </div>

                    {/* Kilometraje */}
                    <div>
                      <label htmlFor="sell-km" className="block text-xs font-bold text-[#A6A39E] mb-1.5">
                        Kilometraje actual *
                      </label>
                      <input
                        type="text"
                        id="sell-km"
                        name="kilometraje"
                        value={formData.kilometraje}
                        onChange={handleChange}
                        placeholder="Ej: 45.000 km"
                        className={`w-full bg-[#161616] border rounded-xl px-3.5 py-2.5 text-sm text-[#E4E0D8] placeholder:text-[#A6A39E]/60 focus:outline-none focus:ring-1 focus:ring-[#E4E0D8] transition-all ${
                          errors.kilometraje ? 'border-red-400 ring-1 ring-red-400' : 'border-[#686868]/40 focus:border-[#A6A39E]'
                        }`}
                      />
                      {errors.kilometraje && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.kilometraje}
                        </p>
                      )}
                    </div>

                    {/* Precio Pretendido */}
                    <div className="sm:col-span-2">
                      <label htmlFor="sell-precio" className="block text-xs font-bold text-[#A6A39E] mb-1.5">
                        Precio pretendido (ARS o USD) *
                      </label>
                      <input
                        type="text"
                        id="sell-precio"
                        name="precioPretendido"
                        value={formData.precioPretendido}
                        onChange={handleChange}
                        placeholder="Ej: $22.000.000 o USD 18.000"
                        className={`w-full bg-[#161616] border rounded-xl px-3.5 py-2.5 text-sm text-[#E4E0D8] placeholder:text-[#A6A39E]/60 focus:outline-none focus:ring-1 focus:ring-[#E4E0D8] transition-all ${
                          errors.precioPretendido ? 'border-red-400 ring-1 ring-red-400' : 'border-[#686868]/40 focus:border-[#A6A39E]'
                        }`}
                      />
                      {errors.precioPretendido && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.precioPretendido}
                        </p>
                      )}
                    </div>

                    {/* Comentarios */}
                    <div className="sm:col-span-2">
                      <label htmlFor="sell-comentarios" className="block text-xs font-bold text-[#A6A39E] mb-1.5">
                        Comentarios adicionales (opcional)
                      </label>
                      <textarea
                        id="sell-comentarios"
                        name="comentarios"
                        rows={3}
                        value={formData.comentarios}
                        onChange={handleChange}
                        placeholder="Contanos sobre el estado del vehículo, services oficiales, agregados o si buscás entregar como parte de pago de otro auto."
                        className="w-full bg-[#161616] border border-[#686868]/40 rounded-xl px-3.5 py-2.5 text-sm text-[#E4E0D8] placeholder:text-[#A6A39E]/60 focus:outline-none focus:ring-1 focus:ring-[#E4E0D8] transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Botón especificado: "Quiero vender mi auto" */}
                  <button
                    type="submit"
                    id="btn-submit-sell"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#E4E0D8] hover:bg-white disabled:bg-[#161616] text-[#161616] disabled:text-[#A6A39E] font-extrabold text-base tracking-wide transition-all duration-200 shadow-xl flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-[#161616]/30 border-t-[#161616] rounded-full animate-spin"></span>
                        Enviando cotización...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#161616]" />
                        <span>Quiero vender mi auto</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
