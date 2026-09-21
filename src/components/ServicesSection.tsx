import {
  Sparkles,
  Car,
  BadgeCheck,
  CreditCard,
  PiggyBank,
  Wrench,
  Cog,
  Shield,
  ArrowRight,
} from 'lucide-react';

interface ServicesSectionProps {
  onServiceAction: (serviceTitle: string) => void;
}

export const ServicesSection = ({ onServiceAction }: ServicesSectionProps) => {
  const services = [
    {
      id: '0km',
      icon: Sparkles,
      title: 'Autos 0 KM',
      description: 'Concesionaria multimarca oficial. Asesoramiento personalizado, entrega inmediata y garantía de fábrica directa.',
      buttonText: 'Ver catálogo 0 KM',
    },
    {
      id: 'usados',
      icon: BadgeCheck,
      title: 'Autos usados',
      description: 'Unidades seleccionadas con peritaje en más de 150 puntos mecánicos, documentación al día y garantía de 12 meses.',
      buttonText: 'Ver usados garantizados',
    },
    {
      id: 'financiacion',
      icon: CreditCard,
      title: 'Financiación',
      description: 'Planes crediticios a tu medida con tasas promocionales fijas en pesos, líneas UVA y aprobación online en 24 horas.',
      buttonText: 'Simular financiación',
    },
    {
      id: 'planes',
      icon: PiggyBank,
      title: 'Planes de ahorro',
      description: 'Accedé a tu 0 KM en cuotas accesibles sin interés bancario directo de terminal con adjudicaciones aseguradas pactadas.',
      buttonText: 'Consultar planes',
    },
    {
      id: 'taller',
      icon: Wrench,
      title: 'Taller',
      description: 'Servicio técnico especializado y postventa homologada con mecánicos certificados, diagnóstico computarizado y turnos online.',
      buttonText: 'Agendar turno de taller',
    },
    {
      id: 'repuestos',
      icon: Cog,
      title: 'Repuestos',
      description: 'Piezas y repuestos 100% legítimos provistos directamente por terminales automotrices para mantener tu vehículo original.',
      buttonText: 'Cotizar repuestos',
    },
    {
      id: 'accesorios',
      icon: Car,
      title: 'Accesorios',
      description: 'Personalizá tu vehículo con enganches, polarizados certificados, barras portaequipajes, lona marítima y multimedia.',
      buttonText: 'Explorar accesorios',
    },
    {
      id: 'seguros',
      icon: Shield,
      title: 'Seguros',
      description: 'Cotizá y contratá tu póliza con las principales aseguradoras del país con cobertura contra todo riesgo y auxilio mecánico 24/7.',
      buttonText: 'Cotizar seguro vehicular',
    },
  ];

  return (
    <section id="servicios" className="py-20 sm:py-24 bg-[#161616] border-t border-[#686868]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E4E0D8] bg-[#161616] px-3.5 py-1.5 rounded-full border border-[#686868]/40 mb-3 inline-block">
            Soluciones Integrales
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E4E0D8] tracking-tight font-display mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-[#A6A39E] text-base sm:text-lg">
            Todo lo que tu automóvil necesita en un solo lugar, con el respaldo y la trayectoria del concesionario líder.
          </p>
        </div>

        {/* 8 Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv) => {
            const IconComponent = srv.icon;
            return (
              <div
                key={srv.id}
                id={`service-card-${srv.id}`}
                className="group bg-[#303030] hover:bg-[#303030]/90 rounded-2xl border border-[#686868]/40 hover:border-[#A6A39E] p-6 shadow-md hover:shadow-2xl shadow-black/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#161616] group-hover:bg-[#E4E0D8] text-[#E4E0D8] group-hover:text-[#161616] border border-[#686868]/40 flex items-center justify-center transition-colors duration-300 mb-5 shadow-xs">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#E4E0D8] tracking-tight mb-2 group-hover:text-white transition-colors">
                    {srv.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#A6A39E] text-sm leading-relaxed mb-6">
                    {srv.description}
                  </p>
                </div>

                {/* Button */}
                <button
                  onClick={() => onServiceAction(srv.title)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#161616] group-hover:bg-[#E4E0D8] text-[#E4E0D8] group-hover:text-[#161616] border border-[#686868]/40 text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>{srv.buttonText}</span>
                  <ArrowRight className="w-4 h-4 text-[#A6A39E] group-hover:text-[#161616] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
