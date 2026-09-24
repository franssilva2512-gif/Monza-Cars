import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';

export const LocationSection = () => {
  return (
    <section id="contacto" className="py-20 sm:py-24 bg-[#161616] border-t border-[#686868]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E4E0D8] bg-[#161616] px-3.5 py-1.5 rounded-full border border-[#686868]/40 mb-3 inline-block">
            Punto Central • Campi Motors
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E4E0D8] tracking-tight font-display mb-4">
            Encontranos
          </h2>
          <p className="text-[#A6A39E] text-base sm:text-lg">
            Vení a conocer nuestro predio multimarca y asesorate de forma directa con nuestros especialistas comerciales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Contact Details Card */}
            <div className="bg-[#303030] rounded-3xl p-6 sm:p-8 border border-[#686868]/40 shadow-xl shadow-black/40 space-y-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#E4E0D8] border-b border-[#686868]/30 pb-3 mb-6">
                  Información de contacto
                </h3>

                <div className="space-y-6">
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
                        Campi Motors • Estacionamiento exclusivo para clientes.
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
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=tomascampi06@gmail.com&su=Consulta%20Campi%20Motors"
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
              </div>

              {/* Direct Quick Actions */}
              <div className="pt-6 border-t border-[#686868]/30 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://wa.me/5491155922000?text=Hola!%20Quiero%20hacer%20una%20consulta%20en%20Campi%20Motors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-[#E4E0D8] hover:bg-white text-[#161616] font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chatear por WhatsApp</span>
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Avenida+Vergara+2865,+Hurlingham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-[#161616] hover:bg-[#161616]/80 text-[#E4E0D8] border border-[#686868]/40 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Abrir en Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Styled Map */}
          <div className="lg:col-span-7 bg-[#303030] rounded-3xl overflow-hidden border border-[#686868]/40 shadow-2xl relative min-h-[480px] flex flex-col">
            {/* Visual map preview canvas with interactive elements */}
            <div className="relative flex-1 bg-[#161616] overflow-hidden min-h-[480px]">
              {/* Real Interactive Google Map centered exactly on Av. Gobernador Vergara 2865, Hurlingham */}
              <iframe
                title="Ubicación oficial de Campi Motors en Hurlingham"
                src="https://maps.google.com/maps?q=-34.608389,-58.635012+(Campi+Motors)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                className="w-full h-full min-h-[480px] border-0"
                style={{ filter: 'grayscale(20%) contrast(105%)' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Campi Motors Pin / Badge at exact location */}
              <div className="absolute top-4 left-4 z-10 bg-[#161616]/95 backdrop-blur-md text-[#E4E0D8] p-3 rounded-2xl shadow-2xl border border-[#686868]/50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#303030] border border-[#686868]/40 overflow-hidden flex items-center justify-center shrink-0 shadow-md">
                  <img
                    src="/assets/campi-motors-logo.jpg"
                    alt="Campi Motors"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-extrabold tracking-tight text-[#E4E0D8]">
                      Campi Motors
                    </span>
                    <span className="flex h-2 w-2 relative" title="Abierto">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                  </div>
                  <span className="text-xs text-[#A6A39E] block">
                    Avenida Vergara 2865, Hurlingham
                  </span>
                </div>
              </div>

              {/* Quick Map Controls Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#161616]/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-[#686868]/50 text-[#E4E0D8] shadow-xl">
                <div className="flex items-center gap-3 text-xs text-[#A6A39E]">
                  <Navigation className="w-4 h-4 text-[#E4E0D8] shrink-0" />
                  <span className="text-[#E4E0D8]/90 font-medium">Avenida Vergara 2865, Hurlingham. Fácil acceso.</span>
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
          </div>
        </div>
      </div>
    </section>
  );
};
