import { useState, type FormEvent } from 'react';
import { X, CheckCircle2, ShieldCheck, Sparkles, Car, MessageCircle } from 'lucide-react';
import { Vehicle } from '../types/vehicle';

interface ReservationModalProps {
  vehicle: Vehicle;
  onClose: () => void;
}

export const ReservationModal = ({ vehicle, onClose }: ReservationModalProps) => {
  const [buyerName, setBuyerName] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [buyerDni, setBuyerDni] = useState('');
  const [paymentOption, setPaymentOption] = useState('efectivo');
  const [isSuccess, setIsSuccess] = useState(false);
  const [reservationWhatsappUrl, setReservationWhatsappUrl] = useState('');

  const formatPrice = (price: number, currency?: 'ARS' | 'USD') => {
    if (currency === 'USD') {
      return `USD ${new Intl.NumberFormat('es-AR').format(price)}`;
    }
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleReserve = (e: FormEvent) => {
    e.preventDefault();
    if (!buyerName.trim() || !buyerPhone.trim() || !buyerEmail.trim()) return;

    const paymentLabel =
      paymentOption === 'efectivo'
        ? 'Contado / Efectivo / Transferencia'
        : paymentOption === 'financiacion'
        ? 'Financiación bancaria'
        : 'Entrega de vehículo usado en parte de pago';

    const messageLines = [
      '🚗 *SOLICITUD DE RESERVA DE VEHÍCULO - CAMPI MOTORS*',
      '',
      `🚘 *Unidad de Interés:* ${vehicle.brand} ${vehicle.model} ${vehicle.version} (${vehicle.year})`,
      `💰 *Precio publicado:* ${formatPrice(vehicle.price, vehicle.currency)}`,
      `⚙️ *Motor / Transmisión:* ${vehicle.engine} | ${vehicle.transmission}`,
      `🎨 *Color:* ${vehicle.color}`,
      '',
      '👤 *Datos del Solicitante:*',
      `• *Nombre y Apellido:* ${buyerName.trim()}`,
      `• *Teléfono / WhatsApp:* ${buyerPhone.trim()}`,
      `• *Email:* ${buyerEmail.trim()}`,
    ];

    if (buyerDni?.trim()) {
      messageLines.push(`• *DNI / CUIT:* ${buyerDni.trim()}`);
    }

    messageLines.push(`• *Modalidad de pago:* ${paymentLabel}`);
    messageLines.push('');
    messageLines.push('Hola, completé mis datos en la web y deseo coordinar la reserva de este auto. ¡Muchas gracias!');

    const encoded = encodeURIComponent(messageLines.join('\n'));
    const url = `https://wa.me/5491155922000?text=${encoded}`;
    setReservationWhatsappUrl(url);

    setIsSuccess(true);
    window.open(url, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-[#161616]/85 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-[#303030] w-full max-w-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-[#686868] text-[#E4E0D8]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#686868] hover:bg-[#A6A39E]/30 text-[#E4E0D8] transition-colors cursor-pointer border border-[#686868]"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#161616] text-[#E4E0D8] flex items-center justify-center border border-[#686868]/40">
            <Car className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#E4E0D8] font-display">
              Reserva de Unidad
            </h3>
            <p className="text-xs text-[#A6A39E]">
              {vehicle.brand} {vehicle.model} {vehicle.version} ({vehicle.year})
            </p>
          </div>
        </div>

        {isSuccess ? (
          <div className="text-center py-8">
            <CheckCircle2 className="w-16 h-16 text-[#E4E0D8] mx-auto mb-3" />
            <h4 className="text-2xl font-bold text-[#E4E0D8] mb-2 font-display">
              ¡Reserva enviada a WhatsApp!
            </h4>
            <p className="text-sm text-[#A6A39E] max-w-md mx-auto leading-relaxed mb-6">
              Todos los datos de tu reserva para el <strong className="text-[#E4E0D8]">{vehicle.brand} {vehicle.model}</strong> han sido preparados y enviados a nuestro WhatsApp oficial (+54 9 11 5592-2000). Nuestro equipo confirmará tu solicitud de inmediato.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {reservationWhatsappUrl && (
                <a
                  href={reservationWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#E4E0D8] hover:bg-white text-[#161616] font-bold text-sm transition-colors cursor-pointer shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#161616]" />
                  <span>Abrir WhatsApp con mi reserva</span>
                </a>
              )}
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#161616] hover:bg-[#686868]/30 text-[#E4E0D8] border border-[#686868]/40 font-bold text-sm transition-colors cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleReserve} className="space-y-4">
            {/* Vehicle Summary Box */}
            <div className="p-3.5 bg-[#161616] rounded-2xl border border-[#686868]/40 flex items-center gap-3">
              <img
                src={vehicle.images[0]}
                alt={vehicle.model}
                className="w-20 h-14 object-cover rounded-xl shrink-0 border border-[#686868]/40"
              />
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-bold text-[#A6A39E] uppercase">
                  {vehicle.condition} • {vehicle.brand}
                </span>
                <h4 className="font-bold text-[#E4E0D8] text-sm truncate">
                  {vehicle.model} {vehicle.version}
                </h4>
                <p className="text-xs font-black text-[#E4E0D8]">
                  {formatPrice(vehicle.price, vehicle.currency)}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-[#E4E0D8] mb-1">
                  Nombre y Apellido *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Laura González"
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  className="w-full bg-[#161616] border border-[#686868]/40 rounded-xl px-3 py-2 text-xs text-[#E4E0D8] placeholder:text-[#A6A39E]/60 focus:outline-none focus:ring-1 focus:ring-[#E4E0D8]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#E4E0D8] mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+54 11 ..."
                    value={buyerPhone}
                    onChange={(e) => setBuyerPhone(e.target.value)}
                    className="w-full bg-[#161616] border border-[#686868]/40 rounded-xl px-3 py-2 text-xs text-[#E4E0D8] placeholder:text-[#A6A39E]/60 focus:outline-none focus:ring-1 focus:ring-[#E4E0D8]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#E4E0D8] mb-1">
                    DNI *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="35.678.900"
                    value={buyerDni}
                    onChange={(e) => setBuyerDni(e.target.value)}
                    className="w-full bg-[#161616] border border-[#686868]/40 rounded-xl px-3 py-2 text-xs text-[#E4E0D8] placeholder:text-[#A6A39E]/60 focus:outline-none focus:ring-1 focus:ring-[#E4E0D8]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#E4E0D8] mb-1">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  required
                  placeholder="laura@ejemplo.com"
                  value={buyerEmail}
                  onChange={(e) => setBuyerEmail(e.target.value)}
                  className="w-full bg-[#161616] border border-[#686868]/40 rounded-xl px-3 py-2 text-xs text-[#E4E0D8] placeholder:text-[#A6A39E]/60 focus:outline-none focus:ring-1 focus:ring-[#E4E0D8]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#E4E0D8] mb-1">
                  Modalidad de pago:
                </label>
                <div className="w-full bg-[#161616] border border-[#686868]/40 rounded-xl px-3 py-2 text-xs text-[#E4E0D8] font-medium flex items-center justify-between">
                  <span>Precio de contado / Transferencia bancaria</span>
                  <span className="text-[10px] text-[#A6A39E] uppercase font-bold tracking-wider">Pago único</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#E4E0D8] hover:bg-[#E4E0D8] text-[#161616] font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <Sparkles className="w-4 h-4 text-[#161616]" />
                <span>Confirmar intención de compra</span>
              </button>
              <div className="flex items-center justify-center gap-2 mt-3 text-[11px] text-[#A6A39E]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#A6A39E]" />
                <span>Sin compromiso de pago online. Atención personalizada en salón.</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
