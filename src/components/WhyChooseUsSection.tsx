import React from 'react';
import { ShieldCheck, Wrench, FileCheck, CheckCircle, Award, Users, ThumbsUp } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const metrics = [
    { value: '+10.000', label: 'Vehículos vendidos', desc: 'Familias y empresas que confían en nosotros' },
    { value: '+15', label: 'Marcas oficiales', desc: 'Representación oficial automotriz directa' },
    { value: '+20', label: 'Años de experiencia', desc: 'Liderando el mercado automotor argentino' },
    { value: '+50', label: 'Modelos disponibles', desc: 'Stock físico real y entrega inmediata' },
  ];

  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Peritaje en 150 puntos',
      description:
        'Cada unidad usada atraviesa una rigurosa inspección que evalúa chasis, motor, sistema de frenos, suspensión, tren delantero, electrónica integral y prueba de ruta certificada.',
      bullets: ['Certificación estructural sin siniestros', 'Prueba computarizada OBD-II de inyección', 'Verificación de kilometraje real certificado'],
    },
    {
      icon: Wrench,
      title: 'Garantía mecánica',
      description:
        'Respaldamos tu tranquilidad con garantía mecánica oficial escrita en caja, motor y componentes esenciales, con cobertura en nuestra red de talleres oficiales en todo el país.',
      bullets: ['Garantía de hasta 1 año en usados seleccionados', 'Garantía de fábrica 3 o 5 años en unidades 0 KM', 'Asistencia en ruta 24/7 en todo el territorio nacional'],
    },
    {
      icon: FileCheck,
      title: 'Gestoría integral',
      description:
        'Nos encargamos del 100% de la tramitación registral sin demoras ni sorpresas. Transferencias exprés, libre deuda de multas y patentes, grabado de autopartes y verificación policial.',
      bullets: ['Informes de dominio históricos actualizados', 'Liquidación y pago de deudas de patentes e infracciones', 'Entrega de cédula y título a tu nombre de forma ágil'],
    },
  ];

  return (
    <section id="nosotros" className="py-20 bg-neutral-900 border-t border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-red-500 uppercase mb-2">
            Trayectoria y Respaldo
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Por qué elegirnos
          </h2>
          <p className="mt-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
            Comprar o vender un automóvil es una decisión importante. En CAR ONE te brindamos la seguridad, transparencia y respaldo que merecés.
          </p>
        </div>

        {/* 4 Métricas Destacadas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-neutral-950/80 border border-neutral-800/90 rounded-2xl p-6 text-center hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-white tracking-tight mb-2">
                {metric.value}
              </div>
              <div className="font-bold text-white text-sm sm:text-base mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-neutral-400">
                {metric.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Pilares de Confianza: Peritaje en 150 puntos, garantía mecánica y gestoría integral */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-neutral-950/60 border border-neutral-800 rounded-3xl p-7 flex flex-col justify-between hover:border-neutral-700 transition-colors"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-red-950/50 border border-red-800/40 text-red-500 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-neutral-800/80">
                  {pillar.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <CheckCircle className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
