import { useState, type FormEvent } from 'react';
import { X, Calculator, CheckCircle2, DollarSign, ShieldCheck } from 'lucide-react';
import { Vehicle } from '../types/vehicle';

interface FinancingSimulatorModalProps {
  vehicle: Vehicle;
  onClose: () => void;
}

export const FinancingSimulatorModal = ({
  vehicle,
  onClose,
}: FinancingSimulatorModalProps) => {
  const basePrice = vehicle.price;
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(30); // 30% default
  const [termMonths, setTermMonths] = useState<number>(36);
  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantDni, setApplicantDni] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const downPaymentAmount = Math.round((basePrice * downPaymentPercent) / 100);
  const financedAmount = basePrice - downPaymentAmount;

  // Monthly interest estimation (approx 3.5% monthly fixed rate)
  const monthlyRate = 0.035;
  const estimatedMonthlyInstallment = Math.round(
    (financedAmount * (monthlyRate * Math.pow(1 + monthlyRate, termMonths))) /
      (Math.pow(1 + monthlyRate, termMonths) - 1)
  );

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantPhone) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-[#161616]/85 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-[#303030] w-full max-w-2xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-[#686868]/40 text-[#E4E0D8]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#161616] hover:bg-[#686868]/30 text-[#E4E0D8] transition-colors cursor-pointer border border-[#686868]/40"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#161616] text-[#E4E0D8] flex items-center justify-center border border-[#686868]/40">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#E4E0D8] font-display">
              Simulador de Financiación
            </h3>
            <p className="text-xs text-[#A6A39E]">
              {vehicle.brand} {vehicle.model} {vehicle.version} ({vehicle.year})
            </p>
          </div>
        </div>

        {isSubmitted ? (
          <div className="text-center py-10">
            <CheckCircle2 className="w-14 h-14 text-[#E4E0D8] mx-auto mb-3" />
            <h4 className="text-xl font-bold text-[#E4E0D8] mb-1 font-display">
              ¡Pre-calificación enviada con éxito!
            </h4>
            <p className="text-[#A6A39E] text-sm max-w-sm mx-auto">
              Un asesor de créditos de <strong className="text-[#E4E0D8]">CAR ONE</strong> revisará tu propuesta y te enviará las tasas personalizadas vía WhatsApp.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Price & Anticipo */}
            <div className="p-4 rounded-2xl bg-[#161616] border border-[#686868]/40">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-[#A6A39E]">Precio total:</span>
                <span className="font-extrabold text-[#E4E0D8]">{formatCurrency(basePrice)}</span>
              </div>

              {/* Slider for Down Payment */}
              <div className="mb-4">
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-[#A6A39E]">Anticipo seleccionado ({downPaymentPercent}%):</span>
                  <span className="text-[#E4E0D8] font-bold">{formatCurrency(downPaymentAmount)}</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="70"
                  step="5"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full accent-[#E4E0D8] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#A6A39E] mt-1">
                  <span>Mínimo 20%</span>
                  <span>50%</span>
                  <span>Máximo 70%</span>
                </div>
              </div>

              {/* Term selector buttons */}
              <div>
                <label className="block text-xs font-semibold text-[#A6A39E] mb-2">
                  Plazo de financiación:
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {[12, 24, 36, 48, 60].map((months) => (
                    <button
                      key={months}
                      type="button"
                      onClick={() => setTermMonths(months)}
                      className={`py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                        termMonths === months
                          ? 'bg-[#E4E0D8] text-[#161616] border-[#E4E0D8] shadow-sm font-extrabold'
                          : 'bg-[#161616] text-[#E4E0D8] border-[#686868]/40 hover:bg-[#686868]/30'
                      }`}
                    >
                      {months} cuotas
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Estimated Installment Box */}
            <div className="bg-[#161616] text-[#E4E0D8] p-5 rounded-2xl flex items-center justify-between shadow-lg border border-[#686868]/40">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#A6A39E] block">
                  Cuota estimada mensual
                </span>
                <span className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#E4E0D8]">
                  {formatCurrency(estimatedMonthlyInstallment)}
                </span>
              </div>
              <span className="text-xs bg-[#161616] border border-[#686868]/40 px-3 py-1.5 rounded-lg font-medium text-[#E4E0D8]">
                Tasa fija en pesos
              </span>
            </div>

            {/* Applicant inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#E4E0D8] mb-1">
                  Tu nombre y apellido *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Juan Pérez"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  className="w-full bg-[#161616] border border-[#686868]/40 rounded-xl px-3 py-2 text-xs text-[#E4E0D8] placeholder:text-[#A6A39E]/60 focus:outline-none focus:ring-1 focus:ring-[#E4E0D8]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#E4E0D8] mb-1">
                  Teléfono celular *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+54 11 ..."
                  value={applicantPhone}
                  onChange={(e) => setApplicantPhone(e.target.value)}
                  className="w-full bg-[#161616] border border-[#686868]/40 rounded-xl px-3 py-2 text-xs text-[#E4E0D8] placeholder:text-[#A6A39E]/60 focus:outline-none focus:ring-1 focus:ring-[#E4E0D8]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#E4E0D8] mb-1">
                  DNI (opcional)
                </label>
                <input
                  type="text"
                  placeholder="38.555.444"
                  value={applicantDni}
                  onChange={(e) => setApplicantDni(e.target.value)}
                  className="w-full bg-[#161616] border border-[#686868]/40 rounded-xl px-3 py-2 text-xs text-[#E4E0D8] placeholder:text-[#A6A39E]/60 focus:outline-none focus:ring-1 focus:ring-[#E4E0D8]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#E4E0D8] hover:bg-white text-[#161616] font-bold text-sm tracking-wide transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <ShieldCheck className="w-4 h-4 text-[#161616]" />
              <span>Solicitar pre-aprobación sin costo</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
