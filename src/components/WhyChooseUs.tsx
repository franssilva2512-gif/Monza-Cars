import { Award, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs = () => {
  const stats = [
    {
      value: '+10.000',
      label: 'Vehículos vendidos',
      description: 'Clientes satisfechos en todo el país que confían en nuestra seriedad.',
    },
    {
      value: '+15',
      label: 'Marcas',
      description: 'Concesionario oficial de las principales terminales del mundo.',
    },
    {
      value: '+20',
      label: 'Años de experiencia',
      description: 'Liderando el mercado automotor argentino con solvencia y transparencia.',
    },
    {
      value: '+50',
      label: 'Modelos disponibles',
      description: 'Entrega inmediata garantizada en salones de exposición propios.',
    },
  ];

  return (
    <section id="nosotros" className="py-20 sm:py-28 bg-[#161616] text-[#E4E0D8] relative overflow-hidden border-t border-[#686868]/30">
      {/* Visual background accents */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E4E0D8] bg-[#161616] px-3.5 py-1.5 rounded-full border border-[#686868]/40 mb-3 inline-block">
            Trayectoria y Confianza
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-display mb-4 text-[#E4E0D8]">
            ¿Por qué elegir CAR ONE?
          </h2>
          <p className="text-[#A6A39E] text-base sm:text-lg">
            Somos la red de concesionarios más elegida por su transparencia en las operaciones, solidez financiera y atención posventa certificada.
          </p>
        </div>

        {/* 4 Statistics Cards as specified in the prompt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#303030] border border-[#686868]/40 rounded-2xl p-7 text-center hover:border-[#A6A39E] hover:bg-[#303030]/80 transition-all duration-300 group hover:-translate-y-1 shadow-lg shadow-black/40"
            >
              <div className="text-4xl sm:text-5xl font-black text-[#E4E0D8] group-hover:text-white transition-colors font-display tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-bold text-[#E4E0D8] mb-2">
                {stat.label}
              </div>
              <p className="text-xs text-[#A6A39E] leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* 3 Pillars of trust */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-[#686868]/30">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#303030] text-[#E4E0D8] flex items-center justify-center shrink-0 border border-[#686868]/40">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#E4E0D8] mb-1">Peritaje exhaustivo en 150 puntos</h3>
              <p className="text-sm text-[#A6A39E]">
                Cada unidad usada pasa por un riguroso control mecánico, eléctrico, estructural y documental previo a la venta.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#303030] text-[#E4E0D8] flex items-center justify-center shrink-0 border border-[#686868]/40">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#E4E0D8] mb-1">Garantía escrita transferible</h3>
              <p className="text-sm text-[#A6A39E]">
                Cobertura oficial en 0 KM y 12 meses de garantía mecánica CAR ONE Certified para tu total tranquilidad.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#303030] text-[#E4E0D8] flex items-center justify-center shrink-0 border border-[#686868]/40">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#E4E0D8] mb-1">Operaciones transparentes</h3>
              <p className="text-sm text-[#A6A39E]">
                Sin cargos ocultos. Gestoría integral para que retires tu vehículo transferido sin hacer filas ni trámites molestos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
