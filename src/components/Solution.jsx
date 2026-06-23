import { CheckCircle2 } from 'lucide-react';
import { solutionCards } from '../data.js';
import { SectionHeader } from './SectionHeader.jsx';

export function Solution() {
  return (
    <section className="relative overflow-hidden bg-void py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-landeer-cyan/50 to-transparent" />
      <div className="absolute right-[-12rem] top-20 h-80 w-80 rounded-full bg-landeer-blue/15 blur-[120px]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionHeader
          align="left"
          title="Design bonito chama atenção. Estratégia converte."
          text="A LandEER combina estética premium, copy objetiva e arquitetura de conversão para transformar cliques em oportunidades reais."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {solutionCards.map(({ title, icon: Icon }) => (
            <div
              key={title}
              className="flex min-h-24 items-center gap-4 rounded-[8px] border border-white/10 bg-white/[0.045] p-5 transition hover:border-landeer-cyan/35"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-[8px] bg-landeer-gradient text-white">
                <Icon size={20} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-white">{title}</h3>
                <CheckCircle2 className="mt-2 text-landeer-cyan" size={16} aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
