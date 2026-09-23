import { useState, type FormEvent } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  CheckCircle2,
  CalendarCheck,
  Send,
  ExternalLink,
} from 'lucide-react';

export const LocationSection = () => {
  const [testDriveDate, setTestDriveDate] = useState('');
  const [testDriveName, setTestDriveName] = useState('');
  const [testDrivePhone, setTestDrivePhone] = useState('');
  const [testDriveSubmitted, setTestDriveSubmitted] = useState(false);

  const handleTestDriveSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!testDriveName || !testDrivePhone || !testDriveDate) return;
    setTestDriveSubmitted(true);
    setTimeout(() => {
      setTestDriveSubmitted(false);
      setTestDriveName('');
      setTestDrivePhone('');
      setTestDriveDate('');
    }, 4000);
  };

  return (
    <section id="contacto" className="py-20 sm:py-24 bg-[#161616] border-t border-[#686868]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          {/* Exact specification: "Encontranos" */}
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E4E0D8] bg-[#161616] px-3.5 py-1.5 rounded-full border border-[#686868]/40 mb-3 inline-block">
            Punto Central y Showroom
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E4E0D8] tracking-tight font-display mb-4">
            Encontranos
          </h2>
          <p className="text-[#A6A39E] text-base sm:text-lg">
            Vení a conocer nuestro predio multimarca, disfrutá de una prueba de manejo y asesorate con nuestros especialistas comerciales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Cards & Test Drive Booking */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Details Cards */}
            <div className="bg-[#303030] rounded-2xl p-6 sm:p-7 border border-[#686868]/40 shadow-xl shadow-black/40 space-y-6">
              <h3 className="text-lg font-bold text-[#E4E0D8] border-b border-[#686868]/30 pb-3">
                Información de contacto
              </h3>

              {/* Dirección: Avenida Vergara 2865, Hurlingham */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#161616] border border-[#686868]/40 text-[#E4E0D8] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#A6A39E] uppercase tracking-wider block">
                    Dirección
                  </span>
                  <p className="text-base font-bold text-[#E4E0D8] mt-0.5">
                    Avenida Vergara 2865, Hurlingham
                  </p>
                  <p className="text-xs text-[#A6A39E] mt-0.5">
                    Showroom oficial - Estacionamiento exclusivo para clientes.
                  </p>
                </div>
              </div>

              {/* Teléfono y WhatsApp: +54 911 5592-2000 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#161616] border border-[#686868]/40 text-[#E4E0D8] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#A6A39E] uppercase tracking-wider block">
                    Teléfono &amp; WhatsApp
                  </span>
                  <a
                    href="tel:+5491155922000"
                    className="text-base font-bold text-[#E4E0D8] hover:text-white transition-colors mt-0.5 block"
                  >
                    +54 911 5592-2000
                  </a>
                  <p className="text-xs text-[#A6A39E] mt-0.5">
                    Atención directa y asesoramiento personalizado
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#161616] border border-[#686868]/40 text-[#E4E0D8] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#A6A39E] uppercase tracking-wider block">
                    Correo electrónico
                  </span>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=tomascampi06@gmail.com&su=Consulta%20Monza%20Cars"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-[#E4E0D8] hover:text-white transition-colors mt-0.5 inline-flex items-center gap-1.5 group"
                    title="Redactar correo en Google Mail (Gmail)"
                  >
                    <span>tomascampi06@gmail.com</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#A6A39E] group-hover:text-white transition-colors" />
                  </a>
                  <p className="text-xs text-[#A6A39E] mt-0.5">
                    Hacé clic para redactar directamente desde Google Mail
                  </p>
                </div>
              </div>

              {/* Horarios: Lunes a viernes 9:00 am a 18:00 pm y sabado de 9:00 am a 14:00 pm */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#161616] border border-[#686868]/40 text-[#E4E0D8] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#A6A39E] uppercase tracking-wider block">
                    Horarios de atención
                  </span>
                  <p className="text-sm font-semibold text-[#E4E0D8]/90 mt-0.5">
                    Lunes a Viernes: 09:00 a 18:00 hs
                  </p>
                  <p className="text-sm font-semibold text-[#E4E0D8]/90">
                    Sábados: 09:00 a 14:00 hs
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Test Drive quick form */}
            <div className="bg-[#303030] text-[#E4E0D8] rounded-2xl p-6 border border-[#686868]/40 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <CalendarCheck className="w-5 h-5 text-[#E4E0D8]" />
                <h4 className="text-base font-bold text-[#E4E0D8]">Agendá un Test Drive</h4>
              </div>
              <p className="text-xs text-[#A6A39E] mb-4">
                Probá el auto de tus sueños en nuestra pista de pruebas antes de tomar tu decisión.
              </p>

              {testDriveSubmitted ? (
                <div className="bg-[#161616] border border-[#686868]/40 rounded-xl p-4 text-center">
                  <CheckCircle2 className="w-6 h-6 text-[#E4E0D8] mx-auto mb-1.5" />
                  <p className="text-xs font-bold text-white">¡Test Drive agendado con éxito!</p>
                  <p className="text-[11px] text-[#A6A39E] mt-0.5">
                    Te contactaremos para confirmar el horario disponible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleTestDriveSubmit} className="space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre y apellido"
                    value={testDriveName}
                    onChange={(e) => setTestDriveName(e.target.value)}
                    className="w-full bg-[#161616] border border-[#686868]/40 rounded-xl px-3 py-2 text-xs text-[#E4E0D8] placeholder:text-[#A6A39E]/60 focus:outline-none focus:ring-1 focus:ring-[#E4E0D8]"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="tel"
                      required
                      placeholder="Teléfono"
                      value={testDrivePhone}
                      onChange={(e) => setTestDrivePhone(e.target.value)}
                      className="w-full bg-[#161616] border border-[#686868]/40 rounded-xl px-3 py-2 text-xs text-[#E4E0D8] placeholder:text-[#A6A39E]/60 focus:outline-none focus:ring-1 focus:ring-[#E4E0D8]"
                    />
                    <input
                      type="date"
                      required
                      value={testDriveDate}
                      onChange={(e) => setTestDriveDate(e.target.value)}
                      className="w-full bg-[#161616] border border-[#686868]/40 rounded-xl px-3 py-2 text-xs text-[#E4E0D8] focus:outline-none focus:ring-1 focus:ring-[#E4E0D8]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-[#E4E0D8] hover:bg-white text-[#161616] font-extrabold text-xs tracking-wide transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <Send className="w-3.5 h-3.5 text-[#161616]" />
                    <span>Reservar fecha para Test Drive</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Visual Styled Map Example as requested in prompt */}
          <div className="lg:col-span-7 bg-[#303030] rounded-3xl overflow-hidden border border-[#686868]/40 shadow-2xl relative min-h-[480px] flex flex-col">
            {/* Visual map preview canvas with interactive elements */}
            <div className="relative flex-1 bg-black overflow-hidden min-h-[380px]">
              {/* Stylized realistic map background image */}
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1400&q=80"
                alt="Mapa satelital de ubicación de CAR ONE"
                className="w-full h-full object-cover opacity-50 filter grayscale contrast-125"
              />

              {/* Dark aesthetic overlay */}
              <div className="absolute inset-0 bg-[#161616]/60 backdrop-blur-[1px]" />

              {/* Pin Marker on Map */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
                {/* Floating Tooltip */}
                <div className="bg-[#161616] text-[#E4E0D8] px-4 py-2 rounded-xl shadow-2xl border border-[#686868]/40 flex items-center gap-2 mb-2 animate-bounce">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E4E0D8]"></div>
                  <div>
                    <span className="text-xs font-extrabold tracking-tight block">
                      Showroom Central
                    </span>
                    <span className="text-[10px] text-[#A6A39E]">
                      Avenida Vergara 2865, Hurlingham
                    </span>
                  </div>
                </div>

                {/* Animated Pin */}
                <div className="relative flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 animate-ping absolute" />
                  <div className="w-10 h-10 rounded-full bg-[#E4E0D8] text-[#161616] flex items-center justify-center shadow-xl border-2 border-[#161616] relative z-10">
                    <MapPin className="w-5 h-5 fill-current" />
                  </div>
                </div>
              </div>

              {/* Quick Map Controls Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#303030]/95 backdrop-blur-md p-4 rounded-2xl border border-[#686868]/40 text-[#E4E0D8]">
                <div className="flex items-center gap-3 text-xs text-[#A6A39E]">
                  <Navigation className="w-4 h-4 text-[#E4E0D8] shrink-0" />
                  <span className="text-[#E4E0D8]/90">Avenida Vergara 2865, Hurlingham. Fácil acceso.</span>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Avenida+Vergara+2865,+Hurlingham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#E4E0D8] text-[#161616] hover:bg-white text-xs font-bold tracking-wide transition-colors shrink-0 flex items-center gap-1.5 shadow"
                >
                  <span>Cómo llegar (Google Maps)</span>
                  <Navigation className="w-3.5 h-3.5 rotate-45 text-[#161616]" />
                </a>
              </div>
            </div>

            {/* Bottom facilities bar */}
            <div className="bg-[#303030] p-4 sm:p-5 border-t border-[#686868]/30 grid grid-cols-3 gap-2 text-center text-xs">
              <div>
                <span className="font-bold text-[#E4E0D8] block">Estacionamiento</span>
                <span className="text-[#A6A39E] text-[11px]">Gratuito para clientes</span>
              </div>
              <div className="border-x border-[#686868]/30">
                <span className="font-bold text-[#E4E0D8] block">Café &amp; Lounge</span>
                <span className="text-[#A6A39E] text-[11px]">Espacio de espera VIP</span>
              </div>
              <div>
                <span className="font-bold text-[#E4E0D8] block">Pista de Pruebas</span>
                <span className="text-[#A6A39E] text-[11px]">Circuito para Test Drive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
