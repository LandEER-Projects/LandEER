import { useMemo, useState } from 'react';
import { Mail, MessageCircle, Minus, Plus } from 'lucide-react';
import { addOns, emailAddress, plans, whatsappBase } from '../data.js';
import { SectionHeader } from './SectionHeader.jsx';

const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0,
});

export function BudgetCalculator() {
  const [selectedPlan, setSelectedPlan] = useState('profissional');
  const [extraSections, setExtraSections] = useState(2);
  const [selectedAddOns, setSelectedAddOns] = useState(['whatsapp']);
  const [urgent, setUrgent] = useState(false);

  const plan = plans.find((item) => item.id === selectedPlan) ?? plans[1];

  const subtotal = useMemo(() => {
    const addOnsTotal = addOns
      .filter((item) => selectedAddOns.includes(item.id))
      .reduce((total, item) => total + item.price, 0);

    return plan.price + extraSections * 80 + addOnsTotal;
  }, [extraSections, plan.price, selectedAddOns]);

  const total = urgent ? Math.round(subtotal * 1.25) : subtotal;
  const formattedTotal = currency.format(total);

  const selectedAddOnLabels = addOns.filter((item) => selectedAddOns.includes(item.id)).map((item) => item.label);
  const message = `Olá, LandEER! Quero solicitar um orçamento.%0A%0ATipo: ${plan.name}%0ASeções extras: ${extraSections}%0AAdicionais: ${selectedAddOnLabels.join(', ') || 'nenhum'}%0APrazo: ${urgent ? 'Urgente' : 'Normal'}%0AValor estimado: ${formattedTotal}`;
  const whatsappUrl = `${whatsappBase}?text=${message}`;
  const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent('Solicitação de proposta LandEER')}&body=${decodeURIComponent(message)}`;

  function toggleAddOn(id) {
    setSelectedAddOns((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  return (
    <section id="orcamento" className="relative overflow-hidden bg-night py-24 sm:py-28">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-landeer-purple/35 to-transparent" />
      <div className="absolute bottom-0 right-[-10rem] h-96 w-96 rounded-full bg-landeer-cyan/10 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Calcule uma estimativa para sua landing page."
          text="Ajuste o tipo de projeto, seções, adicionais e prazo para ter uma noção rápida do investimento."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="rounded-[8px] border border-white/10 bg-panel-gradient p-5 shadow-card backdrop-blur-xl sm:p-7">
            <fieldset>
              <legend className="font-display text-xl font-bold text-white">Tipo de landing page</legend>
              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {plans.map((item) => (
                  <label
                    key={item.id}
                    className={`cursor-pointer rounded-[8px] border p-4 transition ${
                      selectedPlan === item.id
                        ? 'border-landeer-cyan bg-landeer-cyan/10'
                        : 'border-white/10 bg-white/[0.035] hover:border-white/20'
                    }`}
                  >
                    <input
                      type="radio"
                      name="plan"
                      value={item.id}
                      checked={selectedPlan === item.id}
                      onChange={(event) => setSelectedPlan(event.target.value)}
                      className="sr-only"
                    />
                    <span className="block font-display text-lg font-bold text-white">{item.name}</span>
                    <span className="mt-1 block text-sm font-semibold text-landeer-cyan">{currency.format(item.price)}</span>
                    <span className="mt-3 block text-sm leading-6 text-landeer-text">{item.description}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="mt-8 grid gap-8 md:grid-cols-[0.72fr_1fr]">
              <div>
                <label htmlFor="extra-sections" className="font-display text-lg font-bold text-white">
                  Seções extras
                </label>
                <p className="mt-2 text-sm text-landeer-text">+R$80 cada seção</p>
                <div className="mt-4 flex max-w-56 items-center rounded-[8px] border border-white/10 bg-white/[0.035] p-2">
                  <button
                    type="button"
                    aria-label="Diminuir seções extras"
                    onClick={() => setExtraSections((value) => Math.max(0, value - 1))}
                    className="grid h-10 w-10 place-items-center rounded-[8px] text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-landeer-cyan"
                  >
                    <Minus size={18} aria-hidden="true" />
                  </button>
                  <input
                    id="extra-sections"
                    type="number"
                    min="0"
                    max="20"
                    value={extraSections}
                    onChange={(event) => setExtraSections(Math.max(0, Number(event.target.value) || 0))}
                    className="h-10 w-full bg-transparent text-center font-display text-2xl font-black text-white outline-none"
                  />
                  <button
                    type="button"
                    aria-label="Aumentar seções extras"
                    onClick={() => setExtraSections((value) => value + 1)}
                    className="grid h-10 w-10 place-items-center rounded-[8px] text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-landeer-cyan"
                  >
                    <Plus size={18} aria-hidden="true" />
                  </button>
                </div>
              </div>

              <fieldset>
                <legend className="font-display text-lg font-bold text-white">Adicionais</legend>
                <div className="mt-4 grid gap-3">
                  {addOns.map((item) => (
                    <label
                      key={item.id}
                      className="flex cursor-pointer items-center justify-between gap-4 rounded-[8px] border border-white/10 bg-white/[0.035] px-4 py-3 transition hover:border-landeer-cyan/35"
                    >
                      <span className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={selectedAddOns.includes(item.id)}
                          onChange={() => toggleAddOn(item.id)}
                          className="h-4 w-4 rounded border-white/20 bg-void accent-landeer-cyan"
                        />
                        <span className="text-sm font-medium text-white">{item.label}</span>
                      </span>
                      <span className="text-sm font-semibold text-landeer-cyan">+{currency.format(item.price)}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            <fieldset className="mt-8">
              <legend className="font-display text-lg font-bold text-white">Prazo</legend>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <label className={`cursor-pointer rounded-[8px] border p-4 ${!urgent ? 'border-landeer-cyan bg-landeer-cyan/10' : 'border-white/10 bg-white/[0.035]'}`}>
                  <input type="radio" name="deadline" checked={!urgent} onChange={() => setUrgent(false)} className="sr-only" />
                  <span className="font-semibold text-white">Normal</span>
                  <span className="mt-1 block text-sm text-landeer-text">Sem acréscimo</span>
                </label>
                <label className={`cursor-pointer rounded-[8px] border p-4 ${urgent ? 'border-landeer-cyan bg-landeer-cyan/10' : 'border-white/10 bg-white/[0.035]'}`}>
                  <input type="radio" name="deadline" checked={urgent} onChange={() => setUrgent(true)} className="sr-only" />
                  <span className="font-semibold text-white">Urgente</span>
                  <span className="mt-1 block text-sm text-landeer-text">+25% sobre o subtotal</span>
                </label>
              </div>
            </fieldset>
          </div>

          <aside className="sticky top-28 h-fit rounded-[8px] border border-landeer-cyan/25 bg-[linear-gradient(145deg,rgba(123,61,255,0.18),rgba(0,212,255,0.08)),rgba(255,255,255,0.045)] p-6 shadow-neon backdrop-blur-xl sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-landeer-cyan">Valor estimado</p>
            <output className="mt-4 block bg-landeer-gradient bg-clip-text font-display text-5xl font-black text-transparent sm:text-6xl">
              {formattedTotal}
            </output>
            <p className="mt-5 text-sm leading-7 text-landeer-text">
              Valor estimado. O orçamento final pode variar conforme escopo, prazo e integrações.
            </p>
            <div className="mt-8 grid gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-landeer-gradient px-5 py-3 text-sm font-bold text-white transition hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-landeer-cyan"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Enviar orçamento pelo WhatsApp
              </a>
              <a
                href={mailtoUrl}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-bold text-white transition hover:border-landeer-cyan/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-landeer-cyan"
              >
                <Mail size={18} aria-hidden="true" />
                Solicitar proposta por e-mail
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
