import React, { useState } from 'react';
import {
  Sparkles,
  Car,
  BadgePercent,
  PiggyBank,
  Wrench,
  Cpu,
  ShieldCheck,
  FileCheck2,
  ArrowRight,
  Check,
  X,
  Send,
} from 'lucide-react';
import { SERVICES_DATA } from '../data/vehicles';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceAction: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceAction }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);
  const [serviceFormSubmitted, setServiceFormSubmitted] = useState(false);
  const [serviceForm, setServiceForm] = useState({
    nombre: '',
    telefono: '',
    consulta: '',
  });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-red-500" />;
      case 'Car':
        return <Car className="w-6 h-6 text-red-500" />;
      case 'BadgePercent':
        return <BadgePercent className="w-6 h-6 text-red-500" />;
      case 'PiggyBank':
        return <PiggyBank className="w-6 h-6 text-red-500" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-red-500" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-red-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-red-500" />;
      case 'FileCheck2':
        return <FileCheck2 className="w-6 h-6 text-red-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-red-500" />;
    }
  };

  const handleActionClick = (service: ServiceItem) => {
    if (service.id === '0km' || service.id === 'usados' || service.id === 'financiacion') {
      onSelectServiceAction(service.id);
    } else {
      setActiveModalService(service);
      setServiceFormSubmitted(false);
      setServiceForm({ nombre: '', telefono: '', consulta: '' });
    }
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setServiceFormSubmitted(true);
  };

  return (
    <section id="servicios" className="py-20 bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-red-500 uppercase mb-2">
            Soluciones Integrales CAR ONE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Te acompañamos en cada etapa: desde la elección de tu próximo auto hasta el mantenimiento oficial de postventa y la cobertura aseguradora.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group bg-neutral-900/80 hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-700/80 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60"
              id={`service-card-${service.id}`}
            >
              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center group-hover:border-red-500/40 group-hover:bg-red-950/20 transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="text-[10px] font-bold text-neutral-400 bg-neutral-950 px-2.5 py-1 rounded-full border border-neutral-800">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleActionClick(service)}
                className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-neutral-950 hover:bg-red-600 text-neutral-200 hover:text-white text-xs font-bold border border-neutral-800 hover:border-red-500 transition-all duration-200 cursor-pointer group/btn"
                id={`btn-service-${service.id}`}
              >
                <span>{service.actionText}</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Service Contact Modal for Taller, Repuestos, Planes de Ahorro, Seguros, Accesorios */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-sm"
            onClick={() => setActiveModalService(null)}
          />

          <div className="relative w-full max-w-lg bg-neutral-900 border border-neutral-800 rounded-3xl p-6 z-10 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-neutral-800 text-red-500">
                  {getServiceIcon(activeModalService.iconName)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">{activeModalService.title}</h4>
                  <p className="text-xs text-neutral-400">Atención personalizada CAR ONE</p>
                </div>
              </div>
              <button
                onClick={() => setActiveModalService(null)}
                className="p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!serviceFormSubmitted ? (
              <form onSubmit={handleModalSubmit} className="mt-5 space-y-4">
                <p className="text-xs text-neutral-300">
                  {activeModalService.description}
                </p>

                <div className="space-y-1">
                  <label className="text-xs text-neutral-400 font-medium">Nombre y Apellido *</label>
                  <input
                    required
                    type="text"
                    value={serviceForm.nombre}
                    onChange={(e) => setServiceForm({ ...serviceForm, nombre: e.target.value })}
                    placeholder="Ej. Martín Gómez"
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-neutral-400 font-medium">Teléfono WhatsApp *</label>
                  <input
                    required
                    type="tel"
                    value={serviceForm.telefono}
                    onChange={(e) => setServiceForm({ ...serviceForm, telefono: e.target.value })}
                    placeholder="+54 11 2233-4455"
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-500 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-neutral-400 font-medium">Detalle de tu consulta o requerimiento</label>
                  <textarea
                    rows={3}
                    value={serviceForm.consulta}
                    onChange={(e) => setServiceForm({ ...serviceForm, consulta: e.target.value })}
                    placeholder="Indicá modelo de vehículo, patente, repuesto que necesitás o fecha preferida para el turno..."
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-red-500 rounded-xl p-3 text-sm text-white focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl shadow-lg shadow-red-950/60 border border-red-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar solicitud a {activeModalService.title}</span>
                </button>
              </form>
            ) : (
              <div className="py-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h5 className="text-lg font-bold text-white">¡Solicitud Registrada!</h5>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Gracias <strong className="text-white">{serviceForm.nombre}</strong>. El equipo del sector de{' '}
                  <strong className="text-red-400">{activeModalService.title}</strong> se comunicará a tu teléfono{' '}
                  <strong className="text-white">{serviceForm.telefono}</strong> a la mayor brevedad.
                </p>
                <button
                  onClick={() => setActiveModalService(null)}
                  className="px-6 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold rounded-xl"
                >
                  Aceptar
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
